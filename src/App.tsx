import Navbar from "./components/navbarComponent"
import SectionHero from "./components/sectionHero"
import SectionFeatures from "./components/sectionFeatures"
import SectionDownloads from "./components/sectionDownloads"

import './styles/globals.css'
import './styles/navbar.css'
import './styles/buttons.css'
import './styles/features.css'
import './styles/tabs.css'
import './styles/hero.css'
import './styles/downloads.css'

function App() {

  return (
    <div>
     <Navbar/>
     <SectionHero/>
     <SectionFeatures/>
     <SectionDownloads/>
    </div>
  )
}

export default App
