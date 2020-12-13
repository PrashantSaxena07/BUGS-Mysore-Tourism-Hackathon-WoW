import React from "react";
import { NavLink } from "react-router-dom";



const Navbar =()=>{

    return(
        <>
        <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      <span className="mx-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="170" height="50" fill="currentColor" class="bi bi-broadcast-pin" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 0 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
</svg><h4 style={{width:"50px"}}>TOURSHOTSPOT</h4>
      </span>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName='menu-active' exact className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu-active' exact className="nav-link" to="/destination">Destination</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu-active' exact className="nav-link" to="/excursion">Excursions</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu-active' exact className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
</div>
 </div>
 </div>
        </>
    );
};
export default Navbar;