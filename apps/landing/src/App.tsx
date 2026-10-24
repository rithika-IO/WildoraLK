import { useEffect } from 'react'
import { SkipLink } from './components/SkipLink'
import { Contact } from './sections/Contact'
import { Drivers } from './sections/Drivers'
import { FairEnforcement } from './sections/FairEnforcement'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { Offline } from './sections/Offline'
import { Problem } from './sections/Problem'
import { Roadmap } from './sections/Roadmap'
import { Team } from './sections/Team'
import { Visitors } from './sections/Visitors'

/** The whole page: one scrolling layout, one section component per block, in reading order. */
function App() {
  // Direct links such as /#how-it-works: jump to the section once it has rendered.
  // The offset for the sticky header comes from scroll-padding-top in index.css.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])
  return (
    <div id="top">
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Problem />
        <HowItWorks />
        <Offline />
        <Drivers />
        <Visitors />
        <FairEnforcement />
        <Roadmap />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
