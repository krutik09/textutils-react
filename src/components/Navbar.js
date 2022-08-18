import React from "react";
import PropTypes from 'prop-types';
import About from "./About";
import {Link} from 'react-router-dom';
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
  <div class="container-fluid">
                <a class="navbar-brand" href="#">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <Link className="nav-link" to= "/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = "/About">About</Link>
        </li>
            </ul>
            <div class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Toggle dark mode</label>
</div>
    </div>
  </div>
</nav>
    );
   
   
    
};

Navbar.propTypes = {
    name: PropTypes.string,
    sitename:PropTypes.string
}
 
Navbar.defaultProps = {
    name: 'krutik',
    sitename:'textutils'
 }

