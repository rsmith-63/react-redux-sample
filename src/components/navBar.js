import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css'

const NavBar = (props) => (
  <nav>
    <NavLink to='/home'>
      Home
    </NavLink>
    <NavLink to='/users'>
     Users
    </NavLink>
  </nav>
);

export default NavBar;