import type { Point, SectionHeading } from './types'

export const FAIR_TURN_HEADING: SectionHeading = {
  id: 'fair-turn',
  chapter: '02',
  eyebrow: 'A fair turn',
  title: 'Five view. Others wait in line.',
  intro:
    'A viewing zone holds five jeeps at once. Every other jeep waits at the holding point.',
}

export const FAIR_TURN_POINTS: Point[] = [
  {
    title: 'A calm viewing area',
    text: 'Five jeeps enter the circle at a time. The animals stay undisturbed and visitors get a clear view.',
  },
  {
    title: 'A fixed turn time',
    text: 'Waiting jeeps queue along the road. Each driver receives an exact turn time.',
  },
  {
    title: 'No reason to race',
    text: 'Arriving early gives no advantage. Drivers proceed safely without speeding.',
  },
]
