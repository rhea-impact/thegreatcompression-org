/**
 * Homepage
 * Integrated thesis + compression evidence grid
 * With dark mode support
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { compressionCards } from '../data/compressions';
import { StoryCard } from '../components/compression';
import {
  GrainOverlay,
  FadeBlur,
  WordReveal,
  LetterReveal,
  StaggerContainer,
  StaggerItem,
  GlassCard,
  SlideIn,
  ThemeToggle,
} from '../components/v2';
import { FlipBookNav } from '../components/FlipBookNav';
import { SmoothScrollProvider } from '../providers/SmoothScroll';
import { useTheme, useThemeColors } from '../providers/ThemeProvider';
import {
  Plane,
  PieChart,
  Globe,
  Smartphone,
  HelpCircle,
  DollarSign,
  Zap,
  MousePointer,
  UserX,
  Users,
  Scissors,
  History,
  Radio,
  Tv,
  Camera,
  Repeat,
  Bot,
  Sparkles,
  Layers,
  TrendingUp,
  BookOpen,
  Rocket,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';

// Define flip book pages for navigation
const flipBookPages = [
  { id: 'hook', label: 'Travel agents' },
  { id: 'stat-old', label: '80% booked by agents' },
  { id: 'shift', label: 'The internet' },
  { id: 'stat-new', label: '5% today' },
  { id: 'question', label: 'What happened?' },
  { id: 'commissions', label: 'Commissions cut' },
  { id: 'faster', label: 'Faster & cheaper' },
  { id: 'no-middleman', label: 'No middleman needed' },
  { id: 'jobs', label: '124,000 jobs' },
  { id: 'collapsed', label: 'Layers collapsed' },
  { id: 'before', label: 'Happened before' },
  { id: 'telegraph', label: 'Telegraph' },
  { id: 'streaming', label: 'Streaming' },
  { id: 'kodak', label: 'Kodak' },
  { id: 'pattern', label: 'The pattern' },
  { id: 'value-chain', label: 'Value chain' },
  { id: 'chain-visual', label: 'The steps' },
  { id: 'shorter', label: 'Gets shorter' },
  { id: 'compressed', label: 'Fewer jobs' },
  { id: 'compression-def', label: 'Compression' },
  { id: 'ai', label: 'AI is compressing' },
  { id: 'we-call-it', label: 'We call it...' },
  { id: 'title', label: 'The Great Compression' },
  { id: 'accelerating', label: '2026' },
  { id: 'documented', label: 'Documented' },
  { id: 'imagine', label: 'Imagine' },
];

export function HomePage() {
  const { isDark } = useTheme();
  const colors = useThemeColors();

  return (
    <SmoothScrollProvider>
      <div
        style={{
          minHeight: '100vh',
          background: colors.bg,
          scrollSnapType: 'y proximity', // Snap but not too aggressive
        }}
      >
        <GrainOverlay />
        <ThemeToggle />
        <FlipBookNav pages={flipBookPages} activeColor={colors.accent} />

        {/* HERO */}
        <HeroSection />

        {/* THE SETUP - Documentary intro */}
        <section
          style={{
            padding: '120px 24px',
            background: colors.bg,
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            {/* Dramatic numbers */}
            <FadeBlur>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '48px',
                  flexWrap: 'wrap',
                  marginBottom: '64px',
                }}
              >
                {[
                  { number: '200,000', label: 'telegraph operators', suffix: 'gone' },
                  { number: '124,000', label: 'travel agents', suffix: 'gone' },
                  { number: '85,000', label: 'video store workers', suffix: 'gone' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    style={{ textAlign: 'center' }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(32px, 6vw, 48px)',
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', monospace",
                        color: colors.textLight,
                        textDecoration: 'line-through',
                        textDecorationColor: colors.danger,
                        textDecorationThickness: '3px',
                      }}
                    >
                      {stat.number}
                    </div>
                    <div style={{ fontSize: '14px', color: colors.textMuted, marginTop: '8px' }}>
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: colors.danger,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginTop: '4px',
                      }}
                    >
                      {stat.suffix}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeBlur>

            {/* The hook */}
            <FadeBlur delay={0.4}>
              <p
                style={{
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  color: colors.text,
                  lineHeight: 1.6,
                  fontWeight: 500,
                  marginBottom: '24px',
                }}
              >
                Each time, the same pattern.
              </p>
            </FadeBlur>

            <FadeBlur delay={0.5}>
              <p
                style={{
                  fontSize: '18px',
                  color: colors.textMuted,
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                A technology emerges that makes something hard suddenly easy.
                The middlemen who made a living from that hard thing?
                They vanish — not slowly, but in a collapse.
              </p>
            </FadeBlur>

            <FadeBlur delay={0.6}>
              <p
                style={{
                  fontSize: '18px',
                  color: colors.textMuted,
                  lineHeight: 1.7,
                }}
              >
                We call it <strong style={{ color: colors.accent }}>compression</strong>.
                And we've documented every major one in modern history.
              </p>
            </FadeBlur>
          </div>
        </section>

        {/* THE STORIES - The evidence */}
        <Section background="alt">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
                The Stories
              </div>
            </FadeBlur>
            <h2
              style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontWeight: 700,
                color: colors.text,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              <WordReveal>See the pattern for yourself</WordReveal>
            </h2>
            <FadeBlur delay={0.2}>
              <p style={{ fontSize: '18px', color: colors.textMuted, maxWidth: '600px', margin: '0 auto' }}>
                Click any story below. Watch an industry rise, peak, and collapse.
                Then ask yourself: does my work look like this?
              </p>
            </FadeBlur>
          </div>

          {/* Compression grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginTop: '48px',
            }}
          >
            {compressionCards.map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>

          {/* Coming soon placeholder for other stories */}
          {compressionCards.length < 8 && (
            <FadeBlur delay={0.5}>
              <div
                style={{
                  marginTop: '32px',
                  padding: '24px',
                  background: colors.cardBg,
                  borderRadius: '16px',
                  border: `2px dashed ${colors.border}`,
                  textAlign: 'center',
                  color: colors.textMuted,
                }}
              >
                More stories coming: Kodak, Newspapers, Travel Agents, Stock Brokers, Encyclopedias,
                Record Stores, Blockbuster
              </div>
            </FadeBlur>
          )}
        </Section>

        {/* WHY THIS TIME IS DIFFERENT */}
        <section
          style={{
            padding: '120px 24px',
            background: isDark
              ? 'linear-gradient(180deg, #0c0a09 0%, #1c1917 50%, #0c0a09 100%)'
              : 'linear-gradient(180deg, #ffffff 0%, #faf8f5 50%, #ffffff 100%)',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FadeBlur>
              <div
                style={{
                  fontSize: '12px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: colors.danger,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                Why This Time Is Different
              </div>
            </FadeBlur>

            <h2
              style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontWeight: 700,
                color: colors.text,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '32px',
              }}
            >
              <WordReveal>AI is all of these at once</WordReveal>
            </h2>

            <FadeBlur delay={0.2}>
              <p style={{ fontSize: '18px', color: colors.textMuted, lineHeight: 1.8, marginBottom: '24px' }}>
                Every compression before this hit one industry at a time. Telegraph operators had
                decades to see it coming. Travel agents had years. Each collapse was isolated,
                contained, manageable.
              </p>
            </FadeBlur>

            <FadeBlur delay={0.3}>
              <p style={{ fontSize: '18px', color: colors.textMuted, lineHeight: 1.8, marginBottom: '24px' }}>
                AI is different. It can compress many industries at once. Middlemen whose
                job is "knowing things" or "processing information" are facing similar pressures
                across sectors. Lawyers, accountants, analysts, agents, brokers, consultants —
                many asking the same questions.
              </p>
            </FadeBlur>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                marginTop: '48px',
                padding: '32px',
                background: isDark ? 'rgba(220, 38, 38, 0.1)' : 'rgba(220, 38, 38, 0.05)',
                borderRadius: '16px',
                borderLeft: `4px solid ${colors.danger}`,
              }}
            >
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  color: colors.text,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                This may be the broadest compression yet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* THE SIGMOID - Brief */}
        <Section>
          <Label color="#8b5cf6">The Shape</Label>
          <Headline>Compression isn't binary</Headline>
          <FadeBlur>
            <Body>
              Jobs don't simply "disappear" or "stay." They follow a curve: a luxury tier survives
              at the top (human service as status), a budget tier emerges at the bottom (self-serve
              at near-zero cost), and 80% of the middle collapses.
            </Body>
          </FadeBlur>

          {/* Simplified sigmoid visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              marginTop: '48px',
              padding: '32px',
              background: isDark ? '#1e293b' : '#f8fafc',
              borderRadius: '20px',
              border: `1px solid ${colors.border}`,
            }}
          >
            <div
              style={{
                display: 'flex',
                height: '80px',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '10%',
                  background: 'linear-gradient(135deg, #92400e 0%, #78350f 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                LUXURY
              </div>
              <div
                style={{
                  flex: 1,
                  background: isDark
                    ? 'repeating-linear-gradient(45deg, #1e293b, #1e293b 10px, #2d3748 10px, #2d3748 20px)'
                    : 'repeating-linear-gradient(45deg, #fef2f2, #fef2f2 10px, #fee2e2 10px, #fee2e2 20px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isDark ? '#f87171' : '#991b1b',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                80% COLLAPSED → AI
              </div>
              <div
                style={{
                  width: '10%',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                DIY
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '16px',
                fontSize: '13px',
                color: colors.textMuted,
              }}
            >
              <span>Human service = status</span>
              <span style={{ color: colors.danger, fontWeight: 500 }}>
                This is where 80% of jobs were
              </span>
              <span>Self-serve, near-zero cost</span>
            </div>
          </motion.div>
        </Section>

        {/* THE QUESTION */}
        <section
          style={{
            padding: '160px 24px',
            background: isDark
              ? 'linear-gradient(180deg, #000000 0%, #0a0a0f 100%)'
              : 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow */}
          <motion.div
            animate={{ opacity: [0.1, 0.2, 0.1] }}
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
            <Label color="#d97706">The Question</Label>

            <h2
              style={{
                fontSize: 'clamp(36px, 7vw, 56px)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '32px',
              }}
            >
              <WordReveal>What are you selling when the hard part becomes easy?</WordReveal>
            </h2>

            <FadeBlur delay={0.3}>
              <p style={{ fontSize: '20px', color: '#94a3b8', lineHeight: 1.7 }}>
                Is the hard part you handle{' '}
                <strong style={{ color: '#ffffff' }}>truly hard</strong> (requires human judgment,
                physical presence, or trust) or <strong style={{ color: '#f87171' }}>just complicated</strong> (information
                that technology can now handle)?
              </p>
            </FadeBlur>

            <FadeBlur delay={0.5}>
              <p
                style={{
                  fontSize: '22px',
                  color: '#ffffff',
                  lineHeight: 1.7,
                  marginTop: '48px',
                  fontWeight: 500,
                }}
              >
                If it's just complicated, the compression is coming. Laws may delay it. Money may
                slow it. But the pattern always wins.
              </p>
            </FadeBlur>
          </div>
        </section>

        {/* IMPLICATIONS - Brief */}
        <Section>
          <Label>What To Do</Label>
          <Headline>Navigate the compression</Headline>

          <StaggerContainer
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginTop: '40px',
            }}
          >
            <StaggerItem>
              <div
                style={{
                  padding: '28px',
                  background: colors.cardBg,
                  borderRadius: '16px',
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div
                  style={{ fontSize: '16px', fontWeight: 600, color: colors.text, marginBottom: '12px' }}
                >
                  For Workers
                </div>
                <div style={{ fontSize: '14px', color: colors.textMuted, lineHeight: 1.6 }}>
                  Move toward work that's truly hard to automate — relationships, judgment, trust,
                  being there in person. Or learn to use the new tools better than anyone.
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                style={{
                  padding: '28px',
                  background: colors.cardBg,
                  borderRadius: '16px',
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div
                  style={{ fontSize: '16px', fontWeight: 600, color: colors.text, marginBottom: '12px' }}
                >
                  For Investors
                </div>
                <div style={{ fontSize: '14px', color: colors.textMuted, lineHeight: 1.6 }}>
                  The pattern is obvious looking back, but hard to time. Regulations can delay
                  the collapse, but they can't stop it.
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                style={{
                  padding: '28px',
                  background: colors.cardBg,
                  borderRadius: '16px',
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div
                  style={{ fontSize: '16px', fontWeight: 600, color: colors.text, marginBottom: '12px' }}
                >
                  For Incumbents
                </div>
                <div style={{ fontSize: '14px', color: colors.textMuted, lineHeight: 1.6 }}>
                  Compress yourself or be compressed by others. Every year of delay is a year for
                  competitors to prepare.
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Section>

        {/* Footer */}
        <footer
          style={{
            padding: '48px 24px',
            background: isDark ? '#0a0a0f' : '#f8fafc',
            borderTop: `1px solid ${colors.border}`,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '12px' }}>
            <Link to="/about" style={{ color: colors.text, textDecoration: 'none', fontWeight: 500 }}>
              About This Project
            </Link>
            {' • '}
            <span style={{ color: colors.textLight }}>{compressionCards.length} stories documented</span>
          </div>
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

// Bouncing themed icon button component
function NextButton({ icon: Icon, isLast = false }: { icon?: LucideIcon; isLast?: boolean }) {
  const colors = useThemeColors();
  const { isDark } = useTheme();

  const scrollToNext = () => {
    // Calculate the next page boundary and scroll to it exactly
    const viewportHeight = window.innerHeight;
    const currentScroll = window.scrollY;
    const currentPage = Math.floor(currentScroll / viewportHeight);
    const nextPageTop = (currentPage + 1) * viewportHeight;

    window.scrollTo({ top: nextPageTop, behavior: 'smooth' });
  };

  if (isLast) return null;

  const IconComponent = Icon || ChevronDown;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '24px',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15, backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'transparent',
          border: `1px solid ${colors.border}`,
          cursor: 'pointer',
          padding: '14px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Larger touch target for mobile
          minWidth: '56px',
          minHeight: '56px',
        }}
        aria-label="Scroll to next"
      >
        <IconComponent
          size={24}
          color={colors.textMuted}
          strokeWidth={1.5}
        />
      </motion.button>
    </div>
  );
}

// Flip page wrapper with themed icon and animations
function FlipPage({
  children,
  background,
  icon,
  isLast = false,
}: {
  children: React.ReactNode;
  background: string;
  icon?: LucideIcon;
  isLast?: boolean;
}) {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '24px',
        paddingBottom: '100px',
        position: 'relative',
        background,
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] // Custom ease for smooth feel
        }}
      >
        {children}
      </motion.div>
      <NextButton icon={icon} isLast={isLast} />
    </div>
  );
}

// Hero as a series of full-viewport "pages" you scroll through
function HeroSection() {
  const { isDark } = useTheme();
  const colors = useThemeColors();

  const bg = isDark
    ? 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(217, 119, 6, 0.1), transparent), #0c0a09'
    : 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(146, 64, 14, 0.1), transparent), linear-gradient(180deg, #faf8f5 0%, #ffffff 100%)';

  return (
    <>
      {/* Page 1: Personal hook */}
      <FlipPage background={bg} icon={Plane}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 36px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '700px',
        }}>
          In 1996, <span style={{ color: colors.text, fontWeight: 600 }}>124,000 travel agents</span> helped millions of flyers to book flights.
        </p>
      </FlipPage>

      {/* Page 2: The old stat - 80% through agents */}
      <FlipPage background={bg} icon={PieChart}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '140px', height: '140px', flexShrink: 0 }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
              <circle cx="50" cy="50" r="45" fill="none" stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="10" />
              <motion.circle
                cx="50" cy="50" r="45"
                fill="none"
                stroke={colors.accent}
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ strokeDasharray: '0 283' }}
                whileInView={{ strokeDasharray: `${80 * 2.83} 283` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              />
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <p style={{ fontSize: '28px', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: colors.accent }}>80%</p>
            </div>
          </div>
          <p style={{
            fontSize: 'clamp(22px, 4vw, 32px)',
            color: colors.textMuted,
            lineHeight: 1.5,
            maxWidth: '400px',
            textAlign: 'left',
          }}>
            of flights were booked through travel agents.
          </p>
        </div>
      </FlipPage>

      {/* Page 3: The shift */}
      <FlipPage background={bg} icon={Globe}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <motion.img
            src="/images/aol1.png"
            alt="AOL logo"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            style={{
              width: '120px',
              height: 'auto',
            }}
          />
          <p style={{
            fontSize: 'clamp(22px, 4vw, 32px)',
            color: colors.textMuted,
            lineHeight: 1.5,
          }}>
            Then came the internet.
          </p>
        </div>
      </FlipPage>

      {/* Page 4: The new stat - only 5% through agents now */}
      <FlipPage background={bg} icon={PieChart}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '140px', height: '140px', flexShrink: 0 }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
              <circle cx="50" cy="50" r="45" fill="none" stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="10" />
              <motion.circle
                cx="50" cy="50" r="45"
                fill="none"
                stroke={colors.danger}
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ strokeDasharray: '0 283' }}
                whileInView={{ strokeDasharray: `${5 * 2.83} 283` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              />
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <p style={{ fontSize: '28px', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: colors.danger }}>5%</p>
            </div>
          </div>
          <p style={{
            fontSize: 'clamp(22px, 4vw, 32px)',
            color: colors.textMuted,
            lineHeight: 1.5,
            maxWidth: '400px',
            textAlign: 'left',
          }}>
            of flights are booked through travel agents today.
          </p>
        </div>
      </FlipPage>

      {/* Page 5: The question */}
      <FlipPage background={bg} icon={HelpCircle}>
        <p style={{
          fontSize: 'clamp(26px, 5vw, 40px)',
          color: colors.textMuted,
          lineHeight: 1.4,
        }}>
          What happened to the travel agents?
        </p>
      </FlipPage>

      {/* Page 6: Commissions */}
      <FlipPage background={bg} icon={DollarSign}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '650px',
        }}>
          Airlines could sell tickets <span style={{ color: colors.text, fontWeight: 500 }}>directly online</span>.<br />
          So they stopped paying agents.
        </p>
      </FlipPage>

      {/* Page 7: Travel sites - fanned card hand */}
      <FlipPage background={bg} icon={Zap}>
        <div>
          <p style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            color: colors.textMuted,
            marginBottom: '40px',
          }}>
            Travel websites popped up everywhere
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '16px',
            height: '140px',
          }}>
            {[
              { src: '/images/expedia.png', rotate: -15 },
              { src: '/images/kayak.png', rotate: -5 },
              { src: '/images/Orbitz-logo.png', rotate: 5 },
              { src: '/images/Travelocity-Logo.jpg', rotate: 15 },
            ].map((card, i) => (
              <motion.div
                key={card.src}
                initial={{ y: 150, opacity: 0, rotate: 0 }}
                whileInView={{ y: 0, opacity: 1, rotate: card.rotate }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 18,
                  delay: i * 0.08,
                }}
                style={{
                  background: '#fff',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                  transformOrigin: 'bottom center',
                }}
              >
                <img
                  src={card.src}
                  alt=""
                  style={{
                    width: '70px',
                    height: '45px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </motion.div>
            ))}
          </div>
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: colors.accent,
            marginTop: '48px',
            fontWeight: 500,
          }}>
            Faster. Cheaper. 24/7.
          </p>
        </div>
      </FlipPage>

      {/* Page 8: Direct access = no middleman */}
      <FlipPage background={bg} icon={UserX}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '650px',
        }}>
          Customers got direct access.<br />
          <span style={{ color: colors.text, fontWeight: 500 }}>The middleman was no longer needed.</span>
        </p>
      </FlipPage>

      {/* Page 10: The number */}
      <FlipPage background={bg} icon={Users}>
        <div>
          <p style={{
            fontSize: 'clamp(48px, 10vw, 80px)',
            color: colors.danger,
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            textDecoration: 'line-through',
            textDecorationThickness: '4px',
          }}>
            124,000
          </p>
          <p style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            color: colors.textMuted,
            marginTop: '16px',
          }}>
            travel agent jobs eliminated
          </p>
        </div>
      </FlipPage>

      {/* Page 11: What happened */}
      <FlipPage background={bg} icon={Scissors}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '700px',
        }}>
          The layers between airline and traveler<br />
          <span style={{ color: colors.danger, fontWeight: 500 }}>compressed</span>.
        </p>
      </FlipPage>

      {/* Page 12: It's happened before */}
      <FlipPage background={bg} icon={History}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '650px',
        }}>
          This has happened many times before.
        </p>
      </FlipPage>

      {/* Page 13: Telegraph */}
      <FlipPage background={bg} icon={Radio}>
        <div style={{ maxWidth: '600px' }}>
          <p style={{
            fontSize: '14px',
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '8px',
          }}>
            The telephone
          </p>
          <p style={{
            fontSize: '13px',
            color: colors.textLight,
            marginBottom: '16px',
          }}>
            1876 → 1920s
          </p>
          <p style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            color: colors.text,
            lineHeight: 1.4,
          }}>
            eliminated<br />
            <span style={{ color: colors.danger, textDecoration: 'line-through' }}>200,000 telegraph operators</span>
          </p>
        </div>
      </FlipPage>

      {/* Page 14: Streaming */}
      <FlipPage background={bg} icon={Tv}>
        <div style={{ maxWidth: '600px' }}>
          <p style={{
            fontSize: '14px',
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '8px',
          }}>
            Streaming
          </p>
          <p style={{
            fontSize: '13px',
            color: colors.textLight,
            marginBottom: '16px',
          }}>
            2007 → 2013
          </p>
          <p style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            color: colors.text,
            lineHeight: 1.4,
          }}>
            compressed<br />
            <span style={{ color: colors.danger, textDecoration: 'line-through' }}>9,000 Blockbuster stores</span>
          </p>
        </div>
      </FlipPage>

      {/* Page 15: Digital cameras / Kodak */}
      <FlipPage background={bg} icon={Camera}>
        <div style={{ maxWidth: '600px' }}>
          <p style={{
            fontSize: '14px',
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '8px',
          }}>
            Digital cameras
          </p>
          <p style={{
            fontSize: '13px',
            color: colors.textLight,
            marginBottom: '16px',
          }}>
            1990s → 2012
          </p>
          <p style={{
            fontSize: 'clamp(24px, 5vw, 36px)',
            color: colors.text,
            lineHeight: 1.4,
          }}>
            compressed<br />
            <span style={{ color: colors.danger, textDecoration: 'line-through' }}>145,000 Kodak employees</span>
          </p>
        </div>
      </FlipPage>

      {/* Page 16: The pattern */}
      <FlipPage background={bg} icon={Repeat}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '600px',
        }}>
          Same pattern.<br />
          Different technology.<br />
          <span style={{ color: colors.text, fontWeight: 500 }}>Every time.</span>
        </p>
      </FlipPage>

      {/* Value Chain Explanation */}
      <FlipPage background={bg} icon={Layers}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '650px',
        }}>
          Every product has a <span style={{ color: colors.text, fontWeight: 500 }}>value chain</span>—<br />
          the steps between maker and buyer.
        </p>
      </FlipPage>

      {/* Value Chain Visual */}
      <FlipPage background={bg} icon={Layers}>
        <div style={{ maxWidth: '700px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}>
            {['Producer', 'Distributor', 'Agent', 'Retailer', 'Consumer'].map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '12px 16px',
                  background: i === 0 || i === 4 ? colors.accent : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'),
                  borderRadius: '8px',
                  color: i === 0 || i === 4 ? '#ffffff' : colors.text,
                  fontSize: '14px',
                  fontWeight: 600,
                }}>
                  {step}
                </div>
                {i < 4 && <span style={{ color: colors.border }}>→</span>}
              </div>
            ))}
          </div>
          <p style={{
            fontSize: '16px',
            color: colors.textMuted,
            textAlign: 'center',
          }}>
            Each step in between is a job.
          </p>
        </div>
      </FlipPage>

      {/* Compression Definition */}
      <FlipPage background={bg} icon={Scissors}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '650px',
        }}>
          When technology removes steps,<br />
          the chain gets <span style={{ color: colors.danger, fontWeight: 500 }}>shorter</span>.
        </p>
      </FlipPage>

      {/* Compressed Chain Visual */}
      <FlipPage background={bg} icon={Zap}>
        <div style={{ maxWidth: '700px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}>
            {['Producer', 'Platform', 'Consumer'].map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '12px 16px',
                  background: step === 'Platform' ? colors.danger : colors.accent,
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                }}>
                  {step}
                </div>
                {i < 2 && <span style={{ color: colors.border }}>→</span>}
              </div>
            ))}
          </div>
          <p style={{
            fontSize: '16px',
            color: colors.textMuted,
            textAlign: 'center',
          }}>
            Fewer steps. <span style={{ color: colors.danger }}>Fewer jobs.</span>
          </p>
        </div>
      </FlipPage>

      {/* The term */}
      <FlipPage background={bg} icon={Bot}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '700px',
        }}>
          This removal of layers—<br />
          and the jobs within them—<br />
          is called <span style={{ color: colors.text, fontWeight: 500 }}>compression</span>.
        </p>
      </FlipPage>

      {/* AI setup */}
      <FlipPage background={bg} icon={Sparkles}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '700px',
        }}>
          AI is compressing value chains<br />
          <span style={{ color: colors.danger, fontWeight: 500 }}>faster than ever before</span>.
        </p>
      </FlipPage>

      {/* We call it */}
      <FlipPage background={bg} icon={TrendingUp}>
        <p style={{
          fontSize: 'clamp(20px, 4vw, 28px)',
          color: colors.textMuted,
          lineHeight: 1.5,
        }}>
          We call this moment...
        </p>
      </FlipPage>

      {/* Page 18: The Great Compression (with Depression pun) */}
      <FlipPage background={bg} icon={Layers}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(48px, 12vw, 100px)',
            fontWeight: 700,
            color: colors.text,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '0',
          }}>
            The Great
          </h1>
          <div style={{ position: 'relative', display: 'inline-block', marginTop: '-10px' }}>
            <span style={{
              fontSize: 'clamp(48px, 12vw, 100px)',
              color: colors.textLight,
              textDecoration: 'line-through',
              textDecorationColor: colors.danger,
              textDecorationThickness: '4px',
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              fontWeight: 400,
              opacity: 0.25,
            }}>
              Depression
            </span>
            <span
              style={{
                position: 'absolute',
                left: '0%',
                top: '-15%',
                fontSize: 'clamp(48px, 12vw, 100px)',
                color: colors.accent,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                transform: 'rotate(-5deg)',
                textShadow: isDark
                  ? `0 0 60px ${colors.accent}40`
                  : `0 0 30px ${colors.accent}25`,
              }}
            >
              Compression
            </span>
          </div>
        </div>
      </FlipPage>

      {/* Page 19: AI in 2026 */}
      <FlipPage background={bg} icon={TrendingUp}>
        <p style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          color: colors.text,
          lineHeight: 1.4,
          fontWeight: 500,
          maxWidth: '700px',
        }}>
          In 2026, AI is accelerating<br />
          compression <span style={{ color: colors.accent }}>everywhere at once.</span>
        </p>
      </FlipPage>

      {/* Page 20: We've documented it */}
      <FlipPage background={bg} icon={BookOpen}>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.textMuted,
          lineHeight: 1.5,
          maxWidth: '600px',
        }}>
          We've documented every major compression<br />
          in modern history.
        </p>
      </FlipPage>

      {/* Page 21: Imagine */}
      <FlipPage background={bg} icon={Rocket} isLast>
        <p style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: colors.text,
          lineHeight: 1.5,
          maxWidth: '650px',
          fontWeight: 500,
        }}>
          Now imagine a world<br />
          <span style={{ color: colors.accent }}>more compressed than ever before.</span>
        </p>
      </FlipPage>
    </>
  );
}

// Helper components with theme support
function Section({
  children,
  background = 'default',
}: {
  children: React.ReactNode;
  background?: 'default' | 'alt';
}) {
  const { isDark } = useTheme();
  const colors = useThemeColors();

  const bg = background === 'alt' ? colors.bgAlt : colors.bg;

  return (
    <section style={{ padding: '120px 24px', background: bg }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>{children}</div>
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

function Headline({ children }: { children: string }) {
  const colors = useThemeColors();

  return (
    <h2
      style={{
        fontSize: 'clamp(32px, 6vw, 48px)',
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
    <p style={{ fontSize: '18px', color: colors.textMuted, lineHeight: 1.8, marginBottom: '24px' }}>
      {children}
    </p>
  );
}

export default HomePage;
