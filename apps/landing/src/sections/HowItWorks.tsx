import { useEffect, useState } from 'react'
import { PhoneFrame } from '../components/phone/PhoneFrame'
import { PhoneScreen } from '../components/phone/screens'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { HOW_HEADING, HOW_STEPS } from '../content/howItWorks'
import type { Step } from '../content/howItWorks'
import { SCREEN_LABELS } from '../content/phoneScreens'
import { useInView } from '../hooks/useInView'

/** A thin band across the middle of the screen. The step crossing it is the active one. */
const ACTIVE_BAND = '-45% 0px -45% 0px'

interface HowStepProps {
  step: Step
  index: number
  active: boolean
  onActive: (index: number) => void
}

function HowStep({ step, index, active, onActive }: HowStepProps) {
  const { ref, inView } = useInView<HTMLLIElement>({ once: false, rootMargin: ACTIVE_BAND })

  useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <li ref={ref} className="lg:flex lg:min-h-[70svh] lg:items-center">
      <Reveal className="w-full">
        {/* Desktop dims the steps that are not active. On mobile every step is full strength. */}
        <div className={`flex gap-5 transition-opacity duration-500 ${active ? '' : 'lg:opacity-40'}`}>
          <span
            aria-hidden="true"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-xl font-semibold transition-colors duration-500 ${
              active
                ? 'bg-accent-400 text-forest-950'
                : 'bg-accent-400 text-forest-950 lg:bg-sand-200 lg:text-forest-800'
            }`}
          >
            {index + 1}
          </span>
          <div>
            <h3 className="text-2xl font-semibold text-forest-900 sm:text-3xl">{step.title}</h3>
            <p className="mt-2 max-w-md text-lg leading-relaxed text-ink-muted">{step.text}</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center lg:hidden">
          <PhoneFrame label={SCREEN_LABELS[step.screen]} size="sm">
            <PhoneScreen name={step.screen} />
          </PhoneFrame>
        </div>
      </Reveal>
    </li>
  )
}

/**
 * Scroll story. Desktop: steps on the left, one sticky phone on the right that
 * cross-fades to the active step's screen. Mobile: each step has its own phone.
 */
export function HowItWorks() {
  const [active, setActive] = useState(0)

  return (
    <Section heading={HOW_HEADING} tone="sand">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <ol className="space-y-20 lg:-my-[15svh] lg:space-y-0">
          {HOW_STEPS.map((step, index) => (
            <HowStep
              key={step.title}
              step={step}
              index={index}
              active={index === active}
              onActive={setActive}
            />
          ))}
        </ol>

        <div className="hidden lg:block">
          <div className="sticky top-16 flex h-[calc(100svh-4rem)] items-center justify-center">
            <PhoneFrame label={SCREEN_LABELS[HOW_STEPS[active].screen]}>
              {HOW_STEPS.map((step, index) => (
                <div
                  key={step.screen}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === active ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <PhoneScreen name={step.screen} />
                </div>
              ))}
            </PhoneFrame>
          </div>
        </div>
      </div>
    </Section>
  )
}
