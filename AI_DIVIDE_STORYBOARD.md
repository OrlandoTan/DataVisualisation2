# The AI Divide in Australia — Idiom Storyboard

**Domain:** Artificial intelligence adoption and its uneven spread across Australia
**Audience (Who):** The average Australian — curious, non-technical, wondering whether AI is helping or hurting _their_ state, _their_ industry, _their_ job.
**Need (Why):** AI is talked about as one wave hitting everyone equally. It isn't. It lands differently by _place_, by _business size_, by _occupation_, and by _who gets left behind_. This piece makes that unevenness — the **divide** — visible and felt.

---

## The big idea

One word holds the whole page together: **divide**. Every act splits the country in two and asks _which side are you on?_ The visual motif is a recurring **fault line** — a single vertical rule, like the crisp white "iPhone 2007" marker in the Quartr _Waves of Disruption_ poster — that reappears between the "ahead" and "behind" groups in each act. Repetition of that one element is what turns ten charts into one story.

**Palette & tone (from your references):**

- A restrained 2–3 colour system like the _Size Matters_ Olympics poster: one hot signal colour (a confident red/coral) for "AI-ahead", one neutral graphite for "behind/baseline", warm off-white paper background. Hue carries the single most important categorical split; everything else is value/position.
- _Hábitat Plástico_'s trick — pour data **into a recognisable silhouette** (there, a fish). We do the same with the **shape of Australia** as a hero motif.
- _Waves of Disruption_'s two crossing area streams — used literally for the moment AI demand overtakes the old way of working.
- The Olympics _metaball_ circles — used for the AI company ecosystem, where blobs merge by sector.

---

## Narrative arc — five acts, one fault line

| Act                      | The divide             | Question the reader asks                           |
| ------------------------ | ---------------------- | -------------------------------------------------- |
| **0 — Hook**             | —                      | "Is AI really splitting the country?"              |
| **1 — Place**            | Geographic             | "Is my state ahead or behind?"                     |
| **2 — Business**         | Firm size & sector     | "Are the companies around me winning or watching?" |
| **3 — Skills**           | Workforce / occupation | "Is my job exposed — and am I ready?"              |
| **4 — Society & Future** | Access & trajectory    | "Where does this leave us in ten years?"           |
| **5 — Close**            | —                      | "So what do we do?"                                |

---

# The idioms (13 charts — map included)

> Required map = **#2**. Charts flagged **★ CUSTOM/DERIVED** are the ones that push toward a D/HD — they combine idioms or need derived data, so they "can't be made by plugging a dataset into a template."

---

## ACT 0 — HOOK

### 1. Split hero stat — "one country, two speeds"

- **Idiom:** Annotated big-number / unit split (not a Vega-Lite chart — an HTML+CSS hero with one embedded sparkline).
- **Marks / channels:** A single line mark (sparkline) showing the national AI-demand climb from `demand.csv`; position (x=year, y=%) + one annotation dot on the latest year.
- **Data:** `demand.csv` (2015→latest).
- **Visual:** Giant headline "**The AI Divide**", a thin sparkline rising under it, and the fault-line rule introduced here for the first time. Sets the motif.
- **Why / What / How:** _Why_ — hook the reader and plant the central metaphor. _What_ — one time series. _How_ — minimal ink, position channel, single colour; the climb implies "this is real and accelerating," the split implies "but not for everyone."

---

## ACT 1 — THE PLACE DIVIDE _(Where)_

### 2. ★ Choropleth map of Australia — AI adoption by state _(THE REQUIRED MAP)_

- **Idiom:** Choropleth (filled-area geographic map).
- **Marks / channels:** Area marks (state polygons); **colour value** (sequential) = `ai_adoption`; tooltip on hover.
- **Data:** `AdoptionState.csv` + `STE_2016_AUST.json` (TopoJSON, ABS state boundaries).
- **Projection:** Albers (equal-area) tuned to Australian latitudes — the appropriate, honest projection for comparing areas.
- **Visual:** Off-white sea, states filled in the red→graphite ramp. Victoria/NSW glow hot; NT/Tas sit muted. Annotate the leader and laggard directly on the map.
- **Why / What / How:** _Why_ — instantly answers "is my state ahead?" _What_ — one quantitative value per region. _How_ — geographic position is the natural channel; sequential value (not hue) for an ordered attribute, which the rubric explicitly rewards.

### 3. ★ Metro vs regional dumbbell — the _within_-state divide **★ CUSTOM/DERIVED**

- **Idiom:** Dumbbell / connected-dot chart (two points + connecting rule per state).
- **Marks / channels:** Two circle marks per state (metro %, regional %) joined by a rule; x = adoption %, y = state (sorted by gap); colour = metro vs regional.
- **Data:** **Derived** — `AdoptionState.csv` split by metro/regional using a **second source** (ABS _Business Characteristics & Use of IT_, or Census 2021 remoteness structure). _This is your two-source combination — call it out in the write-up._
- **Visual:** The connecting rule **is** the fault line, repeated eight times — the reader literally sees the gap widen down the list.
- **Why / What / How:** _Why_ — the map hides the city/country split inside each state; this exposes it. _What_ — two related quantities + their difference. _How_ — length of the connecting rule encodes the divide; sorting by gap turns it into a ranking.

---

## ACT 2 — THE BUSINESS DIVIDE _(Who's winning)_

### 4. ★ Diverging stacked bar — industries that adopt, watch, or don't know

- **Idiom:** 100%-stacked / diverging horizontal bar.
- **Marks / channels:** Stacked bar marks; x = share of firms; colour = {adopting, not adopting, not aware}; y = industry sorted by % adopting.
- **Data:** `adoption_by_industry.csv`.
- **Visual:** Diverge from a centre line so "adopting" pushes right (red), "not aware" trails left (graphite) — the centre line is again the fault line. Health/education leads, hospitality lags.
- **Why / What / How:** _Why_ — shows the sectoral haves/have-nots in one read. _What_ — part-to-whole across categories. _How_ — aligned baselines for the key series make industries directly comparable; the "not aware" segment quietly tells a story about information access (foreshadows Act 4).

### 5. ★ Circle-pack of the AI company ecosystem **★ CUSTOM/DERIVED**

- **Idiom:** Circle packing / bubble chart (metaball aesthetic from _Size Matters_).
- **Marks / channels:** Circle marks; **area** = number of companies; colour = sector group; labels inside the largest bubbles.
- **Data:** `ai_companies_by_sector.csv`.
- **Visual:** Big coral blobs (business services, IT infra) crowding small ones (education), echoing the Olympics poster's playful merged circles. Pack tightly so blobs nearly touch.
- **Why / What / How:** _Why_ — reveals where the AI _industry itself_ concentrates, which isn't where adoption is highest — a tension worth surfacing. _What_ — one quantity across ~11 categories. _How_ — area channel for magnitude; packing layout (custom, needs derived x/y or a packed-bubble transform) lifts it above a default bar.

### 6. ★ Twin-stream "Waves of disruption" — demand overtakes the old way **★ CUSTOM/DERIVED**

- **Idiom:** Overlapping dual area / stream graph (direct homage to the Quartr poster).
- **Marks / channels:** Two area marks over time; the rising stream = AI/digital skill demand (`demand.csv`), the falling stream = a baseline "traditional process" proxy; x = year, y = %; the **crossover point** annotated with the fault line + a dot, exactly like the iPhone-2007 marker.
- **Data:** `demand.csv` + a **second source** trend (e.g., Jobs and Skills Australia / Tech Council talent series) for the declining baseline.
- **Visual:** Red wave climbs as the graphite wave recedes; label the year they cross.
- **Why / What / How:** _Why_ — gives the divide a _moment_, a tipping point, which is far more memorable than a single rising line. _What_ — two opposing time series. _How_ — crossing areas make the substitution legible at a glance; the annotation does the storytelling.

---

## ACT 3 — THE SKILLS DIVIDE _(Who's ready)_

### 7. Lollipop chart — AI skill intensity by occupation

- **Idiom:** Lollipop (rule + dot), a cleaner cousin of the bar.
- **Marks / channels:** Rule mark from baseline + circle at the value; x = % of job ads needing AI skills; y = occupation sorted descending.
- **Data:** `ai_skills_by_occupation.csv`.
- **Visual:** Arts/media and ICT shoot far right in red; manual occupations barely register. High data-ink ratio — exactly the _Size Matters_ discipline.
- **Why / What / How:** _Why_ — answers "is my job in the AI-skill zone?" _What_ — one quantity, ~13 categories. _How_ — position encodes value with minimal ink; dots give a clean comparison endpoint.

### 8. ★ Exposure–readiness quadrant — who's exposed _and_ unprepared **★ CUSTOM/DERIVED**

- **Idiom:** Annotated scatter with quadrant framing.
- **Marks / channels:** Circle marks per occupation; x = AI skill demand (`ai_skills_by_occupation.csv`); y = workforce size or training/qualification rate (**second source** — ABS Census occupation counts / Jobs and Skills Australia); size = number of workers; quadrant lines split "ahead/behind" on both axes.
- **Data:** **Derived join** of skills CSV + ABS occupation data.
- **Visual:** Four labelled quadrants — "Riding the wave," "Scrambling," "Safe for now," "Left behind." The crossing quadrant lines = the fault line in two dimensions.
- **Why / What / How:** _Why_ — the single most insight-dense chart; turns two ordinary columns into a strategic map of vulnerability. _What_ — two quantities + magnitude across occupations. _How_ — 2-D position + size; quadrant annotation converts raw scatter into narrative categories.

### 9. ★ State × industry adoption heatmap (matrix) **★ CUSTOM/DERIVED**

- **Idiom:** Heatmap / matrix.
- **Marks / channels:** Rectangle marks; rows = state, columns = industry; colour value = adoption rate.
- **Data:** **Derived cross** of `AdoptionState.csv` × `adoption_by_industry.csv` (note the derivation method honestly in the write-up).
- **Visual:** A grid of warm/cool cells; the eye finds the hot corner (e.g., Victorian health) and the cold corner instantly.
- **Why / What / How:** _Why_ — connects Act 1 (place) and Act 2 (industry) into one view, reinforcing that the divide compounds. _What_ — one value across two categorical dimensions. _How_ — colour value on an ordered grid; position by both categories enables fast row/column scanning.

---

## ACT 4 — SOCIETY & THE FUTURE _(Where we're heading)_

### 10. Waffle / unit chart — the human scale of the divide

- **Idiom:** Waffle (10×10 unit grid).
- **Marks / channels:** 100 square marks; colour = "uses/benefits from AI" vs "doesn't/can't access"; one annotated square = "you."
- **Data:** A **second source** national survey on AI use/trust (e.g., CSIRO–University of Queensland _Trust in AI_, or ABS digital-inclusion data).
- **Visual:** A neat 100-square block where the coloured fraction makes the share tangible — far warmer than a pie. Echoes _Hábitat Plástico_'s "5 bottles = 10 litres" human framing.
- **Why / What / How:** _Why_ — shifts from firms to people; makes a percentage feel like "1 in 3 of us." _What_ — a single proportion. _How_ — unit marks + colour; one part per person beats area-based pies for lay audiences.

### 11. ★ Australia-shaped projection — adoption now vs 2030 **★ CUSTOM/DERIVED**

- **Idiom:** Small-multiple choropleth pair (now / projected) OR a single map with a projection overlay.
- **Marks / channels:** Two side-by-side maps reusing #2's encoding; colour value = adoption now vs a simple projected rate.
- **Data:** `AdoptionState.csv` + a transparent projection derived from `demand.csv` growth (clearly labelled as an illustrative projection, not a forecast).
- **Visual:** Callback to the hero map — the country "heats up," but unevenly, so the divide _widens_. Reuses the Australia silhouette as the recurring motif (the _Hábitat Plástico_ silhouette idea).
- **Why / What / How:** _Why_ — answers "where does this leave us?" _What_ — same quantity at two time points. _How_ — small multiples hold the encoding constant so the only change the eye sees is the data; honesty about projection assumptions is part of the story.

### 12. Slope chart — who pulls ahead between now and the projection

- **Idiom:** Slope graph (two-point connected lines).
- **Marks / channels:** One line per state from "now" to "projected"; slope = growth; colour highlights the fastest riser and the flat-liner.
- **Data:** Derived from #11.
- **Visual:** Steep red slopes vs flat graphite ones — the literal _divergence_ of the divide. Steepness is the message.
- **Why / What / How:** _Why_ — makes "the gap is widening" a visual fact, not a claim. _What_ — change between two points across states. _How_ — slope (angle) is the channel humans read fastest for rate-of-change.

---

## ACT 5 — CLOSE

### 13. Icon-array KPI band — "mind the gap"

- **Idiom:** Annotated KPI strip with small icons (HTML/CSS + tiny embedded marks).
- **Marks / channels:** 3–4 framed numbers, each with an icon and a one-line takeaway; optional micro-sparkline.
- **Data:** Pulled from the strongest figures across the page.
- **Visual:** The fault line resolves into a closing call-to-action; sources, author, date, AI-use acknowledgement live here (rubric metadata).
- **Why / What / How:** _Why_ — leave the reader with the three numbers that matter and what to do. _What_ — summary statistics. _How_ — large type + icon anchors aid recall; closes the loop opened by the hero.

---

## Coverage checklist (map to the rubric)

- **≥ 10 charts:** 13 idioms, comfortably over the minimum (buffer in case any is cut).
- **At least one map:** #2 choropleth (Albers); plus #11 reuses the map.
- **Two data sources combined:** required — used in #3, #6, #8, #10 (ABS / Jobs & Skills Australia / CSIRO trust survey / Tech Council). Pick **at least one** of these as your documented second source and cite it.
- **Custom / derived idioms (for D/HD):** #3, #5, #6, #8, #9, #11 are flagged ★ — they need derived data or combine idioms, so they read as genuine custom work, not template fills.
- **Marks & channels done right:** ordered attributes use value (not hue) — #2, #9; magnitude uses area/length — #5, #4, #7; rate-of-change uses slope — #12.
- **Storytelling spine:** the recurring **fault-line rule** + the **Australia silhouette** motif unify all acts; each act asks the reader a personal question.
- **Idioms used:** choropleth, dumbbell, diverging stacked bar, circle-pack, dual-area stream, lollipop, quadrant scatter, heatmap matrix, waffle, small-multiple maps, slope chart, KPI/icon array, hero sparkline = **13 distinct idiom types**.

## What you still need to decide / source

1. **Lock the second source.** The brief _requires_ combining two sources — the cleanest single choice is ABS (occupation counts + remoteness) since it powers #3, #8 and #11.
2. **Be honest about derived data.** #3, #9, #11 use derivations; the brief says heavy wrangling won't earn marks, so keep derivations simple and _documented_ in the 500-word write-up.
3. **Confirm the projection is labelled illustrative**, not a forecast (#11/#12), to stay within "accurate, non-fabricated data."

---

_Sources to cite in the final page:_ Australia's AI Ecosystem report (your `australias-artificial-intelligence-ecosystem-growth-and-opportunities-june-2025` PDF) and `our_gen_ai_transition.pdf` already in your repo; ABS; Jobs and Skills Australia; CSIRO. AI-tool use to be acknowledged per the brief.
