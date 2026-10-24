import type { Feature, SectionHeading } from './types'

export const HOW_HEADING: SectionHeading = {
  id: 'how-it-works',
  eyebrow: 'How a sighting works',
  title: 'One sighting, a fair turn for every jeep',
  intro:
    'Instead of everyone racing to the same spot, each sighting follows the same simple steps.',
}

export const HOW_STEPS: Feature[] = [
  {
    icon: 'flag',
    title: 'Report',
    text: 'A licensed driver reports a sighting in the app.',
  },
  {
    icon: 'users',
    title: 'The sighting opens with a cap',
    text: 'There is a limit on how many jeeps can be at the sighting at once.',
  },
  {
    icon: 'queue',
    title: 'Join the queue',
    text: 'Other jeeps join the queue instead of racing there.',
  },
  {
    icon: 'clock',
    title: 'Get a turn time',
    text: 'The server gives every jeep a fair turn time.',
  },
  {
    icon: 'target',
    title: 'See the exact spot on your turn',
    text: 'The exact location is shown only when it is that jeep\u2019s turn.',
  },
  {
    icon: 'timer',
    title: 'Viewing timer',
    text: 'A timer keeps each visit short so everyone gets to see.',
  },
  {
    icon: 'next',
    title: 'Next jeep called',
    text: 'When the timer ends, the next jeep in the queue is called.',
  },
]

export const HOW_COPY = {
  stepLabel: 'Step',
  illustrationNote:
    'A simple drawing, not a real place. WildoraLK never shows real animal locations on this page.',
}

export const ILLUSTRATION_COPY = {
  today: {
    title: 'Today',
    caption: 'Many jeeps crowd around one leopard.',
    alt: 'A drawing of a leopard resting on a rock, surrounded by many safari jeeps pressed close together from every side.',
  },
  withWildora: {
    title: 'With WildoraLK',
    caption: 'A few jeeps view. The others wait in a queue.',
    alt: 'A drawing of a leopard resting on a rock with three safari jeeps viewing from a respectful distance, while four more jeeps wait in a numbered line on the road.',
  },
}
