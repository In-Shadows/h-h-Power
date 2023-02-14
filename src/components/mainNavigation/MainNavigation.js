import React from "react";
import { NavLink } from "react-router-dom";

import "./mainNavigation.scss";
import Logo from "../../assets/logo.png";

const MainNavigation = () => {
  return (
    <header className="header container">
      <div className="header__logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list__item">
            <NavLink
              to="/"
              // className={({ isActive }) => (isActive ? "active" : undefined)}
              className="navigation__link"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__list__item">
            <NavLink to="/" className="navigation__link">
              About
            </NavLink>
          </li>
          <li className="navigation__list__item">
            <NavLink to="/" className="navigation__link">
              Projects
            </NavLink>
          </li>
          <li className="navigation__list__item">
            <NavLink to="/" className="navigation__link">
              Services
            </NavLink>
          </li>
          {/* <li className="navigation__list__item">
          <NavLink to="/">Contact Us</NavLink>
        </li> */}
        </ul>
      </nav>

      <button className="btn">Contact Us</button>
    </header>
  );
};

export default MainNavigation;
