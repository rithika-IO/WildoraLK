/**
 * True when scroll reveals, count-ups and other motion should run.
 * Without IntersectionObserver, or with prefers-reduced-motion, content shows at once.
 * main.tsx turns this into the `motion-ok` class on <html>, which index.css checks.
 */
export const MOTION_OK =
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
