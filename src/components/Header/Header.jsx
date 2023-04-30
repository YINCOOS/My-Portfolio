import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../Assets/me1.jpg"
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ogunsemoyin Adeyinka David</h1>
        <h5 className="text-light">MERN STACK DEVELOPER</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Adeyinka" />
        </div>

        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
