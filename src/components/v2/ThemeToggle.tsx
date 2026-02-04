/**
 * Theme Toggle Button
 * Switches between light and dark mode
 */

import { motion } from 'framer-motion';
import { useTheme } from '../../providers/ThemeProvider';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: 1000,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: 'none',
        background: isDark ? '#1e293b' : '#ffffff',
        boxShadow: isDark
          ? '0 4px 20px rgba(0,0,0,0.5)'
          : '0 4px 20px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.span
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? '☀️' : '🌙'}
      </motion.span>
    </motion.button>
  );
}

export default ThemeToggle;
