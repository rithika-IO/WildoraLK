import { useReducer, useState, useEffect, useRef } from 'react'
import { Section } from '../components/Section'
import {
  QUEUE_DEMO_ANNOUNCE,
  QUEUE_DEMO_COPY,
  QUEUE_DEMO_HEADING,
} from '../content/queueDemo'
import {
  formatTime,
  initialQueueState,
  queueReducer,
  VIEWING_CAP,
  type QueueAction,
} from '../lib/queueDemo'

function buildAnnouncement(state: typeof initialQueueState): string {
  if (state.events.length === 0) return ''
  return state.events
    .map((event) => {
      switch (event.type) {
        case 'reported':
          return QUEUE_DEMO_ANNOUNCE.reported(formatTime(state.clock))
        case 'started-viewing':
          return QUEUE_DEMO_ANNOUNCE.startedViewing(event.id, formatTime(event.until))
        case 'joined-queue':
          return QUEUE_DEMO_ANNOUNCE.joinedQueue(
            event.id,
            formatTime(event.start),
            formatTime(event.end),
          )
        case 'left':
          return QUEUE_DEMO_ANNOUNCE.left(event.id)
        case 'reset':
          return QUEUE_DEMO_ANNOUNCE.reset
      }
    })
    .join(' ')
}

export function QueueDemo() {
  const [state, dispatch] = useReducer(queueReducer, initialQueueState)
  const [announcement, setAnnouncement] = useState('')
  const prevEventsRef = useRef(state.events)

  useEffect(() => {
    if (prevEventsRef.current !== state.events && state.events.length > 0) {
      prevEventsRef.current = state.events
      setAnnouncement(buildAnnouncement(state))
    }
  }, [state])

  const handleAction = (action: QueueAction) => {
    dispatch(action)
  }

  const { reported, clock, viewing, queue } = state

  return (
    <Section heading={QUEUE_DEMO_HEADING} tone="sand">
      {/* Screen reader live region */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      <div className="rounded-3xl bg-cream p-6 shadow-card sm:p-10">
        {/* Status bar: Clock & Sighting */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sand-200 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              {QUEUE_DEMO_COPY.clockLabel}
            </span>
            <p className="font-serif text-3xl font-semibold tabular-nums text-forest-900 sm:text-4xl">
              {formatTime(clock)}
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Sighting status
            </span>
            <p className="flex items-center justify-end gap-2 text-base font-semibold text-forest-900">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  reported ? 'bg-forest-600' : 'bg-sand-300'
                }`}
              />
              {reported ? QUEUE_DEMO_COPY.sighting : QUEUE_DEMO_COPY.noSighting}
            </p>
          </div>
        </div>

        {/* Viewing vs Queue Lists */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Viewing now */}
          <div className="flex flex-col rounded-2xl bg-white/90 p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between border-b border-sand-100 pb-3">
              <h3 className="font-display text-xl font-semibold text-forest-900">
                {QUEUE_DEMO_COPY.viewingTitle}
              </h3>
              <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-800">
                {QUEUE_DEMO_COPY.viewingCount(viewing.length, VIEWING_CAP)}
              </span>
            </div>

            <div className="mt-4 flex-1">
              {viewing.length === 0 ? (
                <p className="py-8 text-center text-sm text-ink-muted">
                  {QUEUE_DEMO_COPY.viewingEmpty}
                </p>
              ) : (
                <ul className="space-y-2.5">
                  {viewing.map((item) => (
                    <li
                      key={item.id}
                      className="demo-item flex items-center justify-between rounded-xl bg-forest-50 px-4 py-3 text-forest-950"
                    >
                      <span className="font-mono text-base font-bold text-forest-900">
                        {item.id}
                      </span>
                      <span className="rounded-md bg-forest-200/60 px-2.5 py-1 text-xs font-medium text-forest-800 tabular-nums">
                        {QUEUE_DEMO_COPY.viewingUntil(formatTime(item.until))}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <p className="mt-4 border-t border-sand-100 pt-3 text-xs italic text-ink-muted">
              {QUEUE_DEMO_COPY.exactSpot}
            </p>
          </div>

          {/* Queue */}
          <div className="flex flex-col rounded-2xl bg-white/90 p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between border-b border-sand-100 pb-3">
              <h3 className="font-display text-xl font-semibold text-forest-900">
                {QUEUE_DEMO_COPY.queueTitle}
              </h3>
              <span className="rounded-full bg-sand-200 px-3 py-1 text-xs font-semibold text-forest-900">
                {queue.length} waiting
              </span>
            </div>

            <div className="mt-4 flex-1">
              {queue.length === 0 ? (
                <p className="py-8 text-center text-sm text-ink-muted">
                  {QUEUE_DEMO_COPY.queueEmpty}
                </p>
              ) : (
                <ul className="space-y-2.5">
                  {queue.map((item) => (
                    <li
                      key={item.id}
                      className="demo-item flex items-center justify-between rounded-xl bg-sand-100 px-4 py-3 text-ink"
                    >
                      <span className="font-mono text-base font-bold text-forest-900">
                        {item.id}
                      </span>
                      <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-accent-700 tabular-nums shadow-xs">
                        {QUEUE_DEMO_COPY.turnWindow(
                          formatTime(item.start),
                          formatTime(item.end),
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Buttons / Controls */}
        <div className="mt-8 border-t border-sand-200 pt-6">
          <span className="sr-only">{QUEUE_DEMO_COPY.controlsLabel}</span>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button
              type="button"
              disabled={reported}
              onClick={() => handleAction({ type: 'REPORT' })}
              className={`min-h-12 flex-1 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                reported
                  ? 'cursor-not-allowed bg-sand-200 text-ink-muted/50'
                  : 'bg-accent-400 text-forest-950 hover:bg-accent-300'
              }`}
            >
              {QUEUE_DEMO_COPY.buttons.report}
            </button>

            <button
              type="button"
              disabled={!reported}
              onClick={() => handleAction({ type: 'JEEP_ARRIVES' })}
              className={`min-h-12 flex-1 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                !reported
                  ? 'cursor-not-allowed bg-sand-200 text-ink-muted/50'
                  : 'bg-forest-800 text-cream hover:bg-forest-700'
              }`}
            >
              {QUEUE_DEMO_COPY.buttons.arrive}
            </button>

            <button
              type="button"
              disabled={!reported}
              onClick={() => handleAction({ type: 'TIME_PASSES' })}
              className={`min-h-12 flex-1 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                !reported
                  ? 'cursor-not-allowed bg-sand-200 text-ink-muted/50'
                  : 'bg-forest-800 text-cream hover:bg-forest-700'
              }`}
            >
              {QUEUE_DEMO_COPY.buttons.pass}
            </button>

            <button
              type="button"
              onClick={() => handleAction({ type: 'RESET' })}
              className="min-h-12 rounded-xl border border-sand-300 bg-white px-5 py-3 text-sm font-semibold text-forest-900 transition-colors duration-200 hover:bg-sand-100"
            >
              {QUEUE_DEMO_COPY.buttons.reset}
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
