import React from 'react';
import MenuItem from "../menu-item"
import "./menu.css"
function Menu() {
  return (<header className="App-wrapper">
    <nav>
      <ul classname="menu">
        <MenuItem
          text='Home'
          link="/"
        />
        <MenuItem
          text='Sobre mí'
          link="/sobre-mi"
        />
        <MenuItem
          text='Proyectos'
          link="/proyectos"
        />
        <MenuItem
          text='Contacto'
          link="/contacto"
        />
      </ul>
    </nav>
  </header>)
}

export default Menu

