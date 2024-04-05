import * as React from "react";
import "../sass/main.css";

const Navbar = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="nav-toggle"
      ></input>
      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="/schedule" className="navigation__link">
              Schedule
            </a>
          </li>
          <li className="navigation__item">
            <a href="/events" className="navigation__link">
              Events
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
