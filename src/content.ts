/**
 * The Great Compression — Site Content
 *
 * All content for the site, typed against types.ts
 * Source of truth: notes/1-idea.md, notes/2-spec.md, notes/*.md research
 */

import type {
  SiteContent,
  Chapter,
  HistoricalCompression,
  CompressionAcceleration,
  ValueChain,
  Stat,
  SigmoidData,
  SigmoidExample,
  ProfessionCompression,
  FlexExample,
  ResistanceFactor,
  RegulatedIndustry,
  CapitalismForce,
  CloudVsLocal,
  Implication,
  Disclaimer,
  OpenQuestion,
  BlessingManPattern,
} from './types';

// ============================================
// CHAPTER METADATA
// ============================================

export const chapters: Chapter[] = [
  {
    id: 'hero',
    sectionNumber: 0,
    title: 'The Great Compression',
    background: 'white',
    emotionalBeat: 'Curiosity',
  },
  {
    id: 'history',
    sectionNumber: 1,
    chapterNumber: 1,
    label: 'Chapter 1',
    title: 'This Has Happened Before',
    background: 'gray',
    emotionalBeat: 'Recognition',
  },
  {
    id: 'meet-sal',
    sectionNumber: 2,
    chapterNumber: 2,
    label: 'Chapter 2',
    title: 'Meet Sal',
    background: 'white',
    emotionalBeat: 'Connection',
  },
  {
    id: 'value-chain',
    sectionNumber: 3,
    chapterNumber: 3,
    label: 'Chapter 3',
    title: 'The Value Chain',
    background: 'gray',
    emotionalBeat: 'Understanding',
  },
  {
    id: 'collapse',
    sectionNumber: 4,
    chapterNumber: 4,
    label: 'Chapter 4',
    title: 'The Collapse',
    background: 'white',
    emotionalBeat: 'Impact',
  },
  {
    id: 'sigmoid',
    sectionNumber: 5,
    chapterNumber: 5,
    label: 'Chapter 5',
    title: 'The Sigmoid',
    background: 'gray',
    emotionalBeat: 'Clarity',
  },
  {
    id: 'blessing-man',
    sectionNumber: 6,
    chapterNumber: 6,
    label: 'Chapter 6',
    title: 'The Blessing Man',
    background: 'white',
    emotionalBeat: 'Unease',
  },
  {
    id: 'human-flex',
    sectionNumber: 7,
    chapterNumber: 7,
    label: 'Chapter 7',
    title: 'Human Help as the New Flex',
    background: 'gray',
    emotionalBeat: 'Recognition',
  },
  {
    id: 'resistance',
    sectionNumber: 8,
    chapterNumber: 8,
    label: 'Chapter 8',
    title: 'What Resists (And Why)',
    background: 'white',
    emotionalBeat: 'Nuance',
  },
  {
    id: 'capitalism',
    sectionNumber: 9,
    chapterNumber: 9,
    label: 'Chapter 9',
    title: "Capitalism's Dual Role",
    background: 'gray',
    emotionalBeat: 'Understanding',
  },
  {
    id: 'question',
    sectionNumber: 10,
    chapterNumber: 10,
    label: 'Chapter 10',
    title: 'The Question',
    background: 'dark',
    emotionalBeat: 'Discomfort',
  },
  {
    id: 'implications',
    sectionNumber: 11,
    title: 'What To Do About It',
    background: 'white',
    emotionalBeat: 'Hope/Agency',
  },
  {
    id: 'disclaimers',
    sectionNumber: 12,
    title: 'Disclaimers & Open Questions',
    background: 'gray',
    emotionalBeat: 'Trust',
  },
  {
    id: 'footer',
    sectionNumber: 13,
    title: 'Footer',
    background: 'white',
    emotionalBeat: 'Closure',
  },
];

// ============================================
// HISTORICAL COMPRESSIONS
// ============================================

export const historicalExamples: HistoricalCompression[] = [
  {
    id: 'telegraph',
    era: '1900s-2006',
    industry: 'Telegraph',
    before: '200,000 operators',
    after: '0 (Western Union dead 2006)',
    compression: '100%',
    color: '#f59e0b', // amber
    featured: true,
  },
  {
    id: 'encyclopedias',
    era: '1990s-2012',
    industry: 'Encyclopedias',
    before: '$1,400/set',
    after: 'Wikipedia $0',
    compression: '100%',
    color: '#10b981', // emerald
  },
  {
    id: 'phone-books',
    era: '1990s-2000s',
    industry: 'Phone Books',
    before: '$14B/yr industry',
    after: '$0',
    compression: '100%',
    color: '#8b5cf6', // violet
  },
  {
    id: 'kodak',
    era: '1988-2013',
    industry: 'Kodak',
    before: '145,300 employees',
    after: '5,400 employees',
    compression: '96%',
    color: '#ef4444', // red
  },
  {
    id: 'record-stores',
    era: '1999-2006',
    industry: 'Record Stores',
    before: '$40B sales, 6,000+ stores',
    after: 'Streaming dominant',
    compression: '95%',
    color: '#3b82f6', // blue
  },
  {
    id: 'stock-brokers',
    era: '1975-2019',
    industry: 'Stock Brokers',
    before: '$50/trade',
    after: '$0/trade',
    compression: '100%',
    color: '#f97316', // orange
  },
  {
    id: 'typesetters',
    era: '1970s-1990s',
    industry: 'Typesetters',
    before: '150,000+ machines',
    after: '0 (desktop publishing)',
    compression: '100%',
    color: '#64748b', // slate
  },
];

export const compressionAcceleration: CompressionAcceleration[] = [
  { from: 'Telegraph', to: 'telephone', duration: '~100 years' },
  { from: 'Newspapers', to: 'internet', duration: '~20 years' },
  { from: 'Record stores', to: 'streaming', duration: '~10 years' },
  { from: 'Stock commissions', to: 'zero', duration: '~5 years' },
];

// ============================================
// VALUE CHAINS
// ============================================

export const valueChainBefore: ValueChain = {
  variant: 'before',
  nodes: [
    {
      icon: 'S',
      name: 'Snowflake',
      description: 'Data warehouse',
      margin: '+30%',
    },
    {
      icon: 'SF',
      name: 'Salesforce',
      description: 'Visualization',
      margin: '+25%',
    },
    {
      icon: 'TR',
      name: 'Thomson Reuters',
      description: 'Compliance tools',
      margin: '+35%',
    },
    {
      icon: 'AF',
      name: 'Accounting Firm',
      description: '4,500 clients',
      margin: '+40%',
    },
    {
      icon: 'You',
      name: 'You',
      description: 'Pays $2,000',
      price: '$2,000',
    },
  ],
};

export const valueChainAfter: ValueChain = {
  variant: 'after',
  nodes: [
    {
      icon: 'You',
      name: 'You',
      description: 'Upload docs',
    },
    {
      icon: 'AI',
      name: 'Local AI',
      description: 'Applies tax code',
      highlighted: true,
    },
    {
      icon: 'CPA',
      name: 'Accountant',
      description: '$200 review',
      price: '$200',
    },
  ],
};

export const collapseStats: Stat[] = [
  { value: '$2,000', label: '→ $200', sublabel: '90% cost reduction' },
  { value: '5 → 3', label: 'Nodes', sublabel: 'Zero intermediary margin' },
  { value: '~90%', label: 'Value evaporated', sublabel: 'From the chain' },
];

// ============================================
// SIGMOID DATA
// ============================================

export const sigmoidData: SigmoidData = {
  before: {
    label: '100% served by humans',
    percentage: '100%',
  },
  after: {
    luxury: {
      name: 'Luxury',
      percentage: '10%',
      description: 'Human service as status signal',
      color: '#3b82f6', // blue
    },
    collapsed: {
      name: 'Collapsed',
      percentage: '80%',
      description: 'Compressed to AI',
      color: '#e2e8f0', // gray
    },
    budget: {
      name: 'Budget',
      percentage: '10%',
      description: 'DIY / self-serve',
      color: '#10b981', // emerald
    },
  },
};

export const sigmoidExample: SigmoidExample = {
  industry: 'Travel Agents',
  stats: {
    jobsBefore: '124,000',
    jobsBeforeYear: '2000',
    jobsAfter: '65,000',
    jobsAfterYear: '2024',
    changePercent: '-47%',
    onlinePercent: '70%',
    luxuryGrowth: '211%',
  },
  callout:
    'The job title persists; the addressable market collapsed. Survivors serve the luxury tier only.',
};

// ============================================
// BLESSING MAN
// ============================================

export const blessingManPattern: BlessingManPattern = {
  before: {
    flow: ['Client', 'Professional (does the work)', 'Output'],
    price: '$1,000-$2,000',
    description: 'for labor + expertise',
  },
  after: {
    flow: ['Client', 'AI (does the work)', 'Professional (blesses it)', 'Output'],
    price: '$200-$250',
    description: 'for stamp + liability shield',
  },
  keyLine: 'The credential retains value. The labor doesn\'t.',
};

export const professionExamples: ProfessionCompression[] = [
  {
    profession: 'CPA (tax prep)',
    before: '$500-$2,000',
    after: '$150-$300',
    compression: '70-85%',
    status: 'projected',
    timeline: '2025-28',
  },
  {
    profession: 'Estate Attorney',
    before: '$1,000-$3,000',
    after: '$200-$400',
    compression: '75-90%',
    status: 'projected',
    timeline: '2025-30',
  },
  {
    profession: 'Travel Agent',
    before: '10% commission',
    after: '$0 (self-serve)',
    compression: '~90%',
    status: 'realized',
  },
  {
    profession: 'Journalist',
    before: '75k newsroom jobs',
    after: '24k jobs',
    compression: '68%',
    status: 'realized',
  },
];

// ============================================
// HUMAN FLEX
// ============================================

export const flexExamples: FlexExample[] = [
  {
    domain: 'Food',
    icon: '',
    mass: 'Meal kits, fast food',
    flex: 'Personal chef, farm-to-table',
  },
  {
    domain: 'Finance',
    icon: '',
    mass: 'Robo-advisor',
    flex: '"My financial advisor"',
  },
  {
    domain: 'Content',
    icon: '',
    mass: 'AI-generated',
    flex: '"Human-written"',
  },
  {
    domain: 'Clothing',
    icon: '',
    mass: 'Algorithmic picks',
    flex: 'Bespoke tailor',
  },
];

// ============================================
// RESISTANCE / REGULATION
// ============================================

export const resistanceFactors: ResistanceFactor[] = [
  {
    type: 'regulatory',
    label: 'Regulatory protection',
    example: 'Car dealers',
    explanation: 'State franchise laws prevent direct sales — zero compression',
  },
  {
    type: 'essential-complexity',
    label: 'Essential complexity',
    example: 'Commercial insurance',
    explanation: '87% still through agents — complexity protects',
  },
  {
    type: 'trust',
    label: 'Trust requirements',
    example: 'Wealth management, M&A',
    explanation: 'Relationship and judgment cannot be automated',
  },
  {
    type: 'physical-presence',
    label: 'Physical presence',
    example: 'Notarization, courtroom',
    explanation: 'Body-in-space requirements resist digital compression',
  },
];

export const regulatedIndustries: RegulatedIndustry[] = [
  { industry: 'Publishing', compressionStatus: 'done', frictionLevel: 'low' },
  { industry: 'Telecom (messaging)', compressionStatus: 'done', frictionLevel: 'low' },
  { industry: 'Stock trading', compressionStatus: 'done', frictionLevel: 'medium' },
  { industry: 'Tax preparation', compressionStatus: 'slow', frictionLevel: 'high' },
  { industry: 'Legal (simple)', compressionStatus: 'slow', frictionLevel: 'high' },
  { industry: 'Healthcare', compressionStatus: 'resistant', frictionLevel: 'very-high' },
];

// ============================================
// CAPITALISM DUAL ROLE
// ============================================

export const capitalismAccelerator: CapitalismForce = {
  role: 'accelerator',
  title: 'Accelerator',
  points: [
    'Capital actively seeks disintermediation — that\'s where returns live',
    'VCs fund compression plays',
    'Every intermediary is a profit opportunity for whoever can remove them',
  ],
  color: '#3b82f6', // blue
};

export const capitalismBrake: CapitalismForce = {
  role: 'brake',
  title: 'Brake',
  points: [
    'Lobbying for protective regulation',
    'Artificial complexity (proprietary formats, lock-in)',
    'Subscriptions vs. ownership',
    '"Safety" concerns that double as regulatory capture',
  ],
  color: '#f59e0b', // amber
};

export const cloudVsLocal: CloudVsLocal = {
  cloud: {
    description: 'Recurring revenue',
    outcome: 'Delayed compression',
  },
  local: {
    description: 'One-time event',
    outcome: 'Full compression',
  },
  insight:
    'Capitalism will push toward subscriptions to slow the compression that local models enable.',
};

// ============================================
// IMPLICATIONS
// ============================================

export const implications: Implication[] = [
  {
    audience: 'workers',
    title: 'For Workers',
    points: [
      'If your job is managing artificial complexity, the clock is ticking',
      'Pivot toward essential complexity (relationships, judgment, trust, physical presence)',
      'Or pivot toward operating the new primitives (someone needs to build/run the AI)',
    ],
  },
  {
    audience: 'investors',
    title: 'For Investors',
    points: [
      'The compression play is obvious in hindsight but hard to time',
      'Regulatory moats delay but don\'t prevent',
      'Value capture in the new regime is always lower than expected',
      'Watch for: AI-native startups with professional networks for "blessing"',
    ],
  },
  {
    audience: 'incumbents',
    title: 'For Incumbents',
    points: [
      'Lobbying buys time but not safety',
      'The choice: Compress yourself (cannibalize margins) or be compressed by others',
      'Every year of delay is a year for competitors to prepare',
    ],
  },
  {
    audience: 'society',
    title: 'For Society',
    points: [
      'Each compression frees resources for the next expansion',
      'The question is who captures the freed value',
      'And whether it\'s broadly distributed or concentrated',
    ],
  },
];

// ============================================
// DISCLAIMERS
// ============================================

export const disclaimers: Disclaimer[] = [
  { text: 'Not a prediction of specific timelines (though research suggests ranges)' },
  { text: 'Not anti-technology or anti-AI' },
  { text: 'Not claiming all jobs disappear (the sigmoid preserves extremes)' },
  { text: 'Not investment advice' },
];

export const openQuestions: OpenQuestion[] = [
  { question: 'At what income level does "human flex" kick in?' },
  { question: 'Does this create a two-tier society more explicitly than today?' },
  { question: 'Can "human-made" be faked/gamed like "organic" labels?' },
  { question: 'Does the luxury tier grow fast enough to absorb displaced workers?' },
];

// ============================================
// COMPLETE SITE CONTENT
// ============================================

export const siteContent: SiteContent = {
  chapters,

  hero: {
    title: 'The Great Compression',
    subtitle:
      'Every intermediation layer exists because of complexity. When technology makes complexity trivial, value chains collapse.',
    scrollIndicator: 'Scroll to explore ↓',
  },

  history: {
    intro: "Value chain collapse isn't new. It's the defining pattern of technology disruption.",
    quote:
      "Nobody disrupted the telegram by building a better telegram — email made the *concept* of paying per word absurd.",
    examples: historicalExamples,
    acceleration: compressionAcceleration,
    closing: 'Each compression happens faster than the last.',
  },

  sal: {
    paragraphs: [
      'Sal sells databases for Snowflake. His biggest client is Thomson Reuters — a company that needs to warehouse and process massive amounts of financial data.',
      "Thomson Reuters also buys Tableau from Salesforce, because raw data isn't useful until you can see it. They package these insights into compliance tools and sell them to accounting firms with thousands of clients.",
      'This is how enterprise software works: layers upon layers of companies, each adding value (and taking margin) because the problem is too complex for any single entity to solve.',
    ],
    transition: "This is the system Sal navigates every day.",
  },

  valueChainBefore: {
    chain: valueChainBefore,
    callout: 'Five companies. Four sales cycles. Margins stacked on margins.',
    quote:
      'Sal exists because the complexity of the stack justifies a human to navigate it.',
  },

  collapse: {
    chain: valueChainAfter,
    stats: collapseStats,
    keyLine: "The chain doesn't get disrupted. It becomes *irrelevant*.",
  },

  sigmoid: {
    intro:
      "When people hear 'AI will replace jobs,' they imagine binary outcomes. But that's not how compression works. It follows a curve.",
    data: sigmoidData,
    tierExplanations: {
      budget: 'Always wanted self-serve, now AI-serve. Near-zero cost.',
      luxury: 'Scarcity creates value. Human attention = status signal.',
      middle:
        "No defensible position. Too expensive for budget, not exclusive enough for luxury. This is where 80% of jobs were.",
    },
    example: sigmoidExample,
  },

  blessingMan: {
    intro: "The professional doesn't disappear. They get pushed to a final-check role.",
    pattern: blessingManPattern,
    examples: professionExamples,
    callout:
      "Still employed. Capturing 10% of original value. The job 'exists' — but the market collapsed.",
  },

  humanFlex: {
    intro:
      'When AI handles most cognitive tasks, something surprising happens: human service becomes the luxury signal.',
    quote: "'A person made my dinner.' That's the flex now. Not 'I used an app.'",
    scarcityInversion: {
      before: 'When human labor was abundant: Human = default, automation = premium',
      after: 'When AI handles everything: AI = default, human = premium',
    },
    examples: flexExamples,
    callout:
      "This isn't a counterexample. It's the residual premium after compression. The mass market evaporates; what remains is reframed as luxury. But not everyone accepts this quietly.",
    openQuestion:
      'Does the luxury tier grow fast enough to absorb displaced workers? Probably not.',
  },

  resistance: {
    intro: "Not everything compresses. Some chains are protected.",
    factors: resistanceFactors,
    industries: regulatedIndustries,
    keyInsight:
      "Regulation delays but doesn't prevent. The question: Is the protection structural (physical, safety-critical) or political (lobby-created)? And the market has its own plans.",
    legalZoomPrecedent:
      'Bar associations fought document automation for 20 years. They mostly lost. The next wave is AI + attorney blessing.',
  },

  capitalism: {
    intro: 'Capitalism plays both sides.',
    accelerator: capitalismAccelerator,
    brake: capitalismBrake,
    cloudVsLocal,
    keyInsight:
      'The profit motive drives compression. The incumbency motive delays it. Both are capitalism.',
  },

  question: {
    headline: 'What are you selling when the complexity evaporates?',
    question: "Is the complexity you're managing essential or artificial?",
    definitions: {
      essential:
        'Regulatory requirements (not lobby-created), physical constraints, trust relationships, safety-critical decisions',
      artificial:
        'Information asymmetry that technology can eliminate, cognitive work that AI can perform',
    },
    finalLine:
      "If it's artificial, compression is coming. Regulation may delay it. Capitalism may slow it. But the pattern holds.",
  },

  implications,

  disclaimers: {
    whatThisIsNot: disclaimers,
    openQuestions,
  },

  footer: {
    attribution: 'A Rhea Impact project',
    links: [
      { label: 'Rhea Impact', url: 'https://rheaimpact.com' },
    ],
  },
};

export default siteContent;
