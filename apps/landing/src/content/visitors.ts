import type { Feature, SectionHeading } from './types'

export const VISITORS_HEADING: SectionHeading = {
  id: 'visitors',
  eyebrow: 'For visitors',
  title: 'A calmer, more responsible safari',
  intro:
    'Visitors use a web app. There is no payment in the app: you pay the operator directly.',
}

export interface VisitorStage {
  title: string
  items: Feature[]
}

export const VISITOR_STAGES: VisitorStage[] = [
  {
    title: 'Before the safari',
    items: [
      {
        icon: 'shield',
        title: 'Compare operators',
        text: 'Choose a responsible operator using their conduct badge.',
      },
      {
        icon: 'sun',
        title: 'Best time to go',
        text: 'See which sessions are expected to be quieter.',
      },
      {
        icon: 'mail',
        title: 'Send a booking request',
        text: 'Ask an operator for a place. Pay the operator directly.',
      },
      {
        icon: 'users',
        title: 'Share a jeep',
        text: 'Travel with other visitors to split the ride.',
      },
    ],
  },
  {
    title: 'During the safari',
    items: [
      {
        icon: 'qr',
        title: 'Join the trip by QR code',
        text: 'Scan the code in your jeep to join the trip.',
      },
      {
        icon: 'clock',
        title: 'Follow your jeep\u2019s turn',
        text: 'See when your own jeep is next in the queue.',
      },
      {
        icon: 'checklist',
        title: 'Species checklist',
        text: 'Tick off what you spot, with an offline field guide.',
      },
      {
        icon: 'flag',
        title: 'Report problems',
        text: 'Tell us if something is wrong with the driving.',
      },
    ],
  },
  {
    title: 'After the safari',
    items: [
      {
        icon: 'book',
        title: 'Safari summary',
        text: 'Look back on your trip.',
      },
      {
        icon: 'chat',
        title: 'A review that counts',
        text: 'Your review carries weight because you were on the trip.',
      },
    ],
  },
]
