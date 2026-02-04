# /research-add

Add a new compression example to the research database with structured data and initial assessment.

## When to Use
- Found a new historical example of technology eliminating jobs
- Want to evaluate if an example belongs in the thesis
- Need to document a compression case with proper structure

---

## Validation Criteria

Before adding, verify the example meets our intellectual honesty standard:

### VALID Example (Include)
- Technology **truly eliminated** the job category
- Workers couldn't simply transition to similar roles
- Clear cause-effect between technology and job loss
- Measurable compression (before/after numbers exist)

### INVALID Example (Reject)
- Workers shifted to similar roles (telegraph → telephone operators)
- Employment actually increased (bank tellers + ATMs)
- Role evolved rather than disappeared (secretary → executive assistant)
- Multiple confounding factors make causation unclear

---

## Data Collection Checklist

For each new example, gather:

### Required Data
- [ ] Job/Industry name
- [ ] Peak employment/revenue (with year)
- [ ] Disruptive technology
- [ ] Timeline: Start year → End year
- [ ] Result: Final state (how many remain?)
- [ ] Era classification: Pre-1900 / 1900-1950 / 1950-1990 / 1990-2020

### Scoring Data (1-10 each)
- [ ] Visceral Impact: Does it create emotional response?
- [ ] Data Quality: Are numbers solid and citable?
- [ ] Cultural Familiarity: Will readers recognize it?
- [ ] Compression Clarity: Is cause-effect clean?

### Nice-to-Have
- [ ] Compression ratio (workers before / workers after)
- [ ] Key quote from era
- [ ] Photo/visual artifact
- [ ] "Denial moment" - when did incumbents realize?

---

## Process

1. **Web search** for the example to gather basic facts
2. **Validate** against the criteria above
3. **Score** using the 4 criteria
4. **Add to devlog** via taskr with category "research"
5. **Update** research/01-historical-examples.md
6. **Update** research/00-assessment-framework.md rankings

---

## Output Format

```markdown
## New Research Example: [NAME]

### Validation
- [x] Technology truly eliminated the role
- [x] Workers couldn't transition to similar jobs
- [x] Clear cause-effect
- [x] Measurable before/after

### Data
| Field | Value |
|-------|-------|
| Industry | [name] |
| Peak | [number] ([year]) |
| Technology | [what disrupted it] |
| Timeline | [start] - [end] |
| Result | [final state] |
| Era | [classification] |

### Scoring
| Criterion | Score | Notes |
|-----------|-------|-------|
| Visceral | X/10 | [why] |
| Data Quality | X/10 | [why] |
| Familiarity | X/10 | [why] |
| Clarity | X/10 | [why] |
| **TOTAL** | **XX/40** | |

### Ranking Impact
- Current position: #X of 20
- [Above/Below] threshold for Top 10

### Data Gaps
- [ ] [What we still need]

### Sources
- [URL 1]
- [URL 2]
```

---

## Integration

After adding:
1. Log to taskr: `devlog_add` with category "research", service "thegreatcompression-org"
2. Update markdown: Edit `research/01-historical-examples.md`
3. Re-rank: Update `research/00-assessment-framework.md`
