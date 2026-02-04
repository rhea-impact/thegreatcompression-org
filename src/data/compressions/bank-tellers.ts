/**
 * Bank Tellers: The ATM Transformation
 * When cash machines changed banking forever
 */

import type { CompressionStory } from '../../types/compression';

export const bankTellers: CompressionStory = {
  id: 'bank-tellers',
  slug: 'bank-tellers',
  title: 'Bank Tellers',
  tagline: 'The ATM promised to eliminate them. The reality was more complex.',
  color: '#0d9488',

  peakYear: 2007,
  peakMetric: '600,000 tellers',
  collapseYear: 2024,
  collapseMetric: '~400,000',
  compressionPercent: '33%',

  rise: {
    headline: 'The Human Interface of Money',
    paragraphs: [
      'For most of banking history, accessing your money meant visiting a branch and speaking to a teller. They were the human interface between you and your funds.',
      'The job was straightforward: accept deposits, process withdrawals, cash checks, handle transfers. But it required accuracy, trustworthiness, and customer service skills.',
      'Bank tellers became a massive employment category. By the 1990s, over 500,000 Americans worked as tellers—a stable, entry-level job with benefits.',
      'Branches were everywhere. Banks competed on convenience, opening locations in every neighborhood, mall, and shopping center. More branches meant more tellers.',
    ],
    keyDates: [
      { year: 1950, event: 'Post-war banking boom begins' },
      { year: 1967, event: 'First ATM installed (London)' },
      { year: 1969, event: 'First US ATM (Chemical Bank, NYC)' },
      { year: 1990, event: 'US has 80,000 ATMs; tellers still grow' },
      { year: 2007, event: 'Teller employment peaks at ~600,000' },
    ],
  },

  peak: {
    headline: 'The Paradox of Automation',
    paragraphs: [
      'Here\'s a surprise: teller employment actually peaked in 2007—40 years after the ATM was invented. How is that possible?',
      'The answer reveals something important about compression. ATMs reduced the cost of operating branches, which meant banks could open MORE branches. More branches meant more tellers.',
      'Each branch needed fewer tellers (ATMs handled routine transactions), but the total number of branches grew faster than teller-per-branch declined.',
      'At peak, banks employed around 600,000 tellers across 90,000+ branches. The ATM hadn\'t eliminated tellers—it had transformed them from transaction processors into customer service representatives.',
    ],
    stats: [
      { label: 'Peak Tellers (2007)', value: '~600,000', sublabel: 'US employment' },
      { label: 'US Bank Branches', value: '90,000+', sublabel: 'At peak' },
      { label: 'ATMs Nationwide', value: '400,000+', sublabel: 'By 2007' },
      { label: 'Average Teller Wage', value: '$28,000', sublabel: 'Entry-level' },
    ],
    quote: {
      text: 'ATMs handle the transactions. Tellers handle the relationships.',
      author: 'Banking industry executive',
      year: 2005,
    },
    culturalMoment: 'The bank branch remained a fixture of American life. Saturday morning banking, the local branch manager who knew your name—these persisted even as ATMs proliferated.',
  },

  disruption: {
    headline: 'The Digital Banking Wave',
    technology: 'Online & Mobile Banking',
    paragraphs: [
      'ATMs started the transformation, but online and mobile banking completed it. Why visit a branch at all when you can deposit checks by phone?',
      'Remote deposit capture (photographing checks), mobile payment apps, and online transfers eliminated most reasons to visit a branch.',
      'The 2008 financial crisis accelerated the trend. Banks cut costs by closing branches. Customers, conditioned by online shopping, accepted digital banking.',
      'COVID-19 delivered another blow. Branches closed temporarily, customers went digital permanently. Mobile banking usage jumped 50% in 2020 alone.',
    ],
    keyDates: [
      { year: 1994, event: 'Stanford Federal Credit Union offers online banking' },
      { year: 2007, event: 'iPhone launches; mobile banking begins' },
      { year: 2009, event: 'Remote deposit capture goes mainstream' },
      { year: 2013, event: 'Venmo popularizes P2P payments' },
      { year: 2020, event: 'COVID accelerates digital adoption' },
    ],
  },

  collapse: {
    headline: 'The Branch Retreat',
    paragraphs: [
      'Since 2007, US banks have closed over 15,000 branches. The remaining branches employ fewer tellers—many have been redesigned with ATMs and "universal bankers" instead of traditional teller lines.',
      'Teller employment has fallen to around 400,000—a 33% decline. Not as dramatic as other compressions, but significant and accelerating.',
      'The job itself has changed. Today\'s tellers do less transaction processing and more sales, onboarding, and problem-solving. The routine work moved to machines and apps.',
      'The future looks bleaker. Industry analysts predict continued branch closures and further teller reductions as Gen Z customers rarely visit physical banks.',
    ],
    chartData: [
      { year: 1990, value: 500, label: '500,000 tellers' },
      { year: 1995, value: 520 },
      { year: 2000, value: 550 },
      { year: 2007, value: 600, label: 'Peak: 600,000' },
      { year: 2010, value: 560, label: 'Financial crisis' },
      { year: 2015, value: 500 },
      { year: 2020, value: 450, label: 'COVID impact' },
      { year: 2024, value: 400, label: '~400,000 remain' },
    ],
    keyDates: [
      { year: 2008, event: 'Financial crisis triggers branch closures' },
      { year: 2015, event: 'Bank of America closes 1,500 branches' },
      { year: 2020, event: 'COVID closes branches, accelerates digital' },
      { year: 2022, event: 'Wells Fargo announces branch reduction plan' },
    ],
    dramaticStat: {
      before: '600,000',
      after: '400,000',
      label: 'tellers',
    },
  },

  aftermath: {
    headline: 'The Slow Compression',
    paragraphs: [
      'Bank tellers illustrate that compression isn\'t always sudden. Sometimes it\'s a slow squeeze over decades.',
      'The ATM didn\'t eliminate tellers immediately—it changed what tellers did. But online and mobile banking are finishing the job.',
      'Some tellers have moved into "universal banker" roles—handling both transactions and sales. Others have left banking entirely.',
      'The remaining tellers serve customers who prefer human interaction: older adults, small businesses, complex transactions. A luxury tier is forming.',
    ],
    survivors: [
      'Universal bankers (sales + transactions)',
      'Commercial banking specialists',
      'Branch managers (reduced numbers)',
    ],
    replacedBy: 'ATMs, mobile banking, online banking, remote deposit, P2P payment apps',
    lessons: [
      'Automation can initially INCREASE employment before decreasing it',
      'Technology changes job content before eliminating jobs',
      'Slow compression is still compression',
      'Multiple technology waves can compound effects',
      'The remaining jobs become more complex, not simpler',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/ATM_Machine.jpg',
    alt: 'ATM machine',
    credit: 'Wikimedia Commons / Public Domain',
  },

  valueChain: {
    producer: 'Bank',
    consumer: 'Customer',
    coreExchange: 'Accessing and managing money',
    technology: 'ATMs, online banking, mobile apps',
    before: [
      { name: 'Branch Building', type: 'physical', jobs: ['Branch managers', 'Security'], compressed: true },
      { name: 'Teller Window', type: 'access', jobs: ['Tellers (600,000)'], compressed: true },
      { name: 'Transaction Processing', type: 'skill', jobs: ['Back-office staff'], compressed: true },
    ],
    after: [
      { name: 'Digital Platform', type: 'aggregation', jobs: ['Engineers', 'Support staff'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 3,
      layersAfter: 1,
      jobsBefore: 600000,
      jobsAfter: 400000,
    },
  },

  prevStory: 'switchboard-operators',
  nextStory: 'photo-developers',
};

export default bankTellers;
