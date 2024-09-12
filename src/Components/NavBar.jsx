// NavBar.js
import React from 'react';
import TituloComponente from "./TituloComponente.jsx"
import BotonComponente from "./BotonComponente.jsx";
import ComponenteCartWidget from "c:/Users/pjcuf/Desktop/Preentrega-1-Cufre/ecommerce-cufre/src/Components/ComponenteCartWidget";

import './NavBar.css'; 

const NavBar = () => {

  return (
    <nav className="nav">
      <TituloComponente className="titulo"></TituloComponente>
      <BotonComponente texto={"Tela"} className="boton" />
      <BotonComponente texto={"Opaca"} className="boton" />
      <BotonComponente texto={"Voile"} className="boton" />
      <ComponenteCartWidget></ComponenteCartWidget>
    </nav>
  );
}

export default NavBar;


