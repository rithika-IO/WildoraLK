import type { ScreenName, SectionHeading } from './types'

export const IN_THE_FIELD_HEADING: SectionHeading = {
  id: 'in-the-field',
  chapter: '06',
  eyebrow: 'In the field',
  tag: 'Sample screens',
  title: 'Screens built for real safaris',
  intro:
    'Drivers receive clear turn alerts. Visitors follow the sighting from their own seats.',
}

export interface GalleryItem {
  screen: ScreenName
  title: string
  caption: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    screen: 'queue',
    title: 'Driver turn alert',
    caption: 'Turn time and queue position. Saved on the phone before reaching the zone.',
  },
  {
    screen: 'trip',
    title: 'Visitor live trip',
    caption: 'Queue place and a clear reminder that your turn is already saved.',
  },
  {
    screen: 'operator',
    title: 'Operator conduct badge',
    caption: 'Official licence status, spoken languages and verified conduct score.',
  },
  {
    screen: 'summary',
    title: 'Safari trip summary',
    caption: 'Total park time, species counted and undisturbed viewing minutes.',
  },
]
