import type { ReactNode } from 'react'
import { ILLUSTRATION_COPY } from '../../content/howItWorks'

/*
 * Original, simplified drawing. It does not show any real place or real animal location.
 * Colours come from the Tailwind theme tokens (fill-forest-800 and so on).
 */

interface JeepProps {
  x: number
  y: number
  scale?: number
  /** Face left instead of right. */
  flip?: boolean
  /** Draw small speed lines behind the jeep. */
  speed?: boolean
}

function Jeep({ x, y, scale = 1, flip = false, speed = false }: JeepProps) {
  const scaleX = flip ? -scale : scale
  return (
    <g transform={`translate(${x} ${y}) scale(${scaleX} ${scale})`}>
      {speed ? (
        <path
          d="M-30 -14h-14M-28 -9h-18M-30 -4h-12"
          fill="none"
          className="stroke-forest-400"
          strokeWidth={2}
          strokeLinecap="round"
        />
      ) : null}
      <rect x="-22" y="-17" width="44" height="12" rx="3" className="fill-forest-800" />
      <path d="M-12 -25v8M12 -25v8" fill="none" className="stroke-forest-950" strokeWidth={2} />
      <rect x="-15" y="-29" width="30" height="4" rx="2" className="fill-forest-950" />
      <circle cx="-12" cy="-4" r="5" className="fill-ink" />
      <circle cx="12" cy="-4" r="5" className="fill-ink" />
      <circle cx="-12" cy="-4" r="1.8" className="fill-sand-200" />
      <circle cx="12" cy="-4" r="1.8" className="fill-sand-200" />
    </g>
  )
}

function Leopard({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-24 0C-40 -2 -44 14 -32 18" fill="none" className="stroke-accent-500" strokeWidth={4} strokeLinecap="round" />
      <ellipse cx="0" cy="0" rx="26" ry="9" className="fill-accent-400" />
      <circle cx="28" cy="-5" r="9" className="fill-accent-400" />
      <path d="M22 -12l-2-8 7 4zM33 -13l3-7 3 8z" className="fill-accent-500" />
      <circle cx="-14" cy="-3" r="2.2" className="fill-forest-900" />
      <circle cx="-4" cy="2" r="2.2" className="fill-forest-900" />
      <circle cx="6" cy="-4" r="2.2" className="fill-forest-900" />
      <circle cx="15" cy="2" r="2.2" className="fill-forest-900" />
      <circle cx="-20" cy="3" r="2" className="fill-forest-900" />
      <circle cx="31" cy="-6" r="1.2" className="fill-forest-900" />
    </g>
  )
}

function Scene({ label, children }: { label: string; children: ReactNode }) {
  return (
    <svg viewBox="0 105 400 195" role="img" aria-label={label} className="block h-auto w-full">
      <rect width="400" height="300" className="fill-forest-50" />
      <path d="M0 190Q100 150 200 180T400 168V300H0Z" className="fill-forest-100" />
      <path d="M0 222Q120 200 240 215T400 205V300H0Z" className="fill-forest-200" />
      <path d="M168 170C172 156 190 158 210 158C232 158 250 156 254 170Z" className="fill-sand-300" />
      <Leopard x={210} y={149} />
      {children}
    </svg>
  )
}

function TodayScene() {
  return (
    <Scene label={ILLUSTRATION_COPY.today.alt}>
      <circle cx="78" cy="204" r="9" className="fill-sand-200" opacity="0.9" />
      <circle cx="64" cy="214" r="6" className="fill-sand-200" opacity="0.9" />
      <circle cx="338" cy="212" r="8" className="fill-sand-200" opacity="0.9" />
      {/* Back row */}
      <Jeep x={95} y={180} scale={0.85} />
      <Jeep x={135} y={176} scale={0.85} />
      <Jeep x={285} y={176} scale={0.85} flip />
      <Jeep x={325} y={180} scale={0.85} flip />
      {/* Middle row */}
      <Jeep x={110} y={205} speed />
      <Jeep x={160} y={198} />
      <Jeep x={262} y={198} flip />
      <Jeep x={312} y={206} flip speed />
      {/* Front row */}
      <Jeep x={150} y={235} scale={1.1} />
      <Jeep x={215} y={242} scale={1.1} flip />
      <Jeep x={275} y={236} scale={1.1} flip />
    </Scene>
  )
}

function QueueBadge({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="10" className="fill-accent-400" />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-forest-950 text-[12px] font-bold"
      >
        {n}
      </text>
    </g>
  )
}

function WithWildoraScene() {
  return (
    <Scene label={ILLUSTRATION_COPY.withWildora.alt}>
      {/* The viewing area: a small cap on how many jeeps can be here at once. */}
      <ellipse
        cx="210"
        cy="203"
        rx="126"
        ry="26"
        fill="none"
        className="stroke-accent-700"
        strokeWidth={2.5}
        strokeDasharray="8 7"
      />
      <Jeep x={140} y={196} />
      <Jeep x={212} y={214} />
      <Jeep x={284} y={196} flip />

      {/* The queue waits on the road. */}
      <rect x="0" y="256" width="400" height="44" className="fill-forest-700" />
      <path d="M0 278H400" fill="none" className="stroke-sand-200" strokeWidth={2} strokeDasharray="12 10" />
      <Jeep x={50} y={278} scale={0.8} />
      <Jeep x={120} y={278} scale={0.8} />
      <Jeep x={190} y={278} scale={0.8} />
      <Jeep x={260} y={278} scale={0.8} />
      <QueueBadge x={50} y={242} n={4} />
      <QueueBadge x={120} y={242} n={3} />
      <QueueBadge x={190} y={242} n={2} />
      <QueueBadge x={260} y={242} n={1} />
    </Scene>
  )
}

interface PanelProps {
  title: string
  caption: string
  titleClassName: string
  children: ReactNode
}

function Panel({ title, caption, titleClassName, children }: PanelProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-sand-200 bg-cream shadow-sm">
      {children}
      <figcaption className="p-5">
        <span className={`block font-display text-xl font-semibold ${titleClassName}`}>{title}</span>
        <span className="mt-1 block leading-relaxed text-ink-muted">{caption}</span>
      </figcaption>
    </figure>
  )
}

/** Two panels side by side on wide screens and stacked on phones. */
export function JeepQueueIllustration() {
  const { today, withWildora } = ILLUSTRATION_COPY
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Panel title={today.title} caption={today.caption} titleClassName="text-accent-700">
        <TodayScene />
      </Panel>
      <Panel title={withWildora.title} caption={withWildora.caption} titleClassName="text-forest-800">
        <WithWildoraScene />
      </Panel>
    </div>
  )
}
