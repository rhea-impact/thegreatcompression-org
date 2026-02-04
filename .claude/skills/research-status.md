# /research-status

Get a quick overview of the current research project status including example counts, data quality, and what needs attention.

## When to Use
- Starting a new session
- Before deciding what to work on
- Checking progress toward publication-ready
- Briefing someone on project state

---

## Status Check Process

1. **Count examples** in research/01-historical-examples.md
2. **Check rankings** in research/00-assessment-framework.md
3. **Audit devlogs** via taskr for recent research
4. **Scan for gaps** in Top 10 data quality

---

## Output Format

```markdown
## Research Project Status

### Example Inventory
| Category | Count | Target |
|----------|-------|--------|
| Total examples | X | 30 |
| Top 10 (featured) | 10 | 10 |
| On-deck (11-20) | X | 10 |
| Bench (21-30) | X | 10 |

### Era Distribution
| Era | Count | Target | Balance |
|-----|-------|--------|---------|
| Pre-1900 | X | 5-7 | ✅/⚠️ |
| 1900-1950 | X | 5-7 | ✅/⚠️ |
| 1950-1990 | X | 5-7 | ✅/⚠️ |
| 1990-2020 | X | 8-10 | ✅/⚠️ |

### Top 10 Readiness
| # | Example | Score | Data | Story | Ready |
|---|---------|-------|------|-------|-------|
| 1 | [Name] | XX/40 | ✅/⚠️/❌ | ✅/⚠️/❌ | ✅/❌ |
| 2 | [Name] | XX/40 | ✅/⚠️/❌ | ✅/⚠️/❌ | ✅/❌ |
| ... | ... | ... | ... | ... | ... |

### Recent Research Activity
[List last 3-5 devlog entries from taskr]

### Critical Blockers
- [ ] [What's blocking publication]

### Recommended Next Actions
1. **Immediate**: [Highest priority]
2. **This session**: [What to tackle]
3. **Future**: [Longer-term needs]

### Files Overview
```
research/
├── 00-assessment-framework.md  [Last updated: DATE]
├── 01-historical-examples.md   [X examples]
├── 02-disintermediation-studies.md
├── 03-compression-ratio.md
├── 04-sigmoid-pattern.md
├── 05-blessing-man-problem.md
├── 06-luxury-tier.md
├── 07-essential-vs-artificial.md
├── 08-thesis-framework.md
└── examples/                   [X case studies]
```
```

---

## Quick Commands

After status check, common next steps:

- **Need more examples**: `/research-add`
- **Top 10 has gaps**: `/research-deep [example]`
- **Audit all gaps**: `/research-gaps`
- **Find new examples**: Web search for historical job elimination
