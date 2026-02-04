/**
 * Timeline Chart
 * Visualizes the collapse over time
 */

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from 'recharts';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { ChartDataPoint } from '../../types/compression';

interface TimelineChartProps {
  data: ChartDataPoint[];
  color: string;
  title?: string;
}

export function TimelineChart({ data, color, title }: TimelineChartProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Create a safe gradient ID (remove # from color)
  const gradientId = `chart-gradient-${color.replace('#', '')}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '32px',
        marginTop: '40px',
        marginBottom: '40px',
        border: '1px solid #e2e8f0',
      }}
    >
      {title && (
        <div
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#64748b',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          {title}
        </div>
      )}

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="year"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: '#cbd5e1' }}
            />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={50}
              tickFormatter={(value) => {
                if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
                if (value >= 1) return `${value}`;
                return `${value}`;
              }}
            />
            <Tooltip
              contentStyle={{
                background: '#0f172a',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '13px',
                padding: '12px 16px',
              }}
              formatter={(value: number) => {
                if (value >= 1000) return [`${(value / 1000).toFixed(0)}K`, 'Value'];
                return [value.toLocaleString(), 'Value'];
              }}
              labelFormatter={(year) => `Year: ${year}`}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={3}
              fill={`url(#${gradientId})`}
              animationDuration={1500}
              animationBegin={isInView ? 0 : 99999}
              dot={{ fill: color, strokeWidth: 0, r: 3 }}
              activeDot={{ fill: color, strokeWidth: 2, stroke: '#ffffff', r: 6 }}
            />
            {/* Mark the end */}
            <ReferenceLine
              x={data[data.length - 1]?.year}
              stroke="#ef4444"
              strokeWidth={2}
              strokeDasharray="5 5"
              label={{
                value: 'END',
                position: 'top',
                fill: '#ef4444',
                fontSize: 11,
                fontWeight: 600,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Key dates below chart */}
      {data.some(d => d.label) && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          {data
            .filter((d) => d.label)
            .map((d, i) => (
              <div
                key={i}
                style={{
                  fontSize: '12px',
                  color: '#64748b',
                }}
              >
                <span style={{ fontWeight: 600, color: '#0f172a' }}>{d.year}:</span> {d.label}
              </div>
            ))}
        </div>
      )}
    </motion.div>
  );
}

export default TimelineChart;
