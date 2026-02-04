/**
 * TimelineIndicator
 * Shows current era in the narrative with animated dot(s) on a timeline
 * Supports single points and ranges
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useThemeColors } from '../providers/ThemeProvider';

export interface TimelineEra {
  start: number;
  end?: number;
  label?: string;
}

interface TimelineIndicatorProps {
  era: TimelineEra | null;
  minYear?: number;
  maxYear?: number;
}

export function TimelineIndicator({
  era,
  minYear = 1990,
  maxYear = 2026
}: TimelineIndicatorProps) {
  const colors = useThemeColors();

  if (!era) return null;

  const totalYears = maxYear - minYear;
  const startPercent = ((era.start - minYear) / totalYears) * 100;
  const endPercent = era.end
    ? ((era.end - minYear) / totalYears) * 100
    : startPercent;

  const isRange = era.end && era.end !== era.start;
  const isToday = era.start >= 2024 || (era.end && era.end >= 2024);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto 32px',
        padding: '0 20px',
      }}
    >
      {/* Year labels at ends */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
        fontSize: '11px',
        fontFamily: "'JetBrains Mono', monospace",
        color: colors.textMuted,
        opacity: 0.6,
      }}>
        <span>{minYear}</span>
        <span>{maxYear}</span>
      </div>

      {/* Timeline track */}
      <div style={{
        position: 'relative',
        height: '6px',
        background: `linear-gradient(to right, ${colors.textMuted}40, ${colors.textMuted}20)`,
        borderRadius: '3px',
      }}>
        {/* Active range highlight - connects dot centers */}
        <AnimatePresence mode="wait">
          {isRange && (
            <motion.div
              key={`range-${era.start}-${era.end}`}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                left: `${startPercent}%`,
                width: `${endPercent - startPercent}%`,
                top: '50%',
                height: '4px',
                transform: 'translateY(-50%)',
                transformOrigin: 'left center',
                background: isToday ? colors.accent : colors.text,
                borderRadius: '2px',
              }}
            />
          )}
        </AnimatePresence>

        {/* Start dot */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`start-${era.start}`}
            initial={{ left: `${startPercent}%`, scale: 0 }}
            animate={{ left: `${startPercent}%`, scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: 0.1
            }}
            style={{
              position: 'absolute',
              top: '50%',
              marginLeft: '-6px', // Half of width to center
              marginTop: '-6px',  // Half of height to center
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: isToday && !isRange ? colors.accent : colors.text,
              boxShadow: `0 0 10px ${isToday && !isRange ? colors.accent : colors.text}50`,
              border: `2px solid ${colors.bg}`,
            }}
          />
        </AnimatePresence>

        {/* End dot (only for ranges) */}
        <AnimatePresence>
          {isRange && (
            <motion.div
              key={`end-${era.end}`}
              initial={{ left: `${startPercent}%`, scale: 0 }}
              animate={{ left: `${endPercent}%`, scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                delay: 0.2
              }}
              style={{
                position: 'absolute',
                top: '50%',
                marginLeft: '-6px', // Half of width to center
                marginTop: '-6px',  // Half of height to center
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: isToday ? colors.accent : colors.text,
                boxShadow: `0 0 10px ${isToday ? colors.accent : colors.text}50`,
                border: `2px solid ${colors.bg}`,
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Era label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`label-${era.start}-${era.end || ''}-${era.label || ''}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          style={{
            marginTop: '12px',
            textAlign: 'center',
            fontSize: '13px',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            color: isToday ? colors.accent : colors.text,
          }}
        >
          {era.label ? (
            era.label
          ) : isRange ? (
            `${era.start} → ${era.end}`
          ) : era.start >= 2024 ? (
            'Today'
          ) : (
            era.start
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default TimelineIndicator;
