import Button from "./buttonComponent";

function Cabecera() {
  return (
    <>
    <nav className="navbar">
    <div className="container">
      <a className="navbar-brand" href="#">
     <img src="src\assets\logo-bookmark.svg" alt="Logo" />
      </a>    
        <div className="nav-links "> 
          <a className="nav-link " href="#">FEATURES</a>
          <a className="nav-link " href="#">PRICING</a>
          <a className="nav-link " href="#">CONTACT</a>
          <Button className="login-btn">LOGIN</Button>

      </div>
    </div> 
  </nav>
  </>
  );
}
export default Cabecera;