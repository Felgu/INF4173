import React, { useState } from 'react'
import Logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
      <div className='logoleft' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='logo'/>
        <div className='hiddenLinks'>
          <Link to="/">Accueil</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/nous">Nous</Link>
          <Link to="/contact">Contact</Link>          
        </div>
      </div>
      <div className='ongletsdroite'>
        <Link to="/">Accueil</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/nous">Nous</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar;