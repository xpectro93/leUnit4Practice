import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = _ => {
  return (
    <nav>
      <ul>
        <li id={'logo'}>DonJonTube</li>
        <li><NavLink exact to='/' activeClassName={"selected"} >Home</NavLink></li>
        <li><NavLink to='/about' activeClassName={"selected"} >About</NavLink></li>
      </ul>
    </nav>
  )
};

export default Navbar;