/**
 * Compression Stories Index
 * All historical compressions
 */

import { telegraph } from './telegraph';
import { kodak } from './kodak';
import { newspapers } from './newspapers';
import { travelAgents } from './travel-agents';
import { stockBrokers } from './stock-brokers';
import { encyclopedias } from './encyclopedias';
import { recordStores } from './record-stores';
import { blockbuster } from './blockbuster';
import { tollCollectors } from './toll-collectors';
import { switchboardOperators } from './switchboard-operators';
import { bankTellers } from './bank-tellers';
import { photoDevelopers } from './photo-developers';
import type { CompressionStory, CompressionCard } from '../../types/compression';
import { toCard } from '../../types/compression';

// All stories in display order
export const compressionStories: CompressionStory[] = [
  telegraph,
  kodak,
  newspapers,
  travelAgents,
  stockBrokers,
  encyclopedias,
  recordStores,
  blockbuster,
  tollCollectors,
  switchboardOperators,
  bankTellers,
  photoDevelopers,
];

// Story lookup by slug
export const storyBySlug: Record<string, CompressionStory> = Object.fromEntries(
  compressionStories.map((story) => [story.slug, story])
);

// Cards for homepage grid
export const compressionCards: CompressionCard[] = compressionStories.map(toCard);

// Get story by slug
export function getStory(slug: string): CompressionStory | undefined {
  return storyBySlug[slug];
}

// Get next/prev story
export function getAdjacentStories(slug: string): {
  prev: CompressionStory | undefined;
  next: CompressionStory | undefined;
} {
  const index = compressionStories.findIndex((s) => s.slug === slug);
  return {
    prev: index > 0 ? compressionStories[index - 1] : undefined,
    next: index < compressionStories.length - 1 ? compressionStories[index + 1] : undefined,
  };
}

// Export individual stories
export {
  telegraph,
  kodak,
  newspapers,
  travelAgents,
  stockBrokers,
  encyclopedias,
  recordStores,
  blockbuster,
  tollCollectors,
  switchboardOperators,
  bankTellers,
  photoDevelopers,
};
