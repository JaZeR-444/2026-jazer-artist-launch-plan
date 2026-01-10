<div align="center">

<img src="JZR Hexagon LaunchPlan Logo (450 x 150 px).svg" alt="JaZeR Launch Plan Logo" width="450">

# JaZeR 2026 Launch Plan
## Spotify Research System

<img src="JZR Monogram Hexigon Logo (500 x 500 px).svg" alt="JaZeR Monogram" width="120">

[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge)](https://github.com)
[![Research Sprint](https://img.shields.io/badge/Research%20Sprint-10%20Modules-00d6a0?style=for-the-badge)](https://github.com)
[![AI Powered](https://img.shields.io/badge/AI-Powered-c77dff?style=for-the-badge)](https://github.com)

> **AI-Powered Strategic Intelligence Framework for Artist Development**

*A comprehensive, modular research system designed to transform Spotify growth strategy from guesswork into data-driven action. Built for emerging artists ready to scale from grassroots to industry recognition.*

[🚀 Quick Start](#-quick-start) • [📚 Modules](#-the-10-module-research-sprint) • [🌐 Website](website/) • [📊 Dashboard](website/dashboard.html)

</div>

---

## 🎯 Overview

<div align="center">

| <img src="JZR Monogram Hexigon Logo (500 x 500 px).svg" width="60"> | **Data-Driven Intelligence** | **Hyper-Targeted Strategy** | **AI-Orchestrated Research** |
|:---:|:---:|:---:|:---:|
| ✅ | Real stats, verified metrics | Austin market focus | Gemini Deep Research powered |
| ✅ | Current benchmarks | Melodic Rap niche | Structured prompt engineering |
| ✅ | No hypotheticals | Actionable outputs | Negatively constrained AI |

</div>

This repository contains a **10-module strategic research framework** purpose-built for **JaZeR**, an Austin-based Hip-hop/Rap/R&B artist targeting 100k+ monthly Spotify listeners and regional touring expansion. Unlike generic "music marketing guides," this system uses AI-powered deep research to generate **actionable, artist-specific intelligence** across every dimension of Spotify growth.

### What Makes This Different

- ✅ **Data-driven** - Real stats, verified metrics, current benchmarks (not hypotheticals)
- ✅ **Hyper-targeted** - Austin market focus, Melodic Rap niche positioning
- ✅ **Actionable outputs** - Specific curator names, playlist targets, contact strategies
- ✅ **AI-orchestrated** - Powered by structured prompts for Gemini Deep Research
- ✅ **Negatively constrained** - Explicit rules to eliminate generic advice
- ❌ **NOT a software project** - This is a research documentation system, not code to build/test

---

## 📚 The 10-Module Research Sprint

<div align="center">
<img src="JZR Monogram Hexigon Logo (500 x 500 px).svg" alt="Research Framework" width="80">
</div>

Each module addresses a distinct strategic domain with its own dedicated prompt, research protocol, and structured output format:

| # | Module | Strategic Focus | Status |
|---|--------|----------------|--------|
| **01** | [Research Brief and Scope](01%20-%20Research%20Brief%20and%20Scope/) | Foundation, reality check, genre positioning | ✅ Complete |
| **02** | [Spotify Market Landscape](02%20-%20Spotify%20Market%20Landscape/) | Competitive analysis, peer benchmarking | ✅ Complete |
| **03** | [Audience and Listener Profile](03%20-%20Audience%20and%20Listener%20Profile/) | Psychographics, demographics, behavior patterns | ✅ Complete |
| **04** | [Playlist Strategy Intelligence](04%20-%20Playlist%20Strategy%20Intelligence/) | Curator mapping, playlist targeting, submission tactics | ✅ Complete |
| **05** | [Release Strategy Benchmarks](05%20-%20Release%20Strategy%20Benchmarks/) | Drop cadence, single vs. album strategy | ✅ Complete |
| **06** | [Algorithmic Growth Drivers](06%20-%20Algorithmic%20Growth%20Drivers/) | Spotify algorithm optimization, Discover Weekly triggers | ✅ Complete |
| **07** | [Marketing Channel Effectiveness](07%20-%20Marketing%20Channel%20Effectiveness/) | Cross-platform promotion, influencer strategy | ✅ Complete |
| **08** | [Touring and Spotify Demand Signals](08%20-%20Touring%20and%20Spotify%20Demand%20Signals/) | Geographic targeting, tour routing intelligence | ✅ Complete |
| **09** | [Monetization and Pricing Benchmarks](09%20-%20Monetization%20and%20Pricing%20Benchmarks/) | Revenue streams, pricing strategy, label deals | ✅ Complete |
| **10** | [Executive Summary and 90-Day Plan](10%20-%20Executive%20Summary%20and%2090-Day%20Plan/) | Synthesis, priorities, execution roadmap | ✅ Complete |

---

## 🗂️ Universal Module Structure

<div align="center">
<img src="JZR Monogram Hexigon Logo (500 x 500 px).svg" alt="Module Architecture" width="60">
</div>

**Every module (01-10) follows an identical 8-folder architecture** for consistency and scalability:

```
XX - Module Name/
├── 01 - Research Prompts/          # AI prompts and research instructions
├── 02 - Markdown Notes/            # Working notes, raw AI outputs
├── 03 - Docx Research Reports/     # Narrative documents for review
├── 04 - Data & Exports/            # CSVs, JSONs, metrics, raw data
├── 05 - Visuals & Screenshots/     # Charts, diagrams, UI captures
├── 06 - Slides & Presentations/    # Presentation decks
├── 07 - References & Links/        # Source material, articles, PDFs
└── 08 - Final Outputs/             # Decision-ready deliverables
```

### File Flow Philosophy

- **Drafts and in-progress work** live in folders `01-07`
- **Only promote to `08 - Final Outputs`** when materials are polished and decision-ready
- **Topic-scoped, not time-scoped** - Research accumulates continuously, not tied to sprint deadlines

---

## 🚀 Quick Start

### Prerequisites

- **Python 3.8+** (for utility scripts)
- **AI Research Tool** - [Gemini Deep Research](https://deepmind.google/technologies/gemini/) (recommended) or equivalent LLM with web access

### Running the Research Sprint

#### Option 1: Full 10-Module Execution (Recommended)

```bash
# 1. Navigate to the MASTER directory
cd MASTER/

# 2. Open MASTER_RUN_PROMPT.txt in your AI research tool
# 3. Copy the entire prompt into Gemini Deep Research
# 4. Let the AI execute all 10 modules sequentially
```

The master prompt orchestrates the entire research sprint, feeding each module's prompt to the AI in sequence with proper context.

#### Option 2: Individual Module Execution

```bash
# Run a single module independently
# 1. Navigate to the module directory
cd "04 - Playlist Strategy Intelligence/"

# 2. Open the module prompt file (e.g., "04 - Playlist Strategy Intelligence.md")
# 3. Customize the [INSERT] variables with your artist data
# 4. Feed the prompt to your AI research tool
# 5. Save the output to "02 - Markdown Notes/JaZeR-04-Playlist-Strategy-Intelligence.md"
```

---

## 🛠️ Utility Scripts

### File Organizer

Automatically sorts research files into the correct module subfolders based on file type.

```bash
# Option 1: Use the batch script (Windows)
Run_Organizer.bat

# Option 2: Run directly
python organize_spotify_research.py
```

**⚠️ Important:** Update the `base_dir` variable in `organize_spotify_research.py` to match your local path before running.

**File Type Mappings:**
- `.md` → `02 - Markdown Notes/`
- `.docx`, `.pdf` → `03 - Docx Research Reports/`
- `.csv`, `.xlsx`, `.json` → `04 - Data & Exports/`
- `.png`, `.jpg`, `.svg` → `05 - Visuals & Screenshots/`
- `.pptx`, `.key` → `06 - Slides & Presentations/`
- `.txt`, `.html`, `.url` → `07 - References & Links/`

### Directory Schema Generator

Creates visual directory tree structures for documentation or sharing.

```bash
# Generate a tree view and save to file
python generate_folder_schema.py --style tree --save --output folder-schema.txt

# Limit depth to 2 levels
python generate_folder_schema.py --depth 2

# Simple indented style
python generate_folder_schema.py --style simple
```

---

## 🌐 Website Component

<div align="center">
<img src="website/assets/images/logo.svg" alt="Website Preview" width="300">

**Modern, Interactive Research Dashboard**

[🌐 View Live Demo](website/index.html) • [📊 Analytics Dashboard](website/dashboard.html) • [📥 Downloads](website/downloads.html)
</div>

The `website/` directory contains a static HTML presentation layer for viewing research outputs in a polished, shareable format.

### Features

- 📊 **Interactive Dashboard** - Chart.js visualizations of key metrics
- 📑 **Module Hub** - Grid view of all 10 research modules
- 📥 **Downloads Center** - Export reports as PDF/DOCX/JSON
- 🎨 **Modern UI** - Tailwind CSS with scroll animations (AOS)
- 🎯 **Branded Experience** - Custom JaZeR logo and monogram favicon

### Local Preview

```bash
cd website
python -m http.server 8000
# Visit http://localhost:8000
```

### Deployment

**Vercel:**
```bash
cd website
vercel
```

**Netlify:**
```bash
cd website
netlify deploy
```

Or drag-and-drop the `website/` folder at [app.netlify.com/drop](https://app.netlify.com/drop)

### Tech Stack & Assets

<div align="center">

| Component | Technology | Asset |
|-----------|-----------|-------|
| **Frontend** | HTML5, Tailwind CSS, Chart.js | 🎨 |
| **Animations** | AOS, GSAP ScrollTrigger | ✨ |
| **Branding** | Custom SVG logos & favicon | <img src="JZR Monogram Hexigon Logo (500 x 500 px).svg" width="30"> |
| **Typography** | Space Grotesk, Inter, JetBrains Mono | 📝 |
| **Deployment** | Vercel / Netlify (static) | 🚀 |

**Logo Assets:**
- `JZR Hexagon LaunchPlan Logo (450 x 150 px).svg` - Header/navigation logo
- `JZR Monogram Hexigon Logo (500 x 500 px).svg` - Favicon/profile icon

</div>

---

## 📝 Prompt Design Principles

All research prompts in this system follow strict quality standards:

### ✅ Do's

- **Hyper-specific targeting** - "Austin Melodic Rap curators," not "hip-hop playlists"
- **Data-driven constraints** - "Playlists with 10k-100k followers, updated in last 30 days"
- **Actionable outputs** - "Contact via Instagram DM," not "reach out to curators"
- **Role-based framing** - Assign expert personas (e.g., "You are a Head of Streaming Strategy at a major label")
- **Structured formats** - Tables, numbered lists, force-ranked recommendations

### ❌ Don'ts (Negative Constraints)

- ❌ **Generic advice** - "Post consistently on social media"
- ❌ **Hypotheticals** - "This could potentially work if..."
- ❌ **Vague metrics** - "Significant growth," "good engagement"
- ❌ **Unverified claims** - Stats without sources
- ❌ **Obvious suggestions** - "Make good music"

---

## 🎵 Artist Context: JaZeR

<div align="center">
<img src="JZR Monogram Hexigon Logo (500 x 500 px).svg" alt="JaZeR Profile" width="100">
</div>

This system is calibrated for the following artist profile:

<div align="center">

| Parameter | Value |
|-----------|-------|
| **Artist Name** | JaZeR |
| **Genre** | Melodic Hip-hop, Rap, R&B |
| **Style Comparisons** | Mac Miller, ProbCause, early Drake |
| **Location** | 📍 Austin, Texas |
| **Target Market** | USA (primary), Global (secondary) |
| **Career Stage** | Emerging/Developing |
| **Current Stats** | ~5k monthly listeners (estimated) |
| **Goal** | 🎯 100k+ monthly listeners, regional touring, playlist placements |

</div>

When customizing prompts for other artists, update the `[INSERT]` variables in each module's `.md` file.

---

## 🗺️ Workflow Guide

### For First-Time Users

1. **Read the context** - Review [`CLAUDE.md`](CLAUDE.md) for system architecture details
2. **Explore Module 01** - Start with [`01 - Research Brief and Scope`](01%20-%20Research%20Brief%20and%20Scope/) to understand the prompt structure
3. **Customize variables** - Update `[INSERT Artist Name]`, `[INSERT Genre]`, etc. in prompt files
4. **Run the master prompt** - Execute `MASTER/MASTER_RUN_PROMPT.txt` for full sprint
5. **Organize outputs** - Use `organize_spotify_research.py` to sort generated files
6. **Review deliverables** - Check `08 - Final Outputs/` in each module for decision-ready assets

### For Ongoing Research

- **Add new findings** to `02 - Markdown Notes/` as you discover them
- **Update benchmarks** in `04 - Data & Exports/` quarterly
- **Refine prompts** based on what generates the most actionable outputs
- **Promote to Final Outputs** only when materials are polished and stakeholder-ready

---

## 📂 Key Files Reference

| File | Purpose | Icon |
|------|---------|------|
| **`MASTER/MASTER_RUN_PROMPT.txt`** | Master orchestration prompt for full 10-module sprint | 🎯 |
| **`XX - Module Name/XX - Module Name.md`** | Core prompt template for each module | 📝 |
| **`XX - Module Name/JaZeR-XX-Module-Name.md`** | Completed AI research output (found in `02 - Markdown Notes/`) | ✅ |
| **`MASTER/JaZeR-2026-Full-Research-Report.docx`** | Compiled final report (all modules) | 📄 |
| **`CLAUDE.md`** | Technical documentation for AI assistants working with this repo | 🤖 |
| **`folder-schema.txt`** | Visual directory tree (generated by `generate_folder_schema.py`) | 🗂️ |
| **`JZR Hexagon LaunchPlan Logo (450 x 150 px).svg`** | Main header logo for website and branding | 🎨 |
| **`JZR Monogram Hexigon Logo (500 x 500 px).svg`** | Monogram favicon and profile icon | 🔷 |

---

## 🤝 Contributing

This is a **personal artist development project**, but the framework is designed to be **reusable and adaptable**.

### To Adapt This System for Another Artist

1. **Clone the repository**
2. **Update artist context** - Edit `[INSERT]` variables in all module `.md` files
3. **Run the research sprint** - Execute `MASTER_RUN_PROMPT.txt` with new context
4. **Customize negative constraints** - Add genre-specific anti-patterns to avoid
5. **Share your learnings** - Open an issue or PR with improvements to the prompt structure

---

## 📄 License

This repository is provided as-is for educational and strategic planning purposes. The framework structure, prompt architecture, and organizational system are freely adaptable. Artist-specific research outputs are proprietary to JaZeR.

---

## 🔗 Additional Resources

- **NotebookLM Prompts** - See [`NOTEBOOKLM_OUTPUT_PROMPTS.md`](NOTEBOOKLM_OUTPUT_PROMPTS.md) for additional AI research workflows
- **Website Documentation** - See [`website/README.md`](website/README.md) for frontend details
- **Build Summary** - See [`website/BUILD_SUMMARY.md`](website/BUILD_SUMMARY.md) for website development notes

---

## 📧 Contact

<div align="center">
<img src="JZR Monogram Hexigon Logo (500 x 500 px).svg" alt="JaZeR" width="80">

**Artist:** JaZeR  
**Location:** 📍 Austin, TX  
**Genre:** Melodic Hip-hop / Rap / R&B  

For inquiries about adapting this system or collaboration opportunities, open an issue in this repository.

</div>

---

<div align="center">

<img src="JZR Hexagon LaunchPlan Logo (450 x 150 px).svg" alt="JaZeR Launch Plan" width="300">

**Built for artists who treat strategy like a craft.**

*Research system designed in 2026 • Powered by AI • Driven by data*

[![Website](https://img.shields.io/badge/🌐-View%20Website-00d6a0?style=for-the-badge)](website/index.html)
[![Dashboard](https://img.shields.io/badge/📊-Analytics%20Dashboard-a3ff12?style=for-the-badge)](website/dashboard.html)
[![Modules](https://img.shields.io/badge/📚-All%20Modules-c77dff?style=for-the-badge)](website/modules.html)

</div>
