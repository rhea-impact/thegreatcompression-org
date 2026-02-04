/**
 * Compression Story Types
 * Data model for each historical compression deep-dive
 */

// Value Chain Types
export interface ValueChainLayer {
  name: string;
  type: 'information' | 'access' | 'skill' | 'physical' | 'trust' | 'aggregation';
  jobs?: string[];        // Job titles at this layer
  compressed: boolean;    // Did technology eliminate this?
}

export interface ValueChain {
  producer: string;
  consumer: string;
  coreExchange: string;   // What actually needs to happen
  before: ValueChainLayer[];
  after: ValueChainLayer[];
  technology: string;
  compressionMetrics: {
    layersBefore: number;
    layersAfter: number;
    jobsBefore?: number;
    jobsAfter?: number;
  };
}

export interface KeyDate {
  year: number;
  event: string;
}

export interface ImageAsset {
  src: string;
  caption?: string;
  credit?: string;
  alt?: string;
}

export interface Quote {
  text: string;
  author: string;
  year?: number;
  role?: string;
}

export interface ChartDataPoint {
  year: number;
  value: number;
  label?: string;
}

export interface Stat {
  label: string;
  value: string;
  sublabel?: string;
}

export interface CompressionStory {
  // Identity
  id: string;
  slug: string;
  title: string;
  tagline: string;
  color: string;

  // Key stats (for cards/previews)
  peakYear: number;
  peakMetric: string;
  collapseYear: number;
  collapseMetric: string;
  compressionPercent: string;

  // The Rise
  rise: {
    headline: string;
    paragraphs: string[];
    keyDates: KeyDate[];
    images?: ImageAsset[];
  };

  // The Peak
  peak: {
    headline: string;
    paragraphs: string[];
    stats: Stat[];
    quote?: Quote;
    culturalMoment?: string;
  };

  // The Disruption
  disruption: {
    headline: string;
    technology: string;
    paragraphs: string[];
    keyDates: KeyDate[];
  };

  // The Collapse
  collapse: {
    headline: string;
    paragraphs: string[];
    chartData: ChartDataPoint[];
    keyDates: KeyDate[];
    dramaticStat?: {
      before: string;
      after: string;
      label: string;
    };
  };

  // The Aftermath
  aftermath: {
    headline: string;
    paragraphs: string[];
    survivors?: string[];
    replacedBy: string;
    lessons: string[];
  };

  // Media
  heroImage?: ImageAsset;
  galleryImages?: ImageAsset[];

  // Value Chain
  valueChain?: ValueChain;

  // Navigation
  nextStory?: string; // slug of next story
  prevStory?: string; // slug of previous story
}

// For the homepage grid
export interface CompressionCard {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  color: string;
  peakMetric: string;
  collapseMetric: string;
  compressionPercent: string;
  heroImage?: ImageAsset;
  chartData?: ChartDataPoint[]; // For mini rise-and-fall graph
}

// Extract card data from full story
export function toCard(story: CompressionStory): CompressionCard {
  return {
    id: story.id,
    slug: story.slug,
    title: story.title,
    tagline: story.tagline,
    color: story.color,
    peakMetric: story.peakMetric,
    collapseMetric: story.collapseMetric,
    compressionPercent: story.compressionPercent,
    heroImage: story.heroImage,
    chartData: story.collapse.chartData,
  };
}
