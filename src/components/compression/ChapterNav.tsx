/**
 * ChapterNav
 * Floating chapter indicator that tracks scroll position
 * Shows current chapter and allows quick navigation
 */

import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme, useThemeColors } from '../../providers/ThemeProvider';

interface Chapter {
  id: string;
  label: string;
  shortLabel: string;
}

const chapters: Chapter[] = [
  { id: 'rise', label: 'The Rise', shortLabel: '1' },
  { id: 'peak', label: 'The Peak', shortLabel: '2' },
  { id: 'disruption', label: 'The Disruption', shortLabel: '3' },
  { id: 'collapse', label: 'The Collapse', shortLabel: '4' },
  { id: 'aftermath', label: 'The Aftermath', shortLabel: '5' },
];

interface ChapterNavProps {
  storyColor?: string;
}

export function ChapterNav({ storyColor = '#92400e' }: ChapterNavProps) {
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const [activeChapter, setActiveChapter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Track scroll progress
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      // Show nav after scrolling past hero (roughly 15% of page)
      setIsVisible(progress > 0.1 && progress < 0.95);

      // Map scroll progress to chapters (excluding hero and nav sections)
      // Chapters roughly span 15% to 90% of the page
      const chapterProgress = (progress - 0.15) / 0.75;
      const chapterIndex = Math.min(
        Math.max(Math.floor(chapterProgress * chapters.length), 0),
        chapters.length - 1
      );
      setActiveChapter(chapterIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToChapter = (index: number) => {
    // Calculate approximate scroll position for each chapter
    // Chapters span roughly 15% to 90% of total scroll
    const chapterProgress = 0.15 + (index / chapters.length) * 0.75;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = chapterProgress * scrollHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'fixed',
            left: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 90,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {chapters.map((chapter, index) => {
            const isActive = index === activeChapter;
            const isPast = index < activeChapter;

            return (
              <motion.button
                key={chapter.id}
                onClick={() => scrollToChapter(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '0',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                {/* Dot/indicator */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    backgroundColor: isActive
                      ? storyColor
                      : isPast
                        ? `${storyColor}60`
                        : isDark
                          ? 'rgba(255,255,255,0.2)'
                          : 'rgba(0,0,0,0.15)',
                  }}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    boxShadow: isActive ? `0 0 12px ${storyColor}60` : 'none',
                  }}
                />

                {/* Label - shows on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        fontSize: '12px',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? storyColor : colors.textMuted,
                        whiteSpace: 'nowrap',
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: '0.02em',
                      }}
                    >
                      {chapter.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}

          {/* Progress line connecting dots */}
          <motion.div
            style={{
              position: 'absolute',
              left: '4px',
              top: '5px',
              width: '2px',
              height: `calc(100% - 10px)`,
              background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
              borderRadius: '1px',
              zIndex: -1,
            }}
          >
            {/* Active progress */}
            <motion.div
              animate={{
                height: `${(activeChapter / (chapters.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
              style={{
                width: '100%',
                background: `linear-gradient(180deg, ${storyColor}, ${storyColor}80)`,
                borderRadius: '1px',
              }}
            />
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default ChapterNav;
