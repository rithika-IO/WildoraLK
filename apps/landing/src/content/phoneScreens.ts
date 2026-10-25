import type { ScreenName } from './types'

/**
 * Text on the phone mockups. This is made-up example data.
 * Never put real coordinates or live animal locations here.
 */
export const PHONE_COPY = {
  noSignal: 'No signal',
}

export const BOARD_SCREEN = {
  time: '10:28',
  title: 'Sightings',
  animal: 'Leopard',
  zone: 'Zone B3',
  jeeps: '4 of 5 jeeps',
  jeepsViewing: 4,
  jeepsMax: 5,
  waiting: '2 waiting',
  wait: 'About 14 min',
  action: 'Join the queue',
}

export const QUEUE_SCREEN = {
  time: '10:30',
  title: 'Queue',
  sighting: 'Leopard, Zone B3',
  placeLabel: 'Your place',
  place: '2 of 3',
  turnLabel: 'Your turn',
  turn: '10:42 to 10:47',
  saved: 'Saved on this phone. Works without signal.',
}

export const TURN_SCREEN = {
  time: '10:42',
  title: 'Your turn',
  heading: 'Exact spot shown now',
  sighting: 'Leopard, Zone B3',
  you: 'You',
}

export const VIEWING_SCREEN = {
  time: '10:44',
  title: 'Viewing',
  timerLabel: 'Viewing time left',
  timer: '07:31',
  /** How much of the ring stays filled, from 0 to 1. */
  timerProgress: 0.75,
  arrived: 'Arrived 10:43, detected by GPS',
}

export const TRIP_SCREEN = {
  time: '10:31',
  title: 'Your trip',
  jeep: 'Jeep J-114',
  placeLabel: 'Your place',
  place: '2 of 3',
  saved: 'Your turn is saved.',
  calm: 'No need to ask your driver to hurry.',
}

/** What screen readers hear for each phone mockup. */
export const SCREEN_LABELS: Record<ScreenName, string> = {
  board:
    'Phone screen: the sighting board shows a leopard in Zone B3, 4 of 5 jeeps there, 2 waiting, and a wait of about 14 minutes.',
  queue:
    'Phone screen: your place is 2 of 3 and your turn is 10:42 to 10:47. It is saved on the phone and works without signal.',
  turn: 'Phone screen: it is your turn. A simple map shows the exact spot and where you are.',
  viewing:
    'Phone screen: a timer shows 07:31 of viewing time left. Arrived 10:43, detected by GPS.',
  trip: 'Phone screen: your trip in Jeep J-114. Your place is 2 of 3 and your turn is saved.',
}
