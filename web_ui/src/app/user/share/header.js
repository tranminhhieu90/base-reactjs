import React from "react";
import Logo from "app/user/assets/images/logo.png";
const Header = (props) => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="header-menu">
        <ul>
          <li>Home</li>
          <li>Lucky Wheel</li>
          <li>Tutorial</li>
          <li>FAQ</li>
          <li>News</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
