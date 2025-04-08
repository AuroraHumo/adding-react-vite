import Button from "./buttonComponent"

function CardAtom1() {
  return (
    <div className="card text-center card3">
    <img src="src\assets\logo-opera.svg" alt="chrome logo" />
    <div>
        <h4>Add to Opera</h4>
        <p>Minimun version 46</p>
        <hr/>
        <Button className="button button-blue">Add & install extension</Button>
        
    </div>
</div>
  )
}

export default CardAtom1
