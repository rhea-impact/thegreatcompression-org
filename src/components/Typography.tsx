/**
 * Typography Components
 */

import type { ReactNode, CSSProperties } from 'react';

interface LabelProps {
  children: ReactNode;
  color?: string;
}

export function Label({ children, color = '#3b82f6' }: LabelProps) {
  return (
    <div
      style={{
        fontSize: '12px',
        fontFamily: "'JetBrains Mono', monospace",
        color,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 600,
        marginBottom: '16px',
      }}
    >
      {children}
    </div>
  );
}

interface HeadlineProps {
  children: ReactNode;
  light?: boolean;
  style?: CSSProperties;
}

export function Headline({ children, light = false, style }: HeadlineProps) {
  return (
    <h2
      style={{
        fontSize: 'clamp(28px, 5vw, 40px)',
        fontWeight: 700,
        color: light ? '#ffffff' : '#0f172a',
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
        marginBottom: '20px',
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

interface BodyProps {
  children: ReactNode;
  light?: boolean;
  style?: CSSProperties;
}

export function Body({ children, light = false, style }: BodyProps) {
  return (
    <p
      style={{
        fontSize: '17px',
        color: light ? '#94a3b8' : '#475569',
        lineHeight: 1.8,
        marginBottom: '24px',
        ...style,
      }}
    >
      {children}
    </p>
  );
}

interface QuoteProps {
  children: ReactNode;
  author?: string;
}

export function Quote({ children, author }: QuoteProps) {
  return (
    <blockquote
      style={{
        borderLeft: '4px solid #3b82f6',
        paddingLeft: '24px',
        marginLeft: 0,
        marginTop: '32px',
        marginBottom: '32px',
      }}
    >
      <p
        style={{
          fontSize: '20px',
          fontStyle: 'italic',
          color: '#1e293b',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        "{children}"
      </p>
      {author && (
        <cite
          style={{
            display: 'block',
            marginTop: '12px',
            fontSize: '14px',
            color: '#64748b',
            fontStyle: 'normal',
          }}
        >
          — {author}
        </cite>
      )}
    </blockquote>
  );
}

interface CalloutProps {
  children: ReactNode;
  color?: string;
  borderColor?: string;
}

export function Callout({
  children,
  color = '#fef3c7',
  borderColor = '#f59e0b',
}: CalloutProps) {
  return (
    <div
      style={{
        background: color,
        borderRadius: '12px',
        padding: '20px',
        marginTop: '24px',
        borderLeft: `4px solid ${borderColor}`,
      }}
    >
      <div style={{ fontSize: '14px', color: '#92400e', fontWeight: 500 }}>
        {children}
      </div>
    </div>
  );
}
