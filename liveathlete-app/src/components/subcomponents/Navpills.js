import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navpills = () => (
  <ul className="navButtons">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <NavLink to="/">Home</NavLink>
    </li>
    <li className={window.location.pathname === "/about" ? "active" : ""}>
      <NavLink to="/about">About</NavLink>
    </li>
    <li className={window.location.pathname === "/contact" ? "active" : ""}>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </ul>
);

export default Navpills;
