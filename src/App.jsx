import { useState, useEffect, useRef } from 'react'

// A single node in the value chain
const ChainNode = ({ icon, name, desc, margin, highlighted, faded }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    opacity: faded ? 0.3 : 1,
    transition: 'opacity 0.5s ease',
    minWidth: '100px',
    maxWidth: '110px',
  }}>
    <div style={{
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      background: highlighted ? '#dbeafe' : '#f8fafc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px',
      border: highlighted ? '2px solid #3b82f6' : '1px solid #e2e8f0',
      boxShadow: highlighted ? '0 4px 12px rgba(59,130,246,0.15)' : '0 1px 3px rgba(0,0,0,0.04)',
      transition: 'all 0.3s ease',
    }}>
      {icon}
    </div>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: '13px',
        fontWeight: 600,
        color: highlighted ? '#1d4ed8' : '#0f172a',
        letterSpacing: '-0.01em',
      }}>
        {name}
      </div>
      <div style={{
        fontSize: '11px',
        color: '#64748b',
        marginTop: '2px',
        lineHeight: 1.4,
      }}>
        {desc}
      </div>
    </div>
    {margin && (
      <div style={{
        fontSize: '11px',
        fontWeight: 600,
        color: '#f59e0b',
        fontFamily: "'JetBrains Mono', monospace",
        background: '#fef3c7',
        padding: '3px 8px',
        borderRadius: '6px',
      }}>
        {margin}
      </div>
    )}
  </div>
)

// Arrow between nodes
const Arrow = ({ label }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    marginTop: '20px',
    minWidth: '50px',
  }}>
    {label && (
      <div style={{
        fontSize: '10px',
        color: '#94a3b8',
        fontFamily: "'JetBrains Mono', monospace",
        textAlign: 'center',
      }}>
        {label}
      </div>
    )}
    <svg width="40" height="12" viewBox="0 0 40 12">
      <line x1="0" y1="6" x2="30" y2="6" stroke="#cbd5e1" strokeWidth="2" />
      <polygon points="30,2 38,6 30,10" fill="#cbd5e1" />
    </svg>
  </div>
)

// Section wrapper with consistent styling
const Section = ({ children, bg = 'white', id }) => (
  <section
    id={id}
    style={{
      padding: '100px 24px',
      background: bg,
      borderBottom: '1px solid #e2e8f0',
    }}
  >
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {children}
    </div>
  </section>
)

// Label for sections
const Label = ({ children, color = '#3b82f6' }) => (
  <div style={{
    fontSize: '12px',
    fontFamily: "'JetBrains Mono', monospace",
    color: color,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600,
    marginBottom: '16px',
  }}>
    {children}
  </div>
)

// Headline
const Headline = ({ children }) => (
  <h2 style={{
    fontSize: 'clamp(28px, 5vw, 40px)',
    fontWeight: 700,
    color: '#0f172a',
    letterSpacing: '-0.03em',
    lineHeight: 1.15,
    marginBottom: '20px',
  }}>
    {children}
  </h2>
)

// Body text
const Body = ({ children }) => (
  <p style={{
    fontSize: '17px',
    color: '#475569',
    lineHeight: 1.8,
    marginBottom: '24px',
  }}>
    {children}
  </p>
)

// Quote block
const Quote = ({ children, author }) => (
  <blockquote style={{
    borderLeft: '4px solid #3b82f6',
    paddingLeft: '24px',
    marginLeft: 0,
    marginTop: '32px',
    marginBottom: '32px',
  }}>
    <p style={{
      fontSize: '20px',
      fontStyle: 'italic',
      color: '#1e293b',
      lineHeight: 1.6,
      margin: 0,
    }}>
      "{children}"
    </p>
    {author && (
      <cite style={{
        display: 'block',
        marginTop: '12px',
        fontSize: '14px',
        color: '#64748b',
        fontStyle: 'normal',
      }}>
        — {author}
      </cite>
    )}
  </blockquote>
)

// Historical example card
const HistoryCard = ({ era, industry, before, after, color }) => (
  <div style={{
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '16px',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
    }}>
      <div style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: color,
      }} />
      <div>
        <div style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#0f172a',
        }}>
          {industry}
        </div>
        <div style={{
          fontSize: '13px',
          color: '#64748b',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          {era}
        </div>
      </div>
    </div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: '16px',
      alignItems: 'center',
    }}>
      <div>
        <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>Before</div>
        <div style={{ fontSize: '14px', color: '#475569' }}>{before}</div>
      </div>
      <div style={{ fontSize: '20px', color: '#cbd5e1' }}>→</div>
      <div>
        <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>After</div>
        <div style={{ fontSize: '14px', color: '#475569', fontWeight: 500 }}>{after}</div>
      </div>
    </div>
  </div>
)

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      {/* Fixed nav */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrollY > 100 ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrollY > 100 ? 'blur(12px)' : 'none',
        borderBottom: scrollY > 100 ? '1px solid #e2e8f0' : '1px solid transparent',
        padding: '16px 24px',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{
            fontWeight: 700,
            fontSize: '16px',
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }}>
            The Great Compression
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      }}>
        <div style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: 700,
            color: '#0f172a',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}>
            The Great <span style={{ color: '#3b82f6' }}>Compression</span>
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 3vw, 22px)',
            color: '#475569',
            lineHeight: 1.6,
            marginBottom: '40px',
          }}>
            Every intermediation layer exists because of complexity.<br />
            When technology makes complexity trivial, value chains collapse.
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            color: '#64748b',
          }}>
            <span>Scroll to explore</span>
            <span style={{ animation: 'bounce 2s infinite' }}>↓</span>
          </div>
        </div>
      </section>

      {/* Chapter 1: Meet Sal */}
      <Section bg="#ffffff" id="meet-sal">
        <Label>Chapter 1</Label>
        <Headline>Meet Sal</Headline>
        <Body>
          Sal sells databases for Snowflake. His biggest client is Thomson Reuters —
          a company that needs to warehouse and process massive amounts of financial data.
        </Body>
        <Body>
          Thomson Reuters also buys Tableau from Salesforce, because raw data isn't useful
          until you can see it. They package these insights into compliance tools and sell
          them to accounting firms with thousands of clients.
        </Body>
        <Body>
          This is how enterprise software works: layers upon layers of companies, each
          adding value (and taking margin) because <strong>the problem is too complex
          for any single entity to solve.</strong>
        </Body>
      </Section>

      {/* Chapter 2: The Value Chain */}
      <Section bg="#f8fafc" id="value-chain">
        <Label>Chapter 2</Label>
        <Headline>The Tax Prep Value Chain</Headline>
        <Body>
          Here's what it takes to prepare your taxes today:
        </Body>

        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          padding: '32px 24px',
          marginTop: '32px',
          marginBottom: '32px',
          overflowX: 'auto',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            justifyContent: 'center',
            minWidth: '700px',
          }}>
            <ChainNode icon="❄️" name="Snowflake" desc="Data warehouse" margin="+30%" />
            <Arrow label="Sells to" />
            <ChainNode icon="☁️" name="Salesforce" desc="Visualization" margin="+25%" />
            <Arrow label="Enables" />
            <ChainNode icon="📊" name="Thomson Reuters" desc="Compliance tools" margin="+35%" />
            <Arrow label="Sells to" />
            <ChainNode icon="🏢" name="Accounting Firm" desc="4,500 clients" margin="+40%" />
            <Arrow label="Bills" />
            <ChainNode icon="👤" name="You" desc="Pays $2,000" />
          </div>
        </div>

        <Body>
          Five companies. Four sales cycles. Margins stacked on margins. And at the end,
          you pay $2,000 for what is, fundamentally, <strong>applying tax code to your financial data</strong>.
        </Body>

        <Quote>
          Every single one of those layers takes a margin. Every layer adds friction,
          sales cycles, implementation consultants, license negotiations. Sal exists
          because the complexity of the stack justifies a human to navigate it.
        </Quote>
      </Section>

      {/* Chapter 3: The Collapse */}
      <Section bg="#ffffff" id="the-collapse">
        <Label color="#ef4444">Chapter 3</Label>
        <Headline>Then the complexity vanishes</Headline>
        <Body>
          When a model on your laptop can ingest your W-2s, 1099s, brokerage statements,
          and mortgage docs — cross-reference them against current tax code — and produce
          a nearly complete return in minutes...
        </Body>
        <Body style={{ fontWeight: 600, color: '#0f172a' }}>
          ...the entire chain doesn't just get disrupted. It becomes <em>irrelevant</em>.
        </Body>

        <div style={{
          background: '#fef2f2',
          borderRadius: '16px',
          border: '1px solid #fecaca',
          padding: '32px 24px',
          marginTop: '32px',
          marginBottom: '32px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            justifyContent: 'center',
          }}>
            <ChainNode icon="👤" name="You" desc="Upload docs" />
            <Arrow label="" />
            <ChainNode icon="🤖" name="Local AI" desc="Applies tax code" highlighted />
            <Arrow label="" />
            <ChainNode icon="✅" name="Accountant" desc="$200 review" />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '32px',
        }}>
          <div style={{
            background: '#f8fafc',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 700, color: '#ef4444' }}>$2,000</div>
            <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>→ $200</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '8px' }}>Cost reduction</div>
          </div>
          <div style={{
            background: '#f8fafc',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 700, color: '#ef4444' }}>5 → 3</div>
            <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Nodes in chain</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '8px' }}>Zero intermediary margin</div>
          </div>
          <div style={{
            background: '#f8fafc',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 700, color: '#ef4444' }}>~90%</div>
            <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Value evaporated</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '8px' }}>From the chain</div>
          </div>
        </div>
      </Section>

      {/* Chapter 4: The Pattern */}
      <Section bg="#f8fafc" id="the-pattern">
        <Label>Chapter 4</Label>
        <Headline>This has happened before</Headline>
        <Body>
          Value chain collapse isn't new. It's the defining pattern of technology disruption.
          Nobody disrupted the telegram by building a better telegram — email made the
          <em> concept </em> of paying per word absurd.
        </Body>

        <div style={{ marginTop: '40px' }}>
          <HistoryCard
            era="1990s–2000s"
            industry="Phone Books"
            before="$14B/yr industry"
            after="Yellow Pages revenue → $0"
            color="#8b5cf6"
          />
          <HistoryCard
            era="2000s"
            industry="Encyclopedias"
            before="$650M/yr, 4,000 salespeople"
            after="Britannica print discontinued 2012"
            color="#10b981"
          />
          <HistoryCard
            era="1990s–2000s"
            industry="Telegrams"
            before="Per-word charges, hours to days"
            after="Western Union telegram dead 2006"
            color="#f59e0b"
          />
          <HistoryCard
            era="2000s–2020s"
            industry="Physical Mail"
            before="213B pieces/yr at peak (2006)"
            after="Down 47% and falling"
            color="#ef4444"
          />
        </div>

        <Quote>
          You don't disrupt one company. You evaporate the entire reason the chain existed.
        </Quote>
      </Section>

      {/* Chapter 5: The Question */}
      <Section bg="#0f172a" id="the-question">
        <Label color="#60a5fa">The Question</Label>
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 40px)',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: '24px',
        }}>
          What are you selling when the complexity evaporates?
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#94a3b8',
          lineHeight: 1.8,
          marginBottom: '24px',
        }}>
          Sal isn't really selling a database. He's selling a piece of a complexity stack
          that only makes sense when humans need elaborate tooling to do cognitive work.
        </p>
        <p style={{
          fontSize: '18px',
          color: '#94a3b8',
          lineHeight: 1.8,
          marginBottom: '24px',
        }}>
          Once they don't, the whole thing unwinds.
        </p>
        <p style={{
          fontSize: '20px',
          color: '#ffffff',
          lineHeight: 1.8,
          fontWeight: 500,
        }}>
          This is what people miss about AI disruption. It's not about any one product
          getting replaced. It's about <strong style={{ color: '#60a5fa' }}>entire value chains
          of intermediation losing their reason to exist simultaneously</strong>.
        </p>
      </Section>

      {/* Footer */}
      <footer style={{
        padding: '48px 24px',
        background: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: '14px',
          color: '#64748b',
        }}>
          A <a href="https://rheaimpact.com" style={{ color: '#3b82f6', textDecoration: 'none' }}>Rhea Impact</a> project
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  )
}
