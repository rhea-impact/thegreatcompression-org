/**
 * The Great Compression — Main App
 *
 * Story-driven narrative about value chain compression.
 * With dramatic scroll-triggered animations.
 */

import { useState, useEffect } from 'react';
import { siteContent } from './content';
import {
  Nav,
  Label,
  Headline,
  Body,
  Quote,
  Callout,
  FlexCard,
  ResistanceBox,
  ImplicationCard,
  ProfessionTable,
  RegulationTable,
  ValueChainComponent,
  CapitalismVisualization,
  BlessingManFlow,
  AnimatedSection,
  AnimatedElement,
  DramaticNumber,
  DramaticSigmoid,
  FeaturedHistoryCard,
  HistoryGridCard,
  DramaticAccelerationTimeline,
} from './components';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Hero with parallax effect
function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = siteContent.hero;

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background elements */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.3}px)`,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)',
          transform: `translateY(${scrollY * -0.2}px)`,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '800px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(48px, 10vw, 80px)',
            fontWeight: 700,
            color: '#0f172a',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '32px',
            opacity: 1 - scrollY / 500,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          The Great
          <br />
          <span style={{ color: '#3b82f6' }}>Compression</span>
        </h1>
        <p
          style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            color: '#475569',
            lineHeight: 1.6,
            marginBottom: '48px',
            maxWidth: '600px',
            margin: '0 auto 48px',
            opacity: 1 - scrollY / 400,
          }}
        >
          {content.subtitle}
        </p>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            color: '#64748b',
            opacity: 1 - scrollY / 300,
            animation: 'bounce 2s infinite',
          }}
        >
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = siteContent;

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <Nav visible={scrollY > 100} />

      {/* ============================================
          HERO
          ============================================ */}
      <Hero />

      {/* ============================================
          CHAPTER 1: THIS HAS HAPPENED BEFORE
          ============================================ */}
      <AnimatedSection id="history" background="gray">
        <Label>Chapter 1</Label>
        <Headline>This Has Happened Before</Headline>
        <Body>{content.history.intro}</Body>
        <Quote>{content.history.quote}</Quote>

        {/* Featured card - the gut punch */}
        {content.history.examples
          .filter((ex) => ex.featured)
          .map((ex) => (
            <FeaturedHistoryCard key={ex.id} data={ex} />
          ))}

        {/* Grid of other examples */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '32px',
          }}
        >
          {content.history.examples
            .filter((ex) => !ex.featured)
            .map((ex, i) => (
              <HistoryGridCard key={ex.id} data={ex} delay={i * 100} />
            ))}
        </div>

        <DramaticAccelerationTimeline data={content.history.acceleration} />

        <AnimatedElement delay={200}>
          <Body style={{ marginTop: '40px', fontWeight: 600, color: '#0f172a', fontSize: '20px' }}>
            {content.history.closing}
          </Body>
        </AnimatedElement>
      </AnimatedSection>

      {/* ============================================
          CHAPTER 2: MEET SAL
          ============================================ */}
      <AnimatedSection id="meet-sal" background="white">
        <Label>Chapter 2</Label>
        <Headline>Meet Sal</Headline>
        {content.sal.paragraphs.map((para, i) => (
          <AnimatedElement key={i} delay={i * 100}>
            <Body>{para}</Body>
          </AnimatedElement>
        ))}
        <AnimatedElement delay={300}>
          <Body style={{ fontWeight: 600, color: '#0f172a', fontSize: '18px' }}>
            {content.sal.transition}
          </Body>
        </AnimatedElement>
      </AnimatedSection>

      {/* ============================================
          CHAPTER 3: THE VALUE CHAIN
          ============================================ */}
      <AnimatedSection id="value-chain" background="gray">
        <Label>Chapter 3</Label>
        <Headline>The Tax Prep Value Chain</Headline>
        <Body>Here's what it takes to prepare your taxes today:</Body>

        <ValueChainComponent
          chain={content.valueChainBefore.chain}
          arrowLabels={['Sells to', 'Enables', 'Sells to', 'Bills']}
        />

        <AnimatedElement>
          <Body style={{ fontWeight: 600, color: '#0f172a', fontSize: '18px' }}>
            {content.valueChainBefore.callout}
          </Body>
        </AnimatedElement>
        <Quote>{content.valueChainBefore.quote}</Quote>
      </AnimatedSection>

      {/* ============================================
          CHAPTER 4: THE COLLAPSE
          ============================================ */}
      <AnimatedSection id="collapse" background="white">
        <Label color="#ef4444">Chapter 4</Label>
        <Headline>Then the complexity vanishes</Headline>
        <Body>
          When a model on your laptop can ingest your W-2s, 1099s, brokerage statements, and
          mortgage docs — cross-reference them against current tax code — and produce a nearly
          complete return in minutes...
        </Body>

        <ValueChainComponent chain={content.collapse.chain} />

        {/* THE DRAMATIC MOMENT */}
        <DramaticNumber before="$2,000" after="$200" label="90% of the value — gone" />

        <AnimatedElement>
          <Body
            style={{
              fontWeight: 600,
              color: '#0f172a',
              fontSize: '20px',
              textAlign: 'center',
              marginTop: '32px',
            }}
          >
            The chain doesn't get disrupted. It becomes <em>irrelevant</em>.
          </Body>
        </AnimatedElement>
      </AnimatedSection>

      {/* ============================================
          CHAPTER 5: THE SIGMOID
          ============================================ */}
      <AnimatedSection id="sigmoid" background="gray">
        <Label color="#8b5cf6">Chapter 5</Label>
        <Headline>Compression isn't binary</Headline>
        <Body>{content.sigmoid.intro}</Body>

        <DramaticSigmoid data={content.sigmoid.data} />

        {/* Travel Agents Example */}
        <AnimatedElement delay={200}>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '32px',
              marginTop: '32px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            }}
          >
            <div
              style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '20px' }}
            >
              Real example: {content.sigmoid.example.industry}
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '24px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#475569',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {content.sigmoid.example.stats.jobsBefore}
                </div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                  Jobs in {content.sigmoid.example.stats.jobsBeforeYear}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#ef4444',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {content.sigmoid.example.stats.jobsAfter}
                </div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                  Jobs in {content.sigmoid.example.stats.jobsAfterYear} (
                  {content.sigmoid.example.stats.changePercent})
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#3b82f6',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {content.sigmoid.example.stats.onlinePercent}
                </div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>Bookings now online</div>
              </div>
            </div>
            <Callout>{content.sigmoid.example.callout}</Callout>
          </div>
        </AnimatedElement>
      </AnimatedSection>

      {/* ============================================
          CHAPTER 6: THE BLESSING MAN
          ============================================ */}
      <AnimatedSection id="blessing-man" background="white">
        <Label>Chapter 6</Label>
        <Headline>The Blessing Man</Headline>
        <Body>{content.blessingMan.intro}</Body>

        <BlessingManFlow
          before={content.blessingMan.pattern.before}
          after={content.blessingMan.pattern.after}
        />

        <AnimatedElement>
          <Body
            style={{
              fontWeight: 600,
              color: '#0f172a',
              fontStyle: 'italic',
              fontSize: '20px',
              textAlign: 'center',
              margin: '40px 0',
            }}
          >
            "{content.blessingMan.pattern.keyLine}"
          </Body>
        </AnimatedElement>

        <ProfessionTable data={content.blessingMan.examples} />

        <Callout>{content.blessingMan.callout}</Callout>
      </AnimatedSection>

      {/* ============================================
          CHAPTER 7: HUMAN HELP AS THE NEW FLEX
          ============================================ */}
      <AnimatedSection id="human-flex" background="gray">
        <Label color="#f59e0b">Chapter 7</Label>
        <Headline>Human help is the new flex</Headline>
        <Body>{content.humanFlex.intro}</Body>

        <AnimatedElement>
          <div
            style={{
              background: '#0f172a',
              borderRadius: '16px',
              padding: '40px',
              margin: '40px 0',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '28px',
                fontWeight: 600,
                color: '#ffffff',
                fontStyle: 'italic',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              "{content.humanFlex.quote.replace(/'/g, '')}"
            </p>
          </div>
        </AnimatedElement>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '32px',
          }}
        >
          {content.humanFlex.examples.map((ex, i) => (
            <AnimatedElement key={i} delay={i * 100}>
              <FlexCard data={ex} />
            </AnimatedElement>
          ))}
        </div>

        <Callout>{content.humanFlex.callout}</Callout>
      </AnimatedSection>

      {/* ============================================
          CHAPTER 8: WHAT RESISTS
          ============================================ */}
      <AnimatedSection id="resistance" background="white">
        <Label>Chapter 8</Label>
        <Headline>What Resists (And Why)</Headline>
        <Body>{content.resistance.intro}</Body>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '32px',
          }}
        >
          {content.resistance.factors.map((factor, i) => (
            <AnimatedElement key={i} delay={i * 100}>
              <ResistanceBox data={factor} />
            </AnimatedElement>
          ))}
        </div>

        <RegulationTable data={content.resistance.industries} />

        <AnimatedElement delay={200}>
          <Body style={{ marginTop: '32px', fontWeight: 600, color: '#0f172a' }}>
            {content.resistance.keyInsight}
          </Body>
        </AnimatedElement>

        <Callout>{content.resistance.legalZoomPrecedent}</Callout>
      </AnimatedSection>

      {/* ============================================
          CHAPTER 9: CAPITALISM'S DUAL ROLE
          ============================================ */}
      <AnimatedSection id="capitalism" background="gray">
        <Label color="#8b5cf6">Chapter 9</Label>
        <Headline>Capitalism's Dual Role</Headline>
        <Body>{content.capitalism.intro}</Body>

        <CapitalismVisualization
          accelerator={content.capitalism.accelerator}
          brake={content.capitalism.brake}
          cloudVsLocal={content.capitalism.cloudVsLocal}
        />

        <AnimatedElement delay={200}>
          <Body style={{ marginTop: '32px', fontWeight: 600, color: '#0f172a' }}>
            {content.capitalism.keyInsight}
          </Body>
        </AnimatedElement>
      </AnimatedSection>

      {/* ============================================
          CHAPTER 10: THE QUESTION
          ============================================ */}
      <QuestionSection content={content.question} />

      {/* ============================================
          IMPLICATIONS
          ============================================ */}
      <AnimatedSection id="implications" background="white">
        <Headline>What To Do About It</Headline>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '32px',
          }}
        >
          {content.implications.map((impl, i) => (
            <AnimatedElement key={i} delay={i * 100}>
              <ImplicationCard data={impl} />
            </AnimatedElement>
          ))}
        </div>
      </AnimatedSection>

      {/* ============================================
          DISCLAIMERS
          ============================================ */}
      <AnimatedSection id="disclaimers" background="gray">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#64748b',
                marginBottom: '16px',
              }}
            >
              What This Site Is NOT
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {content.disclaimers.whatThisIsNot.map((d, i) => (
                <li key={i} style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                  {d.text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#64748b',
                marginBottom: '16px',
              }}
            >
              Open Questions
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {content.disclaimers.openQuestions.map((q, i) => (
                <li key={i} style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                  {q.question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer
        style={{
          padding: '48px 24px',
          background: '#ffffff',
          borderTop: '1px solid #e2e8f0',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '14px', color: '#64748b' }}>
          {content.footer.attribution}{' '}
          {content.footer.links.map((link, i) => (
            <span key={i}>
              •{' '}
              <a href={link.url} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                {link.label}
              </a>
            </span>
          ))}
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
  );
}

// The Question section with dramatic dark background
function QuestionSection({
  content,
}: {
  content: typeof siteContent.question;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="question"
      ref={ref}
      style={{
        padding: '120px 24px',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Label color="#60a5fa">Chapter 10</Label>

        <h2
          style={{
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          {content.headline}
        </h2>

        <p
          style={{
            fontSize: '24px',
            color: '#94a3b8',
            lineHeight: 1.6,
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.4s',
          }}
        >
          {content.question}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            marginTop: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '14px',
                color: '#60a5fa',
                fontWeight: 600,
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Essential
            </div>
            <div style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.7 }}>
              {content.definitions.essential}
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: '14px',
                color: '#f87171',
                fontWeight: 600,
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Artificial
            </div>
            <div style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.7 }}>
              {content.definitions.artificial}
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: '20px',
            color: '#ffffff',
            lineHeight: 1.8,
            marginTop: '64px',
            fontWeight: 500,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.8s',
          }}
        >
          {content.finalLine}
        </p>
      </div>
    </section>
  );
}
