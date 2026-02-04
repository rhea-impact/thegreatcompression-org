/**
 * Hero FlipBook Slides
 * Centralized metadata for all slides in the hero narrative
 */

import {
  Plane,
  PieChart,
  Globe,
  HelpCircle,
  DollarSign,
  Zap,
  UserX,
  Users,
  Scissors,
  History,
  Radio,
  Tv,
  Camera,
  Repeat,
  Bot,
  Sparkles,
  Layers,
  TrendingUp,
  BookOpen,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

export interface SlideEra {
  start: number;
  end?: number;
  label?: string;
}

export interface HeroSlide {
  id: string;
  label: string;           // For nav
  icon: LucideIcon;
  era?: SlideEra;
  isLast?: boolean;
}

// Current year for "Today" references
export const CURRENT_YEAR = 2026;

/**
 * All hero slides with their metadata
 * Order matters - this is the scroll sequence
 */
export const heroSlides: HeroSlide[] = [
  // === TRAVEL AGENTS STORY (1996 → Today) ===
  {
    id: 'hook',
    label: 'Travel agents',
    icon: Plane,
    era: { start: 1996, label: '1996' },
  },
  {
    id: 'stat-old',
    label: '80% booked by agents',
    icon: PieChart,
    era: { start: 1996, label: '1996' },
  },
  {
    id: 'shift',
    label: 'The internet',
    icon: Globe,
    era: { start: 1996, end: 2000, label: 'Late 1990s' },
  },
  {
    id: 'stat-new',
    label: '5% today',
    icon: PieChart,
    era: { start: CURRENT_YEAR, label: 'Today' },
  },
  {
    id: 'question',
    label: 'What happened?',
    icon: HelpCircle,
    era: { start: 1996, end: CURRENT_YEAR },
  },
  {
    id: 'commissions',
    label: 'Commissions cut',
    icon: DollarSign,
    era: { start: 1998, end: 2002, label: 'Early 2000s' },
  },
  {
    id: 'faster',
    label: 'Faster & cheaper',
    icon: Zap,
    era: { start: 1998, end: 2005, label: '1998–2005' },
  },
  {
    id: 'no-middleman',
    label: 'No middleman needed',
    icon: UserX,
    era: { start: 2005, end: 2010 },
  },
  {
    id: 'jobs',
    label: '124,000 jobs',
    icon: Users,
    era: { start: 1996, end: 2015, label: '1996 → 2015' },
  },
  {
    id: 'collapsed',
    label: 'Layers collapsed',
    icon: Scissors,
    era: { start: 1996, end: CURRENT_YEAR },
  },

  // === HISTORICAL EXAMPLES ===
  {
    id: 'before',
    label: 'Happened before',
    icon: History,
    // No era - transitional slide
  },
  {
    id: 'telegraph',
    label: 'Telegraph',
    icon: Radio,
    era: { start: 1876, end: 1920, label: '1876 → 1920s' },
  },
  {
    id: 'streaming',
    label: 'Streaming',
    icon: Tv,
    era: { start: 2007, end: 2013, label: '2007 → 2013' },
  },
  {
    id: 'kodak',
    label: 'Kodak',
    icon: Camera,
    era: { start: 1990, end: 2012, label: '1990s → 2012' },
  },

  // === THE PATTERN (conceptual - no specific era) ===
  {
    id: 'pattern',
    label: 'The pattern',
    icon: Repeat,
    // No era - conceptual slide
  },
  {
    id: 'value-chain',
    label: 'Value chain',
    icon: Layers,
    // No era - conceptual slide
  },
  {
    id: 'chain-visual',
    label: 'The steps',
    icon: Layers,
    // No era - conceptual slide
  },
  {
    id: 'shorter',
    label: 'Gets shorter',
    icon: Scissors,
    // No era - conceptual slide
  },
  {
    id: 'compressed',
    label: 'Fewer jobs',
    icon: Zap,
    // No era - conceptual slide
  },
  {
    id: 'compression-def',
    label: 'Compression',
    icon: Bot,
    // No era - conceptual slide
  },

  // === AI ERA (2022 → Future) ===
  {
    id: 'ai',
    label: 'AI is compressing',
    icon: Sparkles,
    era: { start: 2022, end: CURRENT_YEAR, label: '2022 → Today' },
  },
  {
    id: 'we-call-it',
    label: 'We call it...',
    icon: TrendingUp,
    era: { start: CURRENT_YEAR, label: String(CURRENT_YEAR) },
  },
  {
    id: 'title',
    label: 'The Great Compression',
    icon: Layers,
    era: { start: CURRENT_YEAR, label: String(CURRENT_YEAR) },
  },
  {
    id: 'accelerating',
    label: '2026',
    icon: TrendingUp,
    era: { start: CURRENT_YEAR, label: String(CURRENT_YEAR) },
  },
  {
    id: 'documented',
    label: 'Documented',
    icon: BookOpen,
    era: { start: 1876, end: CURRENT_YEAR, label: '150 Years of Compression' },
  },
  {
    id: 'imagine',
    label: 'Imagine',
    icon: Rocket,
    era: { start: CURRENT_YEAR, end: 2030, label: 'The Future' },
    isLast: true,
  },
];

// Export for FlipBookNav
export const flipBookPages = heroSlides.map(({ id, label }) => ({ id, label }));
