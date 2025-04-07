import Button from "./buttonComponent"

function CardAtom1() {
  return (
    <div className="card text-center card2">
    <img src="src\assets\logo-firefox.svg" alt="chrome logo" />
    <div>
        <h4 >Add to Firefox</h4>
        <p>Minimun version 66</p>
        <hr/>
        <Button className="button button-blue">Add & install extension</Button>
        
    </div>
</div>
  )
}

export default CardAtom1
