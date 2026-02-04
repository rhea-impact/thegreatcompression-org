/**
 * Dramatic History Components
 * Makes the historical compressions feel visceral
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { HistoricalCompression, CompressionAcceleration } from '../types';

/**
 * Featured history card - the gut punch
 */
interface FeaturedHistoryCardProps {
  data: HistoricalCompression;
}

export function FeaturedHistoryCard({ data }: FeaturedHistoryCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderRadius: '20px',
        padding: '48px 40px',
        marginBottom: '40px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      {/* Era badge */}
      <div
        style={{
          display: 'inline-block',
          fontSize: '12px',
          fontFamily: "'JetBrains Mono', monospace",
          color: data.color,
          background: `${data.color}20`,
          padding: '6px 12px',
          borderRadius: '6px',
          marginBottom: '24px',
        }}
      >
        {data.era}
      </div>

      {/* Industry name */}
      <div
        style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '32px',
        }}
      >
        {data.industry}
      </div>

      {/* The dramatic numbers */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
          }}
        >
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>BEFORE</div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#94a3b8',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {data.before}
          </div>
        </div>

        <div
          style={{
            fontSize: '40px',
            color: '#475569',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.5s',
          }}
        >
          →
        </div>

        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.9)',
            transition: 'opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s',
          }}
        >
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>AFTER</div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#ef4444',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            0
          </div>
        </div>
      </div>

      {/* Compression badge */}
      <div
        style={{
          marginTop: '32px',
          display: 'inline-block',
          background: '#ef4444',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 700,
          padding: '8px 16px',
          borderRadius: '8px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 0.5s ease 0.9s, transform 0.5s ease 0.9s',
        }}
      >
        {data.compression} GONE
      </div>
    </div>
  );
}

/**
 * Grid history card - supporting examples
 */
interface HistoryGridCardProps {
  data: HistoricalCompression;
  delay?: number;
}

export function HistoryGridCard({ data, delay = 0 }: HistoryGridCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: '24px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: data.color,
            boxShadow: `0 0 12px ${data.color}60`,
          }}
        />
        <div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>{data.industry}</div>
          <div
            style={{
              fontSize: '12px',
              color: '#64748b',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {data.era}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '4px' }}>Before</div>
          <div style={{ fontSize: '14px', color: '#475569', fontWeight: 500 }}>{data.before}</div>
        </div>
        <div style={{ fontSize: '20px', color: '#ef4444' }}>→</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '4px' }}>After</div>
          <div style={{ fontSize: '14px', color: '#ef4444', fontWeight: 600 }}>{data.after}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Acceleration timeline - shows compression speeding up
 */
interface AccelerationTimelineProps {
  data: CompressionAcceleration[];
}

export function DramaticAccelerationTimeline({ data }: AccelerationTimelineProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #fef2f2 0%, #fff1f2 100%)',
        borderRadius: '16px',
        padding: '32px',
        marginTop: '40px',
        border: '1px solid #fecaca',
      }}
    >
      <div
        style={{
          fontSize: '12px',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#991b1b',
          marginBottom: '24px',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 600,
        }}
      >
        Each compression happens faster
      </div>

      {data.map((item, i) => {
        const barWidth = [100, 60, 30, 15][i] || 50;
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: i < data.length - 1 ? '16px' : 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 0.5s ease ${200 + i * 150}ms, transform 0.5s ease ${200 + i * 150}ms`,
            }}
          >
            <div style={{ flex: 1, fontSize: '14px', color: '#475569' }}>
              {item.from} → {item.to}
            </div>
            <div
              style={{
                width: `${barWidth}px`,
                height: '8px',
                background: `linear-gradient(90deg, #ef4444 0%, #f87171 100%)`,
                borderRadius: '4px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'right',
                transition: `transform 0.6s ease ${400 + i * 150}ms`,
              }}
            />
            <div
              style={{
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                color: '#991b1b',
                minWidth: '90px',
                textAlign: 'right',
              }}
            >
              {item.duration}
            </div>
          </div>
        );
      })}
    </div>
  );
}
