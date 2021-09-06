import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../actions/userActions";

import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  if (!userInfo) {
    return null;
  } else {
    return (
      <nav className="nav">
        <p className="navTitle">Product Store API</p>
        <p className="logout">
          <NavLink to="/logout">
            <a onClick={logoutHandler}>{!userInfo ? "Login" : "Logout"}</a>
          </NavLink>
        </p>
      </nav>
    );
  }
};

export default Nav;
