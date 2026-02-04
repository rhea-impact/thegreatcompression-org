/**
 * Kinetic Text Components
 * Text that reveals, splits, and animates
 */

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// Word-by-word reveal
interface WordRevealProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export function WordReveal({ children, style, delay = 0 }: WordRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const words = children.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      style={{ display: 'inline', ...style }}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Letter-by-letter reveal (for hero headlines)
interface LetterRevealProps {
  children: string;
  style?: React.CSSProperties;
  delay?: number;
}

export function LetterReveal({ children, style, delay = 0 }: LetterRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const letters = children.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      style={{ display: 'inline-block', perspective: '1000px', ...style }}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{
            display: 'inline-block',
            transformOrigin: 'bottom',
            whiteSpace: letter === ' ' ? 'pre' : 'normal',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Fade up with blur (for body text)
interface FadeBlurProps {
  children: ReactNode;
  style?: React.CSSProperties;
  delay?: number;
}

export function FadeBlur({ children, style, delay = 0 }: FadeBlurProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y: 30, filter: 'blur(10px)' }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
