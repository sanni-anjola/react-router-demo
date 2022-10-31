import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "./Nav.css";
const Nav = () => {
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <ul>
      <li>
        <NavLink style={navStyle} to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink style={navStyle} to="/about">About</NavLink>
      </li>
      <li>
      <NavLink style={navStyle} to="/register">Sign up</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
