# /style

Make the site modern, cool, and emotionally effective. This covers visual design, interactivity, and how design serves storytelling.

## When to Use
- When UI feels dated or generic
- When adding new sections or components
- When something looks "enterprise-y"
- When animations feel gratuitous rather than purposeful
- When the experience feels flat despite good content

---

## Part 1: Visual Design

### Color Philosophy
**Avoid:**
- Primary blue (#0066cc) - screams "bank website"
- Gradient rainbows - dated
- Pure black on pure white - harsh

**Embrace:**
- Slate palette for neutrals (#0f172a, #64748b, #f8fafc)
- Single accent color used sparingly
- Dark backgrounds for emotional weight (Chapter 10, featured cards)
- Red (#ef4444) for compression/loss/urgency

### Typography
**Avoid:**
- All caps for body text
- More than 2 font families
- Font weights below 400 for body

**Embrace:**
- Monospace for data/stats (JetBrains Mono)
- Tight letter-spacing (-0.02em) for headings
- Generous line-height (1.6+) for body
- Uppercase + wide letter-spacing (0.1em) for labels only

### Spacing
- 8px base unit (8, 16, 24, 32, 48, 64, 96)
- Generous whitespace - let content breathe
- Sections need 80-120px vertical padding
- More space after heavy moments (let them land)

### Components
**Avoid:**
- Heavy drop shadows
- Rounded corners over 16px
- Borders thicker than 2px

**Embrace:**
- Subtle shadows (0 1px 3px rgba(0,0,0,0.04))
- Background color differentiation over borders
- Striped/hatched patterns for "eliminated" states
- Dark cards for gut-punch moments

---

## Part 2: Interactive Storytelling

### Animation Serves Narrative
Every animation should answer: "What does this movement *mean*?"

| Animation | Narrative Purpose |
|-----------|-------------------|
| Fade up on scroll | "Here comes the next beat" |
| Staggered reveal | "These items build on each other" |
| Strike-through + red number | "This value was destroyed" |
| Bars shrinking | "Time is compressing" |
| Parallax fade on hero | "Scroll to leave comfort zone" |

**Bad animation:** Bouncing icons, spinning loaders, things moving just to move.
**Good animation:** The sigmoid middle section getting hatched stripes as it "collapses."

### Scroll as Pacing
- Each scroll should feel like turning a page
- Heavy sections need breathing room after
- Don't reveal everything at once - stagger by 50-100ms
- The reader controls the pace; respect that

### Emotional Beats Through Design

| Beat | Design Treatment |
|------|------------------|
| Hook/dissonance | Clean, then ONE jarring element |
| Gut punch | Dark background, large monospace numbers |
| Building understanding | White/gray, readable, methodical |
| The question | Full dark section, glow effect, space |
| Resolution | Return to light, clear typography |

### Progressive Disclosure
- Don't dump all information at once
- Grid cards reveal on scroll (staggered)
- Stats animate in when visible
- Tables can exist without animation - they're reference, not story

### Micro-interactions That Matter
- Hover states should hint at interactivity
- Links should feel clickable before clicking
- Don't animate things that aren't interactive

---

## Part 3: The Site's Specific Voice

This site has a personality. The design should match:

| Trait | Design Implication |
|-------|---------------------|
| Direct | No decorative flourishes |
| Technical | Monospace for data, precise spacing |
| Unsettling | Strategic use of red, dark sections |
| Hopeful (end) | Return to light, clear calls to action |
| Not corporate | No stock photo vibes, no "hero with gradient button" |

### Reference Aesthetic
Think: Linear, Vercel, Stripe, Raycast - clean, technical, confident.
Not: Salesforce, Oracle, Microsoft 365, generic SaaS landing page.

---

## Part 4: Anti-Template Checklist

This site should feel handcrafted, not generated. Flag anything that screams "template."

### Red Flags

| Pattern | Why It's Bad |
|---------|--------------|
| Hero with centered text + gradient CTA button | Every SaaS landing page since 2018 |
| Three-column feature grid with icons | "We couldn't think of a better way" |
| Testimonial carousel | Nobody reads these |
| "As seen in" logo bar | Borrowed credibility, feels desperate |
| Floating mockup devices | Stock template energy |
| Generic "Get Started" / "Learn More" buttons | Says nothing |
| Alternating left-right feature sections | The Webflow special |
| FAQ accordion at the bottom | SEO filler |
| "Join 10,000+ users" social proof | Template placeholder text |
| Gradient mesh backgrounds | Framer template default |

### What To Do Instead

- **Instead of feature grid:** Tell a story. Show the value chain collapsing.
- **Instead of testimonials:** Use real data, real quotes from research.
- **Instead of "Get Started":** Specific action ("Read the research", "See the model").
- **Instead of alternating sections:** Vary the rhythm. Dark section. Full-bleed chart. Breathing room.
- **Instead of generic hero:** A headline that makes you uncomfortable.

### The Sniff Test
Ask: "Could this section exist on any other website?"
- If yes → it's too generic. Make it specific to THIS story.
- If no → good. It belongs here.

---

## Output Format

```markdown
## Style Review: [Component/Section]

### Visual Issues
- [Problem] → [Fix]

### Animation Issues
- [Animation that doesn't serve story] → [Purposeful alternative or remove]

### Narrative Alignment
- Does this section's design match its emotional purpose?
- [Yes/No + explanation]

### Specific Changes
```css
/* or JSX/style changes */
```

### Vibe Check
[MODERN / DATED / CORPORATE / GRATUITOUS / ON POINT]
```
