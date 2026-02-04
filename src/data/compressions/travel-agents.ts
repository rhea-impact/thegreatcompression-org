/**
 * Travel Agents: The Gateway Industry That Lost Its Gate
 * 124,000 agents → ~60,000 (mostly luxury)
 */

import type { CompressionStory } from '../../types/compression';

export const travelAgents: CompressionStory = {
  id: 'travel-agents',
  slug: 'travel-agents',
  title: 'Travel Agents',
  tagline: 'When booking a flight went from expertise to a few clicks',
  color: '#0ea5e9',

  peakYear: 1996,
  peakMetric: '124,000 agents',
  collapseYear: 2020,
  collapseMetric: '~60,000',
  compressionPercent: '52%',

  rise: {
    headline: 'The Knowledge Gatekeepers',
    paragraphs: [
      'Before the internet, booking travel was genuinely difficult. Airline fares were Byzantine—thousands of rules, restrictions, and pricing tiers. Hotel availability was opaque. Package deals required expertise to assemble.',
      'Travel agents held the keys. They had access to the Global Distribution Systems (GDS)—Sabre, Amadeus, Worldspan—reservation networks that connected to airlines and hotels worldwide.',
      'An agent could find connections, compare prices, and book everything in one session. They knew the tricks: which routes had upgrades, which hotels negotiated, when to book for best prices.',
      'Airlines paid 10% commission on every ticket. A family vacation could net $500 in commissions. Agents built careers, agencies grew into empires, and the industry peaked at 124,000 workers.',
    ],
    keyDates: [
      { year: 1946, event: 'First computer reservation system (American Airlines)' },
      { year: 1964, event: 'Sabre GDS launches' },
      { year: 1978, event: 'Airline deregulation creates complex pricing' },
      { year: 1985, event: 'Peak commission era (10% on domestic flights)' },
      { year: 1996, event: 'Industry employment peaks at 124,000' },
    ],
  },

  peak: {
    headline: 'The Trusted Advisors',
    paragraphs: [
      'In 1996, over 80% of airline tickets were booked through travel agents. They weren\'t just order-takers—they were trusted advisors who knew their clients\' preferences and could navigate complexity.',
      'Corporate travel was especially lucrative. Business travelers needed changes, cancellations, and last-minute bookings. Agents handled it all, often with dedicated corporate accounts.',
      'The industry employed 124,000 people. Agencies ranged from small storefront operations to massive chains like American Express Travel and Carlson Wagonlit.',
      'Being a travel agent was a real career—professional, respected, and well-compensated. The skills took years to develop, the knowledge was genuinely valuable.',
    ],
    stats: [
      { label: 'Travel Agent Jobs (1996)', value: '124,000', sublabel: 'US employment' },
      { label: 'Bookings Through Agents', value: '80%', sublabel: 'of airline tickets (1996)' },
      { label: 'Airline Commission Rate', value: '10%', sublabel: 'Standard domestic' },
      { label: 'Average Booking Revenue', value: '$45', sublabel: 'Per ticket (1990s)' },
    ],
    quote: {
      text: 'A good travel agent is worth their weight in gold.',
      author: 'Common saying',
      year: 1990,
    },
    culturalMoment: 'Every mall had a travel agency. Vacation planning meant visiting your agent, flipping through brochures, and trusting their expertise. It was part consultation, part shopping experience.',
  },

  disruption: {
    headline: 'Direct Access to Everything',
    technology: 'Online Travel Agencies & Airline Websites',
    paragraphs: [
      'The internet did two devastating things to travel agents: it gave consumers direct access to the same booking systems, and it let airlines stop paying commissions.',
      'Expedia launched in 1996, Travelocity in 1996, Priceline in 1997. Suddenly, anyone could search flights, compare prices, and book instantly—no agent needed.',
      'Airlines saw the opportunity. In 1995, Delta cut domestic commissions to 10%. Then to 8%. Then 5%. In 2002, Delta eliminated base commissions entirely. Other airlines followed.',
      'The double blow was fatal: consumers didn\'t need agents for information, and agents couldn\'t earn money even if consumers used them. The value proposition collapsed.',
    ],
    keyDates: [
      { year: 1995, event: 'Delta cuts commissions to 10%, starts cap at $50' },
      { year: 1996, event: 'Expedia and Travelocity launch' },
      { year: 1997, event: 'Priceline launches "Name Your Own Price"' },
      { year: 1999, event: 'Airlines launch direct booking websites' },
      { year: 2002, event: 'Delta eliminates base commissions; industry follows' },
    ],
  },

  collapse: {
    headline: 'The Middle Hollows Out',
    paragraphs: [
      'The numbers tell the story: 80% of bookings through agents in 1996, less than 5% by 2020. Over half of travel agent jobs disappeared.',
      'The remaining agents split into two tiers. At the top: luxury travel consultants serving wealthy clients planning complex, high-end trips. At the bottom: corporate travel managers handling business accounts.',
      'The vast middle—the storefront agent booking family vacations—was obliterated. Mall travel agencies vanished. Chains consolidated or closed.',
      'American Express Travel, once synonymous with travel agents, pivoted to corporate travel management. Most small agencies simply ceased to exist.',
    ],
    chartData: [
      { year: 1996, value: 124, label: 'Peak: 124,000 agents' },
      { year: 1998, value: 115 },
      { year: 2000, value: 105 },
      { year: 2002, value: 95, label: 'Commissions eliminated' },
      { year: 2004, value: 85 },
      { year: 2006, value: 78 },
      { year: 2008, value: 72 },
      { year: 2010, value: 68 },
      { year: 2012, value: 65 },
      { year: 2016, value: 62 },
      { year: 2020, value: 60, label: '~60,000 remain' },
    ],
    keyDates: [
      { year: 2001, event: '9/11 devastates travel industry' },
      { year: 2002, event: 'Airlines eliminate base commissions' },
      { year: 2008, event: 'Recession further reduces travel spending' },
      { year: 2015, event: 'Smartphones make mobile booking dominant' },
      { year: 2020, event: 'COVID-19 devastates remaining agents' },
    ],
    dramaticStat: {
      before: '80%',
      after: '5%',
      label: 'of bookings through agents',
    },
  },

  aftermath: {
    headline: 'The Luxury Tier Survives',
    paragraphs: [
      'Unlike telegraph operators, travel agents didn\'t go to zero. A luxury tier survived—and even thrives.',
      'High-end travel agents now focus on affluent clients: safari planning, honeymoon destinations, around-the-world itineraries. They charge fees (not commissions) and provide genuine expertise.',
      'The signal: if you have a travel agent, you can afford one. Human service becomes the luxury. Self-serve (booking your own flights) becomes the baseline.',
      'This is the compression sigmoid in action: luxury at the top, DIY at the bottom, and the entire middle—the everyday travel agent helping middle-class families—compressed away.',
    ],
    survivors: [
      'Luxury travel advisors (high-end, fee-based)',
      'Corporate travel managers',
      'Niche specialists (cruise agents, destination experts)',
    ],
    replacedBy: 'Expedia, Booking.com, Kayak, Google Flights, airline apps',
    lessons: [
      'Access to information was the product; internet made it free',
      'Commission-based models are vulnerable to disintermediation',
      'Luxury tiers can survive when mass markets collapse',
      'Complexity that required expertise can become simple',
      'Human service becomes a status signal, not a necessity',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Thomas_Cook_Office_%281910%29.jpg',
    alt: 'Early travel agency office',
    credit: 'Wikimedia Commons / Public Domain',
  },

  valueChain: {
    producer: 'Airline/Hotel',
    consumer: 'Traveler',
    coreExchange: 'Booking a trip',
    technology: 'Online Travel Agencies & direct booking',
    before: [
      { name: 'GDS Systems', type: 'information', jobs: ['GDS operators'], compressed: false },
      { name: 'Travel Agent', type: 'information', jobs: ['Travel agents', 'Agency staff'], compressed: true },
      { name: 'Ticket Printing', type: 'physical', jobs: ['Ticket agents'], compressed: true },
    ],
    after: [
      { name: 'Booking Platform', type: 'aggregation', jobs: ['Platform engineers'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 3,
      layersAfter: 1,
      jobsBefore: 124000,
      jobsAfter: 60000,
    },
  },

  prevStory: 'newspapers',
  nextStory: 'stock-brokers',
};

export default travelAgents;
