import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'
import { HeroArt } from '../components/illustrations/HeroArt'
import { SpotPattern } from '../components/illustrations/SpotPattern'
import { HERO } from '../content/hero'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      data-tone="dark"
      className="relative overflow-hidden bg-forest-900 text-sand-100"
    >
      <SpotPattern className="text-forest-800 opacity-60" />
      <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:py-28">
        <div>
          <h1
            id="hero-title"
            className="text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl"
          >
            {HERO.problem}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-100 sm:text-xl">
            {HERO.solution}
          </p>
          <p className="mt-4 text-base font-medium text-accent-300">{HERO.note}</p>
          <div className="mt-8">
            <Button href={`#${HERO.ctaTarget}`} variant="accent">
              {HERO.ctaLabel}
              <Icon name="next" className="h-5 w-5 rotate-90" />
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <HeroArt className="drop-shadow-2xl" />
        </div>
      </Container>
    </section>
  )
}
