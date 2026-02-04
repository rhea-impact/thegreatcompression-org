/**
 * Compression Page
 * Template for each historical compression story
 */

import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getStory, getAdjacentStories } from '../data/compressions';
import { TimelineChart, ChapterNav, ValueChainDiagram } from '../components/compression';
import {
  GrainOverlay,
  WordReveal,
  FadeBlur,
  StaggerContainer,
  StaggerItem,
  GlassCard,
  DarkGlassCard,
  ThemeToggle,
} from '../components/v2';
import { SmoothScrollProvider } from '../providers/SmoothScroll';
import { useTheme, useThemeColors } from '../providers/ThemeProvider';

export function CompressionPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const story = getStory(slug || '');
  const { prev, next } = getAdjacentStories(slug || '');
  const { isDark } = useTheme();
  const colors = useThemeColors();

  // Scroll to top on page load or slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);

  if (!story) {
    return (
      <div style={{ padding: '100px 24px', textAlign: 'center', background: colors.bg, color: colors.text }}>
        <h1>Story not found</h1>
        <Link to="/" style={{ color: colors.accent }}>Back to home</Link>
      </div>
    );
  }

  return (
    <SmoothScrollProvider>
      <div style={{ minHeight: '100vh', background: colors.bg }}>
        <GrainOverlay />

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Floating chapter navigation */}
        <ChapterNav storyColor={story.color} />

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            position: 'fixed',
            top: '24px',
            left: '24px',
            zIndex: 100,
          }}
        >
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: isDark ? 'rgba(17,17,24,0.9)' : 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              border: `1px solid ${colors.border}`,
              color: colors.text,
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            ← Back
          </Link>
        </motion.div>

        {/* HERO */}
        <motion.section
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '100px 24px',
            background: isDark
              ? `linear-gradient(180deg, ${story.color}15 0%, ${colors.bg} 100%)`
              : `linear-gradient(180deg, ${story.color}10 0%, ${colors.bg} 100%)`,
            position: 'relative',
            opacity: heroOpacity,
            scale: heroScale,
          }}
        >
          <div style={{ maxWidth: '900px', textAlign: 'center' }}>
            {/* Color badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: `${story.color}20`,
                borderRadius: '8px',
                color: story.color,
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '24px',
              }}
            >
              {story.peakYear} - {story.collapseYear}
            </motion.div>

            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(48px, 12vw, 100px)',
                fontWeight: 700,
                color: colors.text,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                marginBottom: '24px',
              }}
            >
              <WordReveal>{story.title}</WordReveal>
            </h1>

            {/* Tagline */}
            <FadeBlur delay={0.3}>
              <p
                style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  color: colors.textMuted,
                  lineHeight: 1.6,
                  marginBottom: '48px',
                }}
              >
                {story.tagline}
              </p>
            </FadeBlur>

            {/* Dramatic stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(40px, 8vw, 64px)',
                  fontWeight: 700,
                  color: colors.textLight,
                  fontFamily: "'JetBrains Mono', monospace",
                  textDecoration: 'line-through',
                  textDecorationColor: colors.danger,
                  textDecorationThickness: '4px',
                }}
              >
                {story.peakMetric.split(' ')[0]}
              </span>
              <span style={{ fontSize: '32px', color: colors.border }}>→</span>
              <span
                style={{
                  fontSize: 'clamp(48px, 10vw, 80px)',
                  fontWeight: 700,
                  color: colors.danger,
                  fontFamily: "'JetBrains Mono', monospace",
                  textShadow: `0 0 40px ${colors.danger}50`,
                }}
              >
                {story.collapseMetric}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                marginTop: '16px',
                fontSize: '14px',
                color: colors.textLight,
              }}
            >
              {story.peakMetric.split(' ').slice(1).join(' ')}
            </motion.div>
          </div>
        </motion.section>

        {/* CHAPTER 1: THE RISE */}
        <Section>
          <Label color={story.color}>Chapter 1</Label>
          <Headline>{story.rise.headline}</Headline>
          {story.rise.paragraphs.map((p, i) => (
            <FadeBlur key={i} delay={i * 0.1}>
              <Body>{p}</Body>
            </FadeBlur>
          ))}

          {/* Key dates */}
          <StaggerContainer
            style={{
              marginTop: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {story.rise.keyDates.map((date, i) => (
              <StaggerItem key={i}>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: story.color,
                      fontFamily: "'JetBrains Mono', monospace",
                      minWidth: '60px',
                    }}
                  >
                    {date.year}
                  </span>
                  <span style={{ fontSize: '16px', color: colors.textMuted }}>{date.event}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        {/* CHAPTER 2: THE PEAK */}
        <Section background="gray">
          <Label color={story.color}>Chapter 2</Label>
          <Headline>{story.peak.headline}</Headline>
          {story.peak.paragraphs.map((p, i) => (
            <FadeBlur key={i} delay={i * 0.1}>
              <Body>{p}</Body>
            </FadeBlur>
          ))}

          {/* Stats grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              marginTop: '40px',
            }}
          >
            {story.peak.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard style={{ padding: '24px', textAlign: 'center' }} hover3D={false}>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      color: story.color,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '14px', color: colors.textMuted, marginTop: '8px' }}>
                    {stat.label}
                  </div>
                  {stat.sublabel && (
                    <div style={{ fontSize: '12px', color: colors.textLight, marginTop: '4px' }}>
                      {stat.sublabel}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          {story.peak.quote && (
            <FadeBlur delay={0.3}>
              <blockquote
                style={{
                  marginTop: '48px',
                  padding: '32px',
                  background: isDark ? colors.bg : '#0f172a',
                  borderRadius: '16px',
                  borderLeft: `4px solid ${story.color}`,
                  border: isDark ? `1px solid ${colors.border}` : undefined,
                }}
              >
                <p
                  style={{
                    fontSize: '20px',
                    fontStyle: 'italic',
                    color: isDark ? colors.text : '#ffffff',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  "{story.peak.quote.text}"
                </p>
                <cite
                  style={{
                    display: 'block',
                    marginTop: '16px',
                    fontSize: '14px',
                    color: colors.textLight,
                    fontStyle: 'normal',
                  }}
                >
                  — {story.peak.quote.author}
                  {story.peak.quote.year && `, ${story.peak.quote.year}`}
                </cite>
              </blockquote>
            </FadeBlur>
          )}
        </Section>

        {/* CHAPTER 3: THE DISRUPTION */}
        <Section>
          <Label color="#ef4444">Chapter 3</Label>
          <Headline>{story.disruption.headline}</Headline>
          {story.disruption.paragraphs.map((p, i) => (
            <FadeBlur key={i} delay={i * 0.1}>
              <Body>{p}</Body>
            </FadeBlur>
          ))}

          {/* Disrupting technology callout */}
          <FadeBlur delay={0.3}>
            <div
              style={{
                marginTop: '40px',
                padding: '32px',
                background: isDark ? `${colors.danger}15` : '#fef2f2',
                borderRadius: '16px',
                border: `1px solid ${isDark ? `${colors.danger}40` : '#fecaca'}`,
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '14px', color: isDark ? colors.danger : '#991b1b', marginBottom: '8px' }}>
                The Disruptor
              </div>
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: colors.danger,
                }}
              >
                {story.disruption.technology}
              </div>
            </div>
          </FadeBlur>

          {/* Key dates */}
          <StaggerContainer
            style={{
              marginTop: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {story.disruption.keyDates.map((date, i) => (
              <StaggerItem key={i}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
                  <span
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: colors.danger,
                      fontFamily: "'JetBrains Mono', monospace",
                      minWidth: '60px',
                    }}
                  >
                    {date.year}
                  </span>
                  <span style={{ fontSize: '16px', color: colors.textMuted }}>{date.event}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        {/* CHAPTER 4: THE COLLAPSE */}
        <Section background="dark">
          <Label color="#f87171">Chapter 4</Label>
          <Headline light>{story.collapse.headline}</Headline>
          {story.collapse.paragraphs.map((p, i) => (
            <FadeBlur key={i} delay={i * 0.1}>
              <Body light>{p}</Body>
            </FadeBlur>
          ))}

          {/* Chart */}
          <TimelineChart
            data={story.collapse.chartData}
            color={story.color}
            title="The Decline"
          />

          {/* Dramatic stat */}
          {story.collapse.dramaticStat && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                textAlign: 'center',
                padding: '60px 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '32px',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(48px, 10vw, 72px)',
                    fontWeight: 700,
                    color: '#64748b',
                    fontFamily: "'JetBrains Mono', monospace",
                    textDecoration: 'line-through',
                    textDecorationColor: '#ef4444',
                  }}
                >
                  {story.collapse.dramaticStat.before}
                </span>
                <span style={{ fontSize: '40px', color: '#475569' }}>→</span>
                <span
                  style={{
                    fontSize: 'clamp(64px, 12vw, 96px)',
                    fontWeight: 700,
                    color: '#ef4444',
                    fontFamily: "'JetBrains Mono', monospace",
                    textShadow: '0 0 60px rgba(239, 68, 68, 0.5)',
                  }}
                >
                  {story.collapse.dramaticStat.after}
                </span>
              </div>
              <div style={{ marginTop: '16px', color: '#94a3b8', fontSize: '18px' }}>
                {story.collapse.dramaticStat.label}
              </div>
            </motion.div>
          )}
        </Section>

        {/* CHAPTER 5: THE AFTERMATH */}
        <Section>
          <Label color={story.color}>Chapter 5</Label>
          <Headline>{story.aftermath.headline}</Headline>
          {story.aftermath.paragraphs.map((p, i) => (
            <FadeBlur key={i} delay={i * 0.1}>
              <Body>{p}</Body>
            </FadeBlur>
          ))}

          {/* Replaced by */}
          <FadeBlur delay={0.2}>
            <div
              style={{
                marginTop: '40px',
                padding: '24px',
                background: colors.bgAlt,
                borderRadius: '12px',
                border: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '8px' }}>
                Replaced by
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600, color: colors.text }}>
                {story.aftermath.replacedBy}
              </div>
            </div>
          </FadeBlur>

          {/* Lessons */}
          <div style={{ marginTop: '48px' }}>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: colors.textMuted,
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Lessons
            </div>
            <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {story.aftermath.lessons.map((lesson, i) => (
                <StaggerItem key={i}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ color: story.color, fontWeight: 700 }}>→</span>
                    <span style={{ fontSize: '16px', color: colors.textMuted, lineHeight: 1.6 }}>
                      {lesson}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Value Chain Diagram */}
          {story.valueChain && (
            <ValueChainDiagram
              valueChain={story.valueChain}
              storyColor={story.color}
            />
          )}
        </Section>

        {/* NAVIGATION */}
        <section
          style={{
            padding: '80px 24px',
            background: colors.bgAlt,
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            {prev ? (
              <Link
                to={`/compressions/${prev.slug}`}
                style={{ textDecoration: 'none', flex: 1, minWidth: '200px' }}
              >
                <motion.div
                  whileHover={{ x: -4 }}
                  style={{
                    padding: '24px',
                    background: colors.cardBg,
                    borderRadius: '12px',
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <div style={{ fontSize: '12px', color: colors.textLight, marginBottom: '8px' }}>
                    ← Previous
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: colors.text }}>
                    {prev.title}
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div style={{ flex: 1 }} />
            )}

            {next ? (
              <Link
                to={`/compressions/${next.slug}`}
                style={{ textDecoration: 'none', flex: 1, minWidth: '200px' }}
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    padding: '24px',
                    background: colors.cardBg,
                    borderRadius: '12px',
                    border: `1px solid ${colors.border}`,
                    textAlign: 'right',
                  }}
                >
                  <div style={{ fontSize: '12px', color: colors.textLight, marginBottom: '8px' }}>
                    Next →
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: colors.text }}>
                    {next.title}
                  </div>
                </motion.div>
              </Link>
            ) : (
              <Link to="/" style={{ textDecoration: 'none', flex: 1, minWidth: '200px' }}>
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    padding: '24px',
                    background: isDark ? colors.accent : '#0f172a',
                    borderRadius: '12px',
                    textAlign: 'right',
                  }}
                >
                  <div style={{ fontSize: '12px', color: isDark ? 'rgba(255,255,255,0.7)' : '#94a3b8', marginBottom: '8px' }}>
                    Explore more →
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff' }}>
                    All Compressions
                  </div>
                </motion.div>
              </Link>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            padding: '48px 24px',
            background: colors.bg,
            borderTop: `1px solid ${colors.border}`,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '14px', color: colors.textMuted }}>
            A Rhea Impact project •{' '}
            <a href="https://rheaimpact.com" style={{ color: colors.accent, textDecoration: 'none' }}>
              rheaimpact.com
            </a>
          </div>
        </footer>
      </div>
    </SmoothScrollProvider>
  );
}

// Helper components
function Section({
  children,
  background = 'white',
}: {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'dark';
}) {
  const { isDark } = useTheme();
  const colors = useThemeColors();

  const getBgColor = () => {
    if (background === 'dark') {
      return 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
    }
    if (background === 'gray') {
      return colors.bgAlt;
    }
    return colors.bg;
  };

  return (
    <section
      style={{
        padding: '120px 24px',
        background: getBgColor(),
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function Label({ children, color = '#92400e' }: { children: React.ReactNode; color?: string }) {
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

function Headline({ children, light = false }: { children: string; light?: boolean }) {
  const colors = useThemeColors();
  return (
    <h2
      style={{
        fontSize: 'clamp(32px, 6vw, 48px)',
        fontWeight: 700,
        color: light ? '#ffffff' : colors.text,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        marginBottom: '24px',
      }}
    >
      <WordReveal>{children}</WordReveal>
    </h2>
  );
}

function Body({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  const colors = useThemeColors();
  return (
    <p
      style={{
        fontSize: '18px',
        color: light ? '#94a3b8' : colors.textMuted,
        lineHeight: 1.8,
        marginBottom: '24px',
      }}
    >
      {children}
    </p>
  );
}

export default CompressionPage;
