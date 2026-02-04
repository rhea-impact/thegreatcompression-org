/**
 * V2 Hero
 * Kinetic typography, animated gradient, scroll-linked fade
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { LetterReveal, WordReveal } from './KineticText';

export function HeroV2() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <motion.section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
        opacity,
        scale,
        y,
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(239, 68, 68, 0.1), transparent),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)
          `,
          zIndex: 0,
        }}
        animate={{
          background: [
            `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent),
              radial-gradient(ellipse 60% 40% at 80% 100%, rgba(239, 68, 68, 0.1), transparent),
              linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)
            `,
            `
              radial-gradient(ellipse 80% 50% at 60% -10%, rgba(59, 130, 246, 0.12), transparent),
              radial-gradient(ellipse 60% 40% at 20% 100%, rgba(239, 68, 68, 0.08), transparent),
              linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)
            `,
            `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent),
              radial-gradient(ellipse 60% 40% at 80% 100%, rgba(239, 68, 68, 0.1), transparent),
              linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)
            `,
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '900px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(48px, 12vw, 100px)',
            fontWeight: 700,
            color: '#0f172a',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            marginBottom: '32px',
          }}
        >
          <LetterReveal>The Great</LetterReveal>
          <br />
          <span style={{ color: '#3b82f6' }}>
            <LetterReveal delay={0.5}>Compression</LetterReveal>
          </span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            color: '#475569',
            lineHeight: 1.6,
            maxWidth: '650px',
            margin: '0 auto 48px',
          }}
        >
          <WordReveal delay={1.2}>
            Every intermediation layer exists because of complexity. When technology makes complexity trivial, value chains collapse.
          </WordReveal>
        </p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '24px',
              height: '40px',
              borderRadius: '12px',
              border: '2px solid #cbd5e1',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '8px',
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                background: '#94a3b8',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroV2;
