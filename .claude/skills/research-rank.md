# /research-rank

Re-score and re-rank all compression examples to ensure the Top 10 reflects our best stories.

## When to Use
- After adding new examples
- After deep research improves an example's data
- When questioning current rankings
- Before finalizing which examples to feature

---

## Scoring Criteria (1-10 each)

### 1. VISCERAL IMPACT
*Does it create emotional response?*

| Score | Meaning |
|-------|---------|
| 9-10 | Gut-punch story everyone relates to |
| 7-8 | Strong emotional hook |
| 5-6 | Interesting but not moving |
| 3-4 | Dry, academic feel |
| 1-2 | No emotional resonance |

**Boost factors**: Named company (Kodak), cultural touchstone (Blockbuster), human face

### 2. DATA QUALITY
*Are numbers solid and citable?*

| Score | Meaning |
|-------|---------|
| 9-10 | Government/academic sources, precise numbers |
| 7-8 | Good sources, minor gaps |
| 5-6 | Mixed sources, some estimates |
| 3-4 | Mostly estimates, weak sourcing |
| 1-2 | No reliable data |

**Boost factors**: BLS data, company filings, academic papers

### 3. CULTURAL FAMILIARITY
*Will readers recognize this?*

| Score | Meaning |
|-------|---------|
| 9-10 | Household name, everyone remembers |
| 7-8 | Most adults know it |
| 5-6 | Some will recognize |
| 3-4 | Niche or historical |
| 1-2 | Obscure |

**Boost factors**: Brand name, recent memory, appeared in media

### 4. COMPRESSION CLARITY
*Is cause-effect clean?*

| Score | Meaning |
|-------|---------|
| 9-10 | Single technology, obvious cause |
| 7-8 | Clear primary cause |
| 5-6 | Multiple factors but identifiable |
| 3-4 | Confounded, hard to attribute |
| 1-2 | Unclear what happened |

**Boost factors**: Single disruptor, clear timeline, before/after stark

---

## Era Balance Check

Target distribution for intellectual honesty:

| Era | Target | Why |
|-----|--------|-----|
| Pre-1900 | 3-5 | Proves pattern predates internet |
| 1900-1950 | 3-5 | Industrial/mechanical era |
| 1950-1990 | 3-5 | Electronics/automation |
| 1990-2020 | 5-7 | Internet era (most familiar) |

If Top 10 is all internet-era, we're not proving the thesis.

---

## Ranking Process

1. **Score each example** on all 4 criteria
2. **Sum scores** for total (max 40)
3. **Sort by total** descending
4. **Check era balance** in Top 10
5. **Adjust if needed** for balance (may bump lower-scored pre-internet example into Top 10)

---

## Output Format

```markdown
## Research Ranking Update

### Scoring Summary

| # | Example | Visceral | Data | Familiar | Clear | TOTAL | Era |
|---|---------|----------|------|----------|-------|-------|-----|
| 1 | [Name] | X | X | X | X | XX | [era] |
| 2 | [Name] | X | X | X | X | XX | [era] |
| ... | ... | ... | ... | ... | ... | ... | ... |
| 20 | [Name] | X | X | X | X | XX | [era] |

### Top 10 (Featured Stories)
1. **[Name]** (XX) — [Era] — [One-line hook]
2. **[Name]** (XX) — [Era] — [One-line hook]
...
10. **[Name]** (XX) — [Era] — [One-line hook]

### On-Deck (11-20)
11. [Name] (XX) — [Era]
12. [Name] (XX) — [Era]
...

### Era Balance in Top 10
| Era | Count | Status |
|-----|-------|--------|
| Pre-1900 | X | ✅/⚠️ |
| 1900-1950 | X | ✅/⚠️ |
| 1950-1990 | X | ✅/⚠️ |
| 1990-2020 | X | ✅/⚠️ |

### Ranking Changes
- **↑ Promoted**: [Examples that moved into Top 10]
- **↓ Demoted**: [Examples that dropped out]
- **→ Swapped**: [Position changes within Top 10]

### Balance Adjustments
[If we made manual adjustments for era balance, explain here]

### Bubble Watch
*Examples just outside Top 10 that could move up with better data:*
- #11 [Name] (XX) — Needs: [What would boost score]
- #12 [Name] (XX) — Needs: [What would boost score]
```

---

## Integration

After re-ranking:
1. Update `research/00-assessment-framework.md`
2. Log changes to taskr devlog
3. Re-prioritize research queue if rankings shifted
