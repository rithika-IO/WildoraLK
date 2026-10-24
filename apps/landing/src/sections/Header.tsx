import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'
import { HEADER_COPY, NAV_LINKS, SITE_NAME } from '../content/site'

const LINK_CLASSES =
  'rounded-full px-3 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-forest-100 hover:text-forest-900'

/** Sticky header: text wordmark, anchor links, and a keyboard-usable mobile menu. */
export function Header() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Escape closes the menu and puts focus back on the menu button.
  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      buttonRef.current?.focus()
    }
  }

  return (
    <header
      onKeyDown={handleKeyDown}
      className="sticky top-0 z-40 border-b border-sand-200 bg-cream/95 backdrop-blur"
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          aria-label={HEADER_COPY.homeLabel}
          className="font-display text-2xl font-bold tracking-tight text-forest-900"
        >
          Wildora<span className="text-accent-700">LK</span>
          <span className="sr-only"> ({SITE_NAME})</span>
        </a>

        <nav aria-label={HEADER_COPY.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={LINK_CLASSES}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? HEADER_COPY.menuCloseLabel : HEADER_COPY.menuOpenLabel}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest-900 transition-colors duration-200 hover:bg-forest-100 lg:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </Container>

      {/* Overlay under the header, so opening it never changes the header height. Closed menu is invisible, so its links cannot be reached with Tab. */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full grid border-b border-sand-200 bg-cream shadow-lg transition-[grid-template-rows,visibility] duration-200 lg:hidden ${
          open ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr] border-transparent'
        }`}
      >
        <nav aria-label={HEADER_COPY.mobileNavLabel} className="overflow-hidden">
          <ul className="flex flex-col px-5 py-3 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors duration-200 hover:bg-forest-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
