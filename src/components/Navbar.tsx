import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return ( <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Logo/>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/">Dashboard</NavLink>
        <NavLink className="nav-link" to="/new">New Expense</NavLink>
        <NavLink className="nav-link" to="/reports">Reports</NavLink>
      </div>
    </div>

    <div className="d-flex" role="search">
      <NavLink className="btn btn-sm btn-outline-light" to="/login">Login</NavLink>
      <NavLink className="btn btn-sm btn-outline-light mx-1" to="/register">Register</NavLink>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <FaBars color="white"/>
    </button>
    </div>

  </div>
</nav>)
  
};

export default Navbar;
