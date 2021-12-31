import React from 'react';
import ListaImagenes from "../../components/lista-imagenes";
import CardList from "../../components/card-list";
import front from "../../images/home/front-hotel.jpg";

import "./styles.css";

export function PageHome() {
  return (
    <div className="page-home">
      <div style={{backgroundImage:`url(${front})`}} className="banner">

      </div>
     <h2>Bienvenido a Solid Gold Lima</h2>
       <ListaImagenes/>
       
     <h2>Bienvenido al bienestar «Sentirse bien»</h2>
     <CardList/>
  
    
   
    </div>

  
    
  );
}
