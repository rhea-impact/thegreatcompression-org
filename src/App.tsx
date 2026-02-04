/**
 * The Great Compression — Main App
 *
 * Story-driven narrative about value chain compression.
 * Content sourced from typed content.ts, components from components/
 */

import { useState, useEffect } from 'react';
import { siteContent } from './content';
import {
  Section,
  Nav,
  Label,
  Headline,
  Body,
  Quote,
  Callout,
  HistoryCard,
  StatCard,
  FlexCard,
  ResistanceBox,
  ImplicationCard,
  ProfessionTable,
  RegulationTable,
  AccelerationTimeline,
  ValueChainComponent,
  SigmoidVisualization,
  CapitalismVisualization,
  BlessingManFlow,
} from './components';

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
          SECTION 0: HERO
          ============================================ */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px 80px',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        }}
      >
        <div style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(40px, 8vw, 64px)',
              fontWeight: 700,
              color: '#0f172a',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            The Great <span style={{ color: '#3b82f6' }}>Compression</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '40px',
            }}
          >
            {content.hero.subtitle}
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#64748b',
            }}
          >
            <span>{content.hero.scrollIndicator}</span>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 1: HISTORY (This Has Happened Before)
          ============================================ */}
      <Section id="history" background="gray">
        <Label>Chapter 1</Label>
        <Headline>This Has Happened Before</Headline>
        <Body>{content.history.intro}</Body>
        <Quote>{content.history.quote}</Quote>

        {/* Featured card */}
        {content.history.examples
          .filter((ex) => ex.featured)
          .map((ex) => (
            <HistoryCard key={ex.id} data={ex} featured />
          ))}

        {/* Grid of other examples */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '24px',
          }}
        >
          {content.history.examples
            .filter((ex) => !ex.featured)
            .map((ex) => (
              <HistoryCard key={ex.id} data={ex} />
            ))}
        </div>

        <AccelerationTimeline data={content.history.acceleration} />

        <Body style={{ marginTop: '32px', fontWeight: 600, color: '#0f172a' }}>
          {content.history.closing}
        </Body>
      </Section>

      {/* ============================================
          SECTION 2: MEET SAL
          ============================================ */}
      <Section id="meet-sal" background="white">
        <Label>Chapter 2</Label>
        <Headline>Meet Sal</Headline>
        {content.sal.paragraphs.map((para, i) => (
          <Body key={i}>{para}</Body>
        ))}
        <Body style={{ fontWeight: 500, color: '#0f172a' }}>{content.sal.transition}</Body>
      </Section>

      {/* ============================================
          SECTION 3: THE VALUE CHAIN (Before)
          ============================================ */}
      <Section id="value-chain" background="gray">
        <Label>Chapter 3</Label>
        <Headline>The Tax Prep Value Chain</Headline>
        <Body>Here's what it takes to prepare your taxes today:</Body>

        <ValueChainComponent
          chain={content.valueChainBefore.chain}
          arrowLabels={['Sells to', 'Enables', 'Sells to', 'Bills']}
        />

        <Body style={{ fontWeight: 600, color: '#0f172a' }}>{content.valueChainBefore.callout}</Body>
        <Quote>{content.valueChainBefore.quote}</Quote>
      </Section>

      {/* ============================================
          SECTION 4: THE COLLAPSE (After)
          ============================================ */}
      <Section id="collapse" background="white">
        <Label color="#ef4444">Chapter 4</Label>
        <Headline>Then the complexity vanishes</Headline>
        <Body>
          When a model on your laptop can ingest your W-2s, 1099s, brokerage statements, and
          mortgage docs — cross-reference them against current tax code — and produce a nearly
          complete return in minutes...
        </Body>
        <Body style={{ fontWeight: 600, color: '#0f172a' }}>
          ...the entire chain doesn't just get disrupted. It becomes <em>irrelevant</em>.
        </Body>

        <ValueChainComponent chain={content.collapse.chain} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '32px',
          }}
        >
          {content.collapse.stats.map((stat, i) => (
            <StatCard key={i} data={stat} />
          ))}
        </div>
      </Section>

      {/* ============================================
          SECTION 5: THE SIGMOID
          ============================================ */}
      <Section id="sigmoid" background="gray">
        <Label color="#8b5cf6">Chapter 5</Label>
        <Headline>Compression isn't binary</Headline>
        <Body>{content.sigmoid.intro}</Body>

        <SigmoidVisualization data={content.sigmoid.data} />

        {/* Tier explanations */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '24px',
          }}
        >
          <div style={{ padding: '16px', background: '#eff6ff', borderRadius: '8px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#3b82f6', marginBottom: '8px' }}>
              Luxury Tier
            </div>
            <div style={{ fontSize: '13px', color: '#475569' }}>
              {content.sigmoid.tierExplanations.luxury}
            </div>
          </div>
          <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '8px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748b', marginBottom: '8px' }}>
              The Middle
            </div>
            <div style={{ fontSize: '13px', color: '#475569' }}>
              {content.sigmoid.tierExplanations.middle}
            </div>
          </div>
          <div style={{ padding: '16px', background: '#ecfdf5', borderRadius: '8px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#10b981', marginBottom: '8px' }}>
              Budget Tier
            </div>
            <div style={{ fontSize: '13px', color: '#475569' }}>
              {content.sigmoid.tierExplanations.budget}
            </div>
          </div>
        </div>

        {/* Travel Agents Example */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '24px',
            marginTop: '32px',
            border: '1px solid #e2e8f0',
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '16px' }}>
            Real example: {content.sigmoid.example.industry}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#475569' }}>
                {content.sigmoid.example.stats.jobsBefore}
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                Jobs in {content.sigmoid.example.stats.jobsBeforeYear}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#ef4444' }}>
                {content.sigmoid.example.stats.jobsAfter}
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                Jobs in {content.sigmoid.example.stats.jobsAfterYear} ({content.sigmoid.example.stats.changePercent})
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#3b82f6' }}>
                {content.sigmoid.example.stats.onlinePercent}
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>Bookings now online</div>
            </div>
          </div>
          <Callout>{content.sigmoid.example.callout}</Callout>
        </div>
      </Section>

      {/* ============================================
          SECTION 6: THE BLESSING MAN
          ============================================ */}
      <Section id="blessing-man" background="white">
        <Label>Chapter 6</Label>
        <Headline>The Blessing Man</Headline>
        <Body>{content.blessingMan.intro}</Body>

        <BlessingManFlow before={content.blessingMan.pattern.before} after={content.blessingMan.pattern.after} />

        <Body style={{ fontWeight: 600, color: '#0f172a', fontStyle: 'italic' }}>
          {content.blessingMan.pattern.keyLine}
        </Body>

        <ProfessionTable data={content.blessingMan.examples} />

        <Callout>{content.blessingMan.callout}</Callout>
      </Section>

      {/* ============================================
          SECTION 7: HUMAN HELP AS THE NEW FLEX
          ============================================ */}
      <Section id="human-flex" background="gray">
        <Label color="#f59e0b">Chapter 7</Label>
        <Headline>Human help is the new flex</Headline>
        <Body>{content.humanFlex.intro}</Body>
        <Quote>{content.humanFlex.quote}</Quote>

        <Body>
          <strong>The scarcity inversion:</strong>
          <br />• {content.humanFlex.scarcityInversion.before}
          <br />• {content.humanFlex.scarcityInversion.after}
        </Body>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '32px',
          }}
        >
          {content.humanFlex.examples.map((ex, i) => (
            <FlexCard key={i} data={ex} />
          ))}
        </div>

        <Callout>{content.humanFlex.callout}</Callout>

        <Body style={{ marginTop: '24px', fontStyle: 'italic', color: '#64748b' }}>
          {content.humanFlex.openQuestion}
        </Body>
      </Section>

      {/* ============================================
          SECTION 8: WHAT RESISTS (AND WHY)
          ============================================ */}
      <Section id="resistance" background="white">
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
            <ResistanceBox key={i} data={factor} />
          ))}
        </div>

        <RegulationTable data={content.resistance.industries} />

        <Body style={{ marginTop: '32px', fontWeight: 600, color: '#0f172a' }}>
          {content.resistance.keyInsight}
        </Body>

        <Callout>{content.resistance.legalZoomPrecedent}</Callout>
      </Section>

      {/* ============================================
          SECTION 9: CAPITALISM'S DUAL ROLE
          ============================================ */}
      <Section id="capitalism" background="gray">
        <Label color="#8b5cf6">Chapter 9</Label>
        <Headline>Capitalism's Dual Role</Headline>
        <Body>{content.capitalism.intro}</Body>

        <CapitalismVisualization
          accelerator={content.capitalism.accelerator}
          brake={content.capitalism.brake}
          cloudVsLocal={content.capitalism.cloudVsLocal}
        />

        <Body style={{ marginTop: '32px', fontWeight: 600, color: '#0f172a' }}>
          {content.capitalism.keyInsight}
        </Body>
      </Section>

      {/* ============================================
          SECTION 10: THE QUESTION
          ============================================ */}
      <Section id="question" background="dark">
        <Label color="#60a5fa">Chapter 10</Label>
        <Headline light>{content.question.headline}</Headline>
        <p
          style={{
            fontSize: '22px',
            color: '#ffffff',
            lineHeight: 1.6,
            marginBottom: '32px',
          }}
        >
          {content.question.question}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '32px' }}>
          <div>
            <div style={{ fontSize: '14px', color: '#60a5fa', fontWeight: 600, marginBottom: '8px' }}>
              Essential
            </div>
            <div style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6 }}>
              {content.question.definitions.essential}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '14px', color: '#f87171', fontWeight: 600, marginBottom: '8px' }}>
              Artificial
            </div>
            <div style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6 }}>
              {content.question.definitions.artificial}
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: '18px',
            color: '#ffffff',
            lineHeight: 1.8,
            marginTop: '48px',
            fontWeight: 500,
          }}
        >
          {content.question.finalLine}
        </p>
      </Section>

      {/* ============================================
          SECTION 11: IMPLICATIONS
          ============================================ */}
      <Section id="implications" background="white">
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
            <ImplicationCard key={i} data={impl} />
          ))}
        </div>
      </Section>

      {/* ============================================
          SECTION 12: DISCLAIMERS & OPEN QUESTIONS
          ============================================ */}
      <Section id="disclaimers" background="gray">
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
              Open Questions We're Still Thinking About
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
      </Section>

      {/* ============================================
          SECTION 13: FOOTER
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
