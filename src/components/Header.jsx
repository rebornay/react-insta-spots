import React from "react";

//THIS IS HEADER SECTION
import head from "./Header.module.css";
import logo from "../assets/icons/Spots-Logo.svg";
const Header = () => {
  return (
    <header className={head.logo}>
      <img className={head.logoImg} src={logo} alt="headerLogo" />
    </header>
  );
};

export default Header;
