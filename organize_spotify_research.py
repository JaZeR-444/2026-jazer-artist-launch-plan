import os
import shutil

# Base directory
base_dir = r"C:\Users\JaZeR\OneDrive\Desktop\2026 → JaZeR Mainframe\2026 → Prompt Library\Spotify Research"

# List of folders to process
target_folders = [
    "01 - Research Brief and Scope",
    "02 - Spotify Market Landscape",
    "03 - Audience and Listener Profile",
    "04 - Playlist Strategy Intelligence",
    "05 - Release Strategy Benchmarks",
    "06 - Algorithmic Growth Drivers",
    "07 - Marketing Channel Effectiveness",
    "08 - Touring and Spotify Demand Signals",
    "09 - Monetization and Pricing Benchmarks",
    "10 - Executive Summary and 90-Day Plan"
]

# Destination mapping
destinations = {
    ".md": "02 - Markdown Notes",
    ".docx": "03 - Docx Research Reports",
    ".doc": "03 - Docx Research Reports",
    ".pdf": "03 - Docx Research Reports",
    ".html": "05 - Visuals & Screenshots",
    ".png": "05 - Visuals & Screenshots",
    ".jpg": "05 - Visuals & Screenshots",
    ".jpeg": "05 - Visuals & Screenshots",
    ".csv": "04 - Data & Exports",
    ".xlsx": "04 - Data & Exports",
    ".json": "04 - Data & Exports",
    ".pptx": "06 - Slides & Presentations"
}

def organize_folder(folder_name):
    folder_path = os.path.join(base_dir, folder_name)
    if not os.path.exists(folder_path):
        print(f"Skipping {folder_name}: Directory not found.")
        return

    print(f"Processing {folder_name}...")
    
    # Get all files in the directory
    files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
    
    for filename in files:
        # Skip README.md
        if filename.lower() == "readme.md":
            continue
            
        file_path = os.path.join(folder_path, filename)
        _, ext = os.path.splitext(filename)
        ext = ext.lower()
        
        if ext in destinations:
            target_subfolder = destinations[ext]
            target_path = os.path.join(folder_path, target_subfolder)
            
            # Create subfolder if it doesn't exist (though it should based on structure)
            if not os.path.exists(target_path):
                os.makedirs(target_path)
                print(f"  Created missing subfolder: {target_subfolder}")
                
            dest_file_path = os.path.join(target_path, filename)
            
            # Handle potential name collisions
            if os.path.exists(dest_file_path):
                print(f"  Skipping {filename}: File already exists in {target_subfolder}")
            else:
                try:
                    shutil.move(file_path, dest_file_path)
                    print(f"  Moved {filename} -> {target_subfolder}")
                except Exception as e:
                    print(f"  Error moving {filename}: {e}")

if __name__ == "__main__":
    for folder in target_folders:
        organize_folder(folder)
    print("\nOrganization complete.")
