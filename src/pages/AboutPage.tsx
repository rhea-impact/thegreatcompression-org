/**
 * About Page
 * Methodology, credits, and project information
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GrainOverlay,
  WordReveal,
  FadeBlur,
  StaggerContainer,
  StaggerItem,
  ThemeToggle,
} from '../components/v2';
import { SmoothScrollProvider } from '../providers/SmoothScroll';
import { useTheme, useThemeColors } from '../providers/ThemeProvider';
import { compressionStories } from '../data/compressions';

export function AboutPage() {
  const { isDark } = useTheme();
  const colors = useThemeColors();

  const totalJobsBefore = compressionStories.reduce((acc, s) => {
    return acc + (s.valueChain?.compressionMetrics.jobsBefore || 0);
  }, 0);

  const totalJobsAfter = compressionStories.reduce((acc, s) => {
    return acc + (s.valueChain?.compressionMetrics.jobsAfter || 0);
  }, 0);

  return (
    <SmoothScrollProvider>
      <div style={{ minHeight: '100vh', background: colors.bg }}>
        <GrainOverlay />
        <ThemeToggle />

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

        {/* Hero */}
        <section
          style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '120px 24px',
            background: isDark
              ? 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(217, 119, 6, 0.1), transparent)'
              : 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(146, 64, 14, 0.1), transparent)',
          }}
        >
          <div style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h1
              style={{
                fontSize: 'clamp(40px, 10vw, 72px)',
                fontWeight: 700,
                color: colors.text,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                marginBottom: '24px',
              }}
            >
              <WordReveal>About This Project</WordReveal>
            </h1>
            <FadeBlur delay={0.3}>
              <p
                style={{
                  fontSize: '20px',
                  color: colors.textMuted,
                  lineHeight: 1.7,
                }}
              >
                The Great Compression documents how technology collapses value chains—
                and what it means for the AI era.
              </p>
            </FadeBlur>
          </div>
        </section>

        {/* Methodology */}
        <Section>
          <Label>Methodology</Label>
          <Headline>How We Researched This</Headline>
          <FadeBlur>
            <Body>
              Each compression story follows a consistent research methodology:
            </Body>
          </FadeBlur>

          <StaggerContainer
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginTop: '32px',
            }}
          >
            {[
              {
                title: '1. Peak Identification',
                description: 'We identify the historical peak of each industry using employment data, revenue figures, and market share statistics from government and industry sources.',
              },
              {
                title: '2. Value Chain Mapping',
                description: 'We map the complete value chain—every intermediary between producer and consumer—and identify which layers were compressed.',
              },
              {
                title: '3. Disruption Analysis',
                description: 'We trace the specific technology that caused the compression and document the timeline of its adoption and impact.',
              },
              {
                title: '4. Aftermath Documentation',
                description: 'We examine what replaced the compressed industry: who survived, what emerged, and what lessons apply to future compressions.',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div
                  style={{
                    padding: '24px',
                    background: colors.cardBg,
                    borderRadius: '16px',
                    border: `1px solid ${colors.border}`,
                    height: '100%',
                  }}
                >
                  <div style={{ fontSize: '16px', fontWeight: 600, color: colors.accent, marginBottom: '12px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '14px', color: colors.textMuted, lineHeight: 1.6 }}>
                    {item.description}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        {/* The Numbers */}
        <Section background="alt">
          <Label>By The Numbers</Label>
          <Headline>Documented Compressions</Headline>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '24px',
              marginTop: '40px',
            }}
          >
            {[
              { value: compressionStories.length.toString(), label: 'Stories Documented' },
              { value: totalJobsBefore.toLocaleString(), label: 'Jobs Before (Combined)' },
              { value: totalJobsAfter.toLocaleString(), label: 'Jobs After (Combined)' },
              { value: `${Math.round((1 - totalJobsAfter / totalJobsBefore) * 100)}%`, label: 'Average Compression' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div
                  style={{
                    fontSize: 'clamp(32px, 6vw, 48px)',
                    fontWeight: 700,
                    color: colors.accent,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', color: colors.textMuted, marginTop: '8px' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* All Stories */}
        <Section>
          <Label>Complete Archive</Label>
          <Headline>{`All ${compressionStories.length} Compression Stories`}</Headline>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            {compressionStories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/compressions/${story.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      padding: '20px',
                      background: colors.cardBg,
                      borderRadius: '12px',
                      border: `1px solid ${colors.border}`,
                      borderLeft: `4px solid ${story.color}`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 600, color: colors.text }}>
                        {story.title}
                      </div>
                      <div style={{ fontSize: '13px', color: colors.textMuted, marginTop: '4px' }}>
                        {story.peakYear} - {story.collapseYear}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: colors.danger,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {story.compressionPercent}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Value Chain Patterns */}
        <Section background="alt">
          <Label>Key Insight</Label>
          <Headline>The Universal Pattern</Headline>
          <FadeBlur>
            <Body>
              Every compression follows the same structure:
            </Body>
          </FadeBlur>

          <div
            style={{
              marginTop: '32px',
              padding: '32px',
              background: isDark ? 'rgba(0,0,0,0.3)' : '#ffffff',
              borderRadius: '16px',
              border: `1px solid ${colors.border}`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '24px',
              }}
            >
              <Box label="BEFORE" color={colors.accent}>
                Producer → Info → Access → Skill → Physical → Consumer
              </Box>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <div style={{ fontSize: '32px', color: colors.danger }}>↓</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <Box label="AFTER" color={colors.danger}>
                Producer → Platform → Consumer
              </Box>
            </div>
          </div>

          <FadeBlur delay={0.2}>
            <Body>
              Information, access, skill, and physical distribution layers get compressed into a single digital platform.
              The jobs at each layer disappear—not slowly, but in a collapse.
            </Body>
          </FadeBlur>
        </Section>

        {/* Credits */}
        <Section>
          <Label>Credits</Label>
          <Headline>A Rhea Impact Project</Headline>
          <FadeBlur>
            <Body>
              The Great Compression is a project of{' '}
              <a href="https://rheaimpact.com" style={{ color: colors.accent, textDecoration: 'none' }}>
                Rhea Impact
              </a>
              , a 501(c)(3) nonprofit based in Fort Worth, Texas.
            </Body>
          </FadeBlur>
          <FadeBlur delay={0.1}>
            <Body>
              Rhea Impact develops free, open-source AI tools and places humanoid robots with people
              who have barriers to independence—seniors, single parents, and those with mobility limitations.
            </Body>
          </FadeBlur>

          <div style={{ marginTop: '40px' }}>
            <a
              href="https://rheaimpact.com"
              style={{
                display: 'inline-block',
                padding: '16px 32px',
                background: colors.accent,
                color: '#ffffff',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              Visit Rhea Impact →
            </a>
          </div>
        </Section>

        {/* Footer */}
        <footer
          style={{
            padding: '48px 24px',
            background: colors.bgAlt,
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
  background = 'default',
}: {
  children: React.ReactNode;
  background?: 'default' | 'alt';
}) {
  const colors = useThemeColors();
  const bg = background === 'alt' ? colors.bgAlt : colors.bg;

  return (
    <section style={{ padding: '100px 24px', background: bg }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  const colors = useThemeColors();
  return (
    <FadeBlur>
      <div
        style={{
          fontSize: '12px',
          fontFamily: "'JetBrains Mono', monospace",
          color: colors.accent,
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

function Headline({ children }: { children: string }) {
  const colors = useThemeColors();
  return (
    <h2
      style={{
        fontSize: 'clamp(28px, 5vw, 40px)',
        fontWeight: 700,
        color: colors.text,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        marginBottom: '24px',
      }}
    >
      <WordReveal>{children}</WordReveal>
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  const colors = useThemeColors();
  return (
    <p style={{ fontSize: '17px', color: colors.textMuted, lineHeight: 1.8, marginBottom: '20px' }}>
      {children}
    </p>
  );
}

function Box({ children, label, color }: { children: React.ReactNode; label: string; color: string }) {
  const colors = useThemeColors();
  const { isDark } = useTheme();

  return (
    <div
      style={{
        padding: '20px 24px',
        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
        borderRadius: '12px',
        border: `2px solid ${color}`,
      }}
    >
      <div style={{ fontSize: '11px', color, fontWeight: 700, marginBottom: '8px', letterSpacing: '0.1em' }}>
        {label}
      </div>
      <div style={{ fontSize: '14px', color: colors.text, fontFamily: "'JetBrains Mono', monospace" }}>
        {children}
      </div>
    </div>
  );
}

export default AboutPage;
