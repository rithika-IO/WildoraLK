import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { FEATURES, FEATURES_HEADING, OFFLINE_ITEMS } from '../content/features'

/**
 * Grid spans per tile, in the same order as FEATURES.
 * Desktop (4 columns): one large tile, a wide tile, two small, then two wide.
 */
const SPANS = [
  'sm:col-span-2 lg:row-span-2',
  'lg:col-span-2',
  '',
  '',
  'lg:col-span-2',
  'sm:col-span-2',
]

/** Bento grid: six tiles of different sizes in one CSS grid. */
export function Features() {
  return (
    <Section heading={FEATURES_HEADING} tone="dark">
      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {FEATURES.map((feature, index) => {
          const large = index === 0
          return (
            <Reveal as="li" key={feature.title} index={index} className={`flex ${SPANS[index]}`}>
              <div
                className={`relative flex w-full flex-col overflow-hidden rounded-3xl border border-forest-700/70 p-7 transition-[translate,box-shadow,background-color] duration-300 hover:shadow-lift motion-safe:hover:-translate-y-1 ${
                  large ? 'bg-forest-800 sm:p-10' : 'bg-forest-800/50 hover:bg-forest-800/80'
                }`}
              >
                {large ? (
                  <Icon
                    name={feature.icon}
                    className="pointer-events-none absolute -right-6 -top-6 h-56 w-56 text-forest-700/60 sm:h-72 sm:w-72"
                  />
                ) : null}
                <span
                  className={`relative inline-flex items-center justify-center rounded-2xl bg-forest-700 text-accent-300 ${
                    large ? 'h-16 w-16' : 'h-12 w-12'
                  }`}
                >
                  <Icon name={feature.icon} className={large ? 'h-8 w-8' : 'h-6 w-6'} />
                </span>
                {large ? (
                  <ul className="relative mt-auto flex flex-wrap gap-2 pt-24">
                    {OFFLINE_ITEMS.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 rounded-full bg-forest-900 px-3 py-1.5 text-sm font-medium text-forest-100"
                      >
                        <Icon name="check" className="h-4 w-4 text-accent-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <h3
                  className={`relative font-semibold leading-snug text-cream ${
                    large ? 'mt-6 text-3xl sm:text-4xl' : 'mt-auto pt-8 text-xl'
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={`mt-2 leading-relaxed text-forest-100 ${large ? 'max-w-sm text-lg' : ''}`}>
                  {feature.text}
                </p>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
