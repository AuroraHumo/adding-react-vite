function Cabecera() {
  return (
    <>
    <nav className="navbar">
    <div className="container">
      <a className="navbar-brand" href="#">
     <img src="public\logo-bookmark.svg" alt="Logo" />
      </a>    
        <div className="nav-links "> 
          <a className="nav-link " href="#">FEATURES</a>
          <a className="nav-link " href="#">PRICING</a>
          <a className="nav-link " href="#">CONTACT</a>
          <button className="login-btn" type="submit">LOGIN</button>
      
      </div>
    </div> 
  </nav>
  </>
  );
}
export default Cabecera;