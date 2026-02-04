/**
 * Visualization Components
 */

import type { ChainNode, ValueChain, SigmoidData, CapitalismForce, CloudVsLocal } from '../types';

// ============================================
// CHAIN NODE
// ============================================

interface ChainNodeComponentProps {
  node: ChainNode;
}

function ChainNodeComponent({ node }: ChainNodeComponentProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        opacity: 1,
        minWidth: '100px',
        maxWidth: '110px',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: node.highlighted ? '#dbeafe' : '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          border: node.highlighted ? '2px solid #3b82f6' : '1px solid #e2e8f0',
          boxShadow: node.highlighted
            ? '0 4px 12px rgba(59,130,246,0.15)'
            : '0 1px 3px rgba(0,0,0,0.04)',
        }}
      >
        {node.icon}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: node.highlighted ? '#1d4ed8' : '#0f172a',
            letterSpacing: '-0.01em',
          }}
        >
          {node.name}
        </div>
        <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px', lineHeight: 1.4 }}>
          {node.description}
        </div>
      </div>
      {node.margin && (
        <div
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#f59e0b',
            fontFamily: "'JetBrains Mono', monospace",
            background: '#fef3c7',
            padding: '3px 8px',
            borderRadius: '6px',
          }}
        >
          {node.margin}
        </div>
      )}
    </div>
  );
}

// ============================================
// ARROW
// ============================================

interface ArrowProps {
  label?: string;
}

function Arrow({ label }: ArrowProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        marginTop: '20px',
        minWidth: '50px',
      }}
    >
      {label && (
        <div
          style={{
            fontSize: '10px',
            color: '#94a3b8',
            fontFamily: "'JetBrains Mono', monospace",
            textAlign: 'center',
          }}
        >
          {label}
        </div>
      )}
      <svg width="40" height="12" viewBox="0 0 40 12">
        <line x1="0" y1="6" x2="30" y2="6" stroke="#cbd5e1" strokeWidth="2" />
        <polygon points="30,2 38,6 30,10" fill="#cbd5e1" />
      </svg>
    </div>
  );
}

// ============================================
// VALUE CHAIN
// ============================================

interface ValueChainComponentProps {
  chain: ValueChain;
  arrowLabels?: string[];
}

export function ValueChainComponent({ chain, arrowLabels = [] }: ValueChainComponentProps) {
  const isAfter = chain.variant === 'after';

  return (
    <div
      style={{
        background: isAfter ? '#fef2f2' : '#ffffff',
        borderRadius: '16px',
        border: isAfter ? '1px solid #fecaca' : '1px solid #e2e8f0',
        padding: '32px 24px',
        marginTop: '32px',
        marginBottom: '32px',
        overflowX: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          justifyContent: 'center',
          minWidth: chain.nodes.length > 3 ? '700px' : 'auto',
        }}
      >
        {chain.nodes.map((node, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
            <ChainNodeComponent node={node} />
            {i < chain.nodes.length - 1 && <Arrow label={arrowLabels[i]} />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// SIGMOID VISUALIZATION
// ============================================

interface SigmoidVisualizationProps {
  data: SigmoidData;
}

export function SigmoidVisualization({ data }: SigmoidVisualizationProps) {
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        padding: '32px 24px',
        marginTop: '32px',
        marginBottom: '32px',
      }}
    >
      {/* Before */}
      <div style={{ marginBottom: '40px' }}>
        <div
          style={{
            fontSize: '12px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#64748b',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Before Compression
        </div>
        <div
          style={{
            height: '48px',
            background: 'linear-gradient(90deg, #475569 0%, #475569 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          {data.before.label}
        </div>
      </div>

      {/* Arrow */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', color: '#94a3b8' }}>
        <svg width="24" height="40" viewBox="0 0 24 40">
          <line x1="12" y1="0" x2="12" y2="32" stroke="currentColor" strokeWidth="2" />
          <polygon points="6,28 12,38 18,28" fill="currentColor" />
        </svg>
      </div>

      {/* After */}
      <div style={{ marginBottom: '32px' }}>
        <div
          style={{
            fontSize: '12px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#64748b',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          After Compression
        </div>
        <div
          style={{
            height: '48px',
            display: 'flex',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {/* Luxury tier */}
          <div
            style={{
              width: '15%',
              background: data.after.luxury.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: 600,
            }}
          >
            Human
          </div>
          {/* Collapsed middle */}
          <div
            style={{
              flex: 1,
              background:
                'repeating-linear-gradient(45deg, #f1f5f9, #f1f5f9 10px, #e2e8f0 10px, #e2e8f0 20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              fontSize: '13px',
              fontStyle: 'italic',
            }}
          >
            The middle collapsed → AI
          </div>
          {/* Budget tier */}
          <div
            style={{
              width: '10%',
              background: data.after.budget.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '10px',
              fontWeight: 600,
            }}
          >
            DIY
          </div>
        </div>
      </div>

      {/* Labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
        <div style={{ maxWidth: '120px', textAlign: 'left' }}>
          <div style={{ fontWeight: 600, color: data.after.luxury.color, marginBottom: '4px' }}>
            Luxury tier (~{data.after.luxury.percentage})
          </div>
          <div style={{ color: '#64748b', lineHeight: 1.4 }}>{data.after.luxury.description}</div>
        </div>
        <div style={{ maxWidth: '180px', textAlign: 'center', color: '#94a3b8', fontStyle: 'italic' }}>
          This is where 80% of jobs were
        </div>
        <div style={{ maxWidth: '120px', textAlign: 'right' }}>
          <div style={{ fontWeight: 600, color: data.after.budget.color, marginBottom: '4px' }}>
            Budget tier (~{data.after.budget.percentage})
          </div>
          <div style={{ color: '#64748b', lineHeight: 1.4 }}>{data.after.budget.description}</div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CAPITALISM DUAL ROLE
// ============================================

interface CapitalismVisualizationProps {
  accelerator: CapitalismForce;
  brake: CapitalismForce;
  cloudVsLocal: CloudVsLocal;
}

export function CapitalismVisualization({
  accelerator,
  brake,
  cloudVsLocal,
}: CapitalismVisualizationProps) {
  return (
    <div>
      {/* Two columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginTop: '32px',
        }}
      >
        {/* Accelerator */}
        <div
          style={{
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '12px',
            padding: '24px',
          }}
        >
          <div
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: accelerator.color,
              marginBottom: '16px',
            }}
          >
            {accelerator.title}
          </div>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {accelerator.points.map((point, i) => (
              <li
                key={i}
                style={{ fontSize: '14px', color: '#475569', marginBottom: '8px', lineHeight: 1.6 }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Brake */}
        <div
          style={{
            background: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: '12px',
            padding: '24px',
          }}
        >
          <div
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: brake.color,
              marginBottom: '16px',
            }}
          >
            {brake.title}
          </div>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {brake.points.map((point, i) => (
              <li
                key={i}
                style={{ fontSize: '14px', color: '#475569', marginBottom: '8px', lineHeight: 1.6 }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cloud vs Local */}
      <div
        style={{
          background: '#f8fafc',
          borderRadius: '12px',
          padding: '24px',
          marginTop: '24px',
        }}
      >
        <div
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#0f172a',
            marginBottom: '16px',
          }}
        >
          The Cloud vs. Local Tension
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#0f172a' }}>Cloud AI</div>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
              {cloudVsLocal.cloud.description}
            </div>
            <div style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 500, marginTop: '4px' }}>
              = {cloudVsLocal.cloud.outcome}
            </div>
          </div>
          <div style={{ fontSize: '24px', color: '#cbd5e1' }}>vs</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#0f172a' }}>Local AI</div>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
              {cloudVsLocal.local.description}
            </div>
            <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 500, marginTop: '4px' }}>
              = {cloudVsLocal.local.outcome}
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            background: '#fef3c7',
            borderRadius: '8px',
            fontSize: '13px',
            color: '#92400e',
          }}
        >
          {cloudVsLocal.insight}
        </div>
      </div>
    </div>
  );
}

// ============================================
// BLESSING MAN FLOW
// ============================================

interface BlessingManFlowProps {
  before: { flow: string[]; price: string; description: string };
  after: { flow: string[]; price: string; description: string };
}

export function BlessingManFlow({ before, after }: BlessingManFlowProps) {
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        padding: '32px 24px',
        marginTop: '32px',
        marginBottom: '32px',
      }}
    >
      {/* Before */}
      <div style={{ marginBottom: '32px' }}>
        <div
          style={{
            fontSize: '12px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#64748b',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Before
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          {before.flow.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  padding: '8px 12px',
                  background: '#f8fafc',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#0f172a',
                }}
              >
                {step}
              </span>
              {i < before.flow.length - 1 && <span style={{ color: '#cbd5e1' }}>→</span>}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '12px', fontSize: '14px', color: '#64748b' }}>
          <strong style={{ color: '#0f172a' }}>{before.price}</strong> {before.description}
        </div>
      </div>

      {/* After */}
      <div>
        <div
          style={{
            fontSize: '12px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#64748b',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          After
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          {after.flow.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  padding: '8px 12px',
                  background: step.includes('AI') ? '#dbeafe' : '#f8fafc',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: step.includes('AI') ? '#1d4ed8' : '#0f172a',
                  fontWeight: step.includes('AI') ? 500 : 400,
                }}
              >
                {step}
              </span>
              {i < after.flow.length - 1 && <span style={{ color: '#cbd5e1' }}>→</span>}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '12px', fontSize: '14px', color: '#64748b' }}>
          <strong style={{ color: '#ef4444' }}>{after.price}</strong> {after.description}
        </div>
      </div>
    </div>
  );
}
