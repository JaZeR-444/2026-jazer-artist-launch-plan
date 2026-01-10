#!/usr/bin/env python3
"""
Folder Schema Generator
Generates a complete top-down directory tree structure
Run: python generate_folder_schema.py
"""

import os
from pathlib import Path


def generate_tree(directory, prefix="", is_last=True, max_depth=None, current_depth=0):
    """
    Recursively generate a tree structure of directories and files.

    Args:
        directory: Path to traverse
        prefix: Prefix for tree formatting
        is_last: Whether this is the last item in current level
        max_depth: Maximum depth to traverse (None for unlimited)
        current_depth: Current depth level
    """
    if max_depth is not None and current_depth >= max_depth:
        return

    directory = Path(directory)

    # Get all items and sort (directories first, then files)
    try:
        items = sorted(directory.iterdir(), key=lambda x: (not x.is_dir(), x.name.lower()))
    except PermissionError:
        return

    for index, item in enumerate(items):
        is_last_item = index == len(items) - 1

        # Create tree characters
        if is_last_item:
            current_prefix = "└── "
            extension = "    "
        else:
            current_prefix = "├── "
            extension = "│   "

        # Print current item
        item_name = item.name
        if item.is_dir():
            item_name += "/"

        print(f"{prefix}{current_prefix}{item_name}")

        # Recursively process directories
        if item.is_dir():
            generate_tree(
                item,
                prefix + extension,
                is_last_item,
                max_depth,
                current_depth + 1
            )


def generate_simple_list(directory, prefix="", max_depth=None, current_depth=0):
    """
    Generate a simple indented list of directories and files.

    Args:
        directory: Path to traverse
        prefix: Indentation prefix
        max_depth: Maximum depth to traverse (None for unlimited)
        current_depth: Current depth level
    """
    if max_depth is not None and current_depth >= max_depth:
        return

    directory = Path(directory)

    try:
        items = sorted(directory.iterdir(), key=lambda x: (not x.is_dir(), x.name.lower()))
    except PermissionError:
        return

    for item in items:
        item_name = item.name
        if item.is_dir():
            item_name += "/"

        print(f"{prefix}{item_name}")

        if item.is_dir():
            generate_simple_list(item, prefix + "  ", max_depth, current_depth + 1)


def save_schema_to_file(directory, output_file="FOLDER_SCHEMA.txt", style="tree", max_depth=None):
    """
    Save the directory schema to a text file.

    Args:
        directory: Path to traverse
        output_file: Output filename
        style: 'tree' or 'simple'
        max_depth: Maximum depth to traverse
    """
    import sys
    from io import StringIO

    # Capture print output
    old_stdout = sys.stdout
    sys.stdout = StringIO()

    directory = Path(directory)
    print(f"{directory.name}/")
    print()

    if style == "tree":
        generate_tree(directory, max_depth=max_depth)
    else:
        generate_simple_list(directory, max_depth=max_depth)

    # Get the output
    output = sys.stdout.getvalue()
    sys.stdout = old_stdout

    # Save to file
    output_path = directory / output_file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(output)

    print(f"✓ Schema saved to: {output_path}")
    return output


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Generate directory tree structure")
    parser.add_argument(
        "--path",
        default=".",
        help="Directory path to scan (default: current directory)"
    )
    parser.add_argument(
        "--style",
        choices=["tree", "simple"],
        default="tree",
        help="Output style: tree (with lines) or simple (indented)"
    )
    parser.add_argument(
        "--depth",
        type=int,
        default=None,
        help="Maximum depth to traverse (default: unlimited)"
    )
    parser.add_argument(
        "--save",
        action="store_true",
        help="Save output to FOLDER_SCHEMA.txt"
    )
    parser.add_argument(
        "--output",
        default="FOLDER_SCHEMA.txt",
        help="Output filename when using --save"
    )

    args = parser.parse_args()

    directory = Path(args.path).resolve()

    if not directory.exists():
        print(f"Error: Directory '{directory}' does not exist")
        exit(1)

    if not directory.is_dir():
        print(f"Error: '{directory}' is not a directory")
        exit(1)

    print(f"Scanning: {directory}")
    print("=" * 80)
    print()

    if args.save:
        # Save to file
        save_schema_to_file(directory, args.output, args.style, args.depth)
        print()
        print("To view the file, run:")
        print(f"  cat {args.output}")
    else:
        # Print to console
        print(f"{directory.name}/")
        print()

        if args.style == "tree":
            generate_tree(directory, max_depth=args.depth)
        else:
            generate_simple_list(directory, max_depth=args.depth)
