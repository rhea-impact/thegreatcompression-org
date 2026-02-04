# /research-gaps

Audit all research examples to identify data gaps, prioritize what's missing, and create a research queue.

## When to Use
- Before writing case study pages
- When assessing overall research completeness
- To prioritize where to spend research time
- Before claiming "we have solid data"

---

## Gap Categories

### CRITICAL (Blocks publication)
- No peak employment/revenue number
- No timeline (start/end dates)
- No clear technology identified
- Fails validation criteria

### IMPORTANT (Weakens argument)
- Numbers lack authoritative source
- Missing compression ratio
- No "denial moment" quote
- Timeline is fuzzy (decade vs. year)

### NICE-TO-HAVE (Enhances story)
- No photo/visual asset
- Missing worker perspective
- No cultural touchpoint
- No irony angle

---

## Audit Checklist

For each of the 20 examples, check:

### Data Completeness
| Field | Have It? | Source Quality |
|-------|----------|----------------|
| Peak number | ✅/❌ | HIGH/MED/LOW/NONE |
| Peak year | ✅/❌ | HIGH/MED/LOW/NONE |
| Technology | ✅/❌ | HIGH/MED/LOW/NONE |
| Timeline | ✅/❌ | HIGH/MED/LOW/NONE |
| Result/aftermath | ✅/❌ | HIGH/MED/LOW/NONE |
| Compression ratio | ✅/❌ | HIGH/MED/LOW/NONE |

### Story Elements
| Element | Have It? |
|---------|----------|
| Denial quote | ✅/❌ |
| Worker quote | ✅/❌ |
| Visual asset | ✅/❌ |
| Irony angle | ✅/❌ |
| Cultural hook | ✅/❌ |

### Source Quality
| Source Type | Count |
|-------------|-------|
| Government (BLS, Census) | X |
| Academic papers | X |
| News archives | X |
| Wikipedia only | X |
| Unsourced claims | X |

---

## Priority Matrix

After auditing, categorize:

### Tier 1: Top 10 with Critical Gaps
These block our best stories. Fix first.

### Tier 2: Top 10 with Important Gaps
These weaken our strongest arguments. Fix second.

### Tier 3: Examples 11-20 with Gaps
Only fix if they might move into Top 10.

### Tier 4: Nice-to-Have Everywhere
Polish after core data is solid.

---

## Output Format

```markdown
## Research Gap Audit

### Overall Status
- Examples with complete data: X/20
- Examples with critical gaps: X/20
- Examples with good source quality: X/20

### Critical Gaps (BLOCKING)

| Example | Missing | Impact |
|---------|---------|--------|
| [Name] | [What's missing] | [Why it matters] |

### Important Gaps (PRIORITY)

| Example | Missing | Impact |
|---------|---------|--------|
| [Name] | [What's missing] | [Why it matters] |

### Source Quality Concerns

| Example | Issue | Needed |
|---------|-------|--------|
| [Name] | [e.g., "Wikipedia only"] | [e.g., "BLS data"] |

### Research Queue (Prioritized)

1. **[Example]**: [What to find] — [Search strategy]
2. **[Example]**: [What to find] — [Search strategy]
3. **[Example]**: [What to find] — [Search strategy]

### Era Balance Check
- Pre-1900: X examples, Y% complete
- 1900-1950: X examples, Y% complete
- 1950-1990: X examples, Y% complete
- 1990-2020: X examples, Y% complete

### Completeness by Top 10

| Rank | Example | Data | Story | Sources | Ready? |
|------|---------|------|-------|---------|--------|
| 1 | [Name] | X/6 | X/5 | HIGH/MED/LOW | ✅/❌ |
| 2 | [Name] | X/6 | X/5 | HIGH/MED/LOW | ✅/❌ |
| ... | ... | ... | ... | ... | ... |

### Recommended Actions

1. **This session**: [Most critical gap to fill]
2. **Next session**: [Second priority]
3. **Before publication**: [What must be done]
```

---

## Integration

After gap audit:
1. Log findings to taskr devlog
2. Create research tasks for each critical gap
3. Update assessment framework with confidence levels
4. Re-prioritize Top 10 if data quality changes rankings
