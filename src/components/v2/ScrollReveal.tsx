/**
 * Scroll-Linked Animation Components
 * Elements that transform based on scroll position
 */

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// Parallax effect (moves slower/faster than scroll)
interface ParallaxProps {
  children: ReactNode;
  speed?: number; // -1 to 1, negative = slower, positive = faster
  style?: React.CSSProperties;
}

export function Parallax({ children, speed = 0.5, style }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y, ...style }}>
      {children}
    </motion.div>
  );
}

// Scale on scroll (grows/shrinks as it enters view)
interface ScaleOnScrollProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export function ScaleOnScroll({ children, style }: ScaleOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity, ...style }}>
      {children}
    </motion.div>
  );
}

// Horizontal slide on scroll
interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  style?: React.CSSProperties;
}

export function SlideIn({ children, direction = 'left', style }: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const xInitial = direction === 'left' ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, x: xInitial }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xInitial }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Stagger children animation
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  style?: React.CSSProperties;
}

export function StaggerContainer({ children, staggerDelay = 0.1, style }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      style={style}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
interface StaggerItemProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export function StaggerItem({ children, style }: StaggerItemProps) {
  return (
    <motion.div
      style={style}
      variants={{
        hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Number counter animation
interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  style?: React.CSSProperties;
}

export function CountUp({ value, prefix = '', suffix = '', style }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      style={style}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isInView ? value.toLocaleString() : 0}
      </motion.span>
      {suffix}
    </motion.span>
  );
}
