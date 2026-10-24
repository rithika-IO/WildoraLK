import type { Feature, SectionHeading } from './types'

export const OFFLINE_HEADING: SectionHeading = {
  id: 'offline',
  eyebrow: 'Works without signal',
  title: 'Built for places with no phone signal',
  intro:
    'Some parts of the park have no mobile signal. The app is designed to keep working there.',
}

export const OFFLINE_FEATURES: Feature[] = [
  {
    icon: 'download',
    title: 'Park pack',
    text: 'Before the safari, the phone downloads a park pack with the maps and rules it needs.',
  },
  {
    icon: 'bookmark',
    title: 'Saved turn times',
    text: 'Turn times are saved on the phone, so your turn still counts when the signal drops.',
  },
  {
    icon: 'phone',
    title: 'On-phone rule checks',
    text: 'Phone GPS checks speed, entering before your turn, and overstaying, with no signal needed.',
  },
  {
    icon: 'upload',
    title: 'Delayed uploads',
    text: 'Results are kept safely on the phone and uploaded later, when it is back in range.',
  },
]
