#!/usr/bin/env python3
"""
SimChat Mermaid Chart System

Workflow:
  1. Edit domain chart (usspinspectorwillard/chart.mmd) with simple node IDs
  2. Run 'sync' → creates JSON scaffolds, adds animations to domain chart
  3. Edit JSON files → fill in dialogue content
  4. Run 'generate' → reads domain charts → generates master chart

Domain charts: Simple node IDs (n_intro, n_decline), no subgraphs
Master chart: Prefixed IDs (n_usspinspectorwillard_intro), with subgraphs
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional, Set, Tuple


# ============================================================================
# CONFIGURATION
# ============================================================================

SCRIPT_DIR = Path(__file__).parent.resolve()
MASTER_CHART = SCRIPT_DIR / "simchat_flow.mmd"

NODE_STROKE_WIDTH = 3
NODE_BORDER_RADIUS = 12
FLOWCHART_DIRECTION = "LR"

# Mermaid init block for animated dashed edges
MERMAID_INIT = '%%{init:{"theme":"default","flowchart":{"curve":"linear"},"themeCSS":".flowchart-link{stroke-dasharray:16 10 !important;stroke-linecap:round !important;animation:dash 1.6s linear infinite !important}@keyframes dash{to{stroke-dashoffset:-52}}marker path{stroke-dasharray:none !important;animation:none !important}"}}%%'

# JSON schema URL for dialogue files
DIALOGUE_SCHEMA = "https://raw.githubusercontent.com/game-design-driven/sim-chat/main/schemas/dialogue.schema.json"


# ============================================================================
# DATA MODELS
# ============================================================================

@dataclass
class MermaidNode:
    """Node parsed from Mermaid diagram."""
    node_id: str  # e.g., n_intro (domain) or n_usspinspectorwillard_intro (master)
    label: str  # Display label
    css_class: str  # Entity class for styling


@dataclass
class MermaidEdge:
    """Edge parsed from Mermaid diagram."""
    edge_id: str  # e.g., e0
    source_id: str  # e.g., n_intro
    target_id: str  # e.g., n_decline
    label: str  # Button label
    has_items: bool = False
    has_condition: bool = False
    has_command: bool = False


@dataclass
class DomainChart:
    """Parsed domain chart."""
    domain: str  # Folder name (e.g., usspinspectorwillard)
    nodes: List[MermaidNode]
    edges: List[MermaidEdge]
    original_content: str  # Original file content


# ============================================================================
# UTILITIES
# ============================================================================

def get_entity_color(entity_id: str) -> str:
    """Generate deterministic color from entity ID."""
    hash_bytes = hashlib.md5(entity_id.encode()).digest()
    hash_val = int.from_bytes(hash_bytes[:4], byteorder="big")
    h = hash_val % 360
    s = 60 + (hash_val % 30)
    l = 45 + (hash_val % 15)
    return hsl_to_hex(h, s, l)


def hsl_to_hex(h: int, s: int, l: int) -> str:
    """Convert HSL to hex color."""
    s, l = s / 100, l / 100
    c = (1 - abs(2 * l - 1)) * s
    x = c * (1 - abs((h / 60) % 2 - 1))
    m = l - c / 2

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

    r, g, b = int((r + m) * 255), int((g + m) * 255), int((b + m) * 255)
    return f"#{r:02x}{g:02x}{b:02x}"


def discover_domains(root: Path) -> List[str]:
    """Find all domain folders that contain chart.mmd."""
    domains = []
    for chart_file in root.glob("*/chart.mmd"):
        if chart_file.parent != root:
            domains.append(chart_file.parent.name)
    return sorted(domains)


# ============================================================================
# PARSING
# ============================================================================

def parse_domain_chart(chart_path: Path) -> DomainChart:
    """Parse a domain chart file."""
    content = chart_path.read_text(encoding="utf-8")
    domain = chart_path.parent.name

    nodes = []
    edges = []

    # Parse nodes: n_intro(intro — Willard):::n_entity_willard (CSS class optional)
    node_pattern = r'^\s*(n_\w+)\(([^)]+)\)(?:::(\w+))?'

    # Parse edges: n_intro -->|"Label" | n_decline (new syntax, note space before closing |)
    edge_pattern_pipe = r'^\s*(n_\w+)\s+-->\|"([^"]+)"\s*\|\s*(n_\w+)'
    # Old syntax: n_intro -- "Label" --> n_decline
    edge_pattern_old = r'^\s*(n_\w+)\s+--\s*"([^"]+)"\s*-->\s*(n_\w+)'
    # With edge ID: n_intro e0@-- "Label" --> n_decline
    edge_pattern_id = r'^\s*(n_\w+)\s+(e\d+)@--\s*"([^"]+)"\s*-->\s*(n_\w+)'

    edge_counter = 0
    for line in content.split("\n"):
        # Try node pattern
        match = re.match(node_pattern, line)
        if match:
            node_id = match.group(1)
            label = match.group(2)
            css_class = match.group(3) if match.group(3) else f"n_entity_{domain.lower()}"
            nodes.append(MermaidNode(
                node_id=node_id,
                label=label,
                css_class=css_class,
            ))
            continue

        # Try new pipe syntax first
        match = re.match(edge_pattern_pipe, line)
        if match:
            source_id, label, target_id = match.groups()
            edges.append(MermaidEdge(
                edge_id=f"e{edge_counter}",
                source_id=source_id,
                target_id=target_id,
                label=label,
                has_items="📦" in label,
                has_condition="🔀" in label,
                has_command="⚙️" in label,
            ))
            edge_counter += 1
            continue

        # Try old syntax with ID
        match = re.match(edge_pattern_id, line)
        if match:
            source_id, edge_id, label, target_id = match.groups()
            edges.append(MermaidEdge(
                edge_id=edge_id,
                source_id=source_id,
                target_id=target_id,
                label=label,
                has_items="📦" in label,
                has_condition="🔀" in label,
                has_command="⚙️" in label,
            ))
            continue

        # Try old syntax without ID
        match = re.match(edge_pattern_old, line)
        if match:
            source_id, label, target_id = match.groups()
            edges.append(MermaidEdge(
                edge_id=f"e{edge_counter}",
                source_id=source_id,
                target_id=target_id,
                label=label,
                has_items="📦" in label,
                has_condition="🔀" in label,
                has_command="⚙️" in label,
            ))
            edge_counter += 1

    return DomainChart(
        domain=domain,
        nodes=nodes,
        edges=edges,
        original_content=content,
    )


def node_id_to_filename(node_id: str) -> str:
    """Convert node ID to filename: n_intro → intro."""
    if node_id.startswith("n_"):
        return node_id[2:]
    return node_id


# ============================================================================
# JSON SCAFFOLD GENERATION
# ============================================================================

def load_existing_json_paths(domain_path: Path) -> Set[str]:
    """Load all existing JSON filenames in a domain folder."""
    if not domain_path.exists():
        return set()
    return {f.stem for f in domain_path.glob("*.json")}


def generate_scaffold(domain: str, node: MermaidNode, edges: List[MermaidEdge]) -> dict:
    """Generate JSON scaffold for a node."""
    filename = node_id_to_filename(node.node_id)

    # Infer entity info from label (assumes "filename — EntityName" format)
    parts = node.label.split(" — ")
    entity_name = parts[1].strip() if len(parts) > 1 else domain.replace("_", " ").title()
    entity_id = domain

    # Find outgoing edges
    outgoing = [e for e in edges if e.source_id == node.node_id]

    actions = []
    for edge in outgoing:
        target_filename = node_id_to_filename(edge.target_id)
        action = {
            "label": edge.label.replace("📦 ", "").replace("🔀 ", "").replace("⚙️ ", "").strip(),
            "nextState": f"ptd_trading:{domain}/{target_filename}",
        }

        if edge.has_items:
            action["itemsInput"] = [{"id": "minecraft:TODO", "count": 1}]
        if edge.has_condition:
            action["condition"] = "TODO: Add condition"
        if edge.has_command:
            action["commands"] = ["TODO: Add command"]

        actions.append(action)

    return {
        "$schema": DIALOGUE_SCHEMA,
        "entityId": entity_id,
        "entityName": entity_name,
        "text": f"TODO: Add dialogue text for {domain}/{filename}",
        "actions": actions,
    }


# ============================================================================
# CHART MANIPULATION
# ============================================================================

def add_animations_to_chart(chart_path: Path, edge_ids: List[str]) -> None:
    """Reformat chart: add init block, remove edge IDs."""
    content = chart_path.read_text(encoding="utf-8")
    lines = content.split("\n")

    # Check if init block already exists
    has_init = "%%{init:" in content

    # Categorize lines
    init_lines = []
    header_lines = []
    nodes = []  # Store parsed nodes with metadata
    edge_lines = []

    domain = chart_path.parent.name

    node_pattern = r'^\s*(n_\w+)\(([^)]+)\)(?:::(\w+))?'
    # Match all edge formats
    edge_pattern = r'^\s*(n_\w+)\s+(?:e\d+@)?--[>|-]'

    in_init = False
    in_header = True
    skip_animation_section = False

    for line in lines:
        stripped = line.strip()

        # Skip animation sections
        if stripped.startswith("%% Animate"):
            skip_animation_section = True
            continue
        if skip_animation_section:
            if stripped and "@{animate: true}" in stripped:
                continue
            elif not stripped:
                continue
            else:
                skip_animation_section = False

        # Capture init block
        if stripped.startswith("%%{init:"):
            in_init = True
            init_lines.append(line)
            continue
        if in_init:
            init_lines.append(line)
            if stripped.endswith("%%"):
                in_init = False
            continue

        # Capture header
        if in_header:
            header_lines.append(line)
            if stripped.startswith("flowchart"):
                in_header = False
            continue

        if not stripped:
            continue

        # Parse nodes and edges
        match = re.match(node_pattern, line)
        if match:
            node_id = match.group(1)
            label = match.group(2)
            css_class = match.group(3) if match.group(3) else f"n_entity_{domain.lower()}"
            nodes.append((node_id, label, css_class))
        elif re.match(edge_pattern, line):
            edge_lines.append(line)

    # Group edges by source node and normalize to new format
    edges_by_source = {}
    edge_pipe_pattern = r'^\s*(n_\w+)\s+-->\|"([^"]+)"\s*\|\s*(n_\w+)'
    edge_old_pattern = r'^\s*(n_\w+)\s+(?:e\d+@)?--\s*"([^"]+)"\s*-->\s*(n_\w+)'

    for edge_line in edge_lines:
        # Try new pipe format
        match = re.match(edge_pipe_pattern, edge_line)
        if match:
            source_id, label, target_id = match.groups()
            normalized = f'{source_id} -->|"{label}" | {target_id}'
            if source_id not in edges_by_source:
                edges_by_source[source_id] = []
            edges_by_source[source_id].append(normalized)
            continue

        # Try old format
        match = re.match(edge_old_pattern, edge_line)
        if match:
            source_id, label, target_id = match.groups()
            normalized = f'{source_id} -->|"{label}" | {target_id}'
            if source_id not in edges_by_source:
                edges_by_source[source_id] = []
            edges_by_source[source_id].append(normalized)

    # Rebuild: init + header + nodes with edges
    output = []

    # Add init block if not present
    if not has_init:
        output.append(MERMAID_INIT)
    else:
        output.extend(init_lines)

    output.extend(header_lines)
    output.append("")

    for node_id, label, css_class in nodes:
        node_line = f"{node_id}({label}):::{css_class}"
        output.append(node_line)
        # Add edges from this node (indented)
        if node_id in edges_by_source:
            for edge_line in edges_by_source[node_id]:
                stripped = edge_line.strip()
                output.append(f"    {stripped}")

    chart_path.write_text("\n".join(output), encoding="utf-8")


# ============================================================================
# MASTER CHART GENERATION
# ============================================================================

def build_master_chart(domain_charts: List[DomainChart]) -> str:
    """Build master chart from all domain charts."""
    lines = [MERMAID_INIT, f"flowchart {FLOWCHART_DIRECTION}", ""]

    # Collect all entity classes for styling
    entity_classes = {}

    for chart in domain_charts:
        domain = chart.domain
        subgraph_id = f"n_g_{domain}"

        # Subgraph header
        lines.append(f'subgraph {subgraph_id}["{domain.replace("_", " ").title()} ({domain}/*)"]')

        # Nodes with prefixed IDs
        for node in chart.nodes:
            prefixed_id = f"n_{domain}_{node_id_to_filename(node.node_id)}"
            prefixed_class = f"n_entity_{domain}"
            lines.append(f"  {prefixed_id}({node.label}):::{prefixed_class}")
            entity_classes[prefixed_class] = domain

        lines.append("end")
        lines.append("")

        # Edges without IDs (handled by init block)
        for edge in chart.edges:
            source_prefixed = f"n_{domain}_{node_id_to_filename(edge.source_id)}"
            target_prefixed = f"n_{domain}_{node_id_to_filename(edge.target_id)}"
            lines.append(f'{source_prefixed} -- "{edge.label}" --> {target_prefixed}')

    # Add styling
    lines.append("")
    lines.append("    %% Entity color classes")
    for css_class, entity_id in entity_classes.items():
        color = get_entity_color(entity_id)
        lines.append(f"    classDef {css_class} stroke:{color},stroke-width:{NODE_STROKE_WIDTH}px,rx:{NODE_BORDER_RADIUS}")

    lines.append("")
    lines.append("    %% Special node classes")
    lines.append("    classDef missingNode stroke:#E74C3C,stroke-width:2px,stroke-dasharray:5,rx:8")

    lines.append("")
    return "\n".join(lines)


# ============================================================================
# COMMANDS
# ============================================================================

def cmd_sync(_args) -> int:
    """Sync domain charts → create JSON scaffolds, add animations."""
    print("Syncing domain charts → JSON...")

    domains = discover_domains(SCRIPT_DIR)
    if not domains:
        print("No domain charts found (*/chart.mmd)")
        return 1

    total_created = 0

    for domain in domains:
        chart_path = SCRIPT_DIR / domain / "chart.mmd"
        print(f"\nProcessing {domain}/chart.mmd")

        # Parse chart
        chart = parse_domain_chart(chart_path)

        # Load existing JSON files
        domain_path = SCRIPT_DIR / domain
        existing_files = load_existing_json_paths(domain_path)

        # Find missing JSON files
        chart_filenames = {node_id_to_filename(n.node_id) for n in chart.nodes}
        missing = chart_filenames - existing_files

        # Create scaffolds
        created = []
        for node in chart.nodes:
            filename = node_id_to_filename(node.node_id)
            if filename in missing:
                scaffold = generate_scaffold(domain, node, chart.edges)
                json_path = domain_path / f"{filename}.json"
                json_path.parent.mkdir(parents=True, exist_ok=True)
                json_path.write_text(json.dumps(scaffold, indent=2) + "\n", encoding="utf-8")
                created.append(filename)

        if created:
            print(f"  Created {len(created)} JSON files: {', '.join(created)}")
            total_created += len(created)

        # Check for orphans
        orphans = existing_files - chart_filenames
        if orphans:
            print(f"  ⚠ {len(orphans)} orphaned JSON files (not in chart): {', '.join(sorted(orphans))}")

        # Always reformat chart (add init block, normalize edges)
        add_animations_to_chart(chart_path, [e.edge_id for e in chart.edges])
        if chart.edges:
            print(f"  Reformatted chart ({len(chart.edges)} edges)")

    if total_created:
        print(f"\n✓ Created {total_created} JSON files total")
    else:
        print("\n✓ All JSON files up to date")

    return 0


def cmd_generate(_args) -> int:
    """Generate master chart from domain charts."""
    print("Generating master chart from domain charts...")

    domains = discover_domains(SCRIPT_DIR)
    if not domains:
        print("No domain charts found (*/chart.mmd)")
        return 1

    # Parse all domain charts
    domain_charts = []
    for domain in domains:
        chart_path = SCRIPT_DIR / domain / "chart.mmd"
        chart = parse_domain_chart(chart_path)
        domain_charts.append(chart)
        print(f"  Parsed {domain}/chart.mmd ({len(chart.nodes)} nodes, {len(chart.edges)} edges)")

    # Build master chart
    master_content = build_master_chart(domain_charts)
    MASTER_CHART.write_text(master_content, encoding="utf-8")

    total_nodes = sum(len(c.nodes) for c in domain_charts)
    total_edges = sum(len(c.edges) for c in domain_charts)
    print(f"\n✓ Generated {MASTER_CHART.name}")
    print(f"  {len(domains)} domains, {total_nodes} nodes, {total_edges} edges")

    return 0


def main() -> int:
    parser = argparse.ArgumentParser(
        description="SimChat Mermaid Chart System"
    )
    subparsers = parser.add_subparsers(dest="command", help="Command to run")

    subparsers.add_parser("sync", help="Sync domain charts → JSON scaffolds")
    subparsers.add_parser("generate", help="Generate master chart from domain charts")

    args = parser.parse_args()

    if not args.command:
        args.command = "generate"

    if args.command == "sync":
        return cmd_sync(args)
    elif args.command == "generate":
        return cmd_generate(args)
    else:
        parser.print_help()
        return 1


if __name__ == "__main__":
    sys.exit(main())
