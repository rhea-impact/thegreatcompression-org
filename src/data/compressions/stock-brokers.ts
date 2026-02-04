/**
 * Stock Brokers: When Trading Went From $50 to $0
 * The commission collapse
 */

import type { CompressionStory } from '../../types/compression';

export const stockBrokers: CompressionStory = {
  id: 'stock-brokers',
  slug: 'stock-brokers',
  title: 'Stock Brokers',
  tagline: 'From $50 per trade to $0—and the human brokers in between',
  color: '#22c55e',

  peakYear: 1990,
  peakMetric: '$50+ per trade',
  collapseYear: 2019,
  collapseMetric: '$0',
  compressionPercent: '100%',

  rise: {
    headline: 'The Licensed Gatekeepers',
    paragraphs: [
      'For most of the 20th century, buying stocks required a licensed human intermediary. You couldn\'t just call the NYSE yourself—you needed a broker.',
      'Brokers weren\'t just order-takers. They held Series 7 licenses, understood markets, and (in theory) provided advice. A typical commission was $50-100 per trade, plus percentage fees on larger orders.',
      'The profession had prestige. Successful brokers earned six figures, wore suits, worked on trading floors, and cultivated relationships with wealthy clients.',
      'Brokerage firms like Merrill Lynch, Dean Witter, and E.F. Hutton became household names. "When E.F. Hutton talks, people listen" wasn\'t just an ad—it reflected genuine market power.',
    ],
    keyDates: [
      { year: 1792, event: 'Buttonwood Agreement creates NYSE predecessor' },
      { year: 1934, event: 'SEC established; broker licensing required' },
      { year: 1975, event: '"May Day"—fixed commissions abolished, competition begins' },
      { year: 1982, event: 'Charles Schwab pioneers discount brokerage' },
      { year: 1990, event: 'Full-service brokers still charge $50+ per trade' },
    ],
  },

  peak: {
    headline: 'The Gatekeepers of Wealth',
    paragraphs: [
      'In 1990, there was no way around brokers. Even "discount" brokers like Schwab charged $30-40 per trade. Full-service firms charged $50-100 plus percentages.',
      'The economics worked because information was scarce. Brokers had quote machines. They knew what stocks were trading at. Individual investors didn\'t have real-time access.',
      'The profession supported hundreds of thousands of workers: licensed brokers, back-office staff, compliance officers, branch managers.',
      'Every retail investor, every 401(k), every IRA generated commissions. The industry extracted a toll on every transaction.',
    ],
    stats: [
      { label: 'Full-Service Commission', value: '$50+', sublabel: 'Plus percentage fees' },
      { label: 'Discount Commission (1990)', value: '$30-40', sublabel: 'Schwab, Fidelity' },
      { label: 'Licensed Brokers (1990)', value: '~400,000', sublabel: 'Registered reps' },
      { label: 'Industry Revenue', value: '$50B+', sublabel: 'Brokerage commissions (1990s)' },
    ],
    quote: {
      text: 'When E.F. Hutton talks, people listen.',
      author: 'E.F. Hutton advertising slogan',
      year: 1975,
    },
    culturalMoment: 'Calling your broker was a ritual. You\'d check stock prices in the morning paper, call the office, speak to a human, and pay the commission without question. That was just how it worked.',
  },

  disruption: {
    headline: 'The Internet Democratizes Trading',
    technology: 'Online Brokerages',
    paragraphs: [
      'In 1994, K. Aufhauser & Company launched WealthWEB, the first online trading platform. E*Trade followed. By 1996, online trading had arrived.',
      'The competitive dynamics were brutal. When trades could be executed by servers, the marginal cost approached zero. Brokerages began a race to the bottom.',
      'E*Trade offered $14.95 trades. Ameritrade matched. Schwab went to $29.95. Commission prices fell year after year as firms competed for assets.',
      'The final shoe dropped in 2019: Schwab announced $0 commissions. Within days, TD Ameritrade, E*Trade, and Fidelity matched. The commission era was over.',
    ],
    keyDates: [
      { year: 1994, event: 'WealthWEB launches first online trading' },
      { year: 1996, event: 'E*Trade begins online trading at $14.95' },
      { year: 2006, event: 'Average online commission: $10' },
      { year: 2013, event: 'Robinhood launches with $0 commissions' },
      { year: 2019, event: 'Schwab, Fidelity, Ameritrade go to $0' },
    ],
  },

  collapse: {
    headline: 'The Race to Zero',
    paragraphs: [
      'Commission compression happened in waves. First, online brokers undercut full-service firms. Then online brokers undercut each other. Finally, commissions hit zero.',
      'The human broker became unnecessary for most retail investors. Why pay $50 for someone to execute an order when an app does it for free?',
      'Full-service brokers didn\'t disappear entirely—they reinvented themselves as "financial advisors" charging fees on assets under management instead of per-trade commissions.',
      'But the traditional stockbroker—the person you called to buy 100 shares of IBM—is functionally extinct for retail investors.',
    ],
    chartData: [
      { year: 1990, value: 50, label: '$50+ full-service' },
      { year: 1995, value: 40 },
      { year: 1998, value: 30, label: 'Online trading grows' },
      { year: 2000, value: 20 },
      { year: 2004, value: 15 },
      { year: 2008, value: 10 },
      { year: 2012, value: 7 },
      { year: 2016, value: 5 },
      { year: 2019, value: 0, label: 'Major brokers go $0' },
    ],
    keyDates: [
      { year: 2000, event: 'Dot-com crash; trading volume spikes' },
      { year: 2007, event: 'Schwab drops to $12.95' },
      { year: 2013, event: 'Robinhood disrupts with free trades' },
      { year: 2019, event: 'Industry-wide $0 commissions' },
      { year: 2020, event: 'Retail trading explodes (GameStop era)' },
    ],
    dramaticStat: {
      before: '$50',
      after: '$0',
      label: 'per trade',
    },
  },

  aftermath: {
    headline: 'The Advisor Model Emerges',
    paragraphs: [
      'Stockbrokers didn\'t vanish—they transformed. The title changed from "broker" to "financial advisor." The compensation changed from commissions to AUM (assets under management) fees.',
      'This is a luxury tier: if you have a human advisor, you likely have significant assets. Most retail investors now self-serve through apps.',
      'The democratization is real. Anyone with a smartphone can buy stocks for free. But so is the compression: the middle layer of human transaction execution is gone.',
      'Robinhood demonstrated that retail investors would eagerly trade without brokers. The GameStop saga showed what happens when friction disappears from markets.',
    ],
    survivors: [
      'Wealth advisors (AUM fee model)',
      'Institutional brokers (large trades)',
      'Financial planners (advisory services)',
    ],
    replacedBy: 'Robinhood, Schwab, Fidelity, Webull, trading apps',
    lessons: [
      'Licensed access can be automated away',
      'When marginal cost hits zero, price follows',
      'Incumbents can survive by changing business models',
      'Transaction fees are vulnerable; recurring fees are stickier',
      'Democratization doesn\'t mean better outcomes for everyone',
    ],
  },

  heroImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/NYSE_trading_floor.jpg',
    alt: 'NYSE trading floor',
    credit: 'Wikimedia Commons / Public Domain',
  },

  valueChain: {
    producer: 'Investor',
    consumer: 'Stock Exchange',
    coreExchange: 'Executing a securities trade',
    technology: 'Online brokerages and trading apps',
    before: [
      { name: 'Stock Broker', type: 'access', jobs: ['Licensed brokers', 'Branch staff'], compressed: true },
      { name: 'Order Desk', type: 'skill', jobs: ['Order desk operators'], compressed: true },
      { name: 'Floor Trader', type: 'access', jobs: ['Floor traders'], compressed: true },
    ],
    after: [
      { name: 'Trading App', type: 'aggregation', jobs: ['Software engineers'], compressed: false },
    ],
    compressionMetrics: {
      layersBefore: 3,
      layersAfter: 1,
      jobsBefore: 400000,
      jobsAfter: 100000,
    },
  },

  prevStory: 'travel-agents',
  nextStory: 'encyclopedias',
};

export default stockBrokers;
