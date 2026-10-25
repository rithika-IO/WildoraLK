import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  /** Element to render, for example 'li' inside a list. Default 'div'. */
  as?: ElementType
  /** Position in a group of cards. Each step adds a short delay (the stagger). */
  index?: number
  className?: string
  children: ReactNode
}

/**
 * Fades and lifts its content in once, the first time it scrolls into view.
 * The hiding and the transition live in index.css ([data-reveal]), and only apply
 * when <html> has the motion-ok class, so content is never stuck hidden.
 */
export function Reveal({ as: Tag = 'div', index = 0, className, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-inview={inView ? '' : undefined}
      style={{ '--reveal-index': index } as CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  )
}
