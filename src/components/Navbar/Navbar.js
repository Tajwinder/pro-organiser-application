import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
    <div className='Navbar'>
      <ul className='NavMenu'>
          <li className='menuItem'><NavLink to='/' exact>Home</NavLink> </li>
          <li className='menuItem'> <NavLink to='/createboard'>Create a board </NavLink></li>
      </ul>
    </div>
    )
}
export default Navbar;