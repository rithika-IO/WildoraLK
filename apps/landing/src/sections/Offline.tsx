import { FeatureCard } from '../components/FeatureCard'
import { SpotPattern } from '../components/illustrations/SpotPattern'
import { Section } from '../components/Section'
import { OFFLINE_FEATURES, OFFLINE_HEADING } from '../content/offline'

export function Offline() {
  return (
    <Section
      heading={OFFLINE_HEADING}
      tone="dark"
      backdrop={<SpotPattern className="text-forest-800 opacity-50" />}
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {OFFLINE_FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} tone="dark" />
        ))}
      </ul>
    </Section>
  )
}
