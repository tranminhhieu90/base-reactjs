import React from "react";
import Logo from "app/user/assets/images/logo.png";
const SubFooter = (props) => {
  return (
    <div className="sub-footer">
      <div className="sub-footer-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="sub-footer-menu">
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
export default SubFooter;
