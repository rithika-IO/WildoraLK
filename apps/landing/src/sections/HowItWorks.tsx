import { FeatureCard } from '../components/FeatureCard'
import { JeepQueueIllustration } from '../components/illustrations/JeepQueueIllustration'
import { Section } from '../components/Section'
import { HOW_COPY, HOW_HEADING, HOW_STEPS } from '../content/howItWorks'

export function HowItWorks() {
  return (
    <Section heading={HOW_HEADING} tone="sand">
      <JeepQueueIllustration />
      <p className="mt-4 text-sm text-ink-muted">{HOW_COPY.illustrationNote}</p>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_STEPS.map((step, index) => (
          <FeatureCard key={step.title} feature={step} step={index + 1} />
        ))}
      </ol>
    </Section>
  )
}
