/** @format */

import React from "react";

const NavItem = ({ navTitle, onClick }) => {
  return (
    <>
      <h4 onClick={onClick}>{navTitle}</h4>
    </>
  );
};
export default NavItem;
