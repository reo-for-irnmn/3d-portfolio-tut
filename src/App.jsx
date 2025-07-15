import Hero from './sections/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </main>
  )
}

export default App