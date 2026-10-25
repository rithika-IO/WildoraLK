/**
 * Queue demo logic (chapter 04). Pure TypeScript: no React, no DOM, no text for the page.
 * The UI (sections/QueueDemo.tsx) runs this with useReducer and turns `events` into words.
 *
 * Times are whole minutes since midnight, so 06:30 is 390.
 */

/** How many jeeps may view the sighting at once. */
export const VIEWING_CAP = 5
/** How long each jeep may view, in minutes. */
export const VIEWING_MINUTES = 10
/** The demo clock when the page loads and after RESET (06:30). */
export const START_TIME = 6 * 60 + 30
/** Minutes the clock moves on when a jeep arrives. */
export const ARRIVAL_MINUTES = 1
/** Minutes the clock moves on for TIME_PASSES. */
export const TIME_STEP_MINUTES = 5
/** The first jeep is J-101, then J-102 and so on. */
export const FIRST_JEEP_NUMBER = 101

export interface ViewingJeep {
  id: string
  /** When this jeep's viewing time is up. */
  until: number
}

export interface QueuedJeep {
  id: string
  /** Turn window. */
  start: number
  end: number
}

/** What happened in the last action, in order. The UI announces these. */
export type QueueEvent =
  | { type: 'reported' }
  | { type: 'started-viewing'; id: string; until: number }
  | { type: 'joined-queue'; id: string; start: number; end: number }
  | { type: 'left'; id: string }
  | { type: 'reset' }

export interface QueueState {
  /** False until REPORT. Until then every other action does nothing. */
  reported: boolean
  clock: number
  nextJeepNumber: number
  viewing: ViewingJeep[]
  /** Waiting jeeps, earliest turn first. */
  queue: QueuedJeep[]
  /**
   * One entry per viewing slot: the time that slot is next free, counting
   * the jeep viewing in it and every queued jeep already given that slot.
   */
  slotFreeAt: number[]
  /** The action that produced this state, and what it caused. */
  lastAction: QueueAction['type'] | null
  events: QueueEvent[]
}

export type QueueAction =
  | { type: 'REPORT' }
  | { type: 'JEEP_ARRIVES' }
  | { type: 'TIME_PASSES' }
  | { type: 'RESET' }

export const initialQueueState: QueueState = {
  reported: false,
  clock: START_TIME,
  nextJeepNumber: FIRST_JEEP_NUMBER,
  viewing: [],
  queue: [],
  slotFreeAt: Array.from({ length: VIEWING_CAP }, () => START_TIME),
  lastAction: null,
  events: [],
}

/** 390 gives "06:30". Wraps past midnight. */
export function formatTime(minutes: number): string {
  const day = 24 * 60
  const m = ((minutes % day) + day) % day
  const hh = String(Math.floor(m / 60)).padStart(2, '0')
  const mm = String(m % 60).padStart(2, '0')
  return `${hh}:${mm}`
}

/** Index of the slot that is free soonest. Ties go to the lowest index. */
function earliestSlot(slotFreeAt: number[]): number {
  let best = 0
  for (let i = 1; i < slotFreeAt.length; i++) {
    if (slotFreeAt[i] < slotFreeAt[best]) best = i
  }
  return best
}

/** A jeep arrives one minute later: it views now if there is room, or joins the queue. */
function jeepArrives(state: QueueState): QueueState {
  const clock = state.clock + ARRIVAL_MINUTES
  const id = `J-${state.nextJeepNumber}`
  const slotFreeAt = [...state.slotFreeAt]
  const slot = earliestSlot(slotFreeAt)

  if (state.viewing.length < VIEWING_CAP && slotFreeAt[slot] <= clock) {
    const until = clock + VIEWING_MINUTES
    slotFreeAt[slot] = until
    return {
      ...state,
      clock,
      nextJeepNumber: state.nextJeepNumber + 1,
      viewing: [...state.viewing, { id, until }],
      slotFreeAt,
      lastAction: 'JEEP_ARRIVES',
      events: [{ type: 'started-viewing', id, until }],
    }
  }

  // Full: the turn starts when the soonest slot is free, and that slot is then taken for 10 minutes.
  const start = Math.max(slotFreeAt[slot], clock)
  const end = start + VIEWING_MINUTES
  slotFreeAt[slot] = end
  return {
    ...state,
    clock,
    nextJeepNumber: state.nextJeepNumber + 1,
    queue: [...state.queue, { id, start, end }],
    slotFreeAt,
    lastAction: 'JEEP_ARRIVES',
    events: [{ type: 'joined-queue', id, start, end }],
  }
}

/**
 * The clock moves on 5 minutes. Jeeps whose time is up leave, then queued jeeps whose
 * turn has started move in, in order. Repeats until nothing changes, so a queued jeep
 * whose whole window has already passed also leaves.
 */
function timePasses(state: QueueState): QueueState {
  const clock = state.clock + TIME_STEP_MINUTES
  const events: QueueEvent[] = []
  let viewing = state.viewing
  let queue = state.queue
  let changed = true

  while (changed) {
    changed = false

    const done = viewing.filter((jeep) => jeep.until <= clock)
    if (done.length > 0) {
      viewing = viewing.filter((jeep) => jeep.until > clock)
      for (const jeep of done) events.push({ type: 'left', id: jeep.id })
      changed = true
    }

    while (queue.length > 0 && queue[0].start <= clock && viewing.length < VIEWING_CAP) {
      const [next, ...rest] = queue
      queue = rest
      viewing = [...viewing, { id: next.id, until: next.end }]
      events.push({ type: 'started-viewing', id: next.id, until: next.end })
      changed = true
    }
  }

  return { ...state, clock, viewing, queue, lastAction: 'TIME_PASSES', events }
}

export function queueReducer(state: QueueState, action: QueueAction): QueueState {
  switch (action.type) {
    case 'REPORT':
      if (state.reported) return state
      return { ...state, reported: true, lastAction: 'REPORT', events: [{ type: 'reported' }] }
    case 'JEEP_ARRIVES':
      return state.reported ? jeepArrives(state) : state
    case 'TIME_PASSES':
      return state.reported ? timePasses(state) : state
    case 'RESET':
      return { ...initialQueueState, lastAction: 'RESET', events: [{ type: 'reset' }] }
  }
}
