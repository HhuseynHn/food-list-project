/** @format */

import React, { useState } from "react";
import NavItem from "./nav-item";
import navData from "../../constant/nav-data";
import { clickEvnt } from "../reusable/clickEvnt/clickEvent";

//
const NavList = () => {
  return (
    <>
      <nav>
        <ul>
          {navData.map((nav) => (
            <li key={nav.id}>
              <NavItem
                navTitle={nav.title}
                onClick={nav.title == "FOOD ORDERING" ? clickEvnt : undefined}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavList;
