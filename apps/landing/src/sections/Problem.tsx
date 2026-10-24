import { Section } from '../components/Section'
import { StatCard } from '../components/StatCard'
import { FACTS, PROBLEM_COPY, PROBLEM_HEADING, PROBLEM_POINTS } from '../content/problem'

export function Problem() {
  return (
    <Section heading={PROBLEM_HEADING} tone="light">
      <ul className="grid max-w-2xl gap-3">
        {PROBLEM_POINTS.map((point) => (
          <li key={point} className="flex gap-3 text-lg text-ink">
            <span
              aria-hidden="true"
              className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent-500"
            />
            {point}
          </li>
        ))}
      </ul>

      <h3 className="mt-14 text-2xl font-semibold text-forest-900">{PROBLEM_COPY.factsHeading}</h3>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FACTS.map((fact) => (
          <StatCard
            key={fact.value}
            fact={fact}
            sourceLabel={PROBLEM_COPY.sourceLabel}
            sourcesLabel={PROBLEM_COPY.sourcesLabel}
          />
        ))}
      </ul>

      <p className="mt-10 max-w-3xl border-l-4 border-accent-500 pl-5 text-lg leading-relaxed text-ink-muted">
        {PROBLEM_COPY.closing}
      </p>
    </Section>
  )
}
