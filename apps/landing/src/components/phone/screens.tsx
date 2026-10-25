import type { ReactNode } from 'react'
import {
  BOARD_SCREEN,
  OPERATOR_SCREEN,
  PHONE_COPY,
  QUEUE_SCREEN,
  SUMMARY_SCREEN,
  TRIP_SCREEN,
  TURN_SCREEN,
  VIEWING_SCREEN,
} from '../../content/phoneScreens'
import type { ScreenName } from '../../content/types'
import { Icon } from '../Icon'

/*
 * Phone mockup screens, drawn with Tailwind. Sized to fit the small phone (13rem wide),
 * so they also fit the larger one. Example data only: no real coordinates anywhere.
 */

interface ShellProps {
  time: string
  offline?: boolean
  title: string
  children: ReactNode
}

/** Status bar, screen title and a column for the content. */
function Shell({ time, offline = false, title, children }: ShellProps) {
  return (
    <div className="flex h-full flex-col px-3.5 pb-4 pt-2 text-ink">
      <div className="flex h-5 items-center justify-between px-2 text-[0.625rem] font-semibold text-ink-muted">
        <span>{time}</span>
        <span className="flex items-center gap-1">
          {offline ? PHONE_COPY.noSignal : null}
          <Icon name={offline ? 'signalOff' : 'signal'} className="h-3 w-3" />
        </span>
      </div>
      <p className="mt-5 font-display text-lg font-semibold leading-none text-forest-900">{title}</p>
      <div className="mt-3 flex flex-1 flex-col gap-2.5">{children}</div>
    </div>
  )
}

const CARD = 'rounded-2xl bg-white p-3 shadow-card'
const SMALL_LABEL = 'text-[0.625rem] font-semibold uppercase tracking-wider text-ink-muted'

function SightingBoardScreen() {
  const s = BOARD_SCREEN
  return (
    <Shell time={s.time} title={s.title}>
      <div className={CARD}>
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 font-display text-base font-semibold text-forest-900">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            {s.animal}
          </span>
          <span className="rounded-full bg-forest-100 px-2 py-0.5 text-[0.625rem] font-semibold text-forest-800">
            {s.zone}
          </span>
        </div>
        <div className="mt-3 flex gap-1">
          {Array.from({ length: s.jeepsMax }, (_, index) => (
            <span
              key={index}
              className={`h-2 flex-1 rounded-full ${index < s.jeepsViewing ? 'bg-forest-600' : 'bg-sand-200'}`}
            />
          ))}
        </div>
        <p className="mt-1.5 text-xs font-semibold text-ink">{s.jeeps}</p>
        <div className="mt-2 flex items-center justify-between border-t border-sand-100 pt-2 text-xs text-ink-muted">
          <span>{s.waiting}</span>
          <span className="font-semibold text-accent-700">{s.wait}</span>
        </div>
        <div className="mt-3 rounded-full bg-forest-800 py-2 text-center text-xs font-semibold text-cream">
          {s.action}
        </div>
      </div>
      {/* Faded placeholder rows, so the board looks like a list */}
      <div className={`${CARD} opacity-50`}>
        <div className="h-2.5 w-2/3 rounded-full bg-sand-200" />
        <div className="mt-2 h-2 w-1/3 rounded-full bg-sand-100" />
      </div>
      <div className={`${CARD} opacity-30`}>
        <div className="h-2.5 w-1/2 rounded-full bg-sand-200" />
        <div className="mt-2 h-2 w-1/4 rounded-full bg-sand-100" />
      </div>
    </Shell>
  )
}

function QueueScreen() {
  const s = QUEUE_SCREEN
  return (
    <Shell time={s.time} offline title={s.title}>
      <p className="-mt-1 text-xs text-ink-muted">{s.sighting}</p>
      <div className="rounded-2xl bg-forest-900 p-3.5 text-cream">
        <p className="text-[0.625rem] font-semibold uppercase tracking-wider text-forest-200">{s.placeLabel}</p>
        <p className="mt-1 font-display text-4xl font-semibold leading-none">{s.place}</p>
      </div>
      <div className={CARD}>
        <p className={SMALL_LABEL}>{s.turnLabel}</p>
        <p className="mt-1 font-display text-xl font-semibold leading-tight text-forest-900">{s.turn}</p>
      </div>
      <div className="flex items-start gap-2 rounded-2xl bg-forest-50 p-3 text-xs leading-snug text-forest-900">
        <Icon name="bookmark" className="mt-px h-4 w-4 shrink-0 text-forest-700" />
        {s.saved}
      </div>
    </Shell>
  )
}

function YourTurnScreen() {
  const s = TURN_SCREEN
  return (
    <Shell time={s.time} offline title={s.title}>
      <p className="self-start rounded-full bg-accent-400 px-2.5 py-1 text-[0.6875rem] font-semibold text-forest-950">
        {s.heading}
      </p>
      {/* A made-up map shape, not a real place */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest-100">
        <svg viewBox="0 0 160 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M-5 -5h170v52c-30 14-52 2-80 10s-50 22-95 8z" className="fill-forest-200" />
          <ellipse cx="128" cy="168" rx="40" ry="22" className="fill-forest-200" />
          <path
            d="M-5 150c30-6 44-30 70-38s52 4 70-22 16-50 30-64"
            fill="none"
            strokeWidth="12"
            strokeLinecap="round"
            className="stroke-sand-100"
          />
          <path
            d="M44 150c16-10 26-30 46-34s34-8 38-28"
            fill="none"
            strokeWidth="2.5"
            strokeDasharray="4 5"
            strokeLinecap="round"
            className="stroke-forest-700"
          />
          <circle cx="126" cy="84" r="16" className="fill-accent-400/30" />
          <circle cx="126" cy="84" r="7" strokeWidth="2.5" className="fill-accent-500 stroke-cream" />
          <circle cx="44" cy="150" r="7" strokeWidth="3" className="fill-forest-800 stroke-cream" />
        </svg>
        <span className="absolute left-[27.5%] top-[75%] -translate-x-1/2 translate-y-3 rounded-full bg-forest-800 px-2 py-0.5 text-[0.625rem] font-semibold text-cream">
          {s.you}
        </span>
      </div>
      <p className="text-xs font-semibold text-ink">{s.sighting}</p>
    </Shell>
  )
}

function ViewingScreen() {
  const s = VIEWING_SCREEN
  return (
    <Shell time={s.time} offline title={s.title}>
      <div className={`${CARD} flex flex-col items-center py-5`}>
        <div className="relative h-32 w-32">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="60" cy="60" r="52" fill="none" strokeWidth="9" className="stroke-sand-100" />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              strokeWidth="9"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray="100"
              strokeDashoffset={100 - s.timerProgress * 100}
              className="stroke-forest-600"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-display text-3xl font-semibold tabular-nums text-forest-900">
            {s.timer}
          </span>
        </div>
        <p className="mt-3 text-xs font-semibold text-ink-muted">{s.timerLabel}</p>
      </div>
      <div className="flex items-start gap-2 rounded-2xl bg-forest-50 p-3 text-xs leading-snug text-forest-900">
        <Icon name="check" className="mt-px h-4 w-4 shrink-0 text-forest-700" />
        {s.arrived}
      </div>
    </Shell>
  )
}

function VisitorTripScreen() {
  const s = TRIP_SCREEN
  return (
    <Shell time={s.time} title={s.title}>
      <p className="-mt-1 text-xs font-semibold text-ink-muted">{s.jeep}</p>
      <div className="rounded-2xl bg-forest-900 p-3.5 text-cream">
        <p className="text-[0.625rem] font-semibold uppercase tracking-wider text-forest-200">{s.placeLabel}</p>
        <p className="mt-1 font-display text-4xl font-semibold leading-none">{s.place}</p>
      </div>
      <div className={`${CARD} flex items-start gap-2`}>
        <Icon name="check" className="mt-px h-4 w-4 shrink-0 text-forest-700" />
        <div className="text-xs leading-snug">
          <p className="font-semibold text-forest-900">{s.saved}</p>
          <p className="mt-1 text-ink-muted">{s.calm}</p>
        </div>
      </div>
    </Shell>
  )
}

function OperatorScreen() {
  const s = OPERATOR_SCREEN
  return (
    <Shell time={s.time} title={s.title}>
      <div className={CARD}>
        <div className="flex items-center justify-between">
          <p className="font-display text-base font-bold text-forest-900">{s.name}</p>
          <span className="text-xs font-semibold text-accent-700">{s.ratingLabel}</span>
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-forest-100 px-2.5 py-1 text-[0.6875rem] font-semibold text-forest-800">
          <Icon name="shield" className="h-3.5 w-3.5 text-forest-700" />
          {s.conductBadge}
        </div>
        <div className="mt-3 border-t border-sand-100 pt-2 text-[0.6875rem] text-ink-muted">
          <span className="font-semibold">{s.languagesLabel}: </span>
          <span>{s.languages}</span>
        </div>
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-2xl bg-forest-50 p-3 text-xs leading-snug text-forest-900">
        <Icon name="check" className="mt-px h-4 w-4 shrink-0 text-forest-700" />
        {s.verified}
      </div>
    </Shell>
  )
}

function SummaryScreen() {
  const s = SUMMARY_SCREEN
  return (
    <Shell time={s.time} offline title={s.title}>
      <div className="grid gap-2">
        <div className="rounded-2xl bg-forest-900 p-3 text-cream">
          <p className="text-[0.625rem] font-semibold uppercase tracking-wider text-forest-200">
            {s.parkTimeLabel}
          </p>
          <p className="mt-0.5 font-display text-2xl font-bold leading-tight">{s.parkTime}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className={CARD}>
            <p className={SMALL_LABEL}>{s.speciesLabel}</p>
            <p className="mt-1 font-display text-xl font-bold text-forest-900">{s.species}</p>
          </div>
          <div className={CARD}>
            <p className={SMALL_LABEL}>{s.calmLabel}</p>
            <p className="mt-1 font-display text-xl font-bold text-forest-900">{s.calm}</p>
          </div>
        </div>
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-2xl bg-forest-50 p-2.5 text-xs font-medium text-forest-900">
        <Icon name="bookmark" className="mt-px h-3.5 w-3.5 shrink-0 text-forest-700" />
        {s.badge}
      </div>
    </Shell>
  )
}

/** One named phone screen. Wrap it in PhoneFrame. */
export function PhoneScreen({ name }: { name: ScreenName }) {
  switch (name) {
    case 'board':
      return <SightingBoardScreen />
    case 'queue':
      return <QueueScreen />
    case 'turn':
      return <YourTurnScreen />
    case 'viewing':
      return <ViewingScreen />
    case 'trip':
      return <VisitorTripScreen />
    case 'operator':
      return <OperatorScreen />
    case 'summary':
      return <SummaryScreen />
  }
}
