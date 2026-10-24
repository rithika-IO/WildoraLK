import { FeatureCard } from '../components/FeatureCard'
import { Section } from '../components/Section'
import { DRIVER_BENEFITS, DRIVERS_HEADING } from '../content/drivers'

export function Drivers() {
  return (
    <Section heading={DRIVERS_HEADING} tone="light">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DRIVER_BENEFITS.map((benefit) => (
          <FeatureCard key={benefit.title} feature={benefit} />
        ))}
      </ul>
    </Section>
  )
}
