import { Container } from '../components/Container'
import { HERO_PHOTO } from '../content/hero'
import { COPYRIGHT_HOLDER, FOOTER_COPY } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer data-tone="dark" className="bg-forest-950 py-14 text-forest-100">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight text-cream">
              Wildora<span className="text-accent-300">LK</span>
            </p>
            <p className="mt-2 max-w-sm leading-relaxed">{FOOTER_COPY.description}</p>
          </div>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center self-start font-medium text-accent-300 underline underline-offset-4 transition-colors duration-200 hover:text-accent-400"
          >
            {FOOTER_COPY.backToTop}
          </a>
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed">{FOOTER_COPY.disclaimer}</p>
        <div className="mt-6 flex flex-col gap-2 border-t border-forest-800 pt-6 text-sm sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {COPYRIGHT_HOLDER}
          </p>
          <p>{HERO_PHOTO.credit}</p>
        </div>
      </Container>
    </footer>
  )
}
