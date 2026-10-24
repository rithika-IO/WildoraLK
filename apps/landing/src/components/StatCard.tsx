import type { Fact } from '../content/types'
import { SourceLink } from './SourceLink'

interface StatCardProps {
  fact: Fact
  sourceLabel: string
  sourcesLabel: string
}

/** A key fact with its big number, a plain-language label and visible source links. */
export function StatCard({ fact, sourceLabel, sourcesLabel }: StatCardProps) {
  return (
    <li className="flex flex-col rounded-2xl border border-sand-200 bg-white/70 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <p className="font-display text-3xl font-semibold leading-tight text-forest-800">{fact.value}</p>
      <p className="mt-2 flex-1 leading-relaxed text-ink-muted">{fact.label}</p>
      <div className="mt-4 border-t border-sand-200 pt-3">
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
    </li>
  )
}
