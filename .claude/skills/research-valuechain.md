# /research-valuechain

Map the value chain structure of a compression example — showing what intermediary layers existed before and what replaced them after.

## When to Use
- Understanding WHY a compression happened
- Building the "before/after" visualization for a story
- Identifying which layers got compressed vs. which survived
- Proving the thesis: technology eliminates intermediary steps

---

## Value Chain Anatomy

Every compression follows the same pattern:

```
BEFORE (High Friction)
┌──────────────────────────────────────────────────────────┐
│ PRODUCER → [Layer 1] → [Layer 2] → [Layer 3] → CONSUMER │
└──────────────────────────────────────────────────────────┘
                    ↓ Technology arrives ↓

AFTER (Low Friction)
┌──────────────────────────────────────────────────────────┐
│ PRODUCER → [Compressed] → CONSUMER                       │
└──────────────────────────────────────────────────────────┘
```

### Layer Types

| Layer Type | Function | Examples |
|------------|----------|----------|
| **Information** | Knows something you don't | Travel agent, stockbroker, librarian |
| **Access** | Has access you don't | Ticket counter, gatekeeper, distributor |
| **Skill** | Can do something you can't | Typesetter, projectionist, darkroom tech |
| **Physical** | Moves/stores physical goods | Warehouse, delivery, retail store |
| **Trust** | Provides verification/guarantee | Notary, inspector, authenticator |
| **Aggregation** | Bundles many small things | Newspaper classifieds, Yellow Pages |

---

## Analysis Framework

For each compression, identify:

### 1. The Producer
Who/what creates the underlying value?
- Artist creates music
- Hotel has rooms
- Company has job opening

### 2. The Consumer
Who wants the value?
- Person wants entertainment
- Person needs accommodation
- Person wants employment

### 3. The Intermediary Layers (BEFORE)
What stood between producer and consumer?
| Layer | Function | Human Jobs | Friction Added |
|-------|----------|------------|----------------|
| [Name] | [What it did] | [Job titles] | [Time/cost/complexity] |

### 4. The Technology
What compressed the layers?
- What friction did it eliminate?
- What information asymmetry did it destroy?
- What skill did it automate?

### 5. The Compressed State (AFTER)
What remains between producer and consumer?
- Platform (if any)
- Remaining human touchpoints
- New friction points

### 6. Compression Analysis
| Metric | Before | After |
|--------|--------|-------|
| Layers | X | Y |
| Human touchpoints | X | Y |
| Time to complete | X | Y |
| Cost to consumer | $X | $Y |

---

## Output Format

```markdown
## Value Chain: [EXAMPLE NAME]

### The Transaction
**Producer**: [Who creates value]
**Consumer**: [Who wants value]
**Core exchange**: [What actually needs to happen]

### BEFORE: The Intermediated Chain

```
[PRODUCER]
    ↓
[Layer 1: Name] — [Function] — Jobs: [X]
    ↓
[Layer 2: Name] — [Function] — Jobs: [X]
    ↓
[Layer 3: Name] — [Function] — Jobs: [X]
    ↓
[CONSUMER]
```

**Total intermediary jobs**: [X]
**Friction**: [Time/cost/complexity description]

### The Technology
**Disruptor**: [Technology name]
**What it eliminated**: [Which friction points]
**Year introduced**: [Year]

### AFTER: The Compressed Chain

```
[PRODUCER]
    ↓
[Platform/Automation] — [What it does]
    ↓
[CONSUMER]
```

**Remaining human touchpoints**: [X]
**New friction**: [If any]

### Compression Metrics
| Metric | Before | After | Reduction |
|--------|--------|-------|-----------|
| Layers | X | Y | Z% |
| Human jobs | X | Y | Z% |
| Time | [X hours/days] | [Y minutes] | Z% |
| Cost | $X | $Y | Z% |

### What Got Compressed
- [Layer that disappeared] — [Why no longer needed]
- [Layer that disappeared] — [Why no longer needed]

### What Survived (if anything)
- [Remaining human role] — [Why still needed]

### Key Insight
[One sentence on what this compression teaches us]
```

---

## Quick Examples

### Music (Record Stores → Streaming)
```
BEFORE:
Artist → Label → Manufacturer → Distributor → Store → Consumer
(6 layers, thousands of jobs)

AFTER:
Artist → Spotify → Consumer
(1 platform layer)

Compressed: Manufacturing, distribution, retail
```

### Travel (Agent → Online)
```
BEFORE:
Airline → GDS → Travel Agent → Consumer
(3 layers, 124k agents)

AFTER:
Airline → Expedia/Direct → Consumer
(1 platform layer)

Compressed: Agent knowledge layer
```

---

## Integration

After mapping value chain:
1. Update example in `research/01-historical-examples.md` with chain summary
2. Add visualization data to `research/examples/[slug].md`
3. Log to taskr devlog
4. Use for homepage "before/after" animations

