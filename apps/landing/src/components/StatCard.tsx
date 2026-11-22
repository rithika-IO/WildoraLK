import type { Fact } from '../content/types'
import { CountUp } from './CountUp'
import { SourceLink } from './SourceLink'

interface StatCardProps {
  fact: Fact
  sourceLabel: string
  sourcesLabel: string
}

/** A key fact with its big number (counts up once), a plain-language label and visible source links. */
export function StatCard({ fact, sourceLabel, sourcesLabel }: StatCardProps) {
  return (
    <div className="flex w-full flex-col rounded-3xl bg-white/80 p-7 shadow-card transition-[translate,box-shadow] duration-300 hover:shadow-lift motion-safe:hover:-translate-y-1 sm:p-9">
      <span aria-hidden="true" className="h-1 w-10 rounded-full bg-accent-400" />
      <CountUp
        value={fact.value}
        className="mt-6 font-display text-4xl font-semibold leading-tight tabular-nums text-forest-800 lg:text-5xl"
      />
      <p className="mt-3 flex-1 text-lg leading-relaxed text-ink-muted">{fact.label}</p>
      <div className="mt-6 border-t border-sand-200 pt-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
          {fact.sources.length > 1 ? sourcesLabel : sourceLabel}
        </p>
        <ul className="mt-1">
          {fact.sources.map((source) => (
            <li key={source.url}>
              <SourceLink source={source} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
