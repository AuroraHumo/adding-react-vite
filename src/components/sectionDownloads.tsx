import CardAtom1 from "./cardAtom1"
import CardAtom2 from "./cardAtom2"
import CardAtom3 from "./cardAtom3"


const SectionDownloads = () => {

  return (

    <div className="container">
    <h2>Download the extension</h2>
    <p>We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.</p>
    <div className="card-container">
    <CardAtom1/>
    <CardAtom2/>
    <CardAtom3/>
    </div>


    </div>

)
}

export default SectionDownloads