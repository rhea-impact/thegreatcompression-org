/**
 * Kodak: The Photography Empire That Invented Its Own Demise
 * 145,000 employees → 5,000
 */

import type { CompressionStory } from '../../types/compression';

export const kodak: CompressionStory = {
  id: 'kodak',
  slug: 'kodak',
  title: 'Kodak',
  tagline: 'The company that invented digital photography—and was destroyed by it',
  color: '#fbbf24',

  peakYear: 1996,
  peakMetric: '145,000 employees',
  collapseYear: 2012,
  collapseMetric: '~5,000',
  compressionPercent: '97%',

  rise: {
    headline: 'Making Photography Possible for Everyone',
    paragraphs: [
      'In 1888, George Eastman introduced the Kodak camera with the slogan "You press the button, we do the rest." It was revolutionary. Before Kodak, photography required chemicals, darkrooms, and expertise. Eastman made it as simple as pressing a button.',
      'The genius was the business model: sell cheap cameras, profit from film and processing. Every photo taken meant more film purchased, more processing fees collected. A perfect recurring revenue machine.',
      'By the mid-20th century, "Kodak moment" had entered the language. The yellow box was synonymous with capturing memories. Film sales were a license to print money.',
      'Kodak didn\'t just sell film—they owned the entire photographic supply chain: cameras, film, processing chemicals, photo paper, retail minilabs. Every step generated revenue.',
    ],
    keyDates: [
      { year: 1888, event: 'First Kodak camera launches' },
      { year: 1900, event: 'Brownie camera makes photography affordable ($1)' },
      { year: 1935, event: 'Kodachrome color film introduced' },
      { year: 1963, event: 'Instamatic camera sells 50 million units' },
      { year: 1976, event: 'Kodak controls 90% of US film market' },
    ],
  },

  peak: {
    headline: 'The Kodak Moment',
    paragraphs: [
      'At its peak in 1996, Kodak was the fifth most valuable brand in the world. The company employed 145,000 people globally. Its Rochester, NY headquarters was a city within a city.',
      'Film margins were extraordinary—some estimates put gross margins at 70%. Every wedding, birthday, vacation, and graduation generated film sales. Americans alone shot 700 million rolls per year.',
      'The "Kodak moment" wasn\'t just marketing. It was reality. For a century, nearly every important family memory was captured on Kodak film.',
    ],
    stats: [
      { label: 'Peak Employees', value: '145,000', sublabel: 'Worldwide (1996)' },
      { label: 'Film Market Share', value: '90%', sublabel: 'US market' },
      { label: 'Peak Market Cap', value: '$31B', sublabel: '1996' },
      { label: 'Film Margin', value: '~70%', sublabel: 'Gross profit' },
    ],
    quote: {
      text: 'The biggest misconception about Kodak is that we missed digital. We actually invented it.',
      author: 'Former Kodak VP',
      year: 2012,
    },
    culturalMoment: '"Kodak moment" became universal shorthand for any memory worth preserving. The yellow film box was as recognizable as Coca-Cola\'s red.',
  },

  disruption: {
    headline: 'The Camera That Ate Itself',
    technology: 'Digital Photography',
    paragraphs: [
      'In 1975, Kodak engineer Steve Sasson built the first digital camera. It was the size of a toaster and took 23 seconds to record an image. When he showed executives, one asked: "Why would anyone want to look at their pictures on a TV?"',
      'Kodak buried it. Digital photos didn\'t require film. No film meant no processing. No processing meant no photo paper. Digital photography would cannibalize everything that made Kodak profitable.',
      'The math was brutal: a digital camera was a one-time purchase. Film was purchased over and over. Kodak executives couldn\'t justify destroying their cash cow.',
      'But physics doesn\'t care about business models. Digital sensors improved exponentially. By 2000, consumer digital cameras were good enough. By 2007, the iPhone put a camera in every pocket.',
    ],
    keyDates: [
      { year: 1975, event: 'Kodak engineer invents digital camera' },
      { year: 1991, event: 'Kodak releases first professional DSLR ($13,000)' },
      { year: 1999, event: 'Digital cameras outsell film cameras in Japan' },
      { year: 2003, event: 'Kodak finally pivots to digital—too late' },
      { year: 2007, event: 'iPhone launches; phone cameras begin dominance' },
    ],
  },

  collapse: {
    headline: 'From Yellow Giant to Bankruptcy',
    paragraphs: [
      'The collapse was shockingly fast. Film volume peaked in 2000 and fell 20-25% per year thereafter. There was no gradual decline—it was a cliff.',
      'Kodak tried everything: digital cameras (competed on thin margins against Asian manufacturers), inkjet printers (too late, market owned by HP), and retail photo kiosks (declining traffic).',
      'In 2012, Kodak filed for bankruptcy. The company that defined photography for over a century couldn\'t survive the transition it had invented.',
      'Rochester, once a company town, lost not just Kodak jobs but the entire ecosystem of suppliers, restaurants, and services that depended on those workers.',
    ],
    chartData: [
      { year: 1996, value: 145, label: 'Peak employment' },
      { year: 1998, value: 140 },
      { year: 2000, value: 120 },
      { year: 2002, value: 100 },
      { year: 2004, value: 75, label: 'Restructuring begins' },
      { year: 2006, value: 50 },
      { year: 2008, value: 30 },
      { year: 2010, value: 20 },
      { year: 2012, value: 17, label: 'Bankruptcy' },
      { year: 2014, value: 8 },
      { year: 2020, value: 5, label: 'Emerges as B2B company' },
    ],
    keyDates: [
      { year: 2000, event: 'Film sales begin steep decline' },
      { year: 2004, event: 'Kodak exits camera manufacturing' },
      { year: 2009, event: 'Kodachrome discontinued' },
      { year: 2012, event: 'Bankruptcy filing' },
      { year: 2013, event: 'Emerges from bankruptcy, sells imaging patents' },
    ],
    dramaticStat: {
      before: '145,000',
      after: '~5,000',
      label: 'employees',
    },
  },

  aftermath: {
    headline: 'The Company That Saw the Future and Lost',
    paragraphs: [
      'Kodak exists today but is unrecognizable. It\'s a B2B company making industrial printing equipment and specialty chemicals. Consumer photography—its identity for 130 years—is gone.',
      'The "Kodak moment" still exists, but it\'s captured on iPhones and stored in the cloud. No film. No processing. No Kodak.',
      'The cruelest irony: Kodak\'s own engineers invented the technology that destroyed them. They saw the future clearly—and were paralyzed by it.',
      'Instagram, which processes more photos daily than Kodak did annually at its peak, was bought by Facebook for $1 billion in 2012—the same year Kodak filed for bankruptcy.',
    ],
    survivors: [
      'Kodak Alaris (film spinoff, tiny niche)',
      'Kodak (industrial printing)',
    ],
    replacedBy: 'Digital cameras, smartphones, cloud storage, Instagram, iPhone',
    lessons: [
      'Inventing the future doesn\'t mean you\'ll survive it',
      'Protecting profitable products can destroy companies',
      'Exponential change is impossible to compete against with linear thinking',
      'One-time purchases beat recurring revenue when the product is better',
      'By the time disruption is obvious, it\'s already too late',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Kodak_Brownie_camera.jpg',
    alt: 'Kodak Brownie camera',
    credit: 'Wikimedia Commons / Public Domain',
  },

  valueChain: {
    producer: 'Photographer',
    consumer: 'Person viewing photo',
    coreExchange: 'Capturing and viewing a visual memory',
    technology: 'Digital sensors & smartphone cameras',
    before: [
      { name: 'Camera', type: 'physical', jobs: ['Camera retailers'], compressed: true },
      { name: 'Film', type: 'physical', jobs: ['Film manufacturing', 'Chemical engineers'], compressed: true },
      { name: 'Photo Lab', type: 'skill', jobs: ['Lab technicians', 'Photo developers'], compressed: true },
      { name: 'Printing', type: 'physical', jobs: ['Print machine operators'], compressed: true },
      { name: 'Pickup/Delivery', type: 'physical', jobs: ['Retail clerks'], compressed: true },
    ],
    after: [
      { name: 'Smartphone', type: 'physical', jobs: ['Hardware engineers'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 5,
      layersAfter: 1,
      jobsBefore: 145000,
      jobsAfter: 5000,
    },
  },

  prevStory: 'telegraph',
  nextStory: 'newspapers',
};

export default kodak;
