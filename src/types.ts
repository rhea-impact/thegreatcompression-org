/**
 * The Great Compression — Type Definitions
 *
 * These types model all content displayed on the site.
 * Source of truth: notes/2-spec.md
 */

// ============================================
// CORE TYPES
// ============================================

export type BackgroundColor = 'white' | 'gray' | 'dark';
export type CompressionStatus = 'done' | 'slow' | 'resistant';
export type FrictionLevel = 'low' | 'medium' | 'high' | 'very-high';
export type ProjectionStatus = 'projected' | 'realized';
export type Audience = 'workers' | 'investors' | 'incumbents' | 'society';
export type CapitalismRole = 'accelerator' | 'brake';
export type ChainVariant = 'before' | 'after';
export type ResistanceType = 'regulatory' | 'essential-complexity' | 'trust' | 'physical-presence';

// ============================================
// DESIGN TOKENS
// ============================================

export const colors = {
  background: {
    white: '#ffffff',
    gray: '#f8fafc',
    dark: '#0f172a',
  },
  text: {
    primary: '#0f172a',
    body: '#475569',
    secondary: '#64748b',
    muted: '#94a3b8',
  },
  accent: {
    blue: '#3b82f6',
    warning: '#f59e0b',
    danger: '#ef4444',
    success: '#10b981',
    purple: '#8b5cf6',
    orange: '#f97316',
  },
  historyCards: {
    telegraph: '#f59e0b',
    encyclopedias: '#10b981',
    phoneBooks: '#8b5cf6',
    kodak: '#ef4444',
    recordStores: '#3b82f6',
    stockBrokers: '#f97316',
    typesetters: '#64748b',
  },
} as const;

// ============================================
// CHAPTER STRUCTURE
// ============================================

export interface Chapter {
  id: string;                    // URL-safe identifier: "the-sigmoid"
  sectionNumber: number;         // 0-13
  chapterNumber?: number;        // 1-10 (undefined for Hero, Disclaimers, Footer)
  label?: string;                // "Chapter 5"
  title: string;                 // "The Sigmoid"
  background: BackgroundColor;
  emotionalBeat: string;         // "Clarity"
}

// ============================================
// VALUE CHAIN VISUALIZATION
// ============================================

export interface ChainNode {
  icon: string;                  // emoji: "❄️"
  name: string;                  // "Snowflake"
  description: string;           // "Data warehouse"
  margin?: string;               // "+30%"
  price?: string;                // "$2,000"
  highlighted?: boolean;
}

export interface ValueChain {
  nodes: ChainNode[];
  variant: ChainVariant;         // Affects styling
}

// ============================================
// HISTORICAL DATA
// ============================================

export interface HistoricalCompression {
  id: string;                    // "telegraph"
  era: string;                   // "1900s-2006"
  industry: string;              // "Telegraph"
  before: string;                // "200k operators"
  after: string;                 // "0 (Western Union dead 2006)"
  compression: string;           // "100%"
  color: string;                 // hex for dot indicator
  featured?: boolean;            // Larger card treatment
}

export interface CompressionAcceleration {
  from: string;                  // "Telegraph"
  to: string;                    // "telephone"
  duration: string;              // "~100 years"
}

// ============================================
// PROFESSION / BLESSING MAN DATA
// ============================================

export interface ProfessionCompression {
  profession: string;            // "CPA (tax prep)"
  before: string;                // "$500-$2,000"
  after: string;                 // "$150-$300"
  compression: string;           // "70-85%"
  status: ProjectionStatus;
  timeline?: string;             // "2025-28"
}

// ============================================
// SIGMOID VISUALIZATION
// ============================================

export interface SigmoidTier {
  name: string;                  // "Luxury"
  percentage: string;            // "10%"
  description: string;           // "Human service as status"
  color: string;                 // hex
}

export interface SigmoidData {
  before: {
    label: string;               // "100% humans"
    percentage: string;          // "100%"
  };
  after: {
    // Order matches visual: left-to-right (Luxury | Collapsed | Budget)
    luxury: SigmoidTier;         // Left: ~10%, human service as status
    collapsed: SigmoidTier;      // Middle: ~80%, compressed to AI
    budget: SigmoidTier;         // Right: ~10%, DIY/self-serve
  };
}

export interface SigmoidExampleStats {
  jobsBefore: string;            // "124,000"
  jobsBeforeYear: string;        // "2000"
  jobsAfter: string;             // "65,000"
  jobsAfterYear: string;         // "2024"
  changePercent: string;         // "-47%"
  onlinePercent: string;         // "70%"
  luxuryGrowth?: string;         // "211%"
}

export interface SigmoidExample {
  industry: string;              // "Travel Agents"
  stats: SigmoidExampleStats;
  callout: string;               // "The job title persists..."
}

// ============================================
// HUMAN FLEX DATA
// ============================================

export interface FlexExample {
  domain: string;                // "Food"
  icon: string;                  // "🍽️"
  mass: string;                  // "Meal kits, fast food"
  flex: string;                  // "Personal chef, farm-to-table"
}

// ============================================
// RESISTANCE / REGULATION DATA
// ============================================

export interface ResistanceFactor {
  type: ResistanceType;          // 'regulatory' | 'essential-complexity' | 'trust' | 'physical-presence'
  label: string;                 // "Regulatory protection" (display text)
  example: string;               // "Car dealers"
  explanation: string;           // "State franchise laws prevent direct sales"
}

export interface RegulatedIndustry {
  industry: string;              // "Tax preparation"
  compressionStatus: CompressionStatus;
  frictionLevel: FrictionLevel;
}

// ============================================
// CAPITALISM DUAL ROLE
// ============================================

export interface CapitalismForce {
  role: CapitalismRole;
  title: string;                 // "Accelerator" or "Brake"
  points: string[];
  color: string;                 // hex for styling
}

export interface CloudVsLocal {
  cloud: {
    description: string;         // "Recurring revenue"
    outcome: string;             // "Delayed compression"
  };
  local: {
    description: string;         // "One-time event"
    outcome: string;             // "Full compression"
  };
  insight: string;               // "Capitalism will push toward subscriptions..."
}

// ============================================
// IMPLICATIONS DATA
// ============================================

export interface Implication {
  audience: Audience;
  title: string;                 // "For Workers"
  points: string[];              // Bullet points
}

// ============================================
// DISCLAIMERS / OPEN QUESTIONS
// ============================================

export interface Disclaimer {
  text: string;
}

export interface OpenQuestion {
  question: string;
  context?: string;              // Optional additional context
}

// ============================================
// STATS
// ============================================

export interface Stat {
  value: string;                 // "$2,000"
  label: string;                 // "→ $200"
  sublabel?: string;             // "90% reduction"
}

// ============================================
// BLESSING MAN PATTERN
// ============================================

export interface BlessingManPattern {
  before: {
    flow: string[];              // ["Client", "Professional (does work)", "Output"]
    price: string;               // "$1,000-$2,000"
    description: string;         // "for labor + expertise"
  };
  after: {
    flow: string[];              // ["Client", "AI (does work)", "Professional (blesses)", "Output"]
    price: string;               // "$200-$250"
    description: string;         // "for stamp + liability shield"
  };
  keyLine: string;               // "The credential retains value. The labor doesn't."
}

// ============================================
// COMPLETE SITE CONTENT
// ============================================

export interface SiteContent {
  // Chapter metadata for programmatic rendering
  chapters: Chapter[];

  hero: {
    title: string;
    subtitle: string;
    scrollIndicator: string;
  };

  history: {
    intro: string;
    quote: string;
    examples: HistoricalCompression[];
    acceleration: CompressionAcceleration[];
    closing: string;
  };

  sal: {
    paragraphs: string[];
    transition: string;
  };

  valueChainBefore: {
    chain: ValueChain;
    callout: string;
    quote: string;
  };

  collapse: {
    chain: ValueChain;
    stats: Stat[];
    keyLine: string;
  };

  sigmoid: {
    intro: string;
    data: SigmoidData;
    tierExplanations: {
      budget: string;
      luxury: string;
      middle: string;
    };
    example: SigmoidExample;
  };

  blessingMan: {
    intro: string;
    pattern: BlessingManPattern;
    examples: ProfessionCompression[];
    callout: string;
  };

  humanFlex: {
    intro: string;
    quote: string;
    scarcityInversion: {
      before: string;
      after: string;
    };
    examples: FlexExample[];
    callout: string;
    openQuestion: string;
  };

  resistance: {
    intro: string;
    factors: ResistanceFactor[];
    industries: RegulatedIndustry[];
    keyInsight: string;
    legalZoomPrecedent: string;
  };

  capitalism: {
    intro: string;
    accelerator: CapitalismForce;
    brake: CapitalismForce;
    cloudVsLocal: CloudVsLocal;
    keyInsight: string;
  };

  question: {
    headline: string;
    question: string;
    definitions: {
      essential: string;
      artificial: string;
    };
    finalLine: string;
  };

  implications: Implication[];

  disclaimers: {
    whatThisIsNot: Disclaimer[];   // "Not a prediction...", "Not anti-technology..."
    openQuestions: OpenQuestion[];
  };

  footer: {
    attribution: string;
    links: { label: string; url: string }[];
  };
}
