/**
 * Photo Developers: The 1-Hour Photo Apocalypse
 * When digital cameras eliminated the darkroom
 */

import type { CompressionStory } from '../../types/compression';

export const photoDevelopers: CompressionStory = {
  id: 'photo-developers',
  slug: 'photo-developers',
  title: 'Photo Developers',
  tagline: 'When "1-hour photo" became "instant preview"',
  color: '#f43f5e',

  peakYear: 1999,
  peakMetric: '~70,000 workers',
  collapseYear: 2012,
  collapseMetric: '~5,000',
  compressionPercent: '93%',

  rise: {
    headline: 'The Magic of the Darkroom',
    paragraphs: [
      'For over a century, taking a photo was only half the process. The other half happened in the darkroom—or at the photo lab.',
      'The chemistry was real: film contained silver halide crystals that reacted to light. Developing required precise temperature control, timing, and chemical baths. Printing required enlargers and more chemistry.',
      'Most consumers never touched a darkroom. They dropped film at drugstores, grocery stores, or dedicated photo labs. "Your photos will be ready Tuesday" was a common refrain.',
      'The 1-hour photo minilab, introduced in the 1980s, revolutionized the industry. Small machines could process film on-site. No more waiting days—instant gratification.',
    ],
    keyDates: [
      { year: 1888, event: 'Kodak introduces consumer film' },
      { year: 1942, event: 'Kodacolor brings color to consumers' },
      { year: 1982, event: 'First 1-hour photo minilabs appear' },
      { year: 1990, event: 'Minilabs in every mall and drugstore' },
      { year: 1999, event: 'Photo processing industry peaks' },
    ],
  },

  peak: {
    headline: 'The Minilab Boom',
    paragraphs: [
      'By 1999, photo processing employed approximately 70,000 workers in the US alone. Every drugstore, grocery store, and shopping mall had a photo counter.',
      'Minilabs were expensive—$100,000 or more—but highly profitable. The machines could process a roll of film in under an hour for $10-15, with gross margins over 50%.',
      'The job was part technical, part retail. Workers loaded film, monitored machine chemistry, handled reprints and enlargements, and upsold photo albums and frames.',
      'It was a stable job that required training but not a degree. Many workers built careers running photo departments for retail chains.',
    ],
    stats: [
      { label: 'US Photo Lab Workers', value: '~70,000', sublabel: 'At peak (1999)' },
      { label: 'Rolls Processed (US)', value: '700M/year', sublabel: 'At peak' },
      { label: 'Minilab Cost', value: '$100K+', sublabel: 'Per machine' },
      { label: 'Average Development Price', value: '$10-15', sublabel: 'Per roll' },
    ],
    quote: {
      text: 'I remember when every roll was a surprise. You never knew what you captured until you got the prints back.',
      author: 'Former photo lab manager',
      year: 2010,
    },
    culturalMoment: 'Picking up photos was an event. Flipping through prints at the counter, discovering which shots came out, ordering doubles for friends—this ritual defined photography for generations.',
  },

  disruption: {
    headline: 'The Digital Extinction Event',
    technology: 'Digital Cameras',
    paragraphs: [
      'Digital cameras didn\'t just change how photos were taken—they eliminated the need for processing entirely. See the photo instantly. Delete the bad ones. Keep the good ones forever.',
      'Early digital cameras (1990s) were expensive and low quality. But improvement was exponential. By 2003, digital camera sales surpassed film cameras.',
      'The camera phone was the killshot. When the iPhone launched in 2007, everyone suddenly carried a camera everywhere. And those photos never needed developing.',
      'The collapse was shockingly fast. Film processing volume fell 30% per year from 2003-2010. The industry that took decades to build disappeared in less than ten years.',
    ],
    keyDates: [
      { year: 1999, event: 'Nikon D1 proves digital can rival film' },
      { year: 2003, event: 'Digital camera sales exceed film cameras' },
      { year: 2007, event: 'iPhone launches; camera phones go mainstream' },
      { year: 2008, event: 'Polaroid announces film discontinuation' },
      { year: 2012, event: 'Kodak bankruptcy; film era effectively ends' },
    ],
  },

  collapse: {
    headline: 'From 1-Hour to Zero',
    paragraphs: [
      'The minilab industry collapsed faster than almost any other. A business that had taken 20 years to build was destroyed in less than 10.',
      'Retailers responded by removing photo departments. Machines that cost $100,000 were sold for scrap. Workers were laid off or reassigned.',
      'Some labs pivoted to printing digital photos, but the volumes were tiny. People stopped printing. Photos lived on screens now.',
      'Today, photo printing is a niche service—mostly for special occasions like weddings or professional photographers. The everyday consumer photo processing industry is gone.',
    ],
    chartData: [
      { year: 1999, value: 70, label: 'Peak: ~70,000 workers' },
      { year: 2001, value: 65 },
      { year: 2003, value: 55, label: 'Digital surpasses film' },
      { year: 2005, value: 40 },
      { year: 2007, value: 25, label: 'iPhone launches' },
      { year: 2009, value: 15 },
      { year: 2012, value: 5, label: '~5,000 remain' },
    ],
    keyDates: [
      { year: 2005, event: 'Walmart reduces photo departments' },
      { year: 2008, event: 'CVS and Walgreens downsize photo' },
      { year: 2010, event: 'Most minilabs removed from retail' },
      { year: 2012, event: 'Kodak bankruptcy filing' },
    ],
    dramaticStat: {
      before: '700M',
      after: '~50M',
      label: 'rolls processed per year',
    },
  },

  aftermath: {
    headline: 'The Printless World',
    paragraphs: [
      'Photo developers joined a small club: professions that went from essential to extinct in a single decade.',
      'The irony: more photos are taken today than ever before. Billions per day. But virtually none require processing or printing.',
      'A tiny niche survives: professional photo labs serving photographers, specialty printing services, and the hipster film photography revival.',
      'The compression was total because the core function (turning film into prints) became unnecessary. You can\'t find a luxury tier for something no one needs.',
    ],
    survivors: [
      'Professional photo labs (weddings, commercial)',
      'Online print services (Shutterfly, Snapfish)',
      'Film photography specialists (niche hobby)',
    ],
    replacedBy: 'Digital cameras, smartphones, cloud storage, social media, screens',
    lessons: [
      'When the product becomes unnecessary, no efficiency gains matter',
      'Digital substitution can be faster than anyone expects',
      'Phone cameras killed two industries at once (film AND photo processing)',
      'Some compressions leave no survivors',
      'The last use case is often sentimental, not functional',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Photo_Minilab_in_action.jpg',
    alt: 'Photo minilab processing machine',
    credit: 'Wikimedia Commons / CC BY-SA',
  },

  valueChain: {
    producer: 'Photographer',
    consumer: 'Person viewing photos',
    coreExchange: 'Turning captured light into viewable images',
    technology: 'Digital cameras and smartphones',
    before: [
      { name: 'Film Purchase', type: 'physical', jobs: ['Retail clerks'], compressed: true },
      { name: 'Photo Lab', type: 'physical', jobs: ['Lab workers (~70,000)'], compressed: true },
      { name: 'Chemical Processing', type: 'skill', jobs: ['Lab technicians'], compressed: true },
      { name: 'Printing', type: 'physical', jobs: ['Print operators'], compressed: true },
    ],
    after: [
      { name: 'Digital Sensor', type: 'physical', jobs: ['Hardware engineers'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 4,
      layersAfter: 1,
      jobsBefore: 70000,
      jobsAfter: 5000,
    },
  },

  prevStory: 'bank-tellers',
  nextStory: undefined,
};

export default photoDevelopers;
