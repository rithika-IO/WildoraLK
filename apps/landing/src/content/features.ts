import type { Feature, SectionHeading } from './types'

export const FEATURES_HEADING: SectionHeading = {
  id: 'why-fair',
  chapter: '07',
  eyebrow: 'Why it is fair',
  title: 'How the queue stays fair',
  intro:
    'Rules apply equally to every jeep. Honest driving earns higher rank and direct bookings.',
}

/** Bento tiles without the offline tile that repeats chapter 05. */
export const FEATURES: Feature[] = [
  {
    icon: 'target',
    title: 'Exact spot only on your turn',
    text: 'Until your turn begins you see only the zone. There is nothing to race toward.',
  },
  {
    icon: 'shield',
    title: 'Conduct score from evidence, with appeals',
    text: 'Only clear rule breaks and verified visitor reports count. Drivers can view evidence and appeal.',
  },
  {
    icon: 'sun',
    title: 'Best time to go',
    text: 'See which sessions are likely to be quieter before booking your safari entrance.',
  },
  {
    icon: 'users',
    title: 'Shared safaris',
    text: 'Share an authorised jeep with other visitors to reduce park traffic and split trip costs.',
  },
  {
    icon: 'book',
    title: 'Offline field guide',
    text: 'Look up birds, mammals and trees in Sinhala, Tamil or English directly from your seat.',
  },
]
