#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.10"
# ///

import re
import sys
from pathlib import Path


def main():
    mods_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("mods")

    if not mods_dir.is_dir():
        print(f"Error: Directory '{mods_dir}' not found")
        sys.exit(1)

    toml_refs: dict[str, Path] = {}
    jar_files: set[str] = set()

    # Get filenames from toml files (excluding .index subdirectory)
    for toml_file in mods_dir.glob("*.toml"):
        content = toml_file.read_text()
        match = re.search(r'^filename\s*=\s*[\'"](.+)[\'"]', content, re.MULTILINE)
        if match:
            toml_refs[match.group(1)] = toml_file

    # Get all jar files (including .disabled)
    for jar_path in mods_dir.iterdir():
        if jar_path.suffix == ".jar" or jar_path.name.endswith(".jar.disabled"):
            jar_files.add(jar_path.name)

    toml_ref_names = set(toml_refs.keys())

    # Matched jars (have toml reference)
    matched = sorted(toml_ref_names & jar_files)

    # Jars without toml
    jars_missing_toml = sorted(jar_files - toml_ref_names)

    # Toml refs without jar (check both .jar and .jar.disabled)
    toml_missing_jar = []
    for ref in sorted(toml_ref_names):
        if ref not in jar_files and f"{ref}.disabled" not in jar_files:
            toml_missing_jar.append(ref)

    print("✅ JARs with TOML reference")
    print("=" * 40)
    if matched:
        for jar in matched:
            print(f"  {jar}")
    else:
        print("  (none)")

    print()
    print("❌ JARs without TOML reference")
    print("=" * 40)
    if jars_missing_toml:
        for jar in jars_missing_toml:
            print(f"  {jar}")
    else:
        print("  (none)")

    print()
    print("⚠️  TOML references without matching JAR")
    print("=" * 40)
    if toml_missing_jar:
        for ref in toml_missing_jar:
            print(f"  {ref}")
            print(f"     └─ {toml_refs[ref]}")
    else:
        print("  (none)")

    print()
    print(f"📊 Summary: {len(matched)} matched, {len(jars_missing_toml)} jars without toml, {len(toml_missing_jar)} toml refs without jar")


if __name__ == "__main__":
    main()
