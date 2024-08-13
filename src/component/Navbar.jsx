import React from 'react'
import './Navbar.css'
import logo from '../assets/react.svg'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <> 
 <nav>
    <img src={logo} alt="" />
    <div className="navlinks">
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/service'>SERVICE</NavLink>
      <NavLink to='/package'>PACKAGE</NavLink>
      <NavLink to='/pages'>PAGES</NavLink>
      <NavLink to='/contact'>CONTACT</NavLink>
       <button className='navbutton'>Register</button>
    </div>
 </nav>
 </>
    // <div>navbar</div>
  )
}

export default Navbar