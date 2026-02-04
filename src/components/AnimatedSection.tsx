/**
 * Animated Section Component
 * Fades in and slides up when scrolled into view
 */

import type { ReactNode, CSSProperties } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { BackgroundColor } from '../types';

const backgrounds: Record<BackgroundColor, string> = {
  white: '#ffffff',
  gray: '#f8fafc',
  dark: '#0f172a',
};

interface AnimatedSectionProps {
  id?: string;
  background?: BackgroundColor;
  children: ReactNode;
  delay?: number;
  className?: string;
  paddingTop?: number;
  paddingBottom?: number;
}

export function AnimatedSection({
  id,
  background = 'white',
  children,
  delay = 0,
  paddingTop = 100,
  paddingBottom = 100,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const isDark = background === 'dark';

  const style: CSSProperties = {
    paddingTop: `${paddingTop}px`,
    paddingBottom: `${paddingBottom}px`,
    paddingLeft: '24px',
    paddingRight: '24px',
    background: backgrounds[background],
    borderBottom: isDark ? 'none' : '1px solid #e2e8f0',
  };

  const innerStyle: CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  };

  return (
    <section id={id} style={style} ref={ref}>
      <div style={innerStyle}>{children}</div>
    </section>
  );
}

/**
 * Animated element for staggered children
 */
interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedElement({ children, delay = 0 }: AnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}

/**
 * Big stat with animated counter
 */
interface AnimatedStatProps {
  value: string;
  label: string;
  sublabel?: string;
  color?: string;
  size?: 'normal' | 'large' | 'hero';
}

export function AnimatedStat({
  value,
  label,
  sublabel,
  color = '#ef4444',
  size = 'normal',
}: AnimatedStatProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const fontSize = size === 'hero' ? '72px' : size === 'large' ? '48px' : '32px';

  return (
    <div
      ref={ref}
      style={{
        background: '#f8fafc',
        borderRadius: '12px',
        padding: size === 'hero' ? '40px' : '20px',
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: 700,
          color,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '-0.02em',
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: '14px', color: '#64748b', marginTop: '8px' }}>{label}</div>
      {sublabel && (
        <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>{sublabel}</div>
      )}
    </div>
  );
}

/**
 * Dramatic number reveal
 */
interface DramaticNumberProps {
  before: string;
  after: string;
  label: string;
}

export function DramaticNumber({ before, after, label }: DramaticNumberProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        padding: '40px 20px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      <div
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
            fontSize: '48px',
            fontWeight: 700,
            color: '#64748b',
            fontFamily: "'JetBrains Mono', monospace",
            textDecoration: 'line-through',
            textDecorationColor: '#ef4444',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
          }}
        >
          {before}
        </span>
        <span
          style={{
            fontSize: '32px',
            color: '#cbd5e1',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.4s',
          }}
        >
          →
        </span>
        <span
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#ef4444',
            fontFamily: "'JetBrains Mono', monospace",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(20px) scale(0.8)',
            transition: 'opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s',
          }}
        >
          {after}
        </span>
      </div>
      <div
        style={{
          fontSize: '16px',
          color: '#64748b',
          marginTop: '16px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.8s',
        }}
      >
        {label}
      </div>
    </div>
  );
}
