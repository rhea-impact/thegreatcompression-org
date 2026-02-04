/**
 * Toll Collectors: The Human Transaction Layer
 * When E-ZPass made humans obsolete
 */

import type { CompressionStory } from '../../types/compression';

export const tollCollectors: CompressionStory = {
  id: 'toll-collectors',
  slug: 'toll-collectors',
  title: 'Toll Collectors',
  tagline: 'When a transponder replaced a handshake',
  color: '#059669',

  peakYear: 1990,
  peakMetric: '~50,000 collectors',
  collapseYear: 2024,
  collapseMetric: '~10,000',
  compressionPercent: '80%',

  rise: {
    headline: 'The Human Tollbooth',
    paragraphs: [
      'Toll roads date back to ancient times, but modern American toll collection emerged in the 1930s and 40s with the Pennsylvania Turnpike and other major highways.',
      'The job was simple: sit in a booth, take money, make change, raise the gate. Repeat thousands of times per shift. It required no special training but offered decent pay and union protection.',
      'At peak, toll collection employed around 50,000 Americans. The booths were iconic—long lines of cars, exact change lanes, the rhythmic clunk of coins in the basket.',
      'For many, it was a stable government job with benefits. Collectors often worked the same booth for decades, knowing regular commuters by name.',
    ],
    keyDates: [
      { year: 1940, event: 'Pennsylvania Turnpike opens (first modern toll road)' },
      { year: 1956, event: 'Interstate Highway System begins (limited toll roads)' },
      { year: 1970, event: 'Toll collection peaks as a profession' },
      { year: 1985, event: 'First electronic toll experiments begin' },
    ],
  },

  peak: {
    headline: 'The Exact Change Economy',
    paragraphs: [
      'By 1990, toll collection was a mature industry. Collectors handled billions of transactions annually across thousands of toll plazas.',
      'The job had rhythm: wave in, take payment, give change, raise gate. Experienced collectors could process a car every 15-20 seconds during rush hour.',
      'It was also strangely social. Regulars and collectors developed relationships. Some collectors became local celebrities—the friendly face at the start and end of commutes.',
      'The unions were strong. Toll collectors had job security, benefits, and defined pensions. It was honest work that machines couldn\'t do—or so it seemed.',
    ],
    stats: [
      { label: 'US Toll Collectors (Peak)', value: '~50,000', sublabel: 'Estimated' },
      { label: 'Average Wage', value: '$30-40K', sublabel: 'With benefits' },
      { label: 'Processing Time', value: '15-20 sec', sublabel: 'Per vehicle' },
      { label: 'Toll Plazas', value: '5,000+', sublabel: 'Nationwide' },
    ],
    quote: {
      text: 'I know every regular. We talk about the weather, their kids, the game last night. It\'s a community.',
      author: 'Anonymous toll collector',
      year: 1995,
    },
    culturalMoment: 'The toll booth was a liminal space—between here and there, between work and home. It was also a place of small human connections in an increasingly anonymous world.',
  },

  disruption: {
    headline: 'The Transponder Revolution',
    technology: 'E-ZPass & Electronic Tolling',
    paragraphs: [
      'E-ZPass launched in 1993 as a consortium of toll authorities in the Northeast. The concept: a small radio transponder on your windshield, automatic billing, no stopping required.',
      'Early adoption was slow. Drivers were skeptical of the technology and the monthly fees. But the time savings were irresistible—dedicated E-ZPass lanes moved at highway speed.',
      'By 2000, E-ZPass had expanded across 14 states. Similar systems (SunPass, FasTrak, I-Pass) covered the rest of the country.',
      'The final evolution: cashless tolling. No booths at all. Cameras read license plates, bills arrive by mail. The toll plaza itself became obsolete.',
    ],
    keyDates: [
      { year: 1993, event: 'E-ZPass launches in New York' },
      { year: 1998, event: 'E-ZPass expands to 7 states' },
      { year: 2001, event: 'California launches FasTrak' },
      { year: 2012, event: 'All-electronic tolling begins (no cash lanes)' },
      { year: 2020, event: 'COVID accelerates cashless tolling adoption' },
    ],
  },

  collapse: {
    headline: 'The Vanishing Booth',
    paragraphs: [
      'The decline was steady but inexorable. As E-ZPass adoption grew, cash lanes shrank. Agencies discovered electronic tolling was 10x cheaper to operate.',
      'The math was compelling: a toll collector costs $50,000+ per year with benefits. An E-ZPass transponder costs $20 and processes unlimited transactions.',
      'COVID-19 delivered the final blow. Health concerns eliminated cash lanes almost overnight. Agencies that had planned gradual transitions went fully electronic in weeks.',
      'Today, many states have eliminated toll collectors entirely. The remaining jobs are in regions with political resistance to automation or high cash-usage populations.',
    ],
    chartData: [
      { year: 1990, value: 50, label: 'Peak: ~50,000' },
      { year: 1995, value: 48 },
      { year: 2000, value: 42, label: 'E-ZPass expands' },
      { year: 2005, value: 35 },
      { year: 2010, value: 28 },
      { year: 2015, value: 22 },
      { year: 2020, value: 15, label: 'COVID acceleration' },
      { year: 2024, value: 10, label: '~10,000 remain' },
    ],
    keyDates: [
      { year: 2008, event: 'Florida converts to all-electronic' },
      { year: 2016, event: 'Port Authority NYC phases out cash' },
      { year: 2020, event: 'COVID eliminates most remaining cash lanes' },
      { year: 2022, event: 'New Jersey Turnpike goes cashless' },
    ],
    dramaticStat: {
      before: '50,000',
      after: '10,000',
      label: 'toll collectors',
    },
  },

  aftermath: {
    headline: 'The Automated Transaction',
    paragraphs: [
      'Toll collection demonstrates the vulnerability of human transaction processing. When the core function is "take money, give access," machines win.',
      'Some collectors were retrained as customer service representatives or transferred to other transportation authority jobs. Many took early retirement.',
      'The remaining toll collectors exist in a few holdout regions, often protected by political agreements with unions or serving cash-dependent communities.',
      'The pattern is clear: any job that is fundamentally a transaction will be automated. The question is only when.',
    ],
    survivors: [
      'Customer service roles (E-ZPass support)',
      'Toll violation processing',
      'Cash lanes in limited regions',
    ],
    replacedBy: 'E-ZPass, SunPass, FasTrak, license plate recognition, automatic billing',
    lessons: [
      'Transaction processing is always vulnerable to automation',
      'Health crises can accelerate automation by decades',
      'The "human touch" doesn\'t matter for commodity transactions',
      'Public sector jobs aren\'t immune to compression',
      'Technology adoption has tipping points—once crossed, change accelerates',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Toll_booth_on_a_road_in_New_Jersey.jpg',
    alt: 'Traditional toll booth in New Jersey',
    credit: 'Wikimedia Commons / Public Domain',
  },

  valueChain: {
    producer: 'Driver',
    consumer: 'Road Authority',
    coreExchange: 'Payment for road access',
    technology: 'E-ZPass & electronic tolling',
    before: [
      { name: 'Toll Booth', type: 'physical', jobs: ['Toll collectors'], compressed: true },
      { name: 'Cash Handling', type: 'physical', jobs: ['Armored car services'], compressed: true },
      { name: 'Manual Reconciliation', type: 'skill', jobs: ['Accountants'], compressed: true },
    ],
    after: [
      { name: 'Transponder System', type: 'aggregation', jobs: ['System administrators'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 3,
      layersAfter: 1,
      jobsBefore: 50000,
      jobsAfter: 10000,
    },
  },

  prevStory: 'blockbuster',
  nextStory: 'switchboard-operators',
};

export default tollCollectors;
