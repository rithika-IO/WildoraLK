import type { Ref } from 'react'
import heroLarge from '../assets/hero-leopard-1800.webp'
import heroSmall from '../assets/hero-leopard-900.webp'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'
import { HERO, HERO_PHOTO } from '../content/hero'
import { SURVEY_VISITOR_URL } from '../content/site'
import { surveyHref } from '../lib/links'

// Pixel sizes of the two WebP files in src/assets.
const SMALL = { width: 675, height: 900 }
const LARGE = { width: 1350, height: 1800 }

/** Text items fade and rise in one after another on load (CSS only, skipped with reduced motion). */
const RISE = 'motion-safe:animate-rise'

interface HeroProps {
  /** Lets App watch when the hero leaves the screen (for the header). */
  ref?: Ref<HTMLElement>
}

export function Hero({ ref }: HeroProps) {
  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      data-tone="dark"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-forest-950 text-cream"
    >
      {/*
        The photo. Below 1024px it fills the space above the text and fades into the dark
        background, so the text never covers the leopard on a portrait screen.
        From 1024px it fills the whole hero and the text sits over the lower left.
      */}
      <div className="relative -z-10 min-h-[36svh] flex-1 overflow-hidden lg:absolute lg:inset-0">
        {/* Phones always get the 900px file. Wider screens choose by width. */}
        <picture>
          <source media="(max-width: 767px)" srcSet={heroSmall} width={SMALL.width} height={SMALL.height} />
          <img
            src={heroLarge}
            srcSet={`${heroSmall} ${SMALL.width}w, ${heroLarge} ${LARGE.width}w`}
            sizes="100vw"
            width={LARGE.width}
            height={LARGE.height}
            alt={HERO_PHOTO.alt}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[50%_60%] motion-safe:animate-hero-zoom"
          />
        </picture>
        {/* Dark gradient from the bottom left (bottom fade on small screens) keeps the text readable. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-b from-transparent to-forest-950 lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-linear-to-tr from-forest-950/90 via-forest-950/45 via-40% to-transparent to-75% lg:block"
        />
        {/* A light shade at the top helps the see-through header. */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-forest-950/55 to-transparent" />
        <p className="absolute bottom-2 right-4 text-xs text-cream/80 text-shadow-sm sm:right-6 lg:bottom-3">
          {HERO_PHOTO.credit}
        </p>
      </div>

      <Container className="pb-20 pt-4 sm:pb-24 lg:mt-auto lg:pt-28">
        <div className="max-w-2xl text-shadow-md">
          <p className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent-300 ${RISE}`}>
            <Icon name="pin" className="h-4 w-4" />
            {HERO.label}
          </p>
          <h1
            id="hero-title"
            className={`mt-4 text-4xl font-semibold leading-[1.05] sm:text-6xl ${RISE} [animation-delay:120ms]`}
          >
            {HERO.title}
          </h1>
          <p
            className={`mt-5 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl ${RISE} [animation-delay:240ms]`}
          >
            {HERO.subtitle}
          </p>
          <div className={`mt-8 flex flex-wrap gap-3 text-shadow-none ${RISE} [animation-delay:360ms]`}>
            <Button href={`#${HERO.primaryTarget}`} variant="accent">
              {HERO.primaryLabel}
              <Icon name="next" className="h-5 w-5 rotate-90" />
            </Button>
            <Button href={surveyHref(SURVEY_VISITOR_URL, HERO.secondaryEmailSubject)} variant="onPhoto">
              {HERO.secondaryLabel}
            </Button>
          </div>
          <p className={`mt-5 text-sm text-cream/80 ${RISE} [animation-delay:480ms]`}>{HERO.status}</p>
        </div>
      </Container>

      <a
        href={`#${HERO.scrollTarget}`}
        className={`absolute bottom-4 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-cream/85 transition-colors duration-200 hover:text-cream ${RISE} [animation-delay:900ms]`}
      >
        <span className="sr-only">{HERO.scrollLabel}</span>
        <span className="flex h-9 w-6 justify-center rounded-full border-2 border-current pt-1.5">
          <span className="h-2 w-1 rounded-full bg-current motion-safe:animate-scroll-cue" />
        </span>
      </a>
    </section>
  )
}
