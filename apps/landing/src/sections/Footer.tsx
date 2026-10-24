import { Container } from '../components/Container'
import { COPYRIGHT_HOLDER, FOOTER_COPY } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer data-tone="dark" className="bg-forest-950 py-12 text-forest-100">
      <Container className="flex flex-col gap-6">
        <p className="max-w-3xl text-base leading-relaxed">{FOOTER_COPY.disclaimer}</p>
        <div className="flex flex-col gap-3 border-t border-forest-800 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {COPYRIGHT_HOLDER}
          </p>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center font-medium text-accent-300 underline underline-offset-4 transition-colors duration-200 hover:text-accent-400"
          >
            {FOOTER_COPY.backToTop}
          </a>
        </div>
      </Container>
    </footer>
  )
}
