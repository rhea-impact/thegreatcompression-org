# /flow

Diagnose and fix visual rhythm, pacing, and section-to-section continuity. This is what makes the difference between "good content" and "engaging experience."

## When to Use
- Site feels boring despite good content
- Everything looks the same weight
- Scrolling feels like a wall of text
- No sense of progression or surprise

---

## Part 1: Visual Rhythm

### The Problem with Monotony
When every section is:
- Same width (800px centered)
- Same padding (100px)
- Same background (white/gray alternating)
- Same components (headline → body → cards)

...the eye glazes over. There's no signal for "pay attention here."

### Rhythm Checklist

| Element | Variety Needed |
|---------|----------------|
| Section width | Some full-bleed, some narrow |
| Background | White, gray, dark, accent color |
| Padding | Dense sections vs. spacious ones |
| Component types | Text, charts, cards, full-bleed images, quotes |
| Visual weight | Light sections between heavy ones |

### The 3-Beat Rule
Never have more than 3 similar sections in a row. After 3, you need a pattern break:
- Dark section
- Full-bleed visualization
- Extra-spacious breathing room
- Different layout entirely

---

## Part 2: Pacing

### Heavy vs. Light
Map each section's emotional/cognitive weight:

| Weight | Characteristics |
|--------|-----------------|
| **Heavy** | Data-dense, emotional gut-punch, complex visualization |
| **Medium** | Explanatory text, simple charts, card grids |
| **Light** | Single quote, breathing room, minimal content |

### Good Pacing Pattern
```
Heavy → Medium → Light → Heavy → Medium → Light
```

### Bad Pacing Pattern
```
Heavy → Heavy → Heavy → Medium → Medium → Medium
```

### Breathing Room
After every gut-punch moment, the reader needs space to process:
- Extra padding (120-160px instead of 100px)
- Minimal content
- Or a pull-quote that lets the previous point echo

---

## Part 3: Pull-Forward Hooks

### The "Why Keep Scrolling?" Problem
Each section should create a question that the next section answers.

**Bad:** Section ends with a conclusion. Reader feels done.
**Good:** Section ends with tension. Reader needs resolution.

### Hook Types

| Type | Example |
|------|---------|
| Question hook | "But what happens to the people in the middle?" |
| Contradiction hook | "This sounds like doom. It's not." |
| Promise hook | "There's a pattern here." |
| Cliffhanger | End mid-thought, continue in next section |

### Visual Hooks
- A line or arrow pointing down
- "Chapter X" labels create expectation
- Partial visibility of next section (reduced padding)

---

## Part 4: Texture and Shape

### Breaking the Rectangle
Not everything needs to be a card in a grid:
- Pull-quotes that span full width
- Visualizations that bleed to edges
- Asymmetric layouts
- Numbered lists instead of cards
- Timeline/flowchart instead of paragraphs

### Texture Variety
- Solid backgrounds vs. subtle patterns
- Borders vs. shadows vs. background color
- Dense text vs. sparse data points
- Horizontal flow vs. vertical stack

---

## Part 5: Section-by-Section Audit

For each section, answer:

1. **What's its weight?** (Heavy / Medium / Light)
2. **What came before?** (Same weight = problem)
3. **What's the hook to next?** (None = drop-off risk)
4. **What makes it visually distinct?** (Nothing = monotony)
5. **Does it earn its space?** (Too long = trim, too short = expand or merge)

---

## Output Format

```markdown
## Flow Review

### Rhythm Map
| Section | Weight | Background | Distinct Element | Hook to Next |
|---------|--------|------------|------------------|--------------|
| Hero | Light | gradient | Title only | Scroll indicator |
| Ch 1 | Heavy | gray | Dark featured card | "This is happening now" |
| ... | ... | ... | ... | ... |

### Monotony Zones
- Sections X-Y: [Problem - e.g., "3 medium-weight gray sections in a row"]

### Missing Breathing Room
- After Section X: [Needs space to process]

### Weak Hooks
- Section X → Y: [No pull-forward, reader might bounce]

### Shape Variety
- Current: [e.g., "All centered 800px rectangles"]
- Suggested breaks: [e.g., "Full-bleed viz after Ch 4, pull-quote after Ch 6"]

### Pacing Diagnosis
[GOOD RHYTHM / MONOTONOUS / FRONT-LOADED / BACK-LOADED]

### Priority Fixes
1. [Most impactful change]
2. [Second priority]
3. [Third priority]
```
