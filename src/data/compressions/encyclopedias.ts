/**
 * Encyclopedias: The Knowledge Industry That Couldn't Compete With Free
 * $1,400 sets → $0 (Wikipedia)
 */

import type { CompressionStory } from '../../types/compression';

export const encyclopedias: CompressionStory = {
  id: 'encyclopedias',
  slug: 'encyclopedias',
  title: 'Encyclopedias',
  tagline: 'When $1,400 worth of knowledge became free overnight',
  color: '#8b5cf6',

  peakYear: 1990,
  peakMetric: '$1.4B annual sales',
  collapseYear: 2012,
  collapseMetric: '$0',
  compressionPercent: '100%',

  rise: {
    headline: 'Knowledge for the Home',
    paragraphs: [
      'For middle-class families in the 20th century, owning an encyclopedia set was an aspiration. It signaled education, ambition, and a commitment to learning.',
      'Encyclopedia Britannica was the gold standard—32 volumes of expert-written, carefully edited human knowledge. Sets cost $1,000-$1,400, often purchased on installment plans.',
      'Door-to-door salespeople made the pitch: "Don\'t you want your children to succeed? Knowledge is power. And we offer easy monthly payments."',
      'The business model was brilliant: high margins on books, annual yearbook updates, and a dedicated sales force that created demand where none existed.',
    ],
    keyDates: [
      { year: 1768, event: 'Encyclopedia Britannica first published (Scotland)' },
      { year: 1920, event: 'Door-to-door sales model established' },
      { year: 1961, event: 'World Book Encyclopedia peaks at 10% of US households' },
      { year: 1990, event: 'Encyclopedia industry: $1.4 billion annually' },
      { year: 1990, event: 'Britannica employs 2,300 salespeople' },
    ],
  },

  peak: {
    headline: 'The Aspirational Purchase',
    paragraphs: [
      'At its peak, the encyclopedia industry generated $1.4 billion in annual sales. Britannica alone had 2,300 door-to-door salespeople in North America.',
      'A set of Britannica cost $1,400—more than a month\'s rent for many families. Yet millions bought them, often placing them prominently in living rooms.',
      'The content was genuinely authoritative. Expert authors, rigorous editing, annual updates. It was the internet before the internet: all human knowledge, organized alphabetically.',
      'The sales force was legendary. Trained to overcome objections, close deals, and finance purchases. It was a recognized career path with real money.',
    ],
    stats: [
      { label: 'Annual Industry Sales (1990)', value: '$1.4B' },
      { label: 'Britannica Set Price', value: '$1,400', sublabel: '32 volumes' },
      { label: 'Britannica Sales Staff', value: '2,300', sublabel: 'North America' },
      { label: 'US Households with Sets', value: '10%', sublabel: 'At peak (World Book)' },
    ],
    quote: {
      text: 'Knowledge is power. Give your children the gift of knowledge.',
      author: 'Typical encyclopedia sales pitch',
      year: 1980,
    },
    culturalMoment: 'Encyclopedia sets on wooden bookshelves were status symbols. Children did homework using them. Parents felt they were investing in their kids\' futures.',
  },

  disruption: {
    headline: 'Free Beats Expert',
    technology: 'Wikipedia',
    paragraphs: [
      'In 1993, Microsoft launched Encarta—a digital encyclopedia on CD-ROM for $99. It wasn\'t as comprehensive as Britannica, but it was searchable and affordable.',
      'Britannica scoffed. Their CEO said Encarta was "no threat" because it lacked Britannica\'s depth and authority. They were right about depth—and completely wrong about markets.',
      'Then came Wikipedia. Launched in 2001, it was free, instantly updated, and covered topics no encyclopedia ever could. By 2006, it had more articles than Britannica.',
      'The value proposition collapsed. Why pay $1,400 for 32 volumes that were outdated the day they shipped when Wikipedia was free, current, and available anywhere?',
    ],
    keyDates: [
      { year: 1993, event: 'Microsoft Encarta launches ($99 CD-ROM)' },
      { year: 1994, event: 'Britannica launches CD-ROM ($995)' },
      { year: 2001, event: 'Wikipedia launches' },
      { year: 2006, event: 'Wikipedia surpasses Britannica in articles' },
      { year: 2009, event: 'Microsoft discontinues Encarta' },
    ],
  },

  collapse: {
    headline: 'From Authority to Irrelevance',
    paragraphs: [
      'The collapse was total. Britannica print sales fell 80% between 1990 and 1996—before Wikipedia even existed. Digital encyclopedias were already winning.',
      'Wikipedia finished the job. By 2012, Britannica announced it would stop printing its encyclopedia after 244 years. The door-to-door salesforce? Gone.',
      'The irony: Wikipedia isn\'t always more accurate than Britannica. Studies show comparable error rates. But "good enough and free" crushed "excellent and expensive."',
      'Britannica pivoted to online subscriptions and educational materials. It survives, barely, as a shadow of its former self. The 2,300 salespeople found other work.',
    ],
    chartData: [
      { year: 1990, value: 100, label: '100% = $1.4B market' },
      { year: 1993, value: 80, label: 'Encarta launches' },
      { year: 1996, value: 40 },
      { year: 1999, value: 25 },
      { year: 2002, value: 15, label: 'Wikipedia effect begins' },
      { year: 2005, value: 8 },
      { year: 2008, value: 3 },
      { year: 2012, value: 0, label: 'Print discontinued' },
    ],
    keyDates: [
      { year: 1996, event: 'Britannica lays off most of sales force' },
      { year: 2001, event: 'Britannica goes online-only subscription' },
      { year: 2009, event: 'Encarta shut down (couldn\'t compete with free)' },
      { year: 2012, event: 'Britannica stops printing after 244 years' },
    ],
    dramaticStat: {
      before: '$1,400',
      after: '$0',
      label: 'for world\'s knowledge',
    },
  },

  aftermath: {
    headline: 'When Amateur Beats Expert',
    paragraphs: [
      'The encyclopedia collapse contains a lesson about expertise: being right isn\'t enough. Being accessible, timely, and free matters more.',
      'Wikipedia\'s content is written by volunteers, not experts. It has errors. It has biases. And it completely destroyed the encyclopedia industry.',
      'The 2,300 Britannica salespeople represent a lost profession. No luxury tier survived. No one pays a premium for human-curated knowledge delivered door-to-door.',
      'The compression was 100%. Not "reduced to a luxury tier"—eliminated entirely. The product, the delivery mechanism, and the jobs all disappeared.',
    ],
    survivors: [
      'Wikipedia (volunteer model)',
      'Britannica online (subscription, minimal)',
    ],
    replacedBy: 'Wikipedia, Google Search, specialized databases',
    lessons: [
      'Free and good enough beats expensive and excellent',
      'Volunteer labor can outproduce professional labor',
      'Distribution methods (door-to-door) can become obsolete',
      'Authority doesn\'t guarantee survival',
      'Some compressions leave no luxury tier at all',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Encyclopedia_Britannica_%282020%2C_cropped%29.jpg',
    alt: 'Encyclopedia Britannica volumes',
    credit: 'Wikimedia Commons / CC BY-SA 4.0',
  },

  valueChain: {
    producer: 'Knowledge/Information',
    consumer: 'Person seeking answers',
    coreExchange: 'Access to organized knowledge',
    technology: 'Wikipedia & search engines',
    before: [
      { name: 'Expert Authors', type: 'skill', jobs: ['Researchers', 'Writers'], compressed: true },
      { name: 'Editorial Team', type: 'skill', jobs: ['Editors', 'Fact-checkers'], compressed: true },
      { name: 'Publishing', type: 'physical', jobs: ['Printers', 'Binders'], compressed: true },
      { name: 'Sales Force', type: 'information', jobs: ['Door-to-door salespeople'], compressed: true },
      { name: 'Delivery', type: 'physical', jobs: ['Shipping', 'Installers'], compressed: true },
    ],
    after: [
      { name: 'Wiki Platform', type: 'aggregation', jobs: ['Engineers (few)', 'Volunteer editors'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 5,
      layersAfter: 1,
      jobsBefore: 10000,
      jobsAfter: 100,
    },
  },

  prevStory: 'stock-brokers',
  nextStory: 'record-stores',
};

export default encyclopedias;
