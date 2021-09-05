import React from "react";

import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <p className="navTitle">Product Store API</p>
      <p className="logout">
        <NavLink to="/logout">
          <a>Logout</a>
        </NavLink>
      </p>
    </nav>
  );
};

export default Nav;
