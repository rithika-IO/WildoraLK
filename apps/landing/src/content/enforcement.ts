import type { Feature, SectionHeading } from './types'

export const ENFORCEMENT_HEADING: SectionHeading = {
  id: 'fair-enforcement',
  eyebrow: 'Fair enforcement without rangers',
  title: 'Good driving earns trust',
  intro:
    'No ranger needs to watch a screen. A conduct score builds up from clear evidence, and visitors can use it to choose a responsible operator.',
}

export const ENFORCEMENT_FEATURES: Feature[] = [
  {
    icon: 'shield',
    title: 'A conduct score',
    text: 'Built only from high-confidence rule breaks and verified visitor reports.',
  },
  {
    icon: 'qr',
    title: 'Verified visitor reports',
    text: 'Reports count when they come from visitors who were really in that jeep. They join the trip by scanning a QR code.',
  },
  {
    icon: 'eye',
    title: 'Evidence you can see',
    text: 'Drivers can look at the evidence behind their score.',
  },
  {
    icon: 'chat',
    title: 'The right to appeal',
    text: 'If a driver thinks something is wrong, they can appeal.',
  },
]

export const ENFORCEMENT_RULE = {
  title: 'One firm rule',
  text: 'The driving-feedback model never affects the score. Private feedback is only there to help drivers improve.',
}
