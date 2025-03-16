import React from 'react'
import { Link } from "react-router-dom"

function Accueil() {
  return (
    <div className='accueil'>
      <div className="headerContainer">
        <h1>Notitia! Travailler eficacement</h1>
        <p>L'application de prise de note</p>
        <Link to="/">
          <button>Ouvrir</button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil;