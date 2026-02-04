/**
 * Theme Provider
 * Dark mode support with system preference detection
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const stored = localStorage.getItem('theme') as Theme;
    if (stored) return stored;

    // Default to dark mode (the site's preferred theme)
    // Users can still switch to light if they prefer
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Theme colors - warm brown/amber for historical documentary feel
export const themes = {
  light: {
    bg: '#ffffff',
    bgAlt: '#faf8f5',           // Warm off-white, like aged paper
    bgDark: '#1c1917',          // Warm dark (stone-900)
    text: '#1c1917',            // Warm black
    textMuted: '#78716c',       // Stone-500
    textLight: '#a8a29e',       // Stone-400
    border: '#e7e5e4',          // Stone-200
    accent: '#92400e',          // Amber-800 - rich archival brown
    danger: '#dc2626',          // Red-600
    cardBg: '#ffffff',
    cardBorder: '#e7e5e4',
  },
  dark: {
    bg: '#0c0a09',              // Stone-950, warm black
    bgAlt: '#1c1917',           // Stone-900
    bgDark: '#000000',
    text: '#fafaf9',            // Stone-50
    textMuted: '#a8a29e',       // Stone-400
    textLight: '#78716c',       // Stone-500
    border: '#292524',          // Stone-800
    accent: '#d97706',          // Amber-600 - warm gold
    danger: '#f87171',          // Red-400
    cardBg: '#1c1917',
    cardBorder: '#292524',
  },
};

export function useThemeColors() {
  const { theme } = useTheme();
  return themes[theme];
}
