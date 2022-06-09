/* eslint-disable */
import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logga.jpg'
import BurgerMenu from './BurgerMenu';
import "../components/Navbar.css"

const Navbar = (props) => {

  const menuItems = [
    { to: "/", displayName: "Hem"},
    { to: "/om-oss", displayName: "Om oss"},
    { to: "/konsumenttjanster", displayName: "Konsumenttjänster"},
    { to: "/partners", displayName: "Partners"},
    { to: "/referenser", displayName: "Referenser"},
    { to: "/kontakt", displayName: "Kontakt"},
  ]

  return ( 
    <div className="navbar">
      <div className='logo-container'>
      <img src={logo} alt="Hallstaviks VVS" width="200px" height="auto" />
      </div>
      <div className='link-wrapper'>
        {( 
          menuItems.map((item, index) => (
            <NavLink key={index} to={item.to} exact="true" className="navbar-links">
              {item.displayName}
            </NavLink>
          ))
        )}
      </div>
      <BurgerMenu items={menuItems} />
    </div>
  )
}

export default Navbar