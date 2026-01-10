# NotebookLM Output Prompts - Master Templates

This file contains master prompt templates for generating high-end outputs in NotebookLM across all 10 research modules.

## How to Use These Prompts

1. Load your module's research file (`JaZeR-XX-Module-Name.md`) into NotebookLM as a source
2. Copy the relevant prompt template below
3. Customize the `[MODULE-SPECIFIC]` sections using the Module Customization Guide at the bottom
4. Paste into NotebookLM and generate

---

## Template 1: Slide Deck Prompt

```
You are a Senior Strategy Consultant creating a board-level presentation deck for JaZeR's Spotify growth strategy.

CONTEXT:
You have access to comprehensive research on [MODULE NAME] for JaZeR, an emerging melodic hip-hop/rap artist based in Austin, Texas.

TASK:
Generate a complete slide deck outline with detailed slide-by-slide content. This is NOT a proposal - these are insights derived from actual research data.

SLIDE DECK STRUCTURE:

Slide 1: Title Slide
- Module name and focus area
- Subtitle: "Strategic Intelligence Report - JaZeR"
- Date and confidential marking

Slide 2: Executive Summary
- 3-4 key findings from the research (data-driven bullets)
- Primary strategic recommendation
- Expected impact metrics

Slide 3-[X]: Core Research Findings
[MODULE-SPECIFIC SLIDE SEQUENCE - SEE CUSTOMIZATION GUIDE]

Slide [X]: Strategic Implications
- "What This Means for JaZeR" - translate data into decisions
- 3-5 force-ranked action items
- Resource requirements (if applicable)

Slide [X]: Risks and Considerations
- What could go wrong
- Mitigation strategies
- Assumptions to validate

Final Slide: Next Steps
- Immediate actions (next 7-14 days)
- Short-term initiatives (30-60 days)
- Long-term strategic moves (90+ days)

OUTPUT REQUIREMENTS:
- Each slide must have:
  - Slide title (action-oriented, not generic)
  - 3-5 talking points with specific data/examples
  - Visual suggestion (chart type, diagram, screenshot example)
- Use actual names, numbers, and specifics from the research
- NO generic advice or placeholder content
- Include "Notes" section for each slide with presenter talking points

DESIGN GUIDANCE:
- Assume a clean, modern deck style (Pitch/Figma aesthetic)
- Data visualizations should be table, bar chart, or comparison matrix
- Use Austin/Texas imagery sparingly for geographic slides
- Color palette: Deep purple, electric blue, white, charcoal

CONSTRAINTS:
- Total slides: 12-18 slides maximum
- NO inspirational quotes or motivational content
- NO "what is Spotify" explanations
- Focus on actionable intelligence, not education
```

---

## Template 2: Infographic Prompt

```
You are a Data Visualization Specialist creating a one-page strategic infographic for JaZeR's Spotify growth intelligence.

CONTEXT:
You have access to comprehensive research on [MODULE NAME] for JaZeR, an emerging melodic hip-hop/rap artist based in Austin, Texas.

TASK:
Design a single-page infographic that distills the research into scannable, visual, decision-ready insights. Output should be a detailed written description that a designer could execute in Figma/Canva.

INFOGRAPHIC STRUCTURE:

HEADER SECTION:
- Title: "[MODULE NAME] - Strategic Intelligence"
- Subtitle: Artist name, date, module focus
- Visual anchor: Icon or graphic representing the module theme

MAIN CONTENT ZONES (3-4 sections):
[MODULE-SPECIFIC CONTENT ZONES - SEE CUSTOMIZATION GUIDE]

FOOTER SECTION:
- Primary CTA (Call-to-Action): The #1 next step based on research
- Data source disclaimer: "Based on [research date] Spotify market analysis"
- JaZeR branding element

VISUAL ELEMENTS TO INCLUDE:
- 2-3 data visualizations (charts, graphs, comparison bars)
- Icon set for categorization (use modern line icons)
- Color-coded priority indicators (high/medium/low or tier system)
- Pull-out stat boxes for headline numbers
- Flow diagram or decision tree (if applicable to module)

LAYOUT STYLE:
- Orientation: Vertical (portrait) for social sharing and mobile viewing
- Dimensions: Optimized for 1080x1920px (Instagram/Story format) or 1200x1600px
- Hierarchy: F-pattern reading flow (top-left to bottom-right)
- White space: Clean, not cluttered - maximum 60% content density

DESIGN LANGUAGE:
- Style: Modern, tech-forward, music industry professional
- Typography: Bold headers (sans-serif), clean body text
- Color palette:
  - Primary: Deep purple (#6B46C1)
  - Accent: Electric blue (#3B82F6)
  - Neutral: Charcoal (#374151), White (#FFFFFF)
  - Data viz: Use gradient scales, not rainbow colors
- Imagery: Minimalist icons, no stock photos of musicians

OUTPUT FORMAT:
Provide a detailed written specification including:
1. Section-by-section layout description
2. Specific data points and copy for each element
3. Visual suggestions (chart types, icon styles)
4. Hierarchy and emphasis notes
5. Suggested tools/templates (Canva, Figma, Adobe Express)

CONSTRAINTS:
- Must fit on ONE page/screen
- NO generic "tips and tricks" content
- NO vague statements - every claim must be research-backed
- Prioritize numbers, names, and specific targets over concepts
- Design should be printable in black & white and still readable
```

---

## Template 3: Video Overview Prompt

```
You are a Creative Director scripting a high-impact video overview for JaZeR's Spotify growth strategy.

CONTEXT:
You have access to comprehensive research on [MODULE NAME] for JaZeR, an emerging melodic hip-hop/rap artist based in Austin, Texas.

TASK:
Write a complete video script (narration + visual directions) for a 3-5 minute video overview. This will be used to create an animated explainer or screen-recorded walkthrough in tools like Descript, Loom, or After Effects.

VIDEO STRUCTURE:

[00:00-00:15] HOOK
- Opening line: Start with the most compelling data point or insight
- Visual: Bold text on screen or attention-grabbing stat
- Example: "JaZeR could reach 47,000 new listeners by targeting these 12 playlists..."

[00:15-00:45] SETUP
- What is this video about (module name and scope)
- Why it matters for JaZeR's growth strategy
- Visual: Simple text slides with JaZeR branding

[00:45-03:30] CORE CONTENT (3-4 segments)
[MODULE-SPECIFIC CONTENT SEGMENTS - SEE CUSTOMIZATION GUIDE]

[03:30-04:00] STRATEGIC IMPLICATIONS
- "What this means for JaZeR" - translation of data into decisions
- Top 3 action items displayed as checklist
- Visual: Clean bullet points or animated checklist

[04:00-04:30] NEXT STEPS
- Immediate action (next 7 days)
- Short-term play (30-60 days)
- Visual: Timeline graphic or roadmap

[04:30-05:00] CALL-TO-ACTION
- Primary recommendation from the research
- Contact info or next step for execution
- Visual: End card with JaZeR branding

SCRIPT FORMAT:
For each timestamp section, provide:
```
[TIMESTAMP]
NARRATION: (Word-for-word script - conversational but professional tone)
VISUAL: (Detailed description of on-screen elements)
DATA: (Specific stats, names, numbers to display)
TRANSITION: (How to move to next section)
```

NARRATION STYLE:
- Tone: Confident, data-driven, insider knowledge (not tutorial/educational)
- Pacing: 140-160 words per minute
- POV: Direct address to JaZeR ("You should target...", "Your next move...")
- Language: Music industry professional - use terms like "placement," "algorithmic lift," "curator relationships"
- NO fluff, NO motivational talk, NO "let's dive in" phrases

VISUAL STYLE:
- Format: Animated text + data visualizations (motion graphics style)
- Reference: Think Vox explainers, Pitch deck animations, Apple keynote visuals
- Color palette: Deep purple, electric blue, white, charcoal
- Screen elements:
  - Bold sans-serif typography
  - Kinetic text reveals
  - Chart/graph animations (bar charts, line graphs, comparison tables)
  - Highlight boxes for key stats
  - Minimal use of photography (focus on data viz)

MUSIC/AUDIO:
- Background music: Instrumental hip-hop or electronic (low-key, non-distracting)
- Sound design: Subtle whooshes for transitions, "pop" for stat reveals
- No voiceover talent needed - script is for AI TTS or self-recording

OUTPUT REQUIREMENTS:
- Full word-for-word script with timestamps
- Visual direction for every scene
- Specific data callouts (not placeholders)
- Suggested B-roll or screen recordings (if applicable)
- Note any interactive elements (pause points, clickable chapters)

CONSTRAINTS:
- Maximum length: 5 minutes (ideal: 3-4 minutes)
- NO generic Spotify education - assume viewer knows the basics
- Every statement must be backed by research data
- Focus on JaZeR-specific intelligence, not industry trends
- Video should be watchable with sound OFF (strong visual storytelling)
```

---

# Module Customization Guide

Use this guide to customize the `[MODULE-SPECIFIC]` sections in each template.

## Module 01: Research Brief and Scope

**Slide Deck - Core Slides:**
- Slide 3: JaZeR's Current Spotify Position (monthly listeners, top cities, top tracks)
- Slide 4: Competitive Benchmark Set (5-10 comparable artists)
- Slide 5: Research Scope and Questions (what we're investigating)
- Slide 6: Methodology and Data Sources
- Slide 7: Success Metrics Definition

**Infographic - Content Zones:**
- Zone 1: "Current State Snapshot" - key stats about JaZeR's Spotify presence
- Zone 2: "Competitive Context" - where JaZeR sits vs. comparable artists
- Zone 3: "Research Framework" - the 10 modules visualized as roadmap
- Zone 4: "Success Targets" - 90-day and 12-month goals

**Video - Core Segments:**
- Segment 1 [00:45-01:30]: JaZeR's starting position and growth trajectory
- Segment 2 [01:30-02:15]: Competitive landscape and opportunity gaps
- Segment 3 [02:15-03:00]: The 10-module research framework explained
- Segment 4 [03:00-03:30]: What success looks like (target metrics)

---

## Module 02: Spotify Market Landscape

**Slide Deck - Core Slides:**
- Slide 3: Genre/Subgenre Market Size (melodic rap, Austin hip-hop)
- Slide 4: Competitive Artist Matrix (5-10 comps with stats)
- Slide 5: Market Opportunity Gaps (underserved niches)
- Slide 6: Regional Market Dynamics (Texas/Austin vs. national)
- Slide 7: Emerging Trends in JaZeR's Lane

**Infographic - Content Zones:**
- Zone 1: "Market Size & Growth" - genre stats and trajectory
- Zone 2: "Competitive Positioning Map" - visual matrix of comparable artists
- Zone 3: "Opportunity Zones" - underserved segments or niches
- Zone 4: "Austin Market Dynamics" - local scene insights

**Video - Core Segments:**
- Segment 1 [00:45-01:30]: The melodic rap market landscape (size, growth, key players)
- Segment 2 [01:30-02:30]: Competitive analysis - where JaZeR fits in the matrix
- Segment 3 [02:30-03:30]: Opportunity gaps and whitespace to exploit

---

## Module 03: Audience and Listener Profile

**Slide Deck - Core Slides:**
- Slide 3: Demographic Profile (age, gender, location)
- Slide 4: Psychographic Profile (interests, behaviors, values)
- Slide 5: Listening Patterns (time of day, session length, device type)
- Slide 6: Cross-Platform Behavior (where else they consume music)
- Slide 7: Lookalike Audience Modeling (JaZeR fans vs. target expansion)

**Infographic - Content Zones:**
- Zone 1: "Core Listener Demographics" - age, gender, top cities
- Zone 2: "Behavioral Profile" - listening habits and patterns
- Zone 3: "Interest & Affinity Data" - what else they listen to, follow, engage with
- Zone 4: "Audience Expansion Targets" - lookalike profiles to pursue

**Video - Core Segments:**
- Segment 1 [00:45-01:30]: Who is listening to JaZeR right now (current audience profile)
- Segment 2 [01:30-02:30]: Behavioral patterns and listening context
- Segment 3 [02:30-03:30]: Lookalike audiences and expansion targets

---

## Module 04: Playlist Strategy Intelligence

**Slide Deck - Core Slides:**
- Slide 3: Playlist Ecosystem Map (editorial vs. algorithmic vs. indie)
- Slide 4: Target Playlist Tier List (tier 1/2/3 with follower counts)
- Slide 5: Curator Intelligence (names, contact methods, submission process)
- Slide 6: Playlist Placement ROI (listener lift per playlist type)
- Slide 7: Current Playlist Performance (where JaZeR is already placed)

**Infographic - Content Zones:**
- Zone 1: "Playlist Tier Pyramid" - editorial at top, indie at bottom with targets
- Zone 2: "Priority Targets" - top 10-15 playlists with curator names
- Zone 3: "Submission Strategy" - step-by-step submission process
- Zone 4: "Expected Impact" - listener lift estimates per placement

**Video - Core Segments:**
- Segment 1 [00:45-01:30]: Playlist ecosystem overview (types and importance)
- Segment 2 [01:30-02:30]: Priority target playlists (names, curators, follower counts)
- Segment 3 [02:30-03:30]: How to get placed (submission strategy and curator outreach)

---

## Module 05: Release Strategy Benchmarks

**Slide Deck - Core Slides:**
- Slide 3: Optimal Release Cadence (frequency based on comparable artists)
- Slide 4: Release Timing Strategy (day of week, time of year)
- Slide 5: Single vs. EP vs. Album Performance (format benchmarks)
- Slide 6: Pre-Release Strategy (lead time, pre-saves, marketing ramp)
- Slide 7: Post-Release Playbook (first 7/30/90 days)

**Infographic - Content Zones:**
- Zone 1: "Release Calendar Blueprint" - optimal timing and frequency
- Zone 2: "Format Strategy" - when to release singles vs. EPs vs. albums
- Zone 3: "Pre-Release Checklist" - 30/14/7 day countdown tasks
- Zone 4: "Post-Release Timeline" - day 1, week 1, month 1 actions

**Video - Core Segments:**
- Segment 1 [00:45-01:30]: Release frequency and timing benchmarks
- Segment 2 [01:30-02:30]: Format strategy (single vs. EP vs. album)
- Segment 3 [02:30-03:30]: Pre-release and post-release playbooks

---

## Module 06: Algorithmic Growth Drivers

**Slide Deck - Core Slides:**
- Slide 3: Spotify Algorithm Mechanics (Discover Weekly, Release Radar, Radio)
- Slide 4: Engagement Signals That Matter (saves, skips, completion rate)
- Slide 5: Algorithmic Lift Benchmarks (expected growth rates)
- Slide 6: Optimization Tactics (track length, intro timing, metadata)
- Slide 7: Testing and Measurement Framework

**Infographic - Content Zones:**
- Zone 1: "Algorithm Map" - the key algorithmic playlists and how they work
- Zone 2: "Engagement Metrics Hierarchy" - what signals matter most
- Zone 3: "Optimization Checklist" - technical and creative best practices
- Zone 4: "Expected Outcomes" - algorithmic lift projections

**Video - Core Segments:**
- Segment 1 [00:45-01:30]: How Spotify's algorithm works (Discover Weekly, Release Radar, etc.)
- Segment 2 [01:30-02:30]: Engagement signals that drive algorithmic lift
- Segment 3 [02:30-03:30]: Optimization tactics to maximize algorithmic performance

---

## Module 07: Marketing Channel Effectiveness

**Slide Deck - Core Slides:**
- Slide 3: Channel Performance Benchmarks (social, email, paid, PR)
- Slide 4: Cross-Platform Conversion Rates (Instagram → Spotify, TikTok → Spotify)
- Slide 5: Influencer/Creator Collaboration ROI
- Slide 6: Paid Media Efficiency (Meta Ads, Spotify Ads, YouTube Ads)
- Slide 7: Integrated Campaign Blueprint

**Infographic - Content Zones:**
- Zone 1: "Channel Performance Matrix" - effectiveness and cost by channel
- Zone 2: "Conversion Funnel" - how listeners move from discovery to streaming
- Zone 3: "Priority Channel Mix" - recommended budget allocation
- Zone 4: "Campaign Template" - integrated multi-channel strategy

**Video - Core Segments:**
- Segment 1 [00:45-01:30]: Marketing channel landscape and benchmarks
- Segment 2 [01:30-02:30]: Cross-platform conversion dynamics (social → Spotify)
- Segment 3 [02:30-03:30]: Recommended channel mix and campaign structure

---

## Module 08: Touring and Spotify Demand Signals

**Slide Deck - Core Slides:**
- Slide 3: Geographic Listener Concentration (top cities/regions for JaZeR)
- Slide 4: Touring Demand Indicators (Spotify listener density vs. venue capacity)
- Slide 5: Market Prioritization (tier 1/2/3 cities for touring)
- Slide 6: Venue and Promoter Intelligence (specific venues, capacity, bookers)
- Slide 7: Tour + Spotify Flywheel (how touring drives streaming and vice versa)

**Infographic - Content Zones:**
- Zone 1: "Listener Heat Map" - top cities/regions visualized
- Zone 2: "Priority Tour Markets" - tier 1/2/3 cities with venue targets
- Zone 3: "Venue Intelligence" - specific venues, capacities, bookers
- Zone 4: "Tour-to-Streaming Flywheel" - how live shows drive Spotify growth

**Video - Core Segments:**
- Segment 1 [00:45-01:30]: Geographic listener analysis (where JaZeR's fans are)
- Segment 2 [01:30-02:30]: Priority tour markets and venue targets
- Segment 3 [02:30-03:30]: How touring and streaming reinforce each other

---

## Module 09: Monetization and Pricing Benchmarks

**Slide Deck - Core Slides:**
- Slide 3: Spotify Revenue Benchmarks (per-stream rates, monthly listener value)
- Slide 4: Revenue Diversification Strategy (streaming, merch, live, sync)
- Slide 5: Pricing Strategy (merch, tickets, Patreon/fan club)
- Slide 6: Sponsorship and Brand Partnership Opportunities
- Slide 7: Revenue Projections (90-day, 6-month, 12-month)

**Infographic - Content Zones:**
- Zone 1: "Revenue Breakdown" - streaming vs. other income sources
- Zone 2: "Monetization Levers" - pricing and product strategy
- Zone 3: "Growth Projections" - expected revenue trajectory
- Zone 4: "Partnership Opportunities" - brands, sponsors, sync licensing

**Video - Core Segments:**
- Segment 1 [00:45-01:30]: Spotify revenue realities and benchmarks
- Segment 2 [01:30-02:30]: Revenue diversification strategy
- Segment 3 [02:30-03:30]: Monetization roadmap and projections

---

## Module 10: Executive Summary and 90-Day Plan

**Slide Deck - Core Slides:**
- Slide 3: Research Synthesis (top 10 findings across all modules)
- Slide 4: Strategic Priorities (3-5 force-ranked initiatives)
- Slide 5: 90-Day Roadmap (week-by-week action plan)
- Slide 6: Resource Requirements (budget, team, tools)
- Slide 7: Success Metrics and KPIs (how we'll measure progress)
- Slide 8: Risk Mitigation (what could go wrong and how to avoid it)

**Infographic - Content Zones:**
- Zone 1: "Top 10 Insights" - headline findings from all 9 modules
- Zone 2: "Strategic Priorities" - force-ranked initiatives
- Zone 3: "90-Day Roadmap" - timeline with milestones
- Zone 4: "Success Dashboard" - KPIs and targets

**Video - Core Segments:**
- Segment 1 [00:45-01:30]: Research synthesis (top insights across all modules)
- Segment 2 [01:30-02:30]: Strategic priorities and recommended focus areas
- Segment 3 [02:30-03:30]: 90-day roadmap with week-by-week plan
- Segment 4 [03:30-04:00]: Success metrics and how to track progress

---

# Usage Instructions

## For Slide Decks:
1. Load module research into NotebookLM
2. Use Template 1 + Module-specific slide sequence
3. Generate in NotebookLM
4. Export to Google Slides or PowerPoint for design refinement

## For Infographics:
1. Load module research into NotebookLM
2. Use Template 2 + Module-specific content zones
3. Generate detailed description
4. Hand off to Canva, Figma, or Adobe Express for visual execution

## For Videos:
1. Load module research into NotebookLM
2. Use Template 3 + Module-specific content segments
3. Generate full script
4. Record in Descript, Loom, or create motion graphics in After Effects

---

# Quality Control Checklist

Before finalizing any output, verify:
- [ ] Contains specific data, names, and numbers (not generic placeholders)
- [ ] References JaZeR and Austin/Texas context appropriately
- [ ] Follows the established color palette and design language
- [ ] Includes actionable next steps (not just insights)
- [ ] Respects negative constraints (no generic advice, no fluff)
- [ ] Matches the professional tone and industry-specific language
- [ ] Cites research sources and dates
- [ ] Is decision-ready (not educational or exploratory)
