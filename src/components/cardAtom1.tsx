import Button from "./buttonComponent"

function CardAtom1() {
  return (
    <div className="card text-center card1">
    <img src="src\assets\logo-chrome.svg" alt="chrome logo" />
    <div>
        <h4 >Add to Chrome</h4>
        <p >Minimun version 62</p>
        <hr/>
        <Button className="button button-blue">Add & install extension</Button>
    </div>
</div>
  )
}

export default CardAtom1
