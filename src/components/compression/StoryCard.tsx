/**
 * Story Card
 * For the homepage grid — links to full compression story
 * Includes mini rise-and-fall chart
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { CompressionCard, ChartDataPoint } from '../../types/compression';
import { useTheme, useThemeColors } from '../../providers/ThemeProvider';

interface StoryCardProps {
  story: CompressionCard;
  index?: number;
}

// Mini sparkline chart component
function MiniChart({ data, color, dangerColor }: { data: ChartDataPoint[]; color: string; dangerColor: string }) {
  if (!data || data.length < 2) return null;

  const width = 280;
  const height = 80;
  const padding = { top: 10, right: 10, bottom: 10, left: 10 };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Find max value for scaling
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = 0;

  // Scale functions
  const xScale = (index: number) => padding.left + (index / (data.length - 1)) * chartWidth;
  const yScale = (value: number) =>
    padding.top + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;

  // Find peak index
  const peakIndex = data.findIndex((d) => d.value === maxValue);

  // Create path
  const pathData = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.value)}`)
    .join(' ');

  // Create area path (for gradient fill)
  const areaPath = `${pathData} L ${xScale(data.length - 1)} ${height - padding.bottom} L ${padding.left} ${height - padding.bottom} Z`;

  return (
    <svg width={width} height={height} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset={`${(peakIndex / (data.length - 1)) * 100}%`} stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={dangerColor} stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <path d={areaPath} fill={`url(#gradient-${color.replace('#', '')})`} />

      {/* Line - rise portion */}
      <path
        d={data
          .slice(0, peakIndex + 1)
          .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.value)}`)
          .join(' ')}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Line - fall portion */}
      <path
        d={data
          .slice(peakIndex)
          .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(peakIndex + i)} ${yScale(d.value)}`)
          .join(' ')}
        fill="none"
        stroke={dangerColor}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Peak dot */}
      <circle cx={xScale(peakIndex)} cy={yScale(maxValue)} r="4" fill={color} />

      {/* End dot */}
      <circle cx={xScale(data.length - 1)} cy={yScale(data[data.length - 1].value)} r="4" fill={dangerColor} />
    </svg>
  );
}

export function StoryCard({ story, index = 0 }: StoryCardProps) {
  const { isDark } = useTheme();
  const colors = useThemeColors();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/compressions/${story.slug}`}
        style={{ textDecoration: 'none', display: 'block' }}
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.2 }}
          style={{
            background: colors.cardBg,
            borderRadius: '20px',
            overflow: 'hidden',
            border: `1px solid ${colors.border}`,
            boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)',
            cursor: 'pointer',
          }}
        >
          {/* Color bar */}
          <div
            style={{
              height: '4px',
              background: story.color,
            }}
          />

          <div style={{ padding: '24px' }}>
            {/* Title */}
            <div
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: colors.text,
                marginBottom: '8px',
              }}
            >
              {story.title}
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: '14px',
                color: colors.textMuted,
                marginBottom: '16px',
                lineHeight: 1.5,
              }}
            >
              {story.tagline}
            </div>

            {/* Mini Chart */}
            {story.chartData && story.chartData.length > 0 && (
              <div
                style={{
                  marginBottom: '16px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.03)',
                  padding: '8px',
                }}
              >
                <MiniChart data={story.chartData} color={story.color} dangerColor={colors.danger} />
              </div>
            )}

            {/* Stats */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: colors.textLight,
                  fontFamily: "'JetBrains Mono', monospace",
                  textDecoration: 'line-through',
                  textDecorationColor: colors.danger,
                }}
              >
                {story.peakMetric.split(' ')[0]}
              </span>
              <span style={{ color: colors.border, fontSize: '20px' }}>→</span>
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: colors.danger,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {story.collapseMetric}
              </span>
            </div>

            {/* CTA */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: `1px solid ${colors.border}`,
              }}
            >
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: story.color,
                }}
              >
                Read the story →
              </span>
              <span
                style={{
                  fontSize: '12px',
                  color: colors.textLight,
                }}
              >
                {story.compressionPercent}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default StoryCard;
