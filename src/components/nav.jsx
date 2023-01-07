import React from 'react'
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <ul className="nav">
        <li><NavLink to="/home" className={(navInfo)=> navInfo.isActive ? `active`: ''}>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  )
}

export default Menu