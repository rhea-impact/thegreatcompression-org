/**
 * The Great Compression — V2 App
 * The "alive" version with kinetic typography, scroll animations, and depth
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { siteContent } from './content';
import { Nav } from './components';
import {
  GrainOverlay,
  HeroV2,
  FadeBlur,
  WordReveal,
  StaggerContainer,
  StaggerItem,
  SlideIn,
  GlassCard,
  DarkGlassCard,
  Parallax,
  ScaleOnScroll,
} from './components/v2';
import { SmoothScrollProvider } from './providers/SmoothScroll';
import { useState, useEffect } from 'react';

// Section wrapper with scroll-linked background
function Section({
  children,
  background = 'white',
  id,
  paddingTop = 120,
  paddingBottom = 120,
}: {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'dark';
  id?: string;
  paddingTop?: number;
  paddingBottom?: number;
}) {
  const bgColors = {
    white: '#ffffff',
    gray: '#f8fafc',
    dark: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  };

  return (
    <section
      id={id}
      style={{
        padding: `${paddingTop}px 24px ${paddingBottom}px`,
        background: bgColors[background],
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

// Label component
function Label({ children, color = '#3b82f6' }: { children: React.ReactNode; color?: string }) {
  return (
    <FadeBlur>
      <div
        style={{
          fontSize: '12px',
          fontFamily: "'JetBrains Mono', monospace",
          color,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 600,
          marginBottom: '16px',
        }}
      >
        {children}
      </div>
    </FadeBlur>
  );
}

// Headline with kinetic reveal
function Headline({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <h2
      style={{
        fontSize: 'clamp(32px, 6vw, 52px)',
        fontWeight: 700,
        color: light ? '#ffffff' : '#0f172a',
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        marginBottom: '24px',
      }}
    >
      <WordReveal>{children}</WordReveal>
    </h2>
  );
}

// Body text with fade
function Body({
  children,
  light = false,
  style = {},
}: {
  children: React.ReactNode;
  light?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <FadeBlur>
      <p
        style={{
          fontSize: '18px',
          color: light ? '#94a3b8' : '#475569',
          lineHeight: 1.8,
          marginBottom: '24px',
          ...style,
        }}
      >
        {children}
      </p>
    </FadeBlur>
  );
}

export default function AppV2() {
  const [scrollY, setScrollY] = useState(0);
  const content = siteContent;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SmoothScrollProvider>
      <div style={{ minHeight: '100vh', background: '#ffffff' }}>
        <GrainOverlay />
        <Nav visible={scrollY > 100} />

        {/* HERO */}
        <HeroV2 />

        {/* CHAPTER 1: HISTORY */}
        <Section id="history" background="gray">
          <Label>Chapter 1</Label>
          <Headline>This Has Happened Before</Headline>
          <Body>{content.history.intro}</Body>

          {/* Featured history card with parallax */}
          <Parallax speed={0.2}>
            <DarkGlassCard
              style={{ padding: '48px 40px', marginBottom: '32px' }}
              glowColor="rgba(245, 158, 11, 0.3)"
            >
              <div
                style={{
                  fontSize: '12px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#f59e0b',
                  marginBottom: '16px',
                }}
              >
                1900s-2006
              </div>
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '32px',
                }}
              >
                Telegraph
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
                    BEFORE
                  </div>
                  <div
                    style={{
                      fontSize: '48px',
                      fontWeight: 700,
                      color: '#94a3b8',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    200,000
                  </div>
                </div>
                <div style={{ fontSize: '40px', color: '#475569' }}>→</div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
                    AFTER
                  </div>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                    style={{
                      fontSize: '64px',
                      fontWeight: 700,
                      color: '#ef4444',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    0
                  </motion.div>
                </div>
              </div>
            </DarkGlassCard>
          </Parallax>

          {/* History cards grid */}
          <StaggerContainer
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {content.history.examples
              .filter((ex) => !ex.featured)
              .slice(0, 4)
              .map((ex) => (
                <StaggerItem key={ex.id}>
                  <GlassCard style={{ padding: '24px' }} glowColor={`${ex.color}40`}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '16px',
                      }}
                    >
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: ex.color,
                          boxShadow: `0 0 20px ${ex.color}`,
                        }}
                      />
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>{ex.industry}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#64748b', fontSize: '14px' }}>{ex.before}</span>
                      <span style={{ color: '#ef4444' }}>→</span>
                      <span style={{ color: '#ef4444', fontWeight: 600, fontSize: '14px' }}>
                        {ex.after}
                      </span>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
          </StaggerContainer>
        </Section>

        {/* CHAPTER 4: THE COLLAPSE - Dramatic moment */}
        <Section id="collapse" background="white" paddingTop={160}>
          <Label color="#ef4444">Chapter 4</Label>
          <Headline>Then the complexity vanishes</Headline>
          <Body>
            When a model on your laptop can ingest your W-2s, 1099s, brokerage statements, and
            mortgage docs — cross-reference them against current tax code — and produce a nearly
            complete return in minutes...
          </Body>

          {/* THE DRAMATIC NUMBER */}
          <ScaleOnScroll>
            <div style={{ textAlign: 'center', padding: '60px 0', margin: '40px 0' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '32px',
                  flexWrap: 'wrap',
                }}
              >
                <motion.span
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    fontSize: 'clamp(48px, 10vw, 72px)',
                    fontWeight: 700,
                    color: '#94a3b8',
                    fontFamily: "'JetBrains Mono', monospace",
                    textDecoration: 'line-through',
                    textDecorationColor: '#ef4444',
                    textDecorationThickness: '4px',
                  }}
                >
                  $2,000
                </motion.span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  style={{ fontSize: '40px', color: '#cbd5e1' }}
                >
                  →
                </motion.span>
                <motion.span
                  initial={{ x: 50, opacity: 0, scale: 0.5 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
                  style={{
                    fontSize: 'clamp(64px, 12vw, 96px)',
                    fontWeight: 700,
                    color: '#ef4444',
                    fontFamily: "'JetBrains Mono', monospace",
                    textShadow: '0 0 60px rgba(239, 68, 68, 0.4)',
                  }}
                >
                  $200
                </motion.span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                style={{
                  marginTop: '24px',
                  fontSize: '18px',
                  color: '#64748b',
                }}
              >
                90% of the value — gone
              </motion.div>
            </div>
          </ScaleOnScroll>

          <FadeBlur delay={0.2}>
            <p
              style={{
                fontWeight: 600,
                color: '#0f172a',
                fontSize: '22px',
                textAlign: 'center',
                marginTop: '32px',
              }}
            >
              The chain doesn't get disrupted. It becomes <em>irrelevant</em>.
            </p>
          </FadeBlur>
        </Section>

        {/* BREAKER */}
        <section
          style={{
            padding: '100px 24px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontSize: 'clamp(28px, 5vw, 40px)',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              The pattern is clear.
              <br />
              <span style={{ color: '#94a3b8' }}>The only question is: </span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{ color: '#f87171' }}
              >
                when?
              </motion.span>
            </motion.p>
          </div>
        </section>

        {/* CHAPTER 10: THE QUESTION */}
        <section
          id="question"
          style={{
            padding: '160px 24px',
            background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated background glow */}
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '800px',
              height: '800px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <Label color="#60a5fa">Chapter 10</Label>

            <h2
              style={{
                fontSize: 'clamp(36px, 7vw, 64px)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '32px',
              }}
            >
              <WordReveal>{content.question.headline}</WordReveal>
            </h2>

            <FadeBlur delay={0.3}>
              <p style={{ fontSize: '24px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '64px' }}>
                {content.question.question}
              </p>
            </FadeBlur>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
              }}
            >
              <SlideIn direction="left">
                <GlassCard
                  style={{ padding: '32px', background: 'rgba(59, 130, 246, 0.1)' }}
                  glowColor="rgba(59, 130, 246, 0.3)"
                  hover3D={false}
                >
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
                  <div style={{ fontSize: '16px', color: '#e2e8f0', lineHeight: 1.7 }}>
                    {content.question.definitions.essential}
                  </div>
                </GlassCard>
              </SlideIn>

              <SlideIn direction="right">
                <GlassCard
                  style={{ padding: '32px', background: 'rgba(239, 68, 68, 0.1)' }}
                  glowColor="rgba(239, 68, 68, 0.3)"
                  hover3D={false}
                >
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
                  <div style={{ fontSize: '16px', color: '#e2e8f0', lineHeight: 1.7 }}>
                    {content.question.definitions.artificial}
                  </div>
                </GlassCard>
              </SlideIn>
            </div>

            <FadeBlur delay={0.5}>
              <p
                style={{
                  fontSize: '22px',
                  color: '#ffffff',
                  lineHeight: 1.7,
                  marginTop: '80px',
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {content.question.finalLine}
              </p>
            </FadeBlur>
          </div>
        </section>

        {/* FOOTER */}
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
      </div>
    </SmoothScrollProvider>
  );
}
