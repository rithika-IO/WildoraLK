import { SKIP_LINK_LABEL } from '../content/site'

/** First focusable element on the page. Hidden until it receives keyboard focus. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest-900 focus:px-5 focus:py-3 focus:font-semibold focus:text-cream"
    >
      {SKIP_LINK_LABEL}
    </a>
  )
}
