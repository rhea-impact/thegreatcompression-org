# /research-deep

Conduct deep research on a specific compression example to fill data gaps and gather compelling narrative elements.

## When to Use
- Example is in Top 10 but lacks solid data
- Need quotes, photos, or cultural artifacts
- Want to build out the full story arc
- Preparing to write the detailed case study page

---

## Research Targets

### Quantitative Data
| Data Point | Where to Find |
|------------|---------------|
| Peak employment | BLS historical data, industry reports |
| Timeline milestones | News archives, company histories |
| Compression ratio | Compare peak vs. current employment |
| Revenue/market data | SEC filings, industry associations |

### Qualitative Data
| Data Point | Where to Find |
|------------|---------------|
| "Denial quote" | News archives, executive interviews |
| Worker perspectives | Oral histories, news features |
| Cultural moment | Ads, TV shows, movies from the era |
| The "oh no" moment | When did insiders realize? |

### Visual Assets
| Asset | Where to Find |
|-------|---------------|
| Peak-era photo | Wikimedia Commons, Library of Congress |
| The technology | Patent images, product photos |
| Aftermath | Bankruptcy headlines, empty storefronts |

---

## Search Strategy

### Phase 1: Wikipedia + Basic
```
[example] history employment statistics
[example] peak [year] workers
[example] decline timeline
```

### Phase 2: News Archives
```
site:nytimes.com [example] [decade]
site:wsj.com [example] disruption
"[example]" "out of business" OR "bankruptcy"
```

### Phase 3: Academic/Government
```
site:bls.gov [example] employment
site:census.gov [example]
[example] "bureau of labor statistics"
```

### Phase 4: Cultural
```
[example] advertisement [decade]
[example] "golden age"
[example] nostalgia memories
```

---

## Story Arc Framework

Every compression has the same narrative structure:

### 1. THE RISE
- When did this industry/job emerge?
- What need did it serve?
- How did it become essential?

### 2. THE PEAK
- When was the golden age?
- What were the cultural markers?
- What did "success" look like?

### 3. THE DISRUPTION
- What technology emerged?
- When was it dismissed as a "toy"?
- What was the tipping point?

### 4. THE COLLAPSE
- How fast did it happen?
- What were the key dates?
- Who saw it coming?

### 5. THE AFTERMATH
- What replaced it?
- Who survived and how?
- What lessons remain?

---

## Output Format

```markdown
## Deep Research: [EXAMPLE NAME]

### Summary
[2-3 sentence overview of this compression]

### Timeline
| Year | Event |
|------|-------|
| [year] | [Rise: industry emerges] |
| [year] | [Peak: golden age marker] |
| [year] | [Disruption: technology appears] |
| [year] | [Collapse: key bankruptcy/decline] |
| [year] | [Aftermath: new equilibrium] |

### Key Statistics
| Metric | Peak | Current | Compression |
|--------|------|---------|-------------|
| Employment | [X] ([year]) | [Y] | [X:1] |
| Revenue | $[X]B | $[Y]B | [%] decline |
| Market share | [X]% | [Y]% | [drop] |

### The Story

#### The Rise
[Paragraph on how this industry emerged and grew]

#### The Peak
[Paragraph on the golden age - cultural significance, ubiquity]

#### The Disruption
[Paragraph on the technology that changed everything]

#### The Collapse
[Paragraph on the decline - speed, key dates, denial]

#### The Aftermath
[Paragraph on what replaced it, who survived]

### Key Quotes

> "[Denial quote from executive/industry]"
> — [Name], [Role], [Year]

> "[Worker perspective quote]"
> — [Name], [Context], [Year]

### Visual Assets
- Peak era: [description of ideal image]
- Technology: [description]
- Aftermath: [description]
- Sources: [Wikimedia Commons links, etc.]

### Narrative Hooks
- **Irony angle**: [e.g., Kodak invented digital camera]
- **Human face**: [specific person's story]
- **Cultural touchpoint**: [movie, TV show, shared memory]

### Data Confidence
| Data Point | Confidence | Source |
|------------|------------|--------|
| Peak employment | HIGH/MED/LOW | [source] |
| Timeline | HIGH/MED/LOW | [source] |
| Compression ratio | HIGH/MED/LOW | [source] |

### Gaps Remaining
- [ ] [What we still need]

### Sources
1. [Source with URL]
2. [Source with URL]
```

---

## Integration

After deep research:
1. Update `research/01-historical-examples.md` with new data
2. Create `research/examples/[slug].md` for full case study
3. Log to taskr devlog with findings
4. Update data confidence in assessment framework
