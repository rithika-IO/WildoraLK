import type { Point, ScreenName, SectionHeading } from './types'

export const HOW_HEADING: SectionHeading = {
  id: 'how-it-works',
  eyebrow: 'How it works',
  title: 'Four steps at every sighting',
  intro: 'One driver reports. Everyone else gets a turn.',
}

export interface Step extends Point {
  /** The phone screen shown while this step is active. */
  screen: ScreenName
}

export const HOW_STEPS: Step[] = [
  {
    title: 'Report',
    text: 'A driver spots a leopard and reports it in the app. The sighting opens for a few jeeps at a time.',
    screen: 'board',
  },
  {
    title: 'Join the queue',
    text: 'Other drivers join the queue instead of racing there. Each jeep gets a turn time, saved on the phone.',
    screen: 'queue',
  },
  {
    title: 'Your turn',
    text: 'The exact spot appears only when it is your turn. Before that, there is nothing to race for.',
    screen: 'turn',
  },
  {
    title: 'View and leave',
    text: 'A timer shows how long you have left. When it ends, the next jeep is called.',
    screen: 'viewing',
  },
]
