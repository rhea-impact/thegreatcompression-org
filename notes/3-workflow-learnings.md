# Workflow Learnings

## The Process We Followed

```
idea.md → spec.md → types.ts → content.ts → components → App.tsx
    ↓         ↓         ↓          ↓           ↓           ↓
 review    review    review     review      review      review
```

Each stage got a critical review before proceeding. This caught:
- Missing "Blessing Man" pattern in idea
- Missing "Capitalism's Dual Role" section in spec
- Missing `ResistanceType` enum in types
- Emojis that didn't fit the tone

## Skills Created

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| `/review-narrative` | Story logic, emotional arc, transitions | After content changes |
| `/tighten` | Cut bloat, 20-30% reduction | Before final review |
| `/punch` | Make flat sections hit harder | When insights don't land |
| `/style` | Visual + interactive + anti-template | After building sections |

## What We've Run So Far

1. **Built the site** — idea → spec → types → code
2. **Added animations** — scroll-triggered reveals, dramatic numbers
3. **Removed emojis** — replaced with text abbreviations
4. **Ran /style** — found and fixed template patterns (bounce animation, gradient blobs)

## Current Problem

Site feels **boring** despite:
- Clean visual design ✓
- Purposeful animations ✓
- No template patterns ✓
- Strong narrative content ✓

Hypothesis: The problem is **visual monotony** — every section has the same rhythm, weight, and shape.

## What's Missing

A **flow/rhythm** skill that checks:
- Section variety (not all the same shape)
- Pacing (heavy → light → heavy)
- Visual texture changes
- Pull-forward hooks between sections
- Breathing room vs. density

## Recommended Diagnostic Order

```
1. /review-narrative  — Is the story logic sound?
2. /flow              — Is there visual rhythm and variety?
3. /punch             — Are key moments landing?
4. /style             — Final polish
```

Run in this order because:
- Narrative problems should be fixed first (foundation)
- Flow problems explain "boring" feeling (current symptom)
- Punch is targeted fixes for specific sections
- Style is polish, not diagnosis

## Key Insight

**"Boring" is usually a rhythm problem, not a content problem.**

Good content + monotonous presentation = boring.
The eye needs variety. The scroll needs surprise.

---

## Session Timeline

1. Scaffolded idea → spec → types → code workflow
2. Got critical reviews at each checkpoint
3. Built all 14 sections with animations
4. User said "not impactful" → added dramatic components
5. User said "no emojis" → removed them
6. Created 4 skills for iteration
7. Ran /style → fixed template patterns
8. User said "still boring" → identified missing /flow skill

## Next Steps

1. Create `/flow` skill
2. Run `/review-narrative` to verify foundation
3. Run `/flow` to diagnose monotony
4. Make targeted fixes
5. Run `/punch` on weak sections
6. Final `/style` pass
