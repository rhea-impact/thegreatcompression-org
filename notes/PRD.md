# The Great Compression — Product Requirements Document

*February 2026*

## Purpose

A single-page storytelling site that explains value chain compression through technology. The goal is to make the thesis visceral and memorable, not just intellectually understood.

## Core Thesis (What We're Communicating)

Technology compresses value chains. Regulation delays but doesn't prevent compression. Even when new complexity emerges, it captures far less value than what it replaced.

**Key sub-theses to convey:**
1. The sigmoid compression pattern (not binary job loss)
2. Value capture collapse (prices fall 90%+)
3. Human help as the new flex (luxury residual)
4. Capitalism's dual role (accelerator AND brake)

---

## The Sigmoid — Core Visual

**This is the most important visualization on the site.**

The sigmoid curve shows how compression actually works:

```
BEFORE COMPRESSION
├─────────────────────────────────────────────────┤
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  100% served by humans
├─────────────────────────────────────────────────┤


AFTER COMPRESSION
├─────────────────────────────────────────────────┤
│██│                                         │░░░│
├──┴─────────────────────────────────────────┴───┤
  ↑                                            ↑
  │                                            │
  Luxury tier                                  Budget tier
  (human service                               (fully automated,
  as status flex)                              near-zero cost)

                    ↓ ↓ ↓
         The middle collapses into AI
         This is where 80% of jobs WERE
```

**Interactive version should:**
- Animate the transition from "before" to "after"
- Show specific industries (travel agents, tax prep, journalism)
- Let users drag a slider to see compression over time
- Highlight: "The job still exists — but 80% of the market is gone"

---

## Site Structure (Narrative Flow)

### 1. Hero
- Title: "The Great Compression"
- Subtitle: "Every intermediation layer exists because of complexity. When complexity vanishes, the chain unwinds."
- Scroll indicator

### 2. Chapter 1: Meet Sal
- Introduce the tax prep value chain through a character
- Humanize the abstract concept
- End with: "This is how enterprise software works — layers on layers, each taking margin"

### 3. Chapter 2: The Value Chain (Before)
- Visual: 5-node chain with margin percentages
- Snowflake → Salesforce → Thomson Reuters → Accounting Firm → You ($2,000)
- Call out: "Five companies. Four sales cycles. Margins stacked on margins."

### 4. Chapter 3: The Collapse (After)
- Visual: 3-node chain
- You → Local AI → Accountant ($200 review)
- Stats: $2,000 → $200, 5 nodes → 3 nodes, ~90% value evaporated
- Key line: "The chain doesn't get disrupted. It becomes *irrelevant*."

### 5. Chapter 4: The Sigmoid
**[KEY SECTION — BUILD THIS WELL]**
- Introduce the sigmoid visual
- Explain: "Compression isn't binary. It's a curve."
- Show travel agents: 124,000 → 65,000 jobs, but 70% of bookings now online
- Show tax prep: $2,000 jobs → $200 reviews
- Interactive: Let users see the curve for different industries

### 6. Chapter 5: The Pattern Repeats
- Historical examples (telegrams, encyclopedias, phone books, mail)
- Table: Before price → After price → Value captured (always ~90%+ gone)
- Quote: "You don't disrupt one company. You evaporate the entire reason the chain existed."

### 7. Chapter 6: Human Help as the New Flex
- Explain the inversion: when AI is default, human becomes luxury
- Examples: "A person made my dinner," "my accountant," bespoke tailoring
- The premium tier may grow in per-unit value even as total market shrinks

### 8. Chapter 7: Capitalism's Dual Role
- Accelerator: Capital seeks disintermediation (profit motive)
- Brake: Incumbents delay via regulation, subscriptions, lock-in
- Cloud vs. local AI tension

### 9. The Question (Closing)
- Dark section for contrast
- "What are you selling when the complexity evaporates?"
- "Is the complexity you manage essential or artificial?"
- End with the thesis restated

### 10. Footer
- Link to Rhea Impact
- Link to full thesis notes (optional)

---

## Visual Design

**Inspired by:** shiptypes.com

- **Background:** White/light (#ffffff, #f8fafc)
- **Text:** Dark slate (#0f172a primary, #475569 body, #64748b secondary)
- **Accent:** Blue (#3b82f6)
- **Fonts:** Inter (body), JetBrains Mono (data, labels)
- **Spacing:** Generous (80-100px section padding)
- **Animations:** Subtle fade-ups on scroll, smooth transitions

**Key visuals to build:**
1. The sigmoid compression diagram (interactive)
2. Before/after value chain comparison
3. Historical examples timeline or cards
4. Stats blocks ($2,000 → $200)

---

## Technical Requirements

- **Framework:** React (Vite)
- **Hosting:** Railway
- **Domain:** thegreatcompression.org (Route 53)
- **Charts:** Recharts (already installed) or custom SVG for sigmoid
- **Mobile:** Fully responsive, chain diagrams scroll horizontally on mobile

---

## Success Metrics

1. **Comprehension:** Reader understands the sigmoid concept after viewing
2. **Memorability:** "Human help is the new flex" sticks as a phrase
3. **Shareability:** Key visuals (especially sigmoid) work as standalone images
4. **Credibility:** Historical examples make the thesis feel inevitable, not speculative

---

## Open Questions

- [ ] Should the sigmoid be animated on scroll or user-triggered?
- [ ] Include the full Sal story prose or keep it abbreviated?
- [ ] Link to deeper research notes or keep site self-contained?
- [ ] Add email capture for updates?

---

*PRD version 1.0 — subject to iteration*
