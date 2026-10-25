import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { StatCard } from '../components/StatCard'
import { FACTS, PROBLEM_COPY, PROBLEM_HEADING } from '../content/problem'

export function Problem() {
  return (
    <Section heading={PROBLEM_HEADING} tone="light">
      <ul className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {FACTS.map((fact, index) => (
          <Reveal as="li" key={fact.value} index={index} className="flex">
            <StatCard
              fact={fact}
              sourceLabel={PROBLEM_COPY.sourceLabel}
              sourcesLabel={PROBLEM_COPY.sourcesLabel}
            />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
