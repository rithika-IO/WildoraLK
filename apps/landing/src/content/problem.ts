import type { Fact, SectionHeading, Source } from './types'

export const PROBLEM_HEADING: SectionHeading = {
  id: 'problem',
  eyebrow: 'The problem',
  title: 'What is a leopard jam?',
  intro:
    'When one safari jeep spots a leopard in Yala National Park, the news spreads by phone. Within minutes, dozens of jeeps race to the same spot.',
}

export const PROBLEM_POINTS: string[] = [
  'Animals can get boxed in or hit.',
  'Drivers speed to get there first.',
  'The park has too few rangers to enforce viewing rules everywhere.',
]

const MONGABAY_APRIL_2026: Source = {
  label: 'Mongabay, April 2026',
  url: 'https://news.mongabay.com/2026/04/in-sri-lanka-animals-pay-the-price-for-overcrowding-and-speeding-jeeps/',
}

const THE_MORNING_NOV_2025: Source = {
  label: 'The Morning, November 2025',
  url: 'https://www.themorning.lk/articles/xbesHIXTA46t5zToaXuA',
}

const CEYLON_JOURNAL_2024: Source = {
  label: 'Ceylon Journal of Science, 2024',
  url: 'https://reference-global.com/article/10.4038/cjs.v53i2.8289',
}

const MONGABAY_MAY_2026: Source = {
  label: 'Mongabay, May 2026',
  url: 'https://news.mongabay.com/short-article/2026/05/overtourism-threatens-sri-lankas-leopards/',
}

/** Key facts. Use these exactly as written and always keep a source link. Do not add other statistics. */
export const FACTS: Fact[] = [
  {
    value: 'More than 380,000',
    label: 'visitors to Yala from January to June 2025.',
    sources: [MONGABAY_APRIL_2026],
  },
  {
    value: 'About 500 to 552',
    label: 'registered safari jeeps in Yala.',
    sources: [MONGABAY_APRIL_2026, THE_MORNING_NOV_2025],
  },
  {
    value: '2015',
    label:
      'Phone signal was switched off in Yala. Crowding fell, but visitors saw fewer animals and were less satisfied.',
    sources: [CEYLON_JOURNAL_2024],
  },
  {
    value: '250 to 300',
    label: 'jeeps per session: the cap the government has proposed.',
    sources: [MONGABAY_MAY_2026],
  },
]

export const PROBLEM_COPY = {
  factsHeading: 'Key facts',
  sourceLabel: 'Source',
  sourcesLabel: 'Sources',
  closing:
    'Switching off phone signal reduced crowding but also hurt the visitor experience. WildoraLK explores a different approach: share sightings fairly, and keep everything working even where there is no signal. It is a student idea and does not replace any rules the park sets.',
}
