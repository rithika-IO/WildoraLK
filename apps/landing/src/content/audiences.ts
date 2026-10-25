import type { Point, ScreenName, SectionHeading } from './types'

export const AUDIENCE_HEADING: SectionHeading = {
  id: 'drivers-and-visitors',
  eyebrow: 'Drivers and visitors',
  title: 'One queue, two apps',
}

export interface Audience {
  title: string
  intro: string
  screen: ScreenName
  benefits: Point[]
}

export const AUDIENCES: Audience[] = [
  {
    title: 'For drivers',
    intro: 'A mobile app for licensed safari jeep drivers.',
    screen: 'queue',
    benefits: [
      {
        title: 'No need to race',
        text: 'You get a turn time when you join the queue. Arriving first gains you nothing.',
      },
      {
        title: 'One report, no phone calls',
        text: 'Report a sighting once. Every other driver sees it in the app.',
      },
      {
        title: 'A score you can check',
        text: 'See your conduct score and the evidence behind it. Appeal if something is wrong.',
      },
      {
        title: 'Booking requests from visitors',
        text: 'Visitors send requests straight to you. They pay you directly.',
      },
    ],
  },
  {
    title: 'For visitors',
    intro: 'A web app. Nothing to install, and you pay your operator directly.',
    screen: 'trip',
    benefits: [
      {
        title: 'Follow your jeep’s turn',
        text: 'Scan the QR code in your jeep. Your place in the queue shows on your phone.',
      },
      {
        title: 'Choose a careful operator',
        text: 'Compare conduct badges before you book.',
      },
      {
        title: 'Tick off what you see',
        text: 'Keep a species checklist as you go.',
      },
      {
        title: 'Reviews from real trips',
        text: 'Only people who were in the jeep can review it.',
      },
    ],
  },
]
