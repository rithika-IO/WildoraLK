import type { Feature, SectionHeading } from './types'

export const FEATURES_HEADING: SectionHeading = {
  id: 'features',
  eyebrow: 'Features',
  title: 'What makes it different',
}

/** Bento tiles, in order. The first tile is the large one. */
export const FEATURES: Feature[] = [
  {
    icon: 'signalOff',
    title: 'Works without signal',
    text: 'The park map, the rules and your turn time are saved on your phone before you go.',
  },
  {
    icon: 'target',
    title: 'Exact spot only on your turn',
    text: 'Until then you see the zone, so there is nothing to race for.',
  },
  {
    icon: 'shield',
    title: 'Conduct score from evidence, with appeals',
    text: 'Only clear rule breaks and verified visitor reports count, and drivers can appeal.',
  },
  {
    icon: 'sun',
    title: 'Best time to go',
    text: 'See which sessions are likely to be quieter before you book.',
  },
  {
    icon: 'users',
    title: 'Shared safaris',
    text: 'Share a jeep with other visitors and split the cost.',
  },
  {
    icon: 'book',
    title: 'Offline field guide',
    text: 'Look up what you see in Sinhala, Tamil or English, even with no signal.',
  },
]

/** Small checklist shown on the large "Works without signal" tile. */
export const OFFLINE_ITEMS: string[] = ['Park map', 'Viewing rules', 'Your turn time']
