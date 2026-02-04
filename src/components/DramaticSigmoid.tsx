/**
 * Dramatic Sigmoid Visualization
 * Animates the collapse of the middle tier
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { SigmoidData } from '../types';

interface DramaticSigmoidProps {
  data: SigmoidData;
}

export function DramaticSigmoid({ data }: DramaticSigmoidProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      style={{
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #e2e8f0',
        padding: '48px 32px',
        marginTop: '48px',
        marginBottom: '48px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      {/* BEFORE - Full bar */}
      <div style={{ marginBottom: '48px' }}>
        <div
          style={{
            fontSize: '11px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#94a3b8',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}
        >
          Before Compression
        </div>
        <div
          style={{
            height: '64px',
            background: '#475569',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 600,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.8s ease 0.2s, opacity 0.3s ease 0.2s',
          }}
        >
          {data.before.label}
        </div>
      </div>

      {/* Animated Arrow */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '32px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease 0.8s',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              color: '#ef4444',
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            COMPRESSION
          </div>
          <svg width="24" height="48" viewBox="0 0 24 48">
            <line x1="12" y1="0" x2="12" y2="40" stroke="#ef4444" strokeWidth="2" />
            <polygon points="6,36 12,46 18,36" fill="#ef4444" />
          </svg>
        </div>
      </div>

      {/* AFTER - Collapsed bar */}
      <div style={{ marginBottom: '40px' }}>
        <div
          style={{
            fontSize: '11px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#94a3b8',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}
        >
          After Compression
        </div>
        <div
          style={{
            height: '64px',
            display: 'flex',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          {/* Luxury tier - expands in */}
          <div
            style={{
              width: isVisible ? '12%' : '0%',
              background: `linear-gradient(135deg, ${data.after.luxury.color} 0%, #1d4ed8 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 700,
              transition: 'width 0.8s ease 1.2s',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {isVisible && 'HUMAN'}
          </div>

          {/* Collapsed middle - the dramatic part */}
          <div
            style={{
              flex: 1,
              background: isVisible
                ? 'repeating-linear-gradient(45deg, #fef2f2, #fef2f2 10px, #fee2e2 10px, #fee2e2 20px)'
                : '#475569',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#991b1b',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'background 0.8s ease 1.4s',
              position: 'relative',
            }}
          >
            <span
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease 1.8s',
              }}
            >
              ← 80% COLLAPSED TO AI →
            </span>
          </div>

          {/* Budget tier - expands in */}
          <div
            style={{
              width: isVisible ? '8%' : '0%',
              background: `linear-gradient(135deg, ${data.after.budget.color} 0%, #059669 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: 700,
              transition: 'width 0.8s ease 1.2s',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {isVisible && 'DIY'}
          </div>
        </div>
      </div>

      {/* Labels with staggered fade-in */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gap: '24px',
          fontSize: '13px',
        }}
      >
        <div
          style={{
            textAlign: 'left',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 2s, transform 0.5s ease 2s',
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: data.after.luxury.color,
              marginBottom: '6px',
              fontSize: '14px',
            }}
          >
            ~10% Luxury
          </div>
          <div style={{ color: '#64748b', lineHeight: 1.5 }}>
            Human service as status signal
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 2.2s, transform 0.5s ease 2.2s',
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: '#991b1b',
              marginBottom: '6px',
              fontSize: '16px',
            }}
          >
            This is where 80% of jobs were
          </div>
          <div style={{ color: '#64748b', lineHeight: 1.5 }}>
            No defensible position. Gone.
          </div>
        </div>

        <div
          style={{
            textAlign: 'right',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 2.4s, transform 0.5s ease 2.4s',
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: data.after.budget.color,
              marginBottom: '6px',
              fontSize: '14px',
            }}
          >
            ~10% Budget
          </div>
          <div style={{ color: '#64748b', lineHeight: 1.5 }}>
            Self-serve, near-zero cost
          </div>
        </div>
      </div>
    </div>
  );
}
