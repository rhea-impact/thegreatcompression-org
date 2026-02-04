/**
 * Blockbuster: The Video Rental Empire Netflix Destroyed
 * 9,000 stores → 1
 */

import type { CompressionStory } from '../../types/compression';

export const blockbuster: CompressionStory = {
  id: 'blockbuster',
  slug: 'blockbuster',
  title: 'Blockbuster',
  tagline: 'Be kind, rewind—and then vanish entirely',
  color: '#3b82f6',

  peakYear: 2004,
  peakMetric: '9,000 stores',
  collapseYear: 2013,
  collapseMetric: '1',
  compressionPercent: '99.99%',

  rise: {
    headline: 'The Friday Night Ritual',
    paragraphs: [
      'In 1985, David Cook opened the first Blockbuster in Dallas. His innovation: huge selection, computerized inventory, and a family-friendly atmosphere.',
      'Before Blockbuster, video rental was seedy—adult sections, poor selection, unreliable availability. Blockbuster professionalized it, creating a mainstream experience.',
      'The concept exploded. Franchise model, prime strip mall locations, and a simple value proposition: rent movies for $3-4, watch at home, return in 3-5 days.',
      'Late fees became legendary—and highly profitable. By some estimates, late fees generated $800 million annually. It was a tax on human forgetfulness.',
    ],
    keyDates: [
      { year: 1985, event: 'First Blockbuster opens in Dallas' },
      { year: 1989, event: 'Viacom buys Blockbuster' },
      { year: 1994, event: 'Blockbuster acquires majority of video rental market' },
      { year: 1996, event: 'Blockbuster has 6,000 US stores' },
      { year: 2004, event: 'Peak: 9,094 stores worldwide' },
    ],
  },

  peak: {
    headline: 'Blue and Gold Dominance',
    paragraphs: [
      'At its peak in 2004, Blockbuster had 9,094 stores worldwide and employed 84,000 workers. The blue and gold ticket logo was everywhere.',
      'A Friday night trip to Blockbuster was ritual. Wander the aisles, debate choices, grab popcorn and candy, deal with the dreaded "Be Kind, Rewind" stickers.',
      'The company generated $6 billion in annual revenue. It seemed invincible—the clear winner in video rental, with an unassailable physical footprint.',
      'Then a startup offered to partner with them. The Blockbuster CEO laughed them out of the room. The startup was Netflix.',
    ],
    stats: [
      { label: 'Peak Stores (2004)', value: '9,094', sublabel: 'Worldwide' },
      { label: 'Employees', value: '84,000', sublabel: 'At peak' },
      { label: 'Annual Revenue', value: '$6B', sublabel: 'At peak' },
      { label: 'Late Fee Revenue', value: '$800M', sublabel: 'Annual (estimate)' },
    ],
    quote: {
      text: 'We passed on the opportunity to purchase Netflix for $50 million.',
      author: 'Former Blockbuster CEO John Antioco',
      year: 2000,
    },
    culturalMoment: '"Let\'s go to Blockbuster" was a complete sentence that meant something. The in-store experience—browsing, discovering, debating—was the product as much as the movies.',
  },

  disruption: {
    headline: 'The Red Envelope Revolution',
    technology: 'Netflix & Streaming',
    paragraphs: [
      'In 1997, Reed Hastings started Netflix after a $40 Blockbuster late fee annoyed him. The concept: rent DVDs by mail, no late fees, flat monthly subscription.',
      'Blockbuster dismissed it. Who would wait 2-3 days for a DVD when you could drive to a store? What they missed: people would wait to avoid late fees and trips.',
      'By 2007, Netflix added streaming. The DVD-by-mail was a bridge—the destination was unlimited movies over the internet. No trips. No returns. No fees.',
      'Blockbuster tried to compete: Blockbuster Online, no late fees, in-store returns. Too late. The debt was too high, the pivot too slow.',
    ],
    keyDates: [
      { year: 1997, event: 'Netflix founded (DVD by mail)' },
      { year: 2000, event: 'Blockbuster passes on buying Netflix for $50M' },
      { year: 2004, event: 'Blockbuster launches Blockbuster Online' },
      { year: 2007, event: 'Netflix adds streaming' },
      { year: 2010, event: 'Blockbuster files for bankruptcy' },
    ],
  },

  collapse: {
    headline: 'The Fastest Retail Death in History',
    paragraphs: [
      'Blockbuster\'s collapse was shockingly fast. From 9,094 stores to bankruptcy in six years. 84,000 workers losing jobs.',
      'The company tried everything: eliminating late fees (too late), launching online service (poorly executed), selling candy and popcorn (not enough margin).',
      'Debt from poor acquisitions prevented real investment in digital. By the time Blockbuster realized Netflix was an existential threat, it couldn\'t afford to compete.',
      'On September 23, 2010, Blockbuster filed for bankruptcy. Most stores closed within two years. One store remains today—in Bend, Oregon—as a novelty.',
    ],
    chartData: [
      { year: 2004, value: 9094, label: 'Peak: 9,094 stores' },
      { year: 2005, value: 8500 },
      { year: 2006, value: 7800 },
      { year: 2007, value: 6500, label: 'Netflix adds streaming' },
      { year: 2008, value: 5000 },
      { year: 2009, value: 3500 },
      { year: 2010, value: 2000, label: 'Bankruptcy' },
      { year: 2011, value: 500 },
      { year: 2013, value: 1, label: 'One store remains' },
    ],
    keyDates: [
      { year: 2007, event: 'New CEO abandons digital strategy' },
      { year: 2010, event: 'Blockbuster files Chapter 11 bankruptcy' },
      { year: 2011, event: 'Dish Network buys assets' },
      { year: 2013, event: 'Last corporate stores close' },
      { year: 2019, event: 'Last Blockbuster (Bend, OR) becomes tourist attraction' },
    ],
    dramaticStat: {
      before: '9,094',
      after: '1',
      label: 'stores remaining',
    },
  },

  aftermath: {
    headline: 'The Last Blockbuster',
    paragraphs: [
      'One Blockbuster remains: a franchise in Bend, Oregon that the corporate closures couldn\'t touch. It survives on nostalgia, tourism, and merchandise.',
      'The store is now a destination, not a utility. People visit to remember. They rent VHS tapes ironically. They buy "Last Blockbuster" souvenirs.',
      'Netflix, the company Blockbuster passed on, is now worth $200+ billion. It didn\'t just win—it created an entirely new category of entertainment consumption.',
      'The lesson: distribution was the product. When distribution became digital, physical stores weren\'t just unnecessary—they were liabilities.',
    ],
    survivors: [
      'One store in Bend, Oregon (novelty/tourism)',
      'Redbox (kiosks, declining)',
      'Netflix (completely different business)',
    ],
    replacedBy: 'Netflix, Amazon Prime Video, Hulu, Disney+, HBO Max, streaming',
    lessons: [
      'Physical distribution can become a liability overnight',
      'Subscription beats transaction (especially when it eliminates friction)',
      'Late fees were a symptom of a bad model, not a feature',
      'Debt prevents pivots; agility matters',
      'The company that wins may not look anything like you',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Blockbuster_Video_logo.png',
    alt: 'Blockbuster Video logo',
    credit: 'Wikimedia Commons / Fair use',
  },

  valueChain: {
    producer: 'Movie Studio',
    consumer: 'Movie Watcher',
    coreExchange: 'Watching a movie at home',
    technology: 'Streaming platforms',
    before: [
      { name: 'Physical Media Production', type: 'physical', jobs: ['DVD manufacturing'], compressed: true },
      { name: 'Distribution', type: 'physical', jobs: ['Warehouse workers', 'Truck drivers'], compressed: true },
      { name: 'Retail Store', type: 'physical', jobs: ['Store clerks', 'Managers', '84,000 total'], compressed: true },
      { name: 'Return/Restock', type: 'physical', jobs: ['Inventory management'], compressed: true },
    ],
    after: [
      { name: 'Streaming Platform', type: 'aggregation', jobs: ['Platform engineers', 'Content ops'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 4,
      layersAfter: 1,
      jobsBefore: 84000,
      jobsAfter: 500,
    },
  },

  prevStory: 'record-stores',
  nextStory: 'toll-collectors',
};

export default blockbuster;
