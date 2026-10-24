import { FeatureCard } from '../components/FeatureCard'
import { Icon } from '../components/Icon'
import { SpotPattern } from '../components/illustrations/SpotPattern'
import { Section } from '../components/Section'
import { ENFORCEMENT_FEATURES, ENFORCEMENT_HEADING, ENFORCEMENT_RULE } from '../content/enforcement'

export function FairEnforcement() {
  return (
    <Section
      heading={ENFORCEMENT_HEADING}
      tone="dark"
      backdrop={<SpotPattern className="text-forest-800 opacity-50" />}
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {ENFORCEMENT_FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} tone="dark" />
        ))}
      </ul>

      <div className="mt-8 flex gap-4 rounded-2xl bg-accent-400 p-6 text-forest-950 sm:items-center sm:p-8">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-950 text-accent-400">
          <Icon name="shield" />
        </span>
        <div>
          <h3 className="text-xl font-semibold">{ENFORCEMENT_RULE.title}</h3>
          <p className="mt-1 text-lg leading-relaxed">{ENFORCEMENT_RULE.text}</p>
        </div>
      </div>
    </Section>
  )
}
