import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Nav.css'
const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
