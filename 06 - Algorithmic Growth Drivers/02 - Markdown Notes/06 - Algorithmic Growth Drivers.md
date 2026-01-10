# 06 - Algorithmic Growth Drivers

## Context
Decoding the "Black Box" of Spotify's recommendation engine. This prompt focuses on technical signals and metrics.

## Input Variables
*   **Artist:** `JaZeR`
*   **Genre:** `Hip-hop, Rap, R&B`

---

## Deep Research Prompt

**Role:** You are a Data Scientist at a Music Analytics firm.

**Objective:**
Identify the specific user behaviors and metrics that trigger Spotify's algorithmic growth (Discover Weekly, Radio, Autoplay) for **JaZeR's** genre.

**Research Protocol (Gemini Deep Research):**
1.  **Technical Search:** Look for "Spotify algorithm triggers 2025" and "Spotify for Artists metrics explained."
2.  **Genre Specifics:** Search for "Hip-hop/Rap Spotify skip rate benchmarks" or "average save rate for R&B."

**Instructions:**
1.  **Signal Analysis:** Rank user actions by importance (Save vs Share vs Skip).
2.  **The "Pop-Up" Effect:** How external traffic (TikTok) impacts internal signals.
3.  **Completion Rate Benchmarks:** What is the target "Stream-to-Completion" rate?
4.  **Session Start:** Importance of being the first song in a session.

**Negative Constraints:**
*   **NO myths.** Stick to confirmed or highly probable algorithmic behaviors.
*   **NO generic "make good music" advice.** Focus on the *mechanics* of the platform.

**Output Format:**

### 1. The Algorithm Scorecard
| Signal | Weight (Est.) | Why it Matters | How to Optimize |
| :--- | :--- | :--- | :--- |
| *Save Ratio* | *High* | *Retention* | *Pre-save campaigns* |
| *Skip Rate (<30s)* | *Negative* | *Reach penalty* | *Short intros* |

### 2. "Radio" & "Autoplay" Triggers
*   *Analysis of which artists JaZeR should be associated with to trigger "Artist Radio" placement.*

### 3. Metric Benchmarks (Targets)
*   **Save Rate:** (Target %)
*   **Playlist Add Rate:** (Target %)
*   **Skip Rate:** (Target < %)

### 4. Tactical Recommendations
*   *3 specific production or structure tweaks (e.g., Intro length) to improve metrics.*