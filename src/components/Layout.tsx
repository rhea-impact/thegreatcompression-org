/**
 * Layout Components
 */

import type { ReactNode } from 'react';
import type { BackgroundColor } from '../types';

const backgrounds: Record<BackgroundColor, string> = {
  white: '#ffffff',
  gray: '#f8fafc',
  dark: '#0f172a',
};

interface SectionProps {
  id?: string;
  background?: BackgroundColor;
  children: ReactNode;
}

export function Section({ id, background = 'white', children }: SectionProps) {
  const isDark = background === 'dark';
  return (
    <section
      id={id}
      style={{
        padding: '100px 24px',
        background: backgrounds[background],
        borderBottom: isDark ? 'none' : '1px solid #e2e8f0',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

interface ContainerProps {
  maxWidth?: number;
  children: ReactNode;
}

export function Container({ maxWidth = 800, children }: ContainerProps) {
  return <div style={{ maxWidth, margin: '0 auto' }}>{children}</div>;
}

interface NavProps {
  visible: boolean;
}

export function Nav({ visible }: NavProps) {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: visible ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: visible ? 'blur(12px)' : 'none',
        borderBottom: visible ? '1px solid #e2e8f0' : '1px solid transparent',
        padding: '16px 24px',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: '16px',
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }}
        >
          The Great Compression
        </div>
      </div>
    </nav>
  );
}
