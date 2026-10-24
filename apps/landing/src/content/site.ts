import type { NavLink } from './types'

export const SITE_NAME = 'WildoraLK'

export const CONTACT_EMAIL = 'wildoralk.team@gmail.com'

// TODO: Confirm the name to show in the footer copyright line.
export const COPYRIGHT_HOLDER = 'WildoraLK student team'

export const SKIP_LINK_LABEL = 'Skip to main content'

/** Links shown in the header and the mobile menu. `id` must match a section id. */
export const NAV_LINKS: NavLink[] = [
  { id: 'problem', label: 'The problem' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'drivers', label: 'Drivers' },
  { id: 'visitors', label: 'Visitors' },
  { id: 'fair-enforcement', label: 'Fair enforcement' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'contact', label: 'Contact' },
]

export const HEADER_COPY = {
  homeLabel: 'WildoraLK, back to top',
  menuOpenLabel: 'Open menu',
  menuCloseLabel: 'Close menu',
  navLabel: 'Main',
  mobileNavLabel: 'Mobile',
}

export const FOOTER_COPY = {
  disclaimer:
    'WildoraLK is not affiliated with or endorsed by the Department of Wildlife Conservation or Yala National Park.',
  backToTop: 'Back to top',
}
