/**
 * FlipBookNav
 * Side navigation bubbles for the homepage flip book
 * Tracks which page the user is viewing
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme, useThemeColors } from '../providers/ThemeProvider';

interface FlipPage {
  id: string;
  label: string;
}

interface FlipBookNavProps {
  pages: FlipPage[];
  activeColor?: string;
}

export function FlipBookNav({ pages, activeColor = '#d97706' }: FlipBookNavProps) {
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const [activePage, setActivePage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalFlipHeight = pages.length * viewportHeight;

      // Hide after flip book section
      setIsVisible(scrollTop < totalFlipHeight);

      // Calculate which page we're on
      const pageIndex = Math.min(
        Math.floor(scrollTop / viewportHeight),
        pages.length - 1
      );
      setActivePage(Math.max(0, pageIndex));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pages.length]);

  const scrollToPage = (index: number) => {
    const targetScroll = index * window.innerHeight;
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
            top: '0',
            bottom: '0',
            zIndex: 90,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          {pages.map((page, index) => {
            const isActive = index === activePage;
            const isPast = index < activePage;

            return (
              <motion.button
                key={page.id}
                onClick={() => scrollToPage(index)}
                whileHover={{ scale: 1.2 }}
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
                {/* Dot */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.3 : 1,
                    backgroundColor: isActive
                      ? activeColor
                      : isPast
                        ? `${activeColor}80`
                        : isDark
                          ? 'rgba(255,255,255,0.2)'
                          : 'rgba(0,0,0,0.15)',
                  }}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    boxShadow: isActive ? `0 0 10px ${activeColor}60` : 'none',
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
                        fontSize: '11px',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? activeColor : colors.textMuted,
                        whiteSpace: 'nowrap',
                        maxWidth: '150px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {page.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}

          {/* Progress line */}
          <motion.div
            style={{
              position: 'absolute',
              left: '3px',
              top: '4px',
              width: '2px',
              height: `calc(100% - 8px)`,
              background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
              borderRadius: '1px',
              zIndex: -1,
            }}
          >
            <motion.div
              animate={{
                height: `${(activePage / Math.max(pages.length - 1, 1)) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
              style={{
                width: '100%',
                background: `linear-gradient(180deg, ${activeColor}, ${activeColor}80)`,
                borderRadius: '1px',
              }}
            />
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default FlipBookNav;
