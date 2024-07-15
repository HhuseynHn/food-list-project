/** @format */

import React from "react";
import NavList from "../../nav/nav-list";
import Logo from "../../reusable/logo/logo";
import "./header-style.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo">
            <Logo />
          </div>
          <div className="nav-list">
            <NavList />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
