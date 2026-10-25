import { useEffect } from 'react'
import { SkipLink } from './components/SkipLink'
import { useInView } from './hooks/useInView'
import { Audiences } from './sections/Audiences'
import { Features } from './sections/Features'
import { Footer } from './sections/Footer'
import { GetInvolved } from './sections/GetInvolved'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { Problem } from './sections/Problem'
import { Team } from './sections/Team'

/** The whole page: one scrolling layout, one section component per block, in reading order. */
function App() {
  // The header stays see-through while any of the hero is below it (the header is 4rem tall).
  const { ref: heroRef, inView: overHero } = useInView<HTMLElement>({
    once: false,
    initial: true,
    rootMargin: '-64px 0px 0px 0px',
  })
  // Watches the top 6rem of the page: once it scrolls away, the header over the photo turns to dark glass.
  const { ref: topRef, inView: atTop } = useInView<HTMLDivElement>({
    once: false,
    initial: true,
    rootMargin: '0px',
  })

  // Direct links such as /#how-it-works: jump to the section once it has rendered.
  // The offset for the fixed header comes from scroll-padding-top in index.css.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <div id="top" className="relative">
      <div ref={topRef} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24" />
      <SkipLink />
      <Header overHero={overHero} atTop={atTop} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero ref={heroRef} />
        <Problem />
        <HowItWorks />
        <Audiences />
        <Features />
        <Team />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  )
}

export default App
