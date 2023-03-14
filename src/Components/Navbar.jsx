import React from "react";
import { useState } from "react";
import './Navbar.css'


function Navbar() {
  
  const [toggle, setToggle] = useState(false)
 
   function handleClick() {
    console.log(toggle)
    setToggle(!toggle)
  }
 
return(
  <div className="navbar">
    <img className="logo" src='../src/assets/CalipsoLogo.png' alt='Calipso Shoes Logo' />
    <ul className="nav-list">
      <li><a href='#' target='blank'>Inicio</a></li>
      <li><a href='#' target='blank'>Catalogo</a></li>
      <li><a href='#' target='blank'>Contacto</a></li>
    </ul>
  
    <button 
      onClick={handleClick} 
      className={`hamburguer ${toggle ? 'change' : ''}`}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
      
      {toggle ?
        <ul className="nav-list-toggle sideBar">
          <li className="li-nav">Inicio</li>
          <li className="li-nav">Catalogo</li>
          <li className="li-nav">Contacto</li>
        </ul>
        :
        <></>
      } 
  </div>
)
}

export default Navbar