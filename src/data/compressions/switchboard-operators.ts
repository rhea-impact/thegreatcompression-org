/**
 * Switchboard Operators: The Human Routers
 * 350,000 operators → automated switching
 */

import type { CompressionStory } from '../../types/compression';

export const switchboardOperators: CompressionStory = {
  id: 'switchboard-operators',
  slug: 'switchboard-operators',
  title: 'Switchboard Operators',
  tagline: 'Number, please? The humans who connected the world',
  color: '#7c3aed',

  peakYear: 1950,
  peakMetric: '350,000 operators',
  collapseYear: 1990,
  collapseMetric: '~20,000',
  compressionPercent: '94%',

  rise: {
    headline: 'The Voice on the Line',
    paragraphs: [
      'In 1878, just two years after Bell\'s patent, the first telephone exchange opened in New Haven, Connecticut. It had 21 subscribers. Each call required a human to physically connect the wires.',
      'The job quickly became feminized. Telephone companies found that young women had the right combination of patience, clear voices, and manual dexterity—and could be paid less than men.',
      '"Number, please" became the universal greeting. Operators sat at massive switchboards, plugging and unplugging cords hundreds of times per hour.',
      'The work was demanding: memorizing local numbers, maintaining perfect posture, speaking clearly, and handling irate callers—all while managing dozens of simultaneous connections.',
    ],
    keyDates: [
      { year: 1878, event: 'First telephone exchange opens (New Haven, CT)' },
      { year: 1891, event: 'Almon Strowger patents automatic switch' },
      { year: 1920, event: 'Dial telephones begin replacing manual switching' },
      { year: 1943, event: 'Operator workforce peaks during WWII' },
    ],
  },

  peak: {
    headline: 'The Human Switchboard',
    paragraphs: [
      'At its peak around 1950, the Bell System employed over 350,000 telephone operators—making it one of the largest employers of women in America.',
      'Operators weren\'t just connectors; they were essential community infrastructure. They provided emergency services, wake-up calls, time checks, and even local information.',
      'The job had strict requirements: operators had to maintain posture, speak clearly, follow scripts exactly, and handle calls in under 30 seconds. Supervisors monitored constantly.',
      'Major switchboard rooms were industrial marvels—hundreds of operators in rows, thousands of cords, millions of connections per day.',
    ],
    stats: [
      { label: 'Peak Operators (1950)', value: '350,000', sublabel: 'Bell System' },
      { label: 'Calls Handled Daily', value: 'Millions', sublabel: 'Per operator: 200+' },
      { label: 'Female Workforce', value: '98%', sublabel: 'Almost exclusively women' },
      { label: 'Average Tenure', value: '3 years', sublabel: 'High turnover' },
    ],
    quote: {
      text: 'Number, please.',
      author: 'Standard operator greeting',
      year: 1920,
    },
    culturalMoment: 'The telephone operator was a cultural icon—patient, helpful, ever-present. "I\'ll connect you" was a promise of human assistance in an increasingly mechanical world.',
  },

  disruption: {
    headline: 'Dial Tone: The Machine Takes Over',
    technology: 'Automatic Telephone Switching',
    paragraphs: [
      'The automatic telephone switch was invented in 1891 by Almon Strowger, an undertaker who believed operators were routing his calls to competitors. He created a system where callers dialed numbers directly.',
      'Adoption was slow. AT&T resisted—operators were profitable (low wages) and automatic switches were expensive. But the math eventually won: one machine could replace dozens of operators.',
      'The transition took decades. Dial service spread from city to city, starting with business lines. By 1960, most American homes had dial telephones.',
      'Long-distance operators held on longer—complex routing required human judgment. But electronic switching systems in the 1960s and 70s automated those calls too.',
    ],
    keyDates: [
      { year: 1891, event: 'Strowger patents automatic switch' },
      { year: 1919, event: 'First dial service in major city (Norfolk, VA)' },
      { year: 1951, event: 'Direct distance dialing begins' },
      { year: 1965, event: 'Electronic switching systems deployed' },
      { year: 1983, event: 'AT&T breakup; operators become rare' },
    ],
  },

  collapse: {
    headline: 'The Long Goodbye',
    paragraphs: [
      'Unlike many compressions, the switchboard operator decline was gradual—spanning nearly a century from Strowger\'s patent to near-total automation.',
      'Each technological generation eliminated more operators. Step-by-step switches handled local calls. Crossbar switches handled more. Electronic switches handled everything.',
      'By 1990, telephone operators numbered around 20,000—and most handled specialized services like directory assistance or operator-assisted calls, not routine switching.',
      'Today, "0" still connects to an operator at some carriers, but the role is vestigial. The human router has been completely replaced by software.',
    ],
    chartData: [
      { year: 1920, value: 180, label: 'Early peak' },
      { year: 1930, value: 220 },
      { year: 1943, value: 350, label: 'WWII peak: 350,000' },
      { year: 1950, value: 340 },
      { year: 1960, value: 250, label: 'Direct dialing spreads' },
      { year: 1970, value: 150 },
      { year: 1980, value: 80 },
      { year: 1990, value: 20, label: '~20,000 remain' },
    ],
    keyDates: [
      { year: 1958, event: 'Majority of US has dial service' },
      { year: 1970, event: 'Electronic switching reaches most cities' },
      { year: 1984, event: 'AT&T breakup eliminates central operator pools' },
      { year: 1990, event: 'Directory assistance automated' },
    ],
    dramaticStat: {
      before: '350,000',
      after: '~20,000',
      label: 'operators',
    },
  },

  aftermath: {
    headline: 'The Original Automation',
    paragraphs: [
      'Switchboard operators were arguably the first major white-collar job category eliminated by automation. They pioneered a pattern that would repeat across industries.',
      'Some former operators moved into customer service, directory assistance, or 911 dispatch—roles requiring human judgment rather than routine switching.',
      'The social impact was significant: telephone operating had been a respectable job for women without college degrees. Its elimination reduced opportunities.',
      'Today, the legacy survives in "press 0 for operator"—a phrase that once meant instant human help and now often leads to voicemail.',
    ],
    survivors: [
      '911 dispatchers (emergency services)',
      'Directory assistance (411, declining)',
      'Specialized operator services (hotels, hospitals)',
    ],
    replacedBy: 'Automatic switching, electronic switches, digital telephone networks, VoIP',
    lessons: [
      'Routine cognitive work can be automated',
      'Gradual compression can be just as total as sudden collapse',
      'Being "essential" doesn\'t mean being irreplaceable',
      'Female-dominated professions were early automation targets',
      'A 100-year timeline is still compression',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Photograph_of_Women_Working_at_a_Bell_System_Telephone_Switchboard_%283660047829%29.jpg',
    alt: 'Women working at a Bell System telephone switchboard',
    credit: 'Wikimedia Commons / Public Domain',
  },

  valueChain: {
    producer: 'Caller',
    consumer: 'Call Recipient',
    coreExchange: 'Connecting two telephone lines',
    technology: 'Automatic telephone switching',
    before: [
      { name: 'Switchboard Operator', type: 'skill', jobs: ['Telephone operators (350,000)'], compressed: true },
      { name: 'Physical Connection', type: 'physical', jobs: ['Cord board operators'], compressed: true },
      { name: 'Supervision', type: 'trust', jobs: ['Supervisors', 'Chief operators'], compressed: true },
    ],
    after: [
      { name: 'Digital Switch', type: 'aggregation', jobs: ['Network engineers'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 3,
      layersAfter: 1,
      jobsBefore: 350000,
      jobsAfter: 20000,
    },
  },

  prevStory: 'toll-collectors',
  nextStory: 'bank-tellers',
};

export default switchboardOperators;
