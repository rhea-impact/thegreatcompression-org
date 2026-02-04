/**
 * Data Display Components
 */

import type { CSSProperties } from 'react';
import type {
  HistoricalCompression,
  Stat,
  FlexExample,
  ResistanceFactor,
  RegulatedIndustry,
  ProfessionCompression,
  Implication,
  CompressionAcceleration,
} from '../types';

// ============================================
// HISTORY CARD
// ============================================

interface HistoryCardProps {
  data: HistoricalCompression;
  featured?: boolean;
}

export function HistoryCard({ data, featured = false }: HistoryCardProps) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: featured ? '32px' : '24px',
        marginBottom: featured ? '24px' : '0',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: data.color,
          }}
        />
        <div>
          <div style={{ fontSize: featured ? '20px' : '16px', fontWeight: 600, color: '#0f172a' }}>
            {data.industry}
          </div>
          <div
            style={{
              fontSize: '13px',
              color: '#64748b',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {data.era}
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>Before</div>
          <div style={{ fontSize: '14px', color: '#475569' }}>{data.before}</div>
        </div>
        <div style={{ fontSize: '20px', color: '#cbd5e1' }}>→</div>
        <div>
          <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>After</div>
          <div style={{ fontSize: '14px', color: '#475569', fontWeight: 500 }}>{data.after}</div>
        </div>
      </div>
      {featured && (
        <div
          style={{
            marginTop: '16px',
            padding: '8px 12px',
            background: '#fef2f2',
            borderRadius: '8px',
            fontSize: '13px',
            color: '#991b1b',
            fontWeight: 500,
          }}
        >
          {data.compression} value compressed
        </div>
      )}
    </div>
  );
}

// ============================================
// STAT CARD
// ============================================

interface StatCardProps {
  data: Stat;
  color?: string;
}

export function StatCard({ data, color = '#ef4444' }: StatCardProps) {
  return (
    <div
      style={{
        background: '#f8fafc',
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '32px', fontWeight: 700, color }}>{data.value}</div>
      <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>{data.label}</div>
      {data.sublabel && (
        <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '8px' }}>{data.sublabel}</div>
      )}
    </div>
  );
}

// ============================================
// FLEX CARD
// ============================================

interface FlexCardProps {
  data: FlexExample;
}

export function FlexCard({ data }: FlexCardProps) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '20px',
      }}
    >
      <div style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>
        {data.domain}
      </div>
      <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
        <div style={{ marginBottom: '8px' }}>
          <span style={{ color: '#94a3b8', fontWeight: 500 }}>Mass:</span> {data.mass}
        </div>
        <div>
          <span style={{ color: '#3b82f6', fontWeight: 500 }}>Flex:</span> {data.flex}
        </div>
      </div>
    </div>
  );
}

// ============================================
// RESISTANCE BOX
// ============================================

interface ResistanceBoxProps {
  data: ResistanceFactor;
}

export function ResistanceBox({ data }: ResistanceBoxProps) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '20px',
      }}
    >
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>
        {data.label}
      </div>
      <div style={{ fontSize: '13px', color: '#3b82f6', marginBottom: '8px' }}>{data.example}</div>
      <div style={{ fontSize: '12px', color: '#64748b' }}>{data.explanation}</div>
    </div>
  );
}

// ============================================
// IMPLICATION CARD
// ============================================

interface ImplicationCardProps {
  data: Implication;
}

export function ImplicationCard({ data }: ImplicationCardProps) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '24px',
      }}
    >
      <div
        style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#0f172a',
          marginBottom: '16px',
        }}
      >
        {data.title}
      </div>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        {data.points.map((point, i) => (
          <li key={i} style={{ fontSize: '14px', color: '#475569', marginBottom: '8px', lineHeight: 1.6 }}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================
// DATA TABLE
// ============================================

interface ProfessionTableProps {
  data: ProfessionCompression[];
}

export function ProfessionTable({ data }: ProfessionTableProps) {
  return (
    <div style={{ overflowX: 'auto', marginTop: '24px' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px',
        }}
      >
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#64748b', fontWeight: 500 }}>
              Profession
            </th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#64748b', fontWeight: 500 }}>
              Before
            </th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#64748b', fontWeight: 500 }}>
              After
            </th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#64748b', fontWeight: 500 }}>
              Compression
            </th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#64748b', fontWeight: 500 }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '12px 8px', fontWeight: 500, color: '#0f172a' }}>{row.profession}</td>
              <td style={{ padding: '12px 8px', color: '#475569' }}>{row.before}</td>
              <td style={{ padding: '12px 8px', color: '#475569' }}>{row.after}</td>
              <td style={{ padding: '12px 8px', color: '#ef4444', fontWeight: 500 }}>{row.compression}</td>
              <td style={{ padding: '12px 8px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: row.status === 'realized' ? '#dcfce7' : '#fef3c7',
                    color: row.status === 'realized' ? '#166534' : '#92400e',
                  }}
                >
                  {row.status === 'realized' ? 'Realized' : `Projected ${row.timeline || ''}`}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface RegulationTableProps {
  data: RegulatedIndustry[];
}

export function RegulationTable({ data }: RegulationTableProps) {
  const frictionColors = {
    low: '#dcfce7',
    medium: '#fef3c7',
    high: '#fee2e2',
    'very-high': '#fecaca',
  };
  const frictionTextColors = {
    low: '#166534',
    medium: '#92400e',
    high: '#991b1b',
    'very-high': '#7f1d1d',
  };

  return (
    <div style={{ overflowX: 'auto', marginTop: '24px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#64748b', fontWeight: 500 }}>
              Industry
            </th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#64748b', fontWeight: 500 }}>
              Compression
            </th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#64748b', fontWeight: 500 }}>
              Friction Level
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '12px 8px', fontWeight: 500, color: '#0f172a' }}>{row.industry}</td>
              <td style={{ padding: '12px 8px', color: '#475569', textTransform: 'capitalize' }}>
                {row.compressionStatus}
              </td>
              <td style={{ padding: '12px 8px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: frictionColors[row.frictionLevel],
                    color: frictionTextColors[row.frictionLevel],
                    textTransform: 'capitalize',
                  }}
                >
                  {row.frictionLevel.replace('-', ' ')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ============================================
// ACCELERATION TIMELINE
// ============================================

interface AccelerationTimelineProps {
  data: CompressionAcceleration[];
}

export function AccelerationTimeline({ data }: AccelerationTimelineProps) {
  return (
    <div
      style={{
        background: '#f8fafc',
        borderRadius: '12px',
        padding: '24px',
        marginTop: '32px',
      }}
    >
      <div
        style={{
          fontSize: '12px',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#64748b',
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        Compression Acceleration
      </div>
      {data.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 0',
            borderBottom: i < data.length - 1 ? '1px solid #e2e8f0' : 'none',
          }}
        >
          <div style={{ fontSize: '14px', color: '#475569' }}>
            {item.from} → {item.to}
          </div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
              color: '#0f172a',
            }}
          >
            {item.duration}
          </div>
        </div>
      ))}
    </div>
  );
}
