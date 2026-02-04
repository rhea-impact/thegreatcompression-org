/**
 * Newspapers: The Classifieds Collapse
 * When free listings killed the cash cow
 */

import type { CompressionStory } from '../../types/compression';

export const newspapers: CompressionStory = {
  id: 'newspapers',
  slug: 'newspapers',
  title: 'Newspapers',
  tagline: 'How Craigslist destroyed $50 billion in classified revenue',
  color: '#6b7280',

  peakYear: 2000,
  peakMetric: '75,000 newsroom jobs',
  collapseYear: 2020,
  collapseMetric: '~24,000',
  compressionPercent: '68%',

  rise: {
    headline: 'The Daily Miracle',
    paragraphs: [
      'For over a century, newspapers were the information infrastructure of democracy. Every morning, trucks fanned out across cities delivering yesterday\'s news, analysis, and—crucially—classified ads.',
      'The business model was simple: sell attention. News attracted readers, readers attracted advertisers, advertisers paid the bills. But the real profit engine wasn\'t display ads—it was classifieds.',
      'Want to sell a car? Buy a couch? Find an apartment? Hire an employee? You placed a classified ad. Newspapers had a monopoly on connecting local buyers and sellers.',
      'At their peak, classified ads generated $20 billion annually for US newspapers alone—roughly 40% of total revenue. It was the most profitable section of the paper, subsidizing everything else.',
    ],
    keyDates: [
      { year: 1704, event: 'First newspaper ad in America (Boston News-Letter)' },
      { year: 1833, event: 'Penny press makes newspapers affordable to masses' },
      { year: 1900, event: 'Newspapers become primary mass medium' },
      { year: 1950, event: 'Classifieds become dominant profit center' },
      { year: 1990, event: 'US newspaper industry peaks at $65B revenue' },
    ],
  },

  peak: {
    headline: 'Rivers of Gold',
    paragraphs: [
      'Media mogul Rupert Murdoch famously called newspaper classified advertising "rivers of gold." He wasn\'t exaggerating. The margins were extraordinary.',
      'A few column inches of text—"3BR house, $150k, call Jim"—could cost $50-100 per week. Multiply by thousands of listings, and classified sections generated billions in nearly pure profit.',
      'Newsrooms were funded by this goldmine. Investigative teams, foreign bureaus, and beat reporters were all subsidized by people selling used cars and renting apartments.',
      'In 2000, the newspaper industry employed 75,000 journalists. Every major city had competing dailies. Local news was thoroughly covered.',
    ],
    stats: [
      { label: 'Classified Revenue (2000)', value: '$19.6B', sublabel: 'US newspapers' },
      { label: 'Newsroom Jobs (2000)', value: '75,000' },
      { label: 'Daily Newspapers (2000)', value: '1,480', sublabel: 'US publications' },
      { label: 'Classified % of Revenue', value: '40%', sublabel: 'Industry average' },
    ],
    quote: {
      text: 'I call them rivers of gold.',
      author: 'Rupert Murdoch',
      year: 1994,
      role: 'on classified advertising',
    },
    culturalMoment: 'Sunday classified sections were events—apartment hunters circled listings over coffee, car buyers comparison-shopped across pages, job seekers scanned Help Wanted columns.',
  },

  disruption: {
    headline: 'Free Kills Everything',
    technology: 'Craigslist & Online Classifieds',
    paragraphs: [
      'In 1995, Craig Newmark started an email list sharing San Francisco events. It evolved into Craigslist—a website offering free classified listings. Within a decade, it had destroyed a $20 billion industry.',
      'The economics were brutal. Why pay $50 for a newspaper ad when Craigslist was free? Why limit yourself to subscribers when the internet reached everyone?',
      'Newspapers tried to compete with their own websites, but they couldn\'t match free. They tried paywalls, but readers left. They tried cutting costs, but quality suffered.',
      'By 2012, Craigslist alone had cost US newspapers an estimated $5 billion in classified revenue. Add Monster.com for jobs, Zillow for real estate, Cars.com for auto—the unbundling was complete.',
    ],
    keyDates: [
      { year: 1995, event: 'Craigslist launches as email list' },
      { year: 1999, event: 'Monster.com goes public (online job listings)' },
      { year: 2000, event: 'Classified revenue peaks at $19.6B' },
      { year: 2006, event: 'Craigslist expands to all major US cities' },
      { year: 2008, event: 'Great Recession accelerates ad collapse' },
    ],
  },

  collapse: {
    headline: 'The Hollowing Out',
    paragraphs: [
      'Newspaper classified revenue fell from $19.6 billion in 2000 to $2 billion by 2013. That\'s not a decline—it\'s an extinction event.',
      'As the money disappeared, so did the journalists. Layoffs became annual rituals. Foreign bureaus closed. Investigative teams were gutted. Beat reporters vanished.',
      'Newspapers tried everything: paywalls, native advertising, events, membership models. Nothing replaced the classified goldmine.',
      'Many papers simply died. Others became shells—a handful of reporters churning out wire copy and press releases. "News deserts" spread across America as local papers folded.',
    ],
    chartData: [
      { year: 2000, value: 75, label: '75,000 newsroom jobs' },
      { year: 2002, value: 70 },
      { year: 2004, value: 65 },
      { year: 2006, value: 60 },
      { year: 2008, value: 55, label: 'Recession hits' },
      { year: 2010, value: 45 },
      { year: 2012, value: 40 },
      { year: 2014, value: 35 },
      { year: 2016, value: 32 },
      { year: 2018, value: 28 },
      { year: 2020, value: 24, label: '~24,000 remain' },
    ],
    keyDates: [
      { year: 2007, event: 'Tribune Company bankruptcy' },
      { year: 2009, event: 'Rocky Mountain News closes after 150 years' },
      { year: 2012, event: 'Newsweek stops print edition' },
      { year: 2018, event: 'Half of US counties have no local paper or only one' },
      { year: 2020, event: 'Pandemic accelerates closures' },
    ],
    dramaticStat: {
      before: '$19.6B',
      after: '$2B',
      label: 'classified revenue',
    },
  },

  aftermath: {
    headline: 'News Deserts and Information Voids',
    paragraphs: [
      'The classified collapse didn\'t just shrink newspapers—it fundamentally changed what they could do. Without the subsidy, serious journalism became unaffordable.',
      'Over 2,500 newspapers have closed since 2005. More than 200 counties have no local newspaper at all. Local government increasingly operates without oversight.',
      'Some papers survive behind paywalls (NY Times, Washington Post) but these are outliers. The economic model that funded local journalism is gone.',
      'The irony: people read more news than ever, but the funding model that paid for its creation has been destroyed. Information wants to be free—but journalism costs money.',
    ],
    survivors: [
      'National papers (NY Times, WSJ, Washington Post)',
      'Nonprofit news outlets',
      'Subscription newsletters',
    ],
    replacedBy: 'Craigslist, Facebook Marketplace, Indeed, Zillow, social media news feeds',
    lessons: [
      'Free is impossible to compete against',
      'Bundled products can be unbundled',
      'The profitable part subsidizes everything else—lose it, lose everything',
      'Local monopolies can be disrupted overnight',
      'Information abundance doesn\'t mean journalism abundance',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Newspaper_vendor_Buenos_Aires.jpg',
    alt: 'Newspaper vendor',
    credit: 'Wikimedia Commons / Public Domain',
  },

  valueChain: {
    producer: 'Seller/Employer',
    consumer: 'Buyer/Job Seeker',
    coreExchange: 'Connecting people who want to transact',
    technology: 'Craigslist & specialized listing sites',
    before: [
      { name: 'Ad Sales Rep', type: 'information', jobs: ['Classified sales reps'], compressed: true },
      { name: 'Typesetting', type: 'skill', jobs: ['Typesetters', 'Layout designers'], compressed: true },
      { name: 'Printing', type: 'physical', jobs: ['Press operators'], compressed: true },
      { name: 'Distribution', type: 'physical', jobs: ['Truck drivers', 'Delivery workers'], compressed: true },
      { name: 'Newsstand', type: 'physical', jobs: ['Vendors', 'Retailers'], compressed: true },
    ],
    after: [
      { name: 'Website Platform', type: 'aggregation', jobs: ['Engineers (few)'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 5,
      layersAfter: 1,
      jobsBefore: 75000,
      jobsAfter: 24000,
    },
  },

  prevStory: 'kodak',
  nextStory: 'travel-agents',
};

export default newspapers;
