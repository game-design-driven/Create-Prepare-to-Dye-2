#!/usr/bin/env python3
"""
Generate a Mermaid flowchart of SimChat dialogues.

Usage:
  uv run generate_mermaid.py

Notes:
- Outputs to simchat_flow.mmd in the same folder as this script.
- Scans all *.json in this folder, skipping 'ui/' and schema files.
- Nodes are grouped by the top-level folder (broker, buyer, contractor, etc.).
- Edges follow actions[].nextState and label with the action label (+ condition if present).
"""

from __future__ import annotations

import hashlib
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional

SCRIPT_DIR = Path(__file__).parent.resolve()
OUTPUT_FILE = SCRIPT_DIR / "simchat_flow.mmd"

# Styling configuration
EDGE_COLORS = {
    "tradeEdge": "#3EBC7C",  # Green for item trades
    "conditionalEdge": "#F39C12",  # Orange for conditional flows
    "commandEdge": "#8956DD",  # Purple for command actions
    "defaultEdge": "#34495E",  # Gray for default transitions
    "missingNode": "#E74C3C",  # Red for missing/external references
}
EDGE_STYLES = {
    "tradeEdge": "stroke-width:2px",
    "conditionalEdge": "stroke-width:2px,stroke-dasharray:5",
    "commandEdge": "stroke-width:2px",
    "defaultEdge": "stroke-width:2px",
}
NODE_STROKE_WIDTH = 3
NODE_BORDER_RADIUS = 12
FLOWCHART_DIRECTION = "LR"  # "LR" for left-to-right, "TD" for top-down
ANIMATE_EDGE_RATIO = 2  # Animate every Nth edge (2 = every other edge)


@dataclass
class ItemSpec:
    id: str
    count: int = 1


@dataclass
class Action:
    label: str
    reply: Optional[str]
    commands: List[str]
    next_state: Optional[str]
    condition: Optional[str]
    items_input: List[ItemSpec]
    items_output: List[ItemSpec]


@dataclass
class Dialogue:
    path: str  # e.g., broker/welcome
    entity_id: str
    entity_name: str
    entity_subtitle: Optional[str]
    text: str
    actions: List[Action]


def read_json(path: Path) -> Optional[dict]:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return None


def is_dialogue_json(obj: dict) -> bool:
    return (
        isinstance(obj, dict)
        and isinstance(obj.get("entityId"), str)
        and isinstance(obj.get("entityName"), str)
        and isinstance(obj.get("text"), str)
    )


def sanitize_node_id(s: str) -> str:
    return "n_" + re.sub(r"[^A-Za-z0-9_]", "_", s)


def escape_label(s: str) -> str:
    return s.replace('"', '\\"')


def to_resource_path(root: Path, file_path: Path) -> str:
    rel = file_path.relative_to(root).as_posix()
    if rel.lower().endswith(".json"):
        rel = rel[:-5]
    return rel


def parse_action(obj: dict) -> Action:
    items_in = []
    for it in obj.get("itemsInput", []) or []:
        if isinstance(it, dict) and "id" in it:
            items_in.append(ItemSpec(id=str(it["id"]), count=int(it.get("count", 1))))
    items_out = []
    for it in obj.get("itemsOutput", []) or []:
        if isinstance(it, dict) and "id" in it:
            items_out.append(ItemSpec(id=str(it["id"]), count=int(it.get("count", 1))))
    return Action(
        label=str(obj.get("label", "")),
        reply=str(obj["reply"]) if isinstance(obj.get("reply"), str) else None,
        commands=[str(c) for c in (obj.get("commands") or [])],
        next_state=str(obj["nextState"])
        if isinstance(obj.get("nextState"), str)
        else None,
        condition=str(obj["condition"])
        if isinstance(obj.get("condition"), str)
        else None,
        items_input=items_in,
        items_output=items_out,
    )


def parse_dialogue(root: Path, file_path: Path, obj: dict) -> Dialogue:
    actions = [
        parse_action(a) for a in (obj.get("actions") or []) if isinstance(a, dict)
    ]
    return Dialogue(
        path=to_resource_path(root, file_path),
        entity_id=str(obj["entityId"]),
        entity_name=str(obj["entityName"]),
        entity_subtitle=str(obj["entitySubtitle"])
        if isinstance(obj.get("entitySubtitle"), str)
        else None,
        text=str(obj["text"]),
        actions=actions,
    )


def iter_dialogue_files(root: Path) -> List[Path]:
    out: List[Path] = []
    for path in root.rglob("*.json"):
        if "/ui/" in path.as_posix() or "\\ui\\" in str(path):
            continue
        if path.name.lower() in ("dialogue.schema.json", "entity-config.schema.json"):
            continue
        out.append(path)
    return sorted(out)


def normalize_next_state(ns: str) -> str:
    if ":" in ns:
        ns = ns.split(":", 1)[1]
    ns = ns.lstrip("/").rstrip()
    if ns.lower().endswith(".json"):
        ns = ns[:-5]
    return ns


def group_title_for(folder: str, dialogues: List[Dialogue]) -> str:
    counts: Dict[str, int] = {}
    for d in dialogues:
        counts[d.entity_name] = counts.get(d.entity_name, 0) + 1
    if counts:
        top = max(counts.items(), key=lambda kv: kv[1])[0]
        return f"{top} ({folder}/*)"
    return f"{folder}/*"


def hsl_to_hex(h: int, s: int, l: int) -> str:
    """Convert HSL to hex color."""
    s_norm = s / 100.0
    l_norm = l / 100.0

    c = (1 - abs(2 * l_norm - 1)) * s_norm
    x = c * (1 - abs(((h / 60.0) % 2) - 1))
    m = l_norm - c / 2

    if 0 <= h < 60:
        r, g, b = c, x, 0
    elif 60 <= h < 120:
        r, g, b = x, c, 0
    elif 120 <= h < 180:
        r, g, b = 0, c, x
    elif 180 <= h < 240:
        r, g, b = 0, x, c
    elif 240 <= h < 300:
        r, g, b = x, 0, c
    else:
        r, g, b = c, 0, x

    r = int((r + m) * 255)
    g = int((g + m) * 255)
    b = int((b + m) * 255)

    return f"#{r:02x}{g:02x}{b:02x}"


def get_entity_color(entity_id: str) -> str:
    """Generate a color for an entity based on its ID."""
    # Use deterministic hash to generate consistent colors per entity
    hash_bytes = hashlib.md5(entity_id.encode()).digest()
    hash_val = int.from_bytes(hash_bytes[:4], byteorder="big")

    # Use HSL to generate distinct, vibrant colors
    # Keep saturation high and lightness moderate for good visibility
    h = hash_val % 360
    s = 60 + (hash_val % 30)  # 60-90% saturation
    l = 45 + (hash_val % 15)  # 45-60% lightness

    return hsl_to_hex(h, s, l)


def get_action_emoji(action: Action) -> str:
    """Return emoji prefix for action based on type."""
    if action.items_input or action.items_output:
        return "📦 "
    if action.commands:
        return "⚙️ "
    if action.condition:
        return "🔀 "
    return ""


def build_mermaid(dialogues: List[Dialogue]) -> str:
    groups: Dict[str, List[Dialogue]] = {}
    for d in dialogues:
        top = d.path.split("/", 1)[0] if "/" in d.path else d.path
        groups.setdefault(top, []).append(d)

    lines: List[str] = [f"flowchart {FLOWCHART_DIRECTION}", ""]

    # Track entity classes and edges
    entity_classes: Dict[str, str] = {}
    edge_counter = 0
    animated_edges: List[str] = []
    edges_by_class: Dict[str, List[str]] = {
        "tradeEdge": [],
        "conditionalEdge": [],
        "commandEdge": [],
        "defaultEdge": [],
    }

    path_to_node_id: Dict[str, str] = {}
    node_to_entity_class: Dict[str, str] = {}

    for folder, ds in sorted(groups.items()):
        title = group_title_for(folder, ds)
        subgraph_id = sanitize_node_id("g_" + folder)
        lines.append(f'subgraph {subgraph_id}["{escape_label(title)}"]')

        for d in sorted(ds, key=lambda x: x.path):
            node_id = sanitize_node_id(d.path)
            path_to_node_id[d.path] = node_id

            # Track entity class
            entity_class = sanitize_node_id(f"entity_{d.entity_id}")
            if entity_class not in entity_classes:
                entity_classes[entity_class] = d.entity_id
            node_to_entity_class[node_id] = entity_class

            # Create fancy node with shape and label
            label = escape_label(f"{d.path.split('/')[-1]} — {d.entity_name}")
            lines.append(f'  {node_id}@{{shape: div-rect, label: "{label}"}}')

        lines.append("end")
        lines.append("")

    missing_group_id = sanitize_node_id("g_missing")
    missing_nodes: Dict[str, str] = {}

    # Build edges with styling
    for d in sorted(dialogues, key=lambda x: x.path):
        src_id = path_to_node_id.get(d.path)
        if not src_id:
            continue
        for a in d.actions:
            if not a.next_state:
                continue
            target = normalize_next_state(a.next_state)
            tgt_id = path_to_node_id.get(target)
            if not tgt_id:
                if target not in missing_nodes:
                    missing_nodes[target] = sanitize_node_id(f"missing_{target}")
                tgt_id = missing_nodes[target]

            # Create unique edge ID
            edge_id = f"e{edge_counter}"
            edge_counter += 1

            # Build edge label with emoji
            emoji = get_action_emoji(a)
            edge_label = a.label or ""
            if a.condition:
                cond_str = a.condition if len(a.condition) < 30 else a.condition[:27] + "..."
                edge_label = f"{edge_label} ({cond_str})" if edge_label else f"({cond_str})"

            full_label = f"{emoji}{edge_label}" if edge_label else ""

            # Determine edge class
            edge_class = "defaultEdge"
            if a.items_input or a.items_output:
                edge_class = "tradeEdge"
            elif a.condition:
                edge_class = "conditionalEdge"
            elif a.commands:
                edge_class = "commandEdge"

            # Track edge by class
            edges_by_class[edge_class].append(edge_id)

            # Create styled edge
            if full_label:
                lines.append(f'{src_id} {edge_id}@-- "{escape_label(full_label)}" --> {tgt_id}')
            else:
                lines.append(f"{src_id} {edge_id}@--> {tgt_id}")

            # Add to animated edges list
            animated_edges.append(edge_id)

    # Missing nodes with different shape
    if missing_nodes:
        lines.append("")
        lines.append(f'subgraph {missing_group_id}["Missing/External targets"]')
        for path, nid in sorted(missing_nodes.items()):
            label = escape_label(path.split("/")[-1])
            lines.append(f'  {nid}@{{shape: das, label: "{label}"}}')
        lines.append("end")

    # Add CSS class definitions
    lines.append("")
    lines.append("    %% Entity color classes")
    for entity_class, entity_id in sorted(entity_classes.items()):
        color = get_entity_color(entity_id)
        lines.append(
            f"    classDef {entity_class} stroke:{color},"
            f"stroke-width:{NODE_STROKE_WIDTH}px,rx:{NODE_BORDER_RADIUS}"
        )

    lines.append("")
    lines.append("    %% Edge classes")
    for edge_class, color in EDGE_COLORS.items():
        if edge_class == "missingNode":
            continue
        style = EDGE_STYLES.get(edge_class, "stroke-width:2px")
        lines.append(f"    classDef {edge_class} stroke:{color},{style}")

    lines.append("")
    lines.append("    %% Special node classes")
    missing_color = EDGE_COLORS["missingNode"]
    lines.append(
        f"    classDef missingNode stroke:{missing_color},"
        f"stroke-width:2px,stroke-dasharray:5,rx:8"
    )

    # Apply node classes
    lines.append("")
    lines.append("    %% Apply entity classes to nodes")
    for node_id, entity_class in sorted(node_to_entity_class.items()):
        lines.append(f"    class {node_id} {entity_class}")

    if missing_nodes:
        lines.append("")
        lines.append("    %% Apply missing node classes")
        for nid in sorted(missing_nodes.values()):
            lines.append(f"    class {nid} missingNode")

    # Animate important edges
    lines.append("")
    lines.append("    %% Animate important edges")
    for edge_id in animated_edges[::ANIMATE_EDGE_RATIO]:
        lines.append(f"    {edge_id}@{{animate: true}}")

    # Apply edge classes
    lines.append("")
    lines.append("    %% Apply edge styling")
    for edge_class, edge_ids in sorted(edges_by_class.items()):
        if edge_ids:
            edges_str = ",".join(edge_ids)
            lines.append(f"    class {edges_str} {edge_class}")

    return "\n".join(lines) + "\n"


def main() -> int:
    files = iter_dialogue_files(SCRIPT_DIR)
    dialogues: List[Dialogue] = []
    for fp in files:
        obj = read_json(fp)
        if not obj or not is_dialogue_json(obj):
            continue
        dialogues.append(parse_dialogue(SCRIPT_DIR, fp, obj))

    if not dialogues:
        print("No dialogues found.", file=sys.stderr)
        return 1

    mermaid = build_mermaid(dialogues)
    OUTPUT_FILE.write_text(mermaid, encoding="utf-8")
    print(f"Wrote {OUTPUT_FILE}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
