import { FaBars } from "react-icons/fa";
import Logo from "./Logo";



const Navbar = () => {
  return ( <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Logo/>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link" aria-disabled="true">Disabled</a>
      </div>
    </div>

    <div className="d-flex" role="search">
      <button className="btn btn-sm btn-outline-light">Login</button>
      <button className="btn btn-sm btn-outline-light mx-1">Logout</button>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <FaBars color="white"/>
    </button>
    </div>

  </div>
</nav>)
  
};

export default Navbar;
