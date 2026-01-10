# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a **Spotify Research System** for artist development, specifically designed for **JaZeR**, an Austin-based artist in the Hip-hop/Rap/R&B space. This is NOT a software project with code to build or test. It is a structured research framework using AI prompts to generate actionable intelligence for Spotify growth and market positioning.

## System Architecture

### The 10-Module Research Framework

The system is organized as a **sequential research sprint** with 10 modules, each addressing a distinct strategic domain:

1. **Research Brief and Scope** - Foundation and reality check
2. **Spotify Market Landscape** - Competitive positioning
3. **Audience and Listener Profile** - Target audience intelligence
4. **Playlist Strategy Intelligence** - Playlist ecosystem mapping
5. **Release Strategy Benchmarks** - Release timing and strategy
6. **Algorithmic Growth Drivers** - Spotify algorithm optimization
7. **Marketing Channel Effectiveness** - Cross-platform marketing
8. **Touring and Spotify Demand Signals** - Geographic/live show strategy
9. **Monetization and Pricing Benchmarks** - Revenue optimization
10. **Executive Summary and 90-Day Plan** - Synthesis and execution plan

### Universal Directory Structure

**Every module (01-10) follows an identical 8-folder structure:**

```
XX - Module Name/
├── 01 - Research Prompts          # LLM prompts and research instructions
├── 02 - Markdown Notes            # Working notes and drafts
├── 03 - Docx Research Reports     # Narrative documents for review
├── 04 - Data & Exports            # Raw/processed data, CSVs, metrics
├── 05 - Visuals & Screenshots     # Diagrams, charts, UI captures
├── 06 - Slides & Presentations    # Presentation decks
├── 07 - References & Links        # Source material, saved articles
└── 08 - Final Outputs             # Polished, decision-ready assets
```

### Key Files

- **`MASTER/MASTER_RUN_PROMPT.txt`**: Master orchestration prompt for running the entire 10-module sprint through Gemini Deep Research
- **`XX - Module Name/XX - Module Name.md`**: The core prompt template for each module (found in each module's root directory)
- **`XX - Module Name/JaZeR-XX-Module-Name.md`**: Completed research output for that module
- **`XX - Module Name/README.md`**: Purpose and organizational guidelines (identical across all modules)

## Workflow Pattern

### How the System Works

1. **Modular Prompts**: Each module has a standalone `.md` prompt file that defines:
   - **Context**: What this module addresses
   - **Input Variables**: Artist-specific parameters
   - **Deep Research Prompt**: The actual prompt for the AI research agent
   - **Research Protocol**: Step-by-step execution instructions
   - **Negative Constraints**: What NOT to include (avoiding generic advice)
   - **Output Format**: Structured tables, lists, and deliverables

2. **Master Execution**: The `MASTER_RUN_PROMPT.txt` is used to:
   - Provide context report about JaZeR
   - Feed all 10 module prompts to Gemini Deep Research
   - Execute the entire research sprint in sequence

3. **Output Files**: Research results are stored as `JaZeR-XX-Module-Name.md` in each module's directory

## Prompt Design Principles (Critical)

All prompts in this system follow these patterns:

- **Specificity over generality**: Target Austin music scene, Melodic Rap niche, specific playlist curators
- **Data-driven**: Demand real stats, verified numbers, current metrics (not hypotheticals)
- **Actionable intelligence**: Specific curator names, playlist targets, contact methods
- **Negative constraints**: Explicit "NO generic advice" rules to force precision
- **Structured outputs**: Tables, checklists, and force-ranked recommendations
- **Role-based framing**: Each prompt assigns a specific expert role (e.g., "Head of Streaming Strategy")

## Working with This System

### Creating or Editing Prompts

When modifying module prompts (`XX - Module Name.md`):
- Maintain the **6-section structure**: Context, Input Variables, Deep Research Prompt, Research Protocol, Instructions, Negative Constraints, Output Format
- Keep **Input Variables** parameterized (use brackets like `[INSERT]` for customizable fields)
- Ensure **Output Format** uses markdown tables or numbered lists for structured data
- Always include **Negative Constraints** to prevent generic responses

### Adding New Modules

If creating an 11th module (or expanding):
1. Create the directory with the 8-folder structure
2. Write the module prompt `.md` file using the established template
3. Add a `README.md` (copy from any existing module, update title)
4. Update `MASTER_RUN_PROMPT.txt` to include the new module in Section 2

### File Placement Logic

- **Research prompts** → `01 - Research Prompts/`
- **Working notes from AI responses** → `02 - Markdown Notes/`
- **Polished Word docs** → `03 - Docx Research Reports/`
- **Spotify stats, CSVs** → `04 - Data & Exports/`
- **Charts, screenshots** → `05 - Visuals & Screenshots/`
- **Slide decks** → `06 - Slides & Presentations/`
- **Saved articles/PDFs** → `07 - References & Links/`
- **Final deliverables** → `08 - Final Outputs/`

## Artist Context (JaZeR)

The system is built around these parameters:
- **Artist**: JaZeR
- **Genre**: Melodic Hip-hop, Rap, R&B (stylistically similar to Mac Miller, ProbCause)
- **Location**: Austin, Texas
- **Target Market**: USA / Global
- **Stage**: Emerging/Developing
- **Goal**: Scale to 100k+ monthly listeners, regional touring

Prompts reference this context throughout. When working on files, maintain consistency with this profile.

## Utility Scripts

### File Organization Tool
**`organize_spotify_research.py`** - Automated file organizer for research modules
- Moves files into correct subfolders based on file type
- Maps extensions to destinations: `.md` → `02 - Markdown Notes/`, `.docx`/`.pdf` → `03 - Docx Research Reports/`, `.csv`/`.json` → `04 - Data & Exports/`, etc.
- Skips README.md files and handles name collisions
- Run via: `python organize_spotify_research.py` or `Run_Organizer.bat`
- **Target path**: Currently hardcoded to a specific directory path - update `base_dir` variable before running

### Directory Schema Generator
**`generate_folder_schema.py`** - Creates visual directory tree structures
- Generates tree-style or simple indented directory listings
- Supports depth limiting and output to file
- Usage:
  ```bash
  python generate_folder_schema.py --style tree --save --output folder-schema.txt
  python generate_folder_schema.py --depth 2  # Limit to 2 levels
  ```

## Website Component

The `website/` directory contains a static HTML presentation layer for the research system.

### Website Structure
- **Landing page**: `index.html` (Module 10 executive summary)
- **Module hub**: `modules.html` (grid view of all 10 modules)
- **Interactive dashboard**: `dashboard.html` (Chart.js visualizations)
- **Downloads center**: `downloads.html` (PDF/DOCX/JSON exports)
- **Individual module pages**: `module-01.html` through `module-10.html`

### Website Stack
- **Static site** - No build process required
- **Tailwind CSS** (CDN) for styling
- **Chart.js** (CDN) for data visualizations
- **AOS** (CDN) for scroll animations
- **JSON data files** in `website/data/` for dynamic content

### Deployment
Local preview:
```bash
cd website
python -m http.server 8000
```

Deploy to Vercel:
```bash
cd website
vercel
```

Deploy to Netlify:
```bash
cd website
netlify deploy
```

Or drag-and-drop the `website/` folder at https://app.netlify.com/drop

## Important Notes

- This is **topic-scoped**, not time-scoped (research accumulates over time)
- Drafts and incomplete work are expected in folders 01-07
- Only promote to **08 - Final Outputs** when decision-ready
- The `.docx` file in `MASTER/` contains the full compiled research report
- The `.html` files in `MASTER/` are visual roadmap/infographic outputs
- **Not a software project** - There are no unit tests, build commands, or CI/CD pipelines. This is a research documentation system.
