import type { NavLink } from './types'

export const SITE_NAME = 'WildoraLK'

export const CONTACT_EMAIL = 'wildoralk.team@gmail.com'

export const SURVEY_VISITOR_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdO5v0KBsxeBaFv36snQfH4F81lPYywnEzinsjNK_MiKNzyvg/viewform'
export const VISITOR_SURVEY_URL = SURVEY_VISITOR_URL

export const SURVEY_DRIVER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe2TU2__jMuG3d2i9fQ5Y-O5pRDFk2q2jqzzZ4T4fEmWacxeA/viewform'
export const DRIVER_SURVEY_URL = SURVEY_DRIVER_URL

// TODO: Confirm the name to show in the footer copyright line.
export const COPYRIGHT_HOLDER = 'WildoraLK student team'

export const SKIP_LINK_LABEL = 'Skip to main content'

/** Read by screen readers after links that open in a new tab. */
export const NEW_TAB_LABEL = '(opens in a new tab)'

/** Links shown in the header and the mobile menu. `id` must match a section id. */
export const NAV_LINKS: NavLink[] = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'try-it', label: 'Try it' },
  { id: 'in-the-field', label: 'In the field' },
  { id: 'team', label: 'Team' },
  { id: 'get-involved', label: 'Get involved' },
]

export const HEADER_COPY = {
  homeLabel: 'WildoraLK, back to top',
  menuOpenLabel: 'Open menu',
  menuCloseLabel: 'Close menu',
  navLabel: 'Main',
  mobileNavLabel: 'Mobile',
}

export const FOOTER_COPY = {
  description: 'Fair turns at leopard sightings in Yala National Park.',
  disclaimer:
    'WildoraLK is not affiliated with or endorsed by the Department of Wildlife Conservation or Yala National Park.',
  backToTop: 'Back to top',
}
