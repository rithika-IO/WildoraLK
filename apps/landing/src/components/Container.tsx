import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** Centres content (about 1200px wide at most) and keeps consistent side padding (safe at 360px wide). */
export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-page px-5 sm:px-8 ${className}`}>{children}</div>
}
