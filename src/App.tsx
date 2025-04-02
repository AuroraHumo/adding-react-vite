import Navbar from "./components/navbarComponent"
import SectionHero from "./components/sectionHero"
import SectionFeatures from "./components/sectionFeatures"

import './styles/globals.css'
import './styles/navbar.css'
import './styles/buttons.css'
import './styles/features.css'
import './styles/tabs.css'
import './styles/hero.css'

function App() {

  return (
    <div>
     <Navbar/>
     <SectionHero/>
     <SectionFeatures/>
    </div>
  )
}

export default App
