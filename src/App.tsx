import Cabecera from "./components/navbarComponent"
import Banner from "./components/sectionHero"
import SectionFeatures from "./components/sectionFeatures"

import './styles/hero.css'
import './styles/navbar.css'
import './styles/buttons.css'

function App() {

  return (
    <div>
     <Cabecera/>
     <Banner/>
     <SectionFeatures/>
    </div>
  )
}

export default App
