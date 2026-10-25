import { useEffect, useRef, useState } from 'react'

interface InViewOptions {
  /** Keep the first "in view" result and stop watching. Default true (scroll reveals). */
  once?: boolean
  /** Grows or shrinks the viewport box used for the check, as in IntersectionObserver. */
  rootMargin?: string
  /** Value before the first check. Default false. */
  initial?: boolean
}

const SUPPORTED = typeof window !== 'undefined' && 'IntersectionObserver' in window

/**
 * Reports whether an element is on screen. Attach `ref` to the element and read `inView`.
 * One IntersectionObserver per element, removed on unmount (or after the first hit with `once`).
 * Without IntersectionObserver support it reports true, so nothing waits forever.
 */
export function useInView<T extends Element>({
  once = true,
  rootMargin = '0px 0px -12% 0px',
  initial = false,
}: InViewOptions = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(!SUPPORTED || initial)

  useEffect(() => {
    const element = ref.current
    if (!element || !SUPPORTED) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once, rootMargin])

  return { ref, inView }
}
