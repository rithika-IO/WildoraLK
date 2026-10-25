import type { SectionHeading } from './types'

export const QUEUE_DEMO_HEADING: SectionHeading = {
  id: 'try-it',
  chapter: '04',
  eyebrow: 'Try it',
  tag: 'Demo',
  title: 'Report a sighting. Watch the queue form.',
  intro: 'Five jeeps can view at once, for 10 minutes each. Every other jeep gets a turn time.',
}

export const QUEUE_DEMO_COPY = {
  sighting: 'Leopard, Zone B3',
  noSighting: 'No sighting yet',
  clockLabel: 'Demo clock',
  viewingTitle: 'Viewing now',
  queueTitle: 'Queue',
  viewingEmpty: 'No jeeps viewing yet.',
  queueEmpty: 'Nobody is waiting.',
  exactSpot: 'Exact spot shown only on your turn.',
  controlsLabel: 'Demo controls',
  buttons: {
    report: 'Report a leopard',
    arrive: 'A jeep arrives',
    pass: '5 minutes pass',
    reset: 'Reset',
  },
  viewingCount: (count: number, cap: number) => `Viewing ${count} of ${cap}`,
  viewingUntil: (until: string) => `Until ${until}`,
  turnWindow: (start: string, end: string) => `Turn ${start} to ${end}`,
}

/** Sentences read out by screen readers after each button press. */
export const QUEUE_DEMO_ANNOUNCE = {
  reported: (clock: string) => `Leopard reported in Zone B3 at ${clock}. Jeeps can now arrive.`,
  startedViewing: (id: string, until: string) => `${id} started viewing. Time is up at ${until}.`,
  joinedQueue: (id: string, start: string, end: string) => `${id} joined the queue. Turn ${start} to ${end}.`,
  left: (id: string) => `${id} left.`,
  clock: (clock: string) => `Clock ${clock}.`,
  noChange: 'No change.',
  reset: 'Demo reset.',
}
