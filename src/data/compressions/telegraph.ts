/**
 * Telegraph: The First Great Compression
 * 200,000 operators → 0
 */

import type { CompressionStory } from '../../types/compression';

export const telegraph: CompressionStory = {
  id: 'telegraph',
  slug: 'telegraph',
  title: 'The Telegraph',
  tagline: 'When instant communication cost $0.01 per word',
  color: '#f59e0b',

  peakYear: 1920,
  peakMetric: '200,000 operators',
  collapseYear: 2006,
  collapseMetric: '0',
  compressionPercent: '100%',

  rise: {
    headline: 'The Miracle of Instant Communication',
    paragraphs: [
      'Before the telegraph, information traveled at the speed of a horse. A message from New York to San Francisco took weeks. Stock prices were days old by the time they reached traders. News of battles arrived after wars had already been decided.',
      'In 1844, Samuel Morse sent the first telegraph message: "What hath God wrought." It was not hyperbole. For the first time in human history, information could move faster than any physical object.',
      'Within two decades, telegraph wires crisscrossed the nation. By 1866, the transatlantic cable connected continents. The world shrunk from weeks to seconds.',
      'An entire industry emerged. Telegraph operators became skilled professionals, fluent in Morse code, manning stations across the country. Western Union grew into one of the largest companies in America.',
    ],
    keyDates: [
      { year: 1844, event: 'Morse sends first telegraph message' },
      { year: 1851, event: 'First underwater cable (Dover to Calais)' },
      { year: 1861, event: 'Transcontinental telegraph completed' },
      { year: 1866, event: 'Transatlantic cable connects US and Europe' },
      { year: 1872, event: 'Western Union introduces money transfer' },
    ],
  },

  peak: {
    headline: 'The Backbone of Modern Commerce',
    paragraphs: [
      'By the early 1900s, the telegraph was indispensable. Stock exchanges depended on it. Newspapers built empires around it. Governments waged wars with it.',
      'Telegraph operators were respected professionals. They had job security, good wages, and a skill that took years to master. The click of the telegraph key was the sound of the modern world.',
      'At its peak, Western Union employed over 200,000 people. The company was so dominant that it turned down the chance to buy Bell\'s telephone patent for $100,000 — they couldn\'t imagine anything replacing the telegraph.',
    ],
    stats: [
      { label: 'Peak Operators (US)', value: '200,000+' },
      { label: 'Messages/Year (1920)', value: '200 million' },
      { label: 'Revenue (1920)', value: '$123 million', sublabel: '$1.9B in 2024 dollars' },
      { label: 'Offices Worldwide', value: '25,000+' },
    ],
    quote: {
      text: 'The telegraph is the most perfect invention of modern times.',
      author: 'The Times of London',
      year: 1858,
    },
    culturalMoment: 'Receiving a telegram was an event. People dressed up to collect them. The yellow Western Union envelope became an icon — sometimes bearing joy, sometimes tragedy.',
  },

  disruption: {
    headline: 'The Telephone: A "Toy" That Changed Everything',
    technology: 'Telephone',
    paragraphs: [
      'In 1876, Alexander Graham Bell patented the telephone. Western Union dismissed it as a "toy" — useful perhaps for chatting, but no threat to serious business communication.',
      'They were catastrophically wrong. The telephone did something the telegraph couldn\'t: it let anyone communicate instantly, without learning Morse code, without paying per word, without waiting for an operator.',
      'The telephone didn\'t just compete with the telegraph. It made the entire concept of paying for individual messages seem absurd. Why count words when you could just talk?',
    ],
    keyDates: [
      { year: 1876, event: 'Bell patents the telephone' },
      { year: 1877, event: 'Western Union rejects offer to buy telephone patent for $100,000' },
      { year: 1915, event: 'First transcontinental phone call' },
      { year: 1927, event: 'Transatlantic phone service begins' },
    ],
  },

  collapse: {
    headline: 'The Long Fade to Zero',
    paragraphs: [
      'The collapse wasn\'t instant — it took decades. The telegraph industry didn\'t die overnight; it slowly became irrelevant.',
      'First, personal telegrams declined as phones became household items. Then business communications shifted. By the 1960s, the telegraph was a legacy system, kept alive mainly by institutional inertia.',
      'The final blow came from email. When sending a written message became free and instant, the last reason to use a telegraph vanished.',
      'On January 27, 2006, Western Union sent its last telegram. The technology that once connected the world simply stopped. Zero operators. Zero messages. Zero revenue from a service that once defined modern communication.',
    ],
    chartData: [
      { year: 1920, value: 200, label: '200 million messages' },
      { year: 1930, value: 180 },
      { year: 1940, value: 190, label: 'WWII spike' },
      { year: 1950, value: 150 },
      { year: 1960, value: 100 },
      { year: 1970, value: 60 },
      { year: 1980, value: 30 },
      { year: 1990, value: 10 },
      { year: 2000, value: 2 },
      { year: 2006, value: 0, label: 'Service discontinued' },
    ],
    keyDates: [
      { year: 1920, event: 'Peak telegraph traffic' },
      { year: 1945, event: 'Telephone surpasses telegraph in revenue' },
      { year: 1960, event: 'Telex begins replacing telegraph for business' },
      { year: 1995, event: 'Email enters mainstream' },
      { year: 2006, event: 'Western Union discontinues telegram service' },
    ],
    dramaticStat: {
      before: '200,000',
      after: '0',
      label: 'operators',
    },
  },

  aftermath: {
    headline: 'Gone Without a Trace',
    paragraphs: [
      'The telegraph didn\'t leave survivors. Morse code is now a hobby, not a profession. The skills that once commanded respect and good wages became completely worthless.',
      'No "luxury tier" of telegraph service emerged. No one pays extra for a human to tap out their messages in Morse code. The entire value proposition — instant written communication at a distance — was absorbed by cheaper, easier technologies.',
      'Western Union survived, but only by pivoting entirely to money transfer. The telegraph business didn\'t shrink to a niche; it vanished.',
    ],
    survivors: [],
    replacedBy: 'Telephone, fax, email, SMS, instant messaging',
    lessons: [
      'Being first doesn\'t mean being permanent',
      'A "toy" technology can destroy an industry',
      'Convenience beats capability',
      'Skills can become worthless overnight (on a historical scale)',
      'Market leaders can be blind to existential threats',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/1881_Telegraph_Operator.jpg',
    alt: 'Telegraph operator at work, 1881',
    credit: 'Wikimedia Commons / Public Domain',
  },

  valueChain: {
    producer: 'Message Sender',
    consumer: 'Message Recipient',
    coreExchange: 'Transmitting written communication quickly',
    technology: 'Telephone, then email',
    before: [
      { name: 'Telegraph Office', type: 'physical', jobs: ['Office clerks', 'Messengers'], compressed: true },
      { name: 'Telegraph Operator', type: 'skill', jobs: ['Morse code operators (200,000+)'], compressed: true },
      { name: 'Wire Network', type: 'physical', jobs: ['Linemen', 'Maintenance'], compressed: true },
      { name: 'Receiving Operator', type: 'skill', jobs: ['Receiving operators'], compressed: true },
      { name: 'Delivery', type: 'physical', jobs: ['Telegram delivery boys'], compressed: true },
    ],
    after: [
      { name: 'Phone/Internet', type: 'aggregation', jobs: ['Network engineers'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 5,
      layersAfter: 1,
      jobsBefore: 200000,
      jobsAfter: 0,
    },
  },

  nextStory: 'kodak',
};

export default telegraph;
