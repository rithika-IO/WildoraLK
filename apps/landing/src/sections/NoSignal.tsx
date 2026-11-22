import { useEffect, useState } from 'react'
import { PhoneFrame } from '../components/phone/PhoneFrame'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { NO_SIGNAL_COPY, NO_SIGNAL_HEADING } from '../content/noSignal'
import { useInView } from '../hooks/useInView'
import { MOTION_OK } from '../lib/motion'

function formatCountdown(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

const INITIAL_SECONDS = 8 * 60 + 12 // 08:12

export function NoSignal() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: false, rootMargin: '-10% 0px' })
  const [seconds, setSeconds] = useState(INITIAL_SECONDS)
  const [droppedSignal, setDroppedSignal] = useState(!MOTION_OK)

  // Signal drop animation triggered after entering view
  useEffect(() => {
    if (!MOTION_OK || !inView) return

    const timer = window.setTimeout(() => {
      setDroppedSignal(true)
    }, 400)
    return () => clearTimeout(timer)
  }, [inView])

  // Countdown timer: only ticks when in view and motion is enabled
  useEffect(() => {
    if (!MOTION_OK || !inView) return

    const interval = window.setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [inView])

  const phoneMockup = (
    <div className="flex justify-center py-4">
      <PhoneFrame label={NO_SIGNAL_COPY.phoneLabel} size="md">
        <div className="flex h-full flex-col bg-cream px-4 pb-6 pt-3 text-ink">
          {/* Status bar */}
          <div className="flex h-5 items-center justify-between text-[0.6875rem] font-semibold text-ink-muted">
            <span>{NO_SIGNAL_COPY.time}</span>
            <div className="flex items-center gap-1.5">
              <span
                className={`text-[0.625rem] font-bold text-accent-700 transition-opacity duration-300 ${
                  droppedSignal ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {NO_SIGNAL_COPY.noSignal}
              </span>
              {/* Signal bars */}
              <svg
                viewBox="0 0 20 14"
                className="h-3 w-4 fill-forest-900"
                aria-hidden="true"
              >
                <rect
                  x="1"
                  y="10"
                  width="2.5"
                  height="4"
                  rx="0.5"
                  data-off={droppedSignal ? '' : undefined}
                  className="signal-bar"
                  style={{ transitionDelay: '0ms' }}
                />
                <rect
                  x="5.5"
                  y="7"
                  width="2.5"
                  height="7"
                  rx="0.5"
                  data-off={droppedSignal ? '' : undefined}
                  className="signal-bar"
                  style={{ transitionDelay: '80ms' }}
                />
                <rect
                  x="10"
                  y="4"
                  width="2.5"
                  height="10"
                  rx="0.5"
                  data-off={droppedSignal ? '' : undefined}
                  className="signal-bar"
                  style={{ transitionDelay: '160ms' }}
                />
                <rect
                  x="14.5"
                  y="1"
                  width="2.5"
                  height="13"
                  rx="0.5"
                  data-off={droppedSignal ? '' : undefined}
                  className="signal-bar"
                  style={{ transitionDelay: '240ms' }}
                />
              </svg>
            </div>
          </div>

          {/* Sighting header */}
          <div className="mt-4 border-b border-sand-200 pb-3">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-forest-700">
              Active turn
            </span>
            <p className="font-display text-lg font-bold text-forest-900">
              {NO_SIGNAL_COPY.animal}
            </p>
          </div>

          {/* Turn window card */}
          <div className="mt-4 rounded-2xl bg-white p-4 shadow-card">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-ink-muted">
              {NO_SIGNAL_COPY.turnLabel}
            </span>
            <p className="mt-1 font-display text-2xl font-bold text-forest-900">
              {NO_SIGNAL_COPY.turnWindow}
            </p>
          </div>

          {/* Countdown card */}
          <div className="mt-3 rounded-2xl bg-forest-900 p-4 text-cream shadow-card">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-forest-200">
              {NO_SIGNAL_COPY.startsInLabel}
            </span>
            <p className="mt-1 font-display text-4xl font-bold tabular-nums text-accent-300">
              {formatCountdown(seconds)}
            </p>
          </div>

          {/* Saved badge */}
          <div className="mt-auto flex items-center gap-2 rounded-xl bg-forest-100 p-3 text-xs font-semibold text-forest-900">
            <span className="h-2 w-2 rounded-full bg-forest-600" />
            {NO_SIGNAL_COPY.savedBadge}
          </div>
        </div>
      </PhoneFrame>
    </div>
  )

  return (
    <div ref={ref}>
      <Section
        heading={NO_SIGNAL_HEADING}
        tone="dark"
        media={phoneMockup}
        mediaSide="right"
      >
        <Reveal className="max-w-xl">
          <p className="rounded-2xl border border-forest-700/60 bg-forest-800/60 p-6 text-base leading-relaxed text-forest-100">
            {NO_SIGNAL_COPY.cardNote}
          </p>
        </Reveal>
      </Section>
    </div>
  )
}
