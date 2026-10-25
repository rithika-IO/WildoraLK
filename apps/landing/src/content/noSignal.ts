import type { SectionHeading } from './types'

export const NO_SIGNAL_HEADING: SectionHeading = {
  id: 'offline',
  chapter: '05',
  eyebrow: 'Offline',
  title: 'Even with no signal',
  intro:
    'Your turn time is saved on your phone at the park gate. It works inside the park with zero cell reception.',
}

export const NO_SIGNAL_COPY = {
  phoneLabel: 'Phone screen showing saved turn time and countdown with no signal',
  time: '10:33',
  noSignal: 'No signal',
  animal: 'Leopard, Zone B3',
  turnLabel: 'Your turn',
  turnWindow: '10:42 to 10:47',
  startsInLabel: 'Starts in',
  savedBadge: 'Saved at park entrance',
  cardNote: 'The app checks your turn against the gate log locally. You do not need internet.',
}
