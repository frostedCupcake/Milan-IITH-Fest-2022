import * as React from "react";
import "../sass/main.css";
import logo from "../assets/logo/milan_logo2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="header__logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Milan </span>
          <span className="heading-primary--sub">
            annual techno-cultural sports General Championship of IITH
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
