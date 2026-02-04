# The Great Compression

**Website:** [thegreatcompression.org](https://thegreatcompression.org)

## Thesis

Every intermediation layer in business exists because of complexity. Salespeople, consultants, middleware vendors, distributors, brokers — they all extract margin by navigating complexity that their customers can't handle alone.

**When technology makes that complexity trivial, the entire value chain collapses.**

This isn't disruption in the startup-eats-incumbent sense. It's evaporation. Nobody disrupted the telegram by building a better telegram. Email made the concept of paying per word to send a message *absurd*.

AI is doing this now across knowledge work. It's not making better enterprise software. It's making the *need* for enterprise software absurd in a growing number of domains.

## The Pattern

| Industry | Era | Disruptor | Before | After |
|----------|-----|-----------|--------|-------|
| Phone Books | 1990s-2000s | Search Engines | $14B/yr industry | $0 |
| Encyclopedias | 2000s | Wikipedia | $650M/yr, 145k employees | Discontinued 2012 |
| Telegrams | 1990s-2000s | Email/SMS | Per-word charges | Free, instant |
| Physical Mail | 2000s-2020s | Digital | 213B pieces/yr peak | Down 47% |
| Tax Prep | 2020s | Local AI | $2,000 engagements | $200 review |

**"You don't disrupt one company. You evaporate the entire reason the chain existed."**

## The Sal Story

Imagine Sal, a salesperson for Snowflake. He sells databases to Thomson Reuters. Thomson Reuters buys Tableau from Salesforce to visualize it. Thomson Reuters packages this into compliance tools sold to accounting firms with 4,500 clients.

That's five layers of margin extraction — all because applying tax code to financial data was complex enough to justify an enterprise stack.

When local AI does 90% of your tax prep, the accountant becomes a blessing-man ($200 review), and every upstream layer loses its reason to exist.

## Content

### Interactive Components (React)

| File | Description |
|------|-------------|
| `value-chain-collapse.jsx` | Before/after diagrams for 5 historical collapses |
| `annual-effect.jsx` | Margin erosion charts, moat durability, tech share history |

### Written Content

| File | Description |
|------|-------------|
| `content/sal-the-salesperson.md` | The tax prep value chain story |
| `content/historical-collapses.md` | 10 historical examples (printing press to 3D printing) |

## Design

- **Theme:** Dark (#0a0a14 background)
- **Typography:** Playfair Display (headings) + DM Sans/Mono (body)
- **Style:** Technical minimalism (inspired by shiptypes.com)
- **Interactions:** Expandable accordions, before/after toggles, smooth animations

## Stack

- **Frontend:** React (Vite or Next.js TBD)
- **Hosting:** Railway
- **Domain:** thegreatcompression.org (Route 53)

## License

Content is proprietary to Rhea Impact.
