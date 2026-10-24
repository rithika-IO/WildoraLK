import { Section } from '../components/Section'
import { TEAM_HEADING, TEAM_MEMBERS } from '../content/team'

export function Team() {
  return (
    <Section heading={TEAM_HEADING} tone="sand">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((name) => (
          <li
            key={name}
            className="rounded-2xl border border-sand-200 border-l-4 border-l-forest-700 bg-cream px-5 py-4 text-lg font-semibold text-forest-900 shadow-sm"
          >
            {name}
          </li>
        ))}
      </ul>
    </Section>
  )
}
