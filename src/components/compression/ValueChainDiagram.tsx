/**
 * Value Chain Diagram
 * Animated before/after visualization of compression
 */

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import type { ValueChain } from '../../types/compression';
import { useTheme, useThemeColors } from '../../providers/ThemeProvider';

interface ValueChainDiagramProps {
  valueChain: ValueChain;
  storyColor: string;
}

const layerTypeColors: Record<string, string> = {
  information: '#3b82f6',  // blue
  access: '#8b5cf6',       // purple
  skill: '#f59e0b',        // amber
  physical: '#10b981',     // emerald
  trust: '#ec4899',        // pink
  aggregation: '#6366f1',  // indigo
};

export function ValueChainDiagram({ valueChain, storyColor }: ValueChainDiagramProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAfter, setShowAfter] = useState(false);
  const { isDark } = useTheme();
  const colors = useThemeColors();

  // Auto-toggle to "after" view once in view
  if (isInView && !showAfter) {
    setTimeout(() => setShowAfter(true), 1500);
  }

  const beforeLayers = valueChain.before;
  const afterLayers = valueChain.after;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '32px',
        background: isDark ? 'rgba(0,0,0,0.3)' : '#ffffff',
        borderRadius: '20px',
        border: `1px solid ${colors.border}`,
        marginTop: '40px',
        marginBottom: '40px',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div>
          <div style={{
            fontSize: '12px',
            fontWeight: 600,
            color: storyColor,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '4px',
          }}>
            Value Chain
          </div>
          <div style={{
            fontSize: '18px',
            fontWeight: 600,
            color: colors.text,
          }}>
            {valueChain.coreExchange}
          </div>
        </div>

        {/* Toggle */}
        <div style={{
          display: 'flex',
          gap: '8px',
          background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          padding: '4px',
          borderRadius: '8px',
        }}>
          <button
            onClick={() => setShowAfter(false)}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              background: !showAfter ? storyColor : 'transparent',
              color: !showAfter ? '#ffffff' : colors.textMuted,
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              background: showAfter ? colors.danger : 'transparent',
              color: showAfter ? '#ffffff' : colors.textMuted,
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            After
          </button>
        </div>
      </div>

      {/* Chain Visualization */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        minHeight: '120px',
        padding: '24px 0',
      }}>
        {/* Producer */}
        <ChainNode
          name={valueChain.producer}
          color={storyColor}
          isEndpoint
        />

        <Arrow />

        {/* Layers */}
        {showAfter ? (
          // After state - compressed
          <>
            {afterLayers.map((layer, i) => (
              <motion.div
                key={`after-${layer.name}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <ChainNode
                  name={layer.name}
                  type={layer.type}
                  color={layerTypeColors[layer.type]}
                  compressed={layer.compressed}
                />
                {i < afterLayers.length - 1 && <Arrow />}
              </motion.div>
            ))}
          </>
        ) : (
          // Before state - expanded
          <>
            {beforeLayers.map((layer, i) => (
              <motion.div
                key={`before-${layer.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <ChainNode
                  name={layer.name}
                  type={layer.type}
                  color={layerTypeColors[layer.type]}
                  jobs={layer.jobs}
                  compressed={layer.compressed}
                  showCompressed={showAfter}
                />
                {i < beforeLayers.length - 1 && <Arrow />}
              </motion.div>
            ))}
          </>
        )}

        <Arrow />

        {/* Consumer */}
        <ChainNode
          name={valueChain.consumer}
          color={storyColor}
          isEndpoint
        />
      </div>

      {/* Compression Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          marginTop: '24px',
          paddingTop: '24px',
          borderTop: `1px solid ${colors.border}`,
          flexWrap: 'wrap',
        }}
      >
        <StatBox
          label="Layers Before"
          value={valueChain.compressionMetrics.layersBefore.toString()}
          color={colors.textMuted}
        />
        <StatBox
          label="Layers After"
          value={valueChain.compressionMetrics.layersAfter.toString()}
          color={colors.danger}
        />
        {valueChain.compressionMetrics.jobsBefore && (
          <StatBox
            label="Jobs Before"
            value={valueChain.compressionMetrics.jobsBefore.toLocaleString()}
            color={colors.textMuted}
          />
        )}
        {valueChain.compressionMetrics.jobsAfter !== undefined && (
          <StatBox
            label="Jobs After"
            value={valueChain.compressionMetrics.jobsAfter.toLocaleString()}
            color={colors.danger}
          />
        )}
        <StatBox
          label="Disruptor"
          value={valueChain.technology}
          color={storyColor}
          isText
        />
      </motion.div>
    </motion.div>
  );
}

function ChainNode({
  name,
  type,
  color,
  jobs,
  compressed,
  showCompressed,
  isEndpoint,
}: {
  name: string;
  type?: string;
  color: string;
  jobs?: string[];
  compressed?: boolean;
  showCompressed?: boolean;
  isEndpoint?: boolean;
}) {
  const { isDark } = useTheme();
  const colors = useThemeColors();

  return (
    <motion.div
      layout
      style={{
        padding: isEndpoint ? '16px 20px' : '12px 16px',
        background: isEndpoint
          ? color
          : (compressed && showCompressed)
            ? `${colors.danger}20`
            : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
        borderRadius: '12px',
        border: isEndpoint
          ? 'none'
          : `2px solid ${(compressed && showCompressed) ? colors.danger : color}`,
        position: 'relative',
        minWidth: '100px',
        textAlign: 'center',
      }}
    >
      {/* Compressed X */}
      {compressed && showCompressed && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: colors.danger,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 700,
          }}
        >
          ✕
        </motion.div>
      )}

      <div style={{
        fontSize: isEndpoint ? '14px' : '13px',
        fontWeight: 600,
        color: isEndpoint ? '#ffffff' : colors.text,
        textDecoration: (compressed && showCompressed) ? 'line-through' : 'none',
      }}>
        {name}
      </div>

      {type && !isEndpoint && (
        <div style={{
          fontSize: '10px',
          color: color,
          marginTop: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {type}
        </div>
      )}
    </motion.div>
  );
}

function Arrow() {
  const colors = useThemeColors();
  return (
    <div style={{
      color: colors.border,
      fontSize: '20px',
      fontWeight: 300,
    }}>
      →
    </div>
  );
}

function StatBox({
  label,
  value,
  color,
  isText,
}: {
  label: string;
  value: string;
  color: string;
  isText?: boolean;
}) {
  const colors = useThemeColors();
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: isText ? '14px' : '24px',
        fontWeight: 700,
        color,
        fontFamily: isText ? 'inherit' : "'JetBrains Mono', monospace",
      }}>
        {value}
      </div>
      <div style={{
        fontSize: '11px',
        color: colors.textMuted,
        marginTop: '4px',
      }}>
        {label}
      </div>
    </div>
  );
}

export default ValueChainDiagram;
