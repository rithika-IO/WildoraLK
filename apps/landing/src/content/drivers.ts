import type { Feature, SectionHeading } from './types'

export const DRIVERS_HEADING: SectionHeading = {
  id: 'drivers',
  eyebrow: 'For drivers',
  title: 'Less racing, more fairness, a record you can be proud of',
  intro:
    'Drivers use a mobile app. The goal is simple: driving well should bring more bookings.',
}

export const DRIVER_BENEFITS: Feature[] = [
  {
    icon: 'calendar',
    title: 'Book a session',
    text: 'Plan your safari sessions in one place.',
  },
  {
    icon: 'flag',
    title: 'Report sightings',
    text: 'Share what you see through one fair system instead of phone calls.',
  },
  {
    icon: 'queue',
    title: 'Join queues and get turn times',
    text: 'No need to race. You are told when your turn is.',
  },
  {
    icon: 'mail',
    title: 'Receive booking requests',
    text: 'Visitors send requests directly to you. Payment is handled between you and the visitor.',
  },
  {
    icon: 'eye',
    title: 'See your conduct record',
    text: 'View your conduct score and the evidence behind it, and appeal if something looks wrong.',
  },
  {
    icon: 'chat',
    title: 'Private driving feedback',
    text: 'Get friendly tips on your driving that only you can see.',
  },
]
