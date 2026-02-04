/**
 * Record Stores: The Death of Physical Music Retail
 * From $15 CDs to unlimited streaming
 */

import type { CompressionStory } from '../../types/compression';

export const recordStores: CompressionStory = {
  id: 'record-stores',
  slug: 'record-stores',
  title: 'Record Stores',
  tagline: 'When music became weightless',
  color: '#ec4899',

  peakYear: 1999,
  peakMetric: '$40B music sales',
  collapseYear: 2015,
  collapseMetric: '$7B',
  compressionPercent: '82%',

  rise: {
    headline: 'The Temple of Music',
    paragraphs: [
      'For most of the 20th century, buying music meant visiting a store. You flipped through bins, read liner notes, talked to clerks who knew their stuff, and brought home a physical artifact.',
      'Record stores weren\'t just retail—they were cultural institutions. Tower Records, Virgin Megastores, Sam Goody: these were places where music fans gathered, discovered new artists, and built community.',
      'The economics were simple: artists recorded, labels manufactured and marketed, distributors shipped, stores sold. Every album generated revenue at each step.',
      'By the late 1990s, CDs dominated. They cost $2 to manufacture and sold for $15-18. Margins were fat. The music industry was a $40 billion global business.',
    ],
    keyDates: [
      { year: 1960, event: 'Tower Records opens in Sacramento' },
      { year: 1982, event: 'CD format introduced (higher margins)' },
      { year: 1988, event: 'CD sales surpass vinyl' },
      { year: 1991, event: 'Nielsen SoundScan launches (actual sales tracking)' },
      { year: 1999, event: 'Global music sales peak at $40 billion' },
    ],
  },

  peak: {
    headline: 'The Golden Age of Music Retail',
    paragraphs: [
      'In 1999, the music industry hit its all-time high: $40 billion in global sales. CDs were flying off shelves. *NSYNC\'s "No Strings Attached" sold 2.4 million copies in its first week.',
      'The retail infrastructure was massive: 15,000+ record stores in the US alone, from indie shops to big-box chains. Tower Records alone had 200 stores worldwide.',
      'Working at a record store was a job with cultural cachet. You were a tastemaker, a recommender, part of a community. High Fidelity captured the ethos.',
      'The labels, distributors, and retailers all profited from physical scarcity. You couldn\'t copy a CD (easily). You had to buy it. And buy it again when it scratched.',
    ],
    stats: [
      { label: 'Global Music Sales (1999)', value: '$40B', sublabel: 'All-time peak' },
      { label: 'US Record Stores (1999)', value: '15,000+', sublabel: 'Retail locations' },
      { label: 'CD Price', value: '$15-18', sublabel: 'Typical album' },
      { label: 'Manufacturing Cost', value: '~$2', sublabel: 'Per CD' },
    ],
    quote: {
      text: 'I could\'ve been a famous singer, if I had someone else\'s voice.',
      author: 'Barry, High Fidelity',
      year: 2000,
    },
    culturalMoment: 'Going to the record store on "new release Tuesday" was a ritual. You\'d read Rolling Stone, know what was coming out, and be there at opening.',
  },

  disruption: {
    headline: 'When Music Became Bits',
    technology: 'Digital Downloads & Streaming',
    paragraphs: [
      'In 1999, Napster proved that music could be distributed for free over the internet. Within 18 months, it had 80 million users. The industry sued—and won. But the damage was done.',
      'The lesson of Napster wasn\'t piracy; it was convenience. People wanted music instantly, without leaving home, organized their way. The industry fought this for years.',
      'Apple\'s iTunes Store (2003) showed legal downloads could work: 99 cents per song, instant delivery. It was better than piracy for most people. But it still wasn\'t enough.',
      'Spotify launched in 2008 with unlimited streaming for a monthly fee. By 2015, streaming had overtaken downloads. The shift from ownership to access was complete.',
    ],
    keyDates: [
      { year: 1999, event: 'Napster launches; 80M users within 18 months' },
      { year: 2001, event: 'Napster shut down; piracy continues' },
      { year: 2003, event: 'iTunes Store launches (99¢/song)' },
      { year: 2008, event: 'Spotify launches in Europe' },
      { year: 2015, event: 'Streaming revenue surpasses digital downloads' },
    ],
  },

  collapse: {
    headline: 'Retail Apocalypse',
    paragraphs: [
      'The collapse was swift and merciless. Tower Records: bankrupt in 2006. Virgin Megastores USA: closed in 2009. Borders (which sold music): bankrupt in 2011.',
      'Thousands of independent record stores closed. The survivors became specialty shops selling vinyl to collectors—a tiny niche compared to the mass market.',
      'The industry tried everything: lawsuits against file-sharers, DRM restrictions, exclusive releases. Nothing worked. Once music became digital, physical retail was doomed.',
      'Today, streaming accounts for 84% of music industry revenue. Physical sales (vinyl, CDs) are a nostalgia product for enthusiasts.',
    ],
    chartData: [
      { year: 1999, value: 40, label: 'Peak: $40B global sales' },
      { year: 2001, value: 35, label: 'Napster effect' },
      { year: 2003, value: 28 },
      { year: 2005, value: 22 },
      { year: 2007, value: 18, label: 'Tower Records gone' },
      { year: 2009, value: 15 },
      { year: 2011, value: 12 },
      { year: 2013, value: 10 },
      { year: 2015, value: 7, label: 'Streaming takeover' },
    ],
    keyDates: [
      { year: 2004, event: 'First major record store chain bankruptcy' },
      { year: 2006, event: 'Tower Records liquidates' },
      { year: 2009, event: 'Virgin Megastores USA closes' },
      { year: 2014, event: 'Vinyl sales begin ironic resurgence (niche)' },
      { year: 2021, event: 'Music industry recovers—but streaming-only' },
    ],
    dramaticStat: {
      before: '$40B',
      after: '$7B',
      label: 'physical music sales',
    },
  },

  aftermath: {
    headline: 'The Vinyl Survivors',
    paragraphs: [
      'A curious thing happened in the ruins: vinyl came back. Not CDs—vinyl. Sales grew from nearly zero to $1.2 billion by 2022.',
      'But it\'s a luxury/collector market, not mass retail. People buy vinyl for the artifact, the ritual, the sound quality (debatable). It\'s a feature, not the product.',
      'The record store that survives sells experience: curated selections, listening stations, in-store performances. It\'s a destination, not a utility.',
      'The main product—access to music—is now $10/month for everything ever recorded. The entire retail chain was compressed into a subscription.',
    ],
    survivors: [
      'Vinyl specialty shops (niche collectors)',
      'Record Store Day (annual event)',
      'Discogs (online marketplace)',
    ],
    replacedBy: 'Spotify, Apple Music, YouTube Music, Amazon Music',
    lessons: [
      'Digital goods don\'t need physical retail',
      'Access beats ownership (for most people)',
      'Scarcity was the product; abundance destroyed it',
      'Niche luxury can survive when mass market dies',
      'Fighting consumer behavior is a losing battle',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Tower_Records_West_Hollywood.jpg',
    alt: 'Tower Records on Sunset Boulevard',
    credit: 'Wikimedia Commons / Public Domain',
  },

  valueChain: {
    producer: 'Recording Artist',
    consumer: 'Music Listener',
    coreExchange: 'Listening to music',
    technology: 'Streaming platforms',
    before: [
      { name: 'Record Label', type: 'aggregation', jobs: ['A&R', 'Marketing'], compressed: false },
      { name: 'Manufacturing', type: 'physical', jobs: ['CD/vinyl plants'], compressed: true },
      { name: 'Distribution', type: 'physical', jobs: ['Warehouse workers', 'Truck drivers'], compressed: true },
      { name: 'Retail Store', type: 'physical', jobs: ['Store clerks', 'Managers'], compressed: true },
      { name: 'Point of Sale', type: 'access', jobs: ['Cashiers'], compressed: true },
    ],
    after: [
      { name: 'Streaming Platform', type: 'aggregation', jobs: ['Platform engineers'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 5,
      layersAfter: 1,
      jobsBefore: 150000,
      jobsAfter: 10000,
    },
  },

  prevStory: 'encyclopedias',
  nextStory: 'blockbuster',
};

export default recordStores;
