import React, { useState } from "react";
import Logo from "app/user/assets/images/logo-white.png";
const Header = (props) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="header-menu">
        <ul>
          <li>Trang Chủ</li>
          <li>Vòng Quay</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="header-menu-icon">
        <div
          onClick={() => {
            setShowMenuMobile(!showMenuMobile);
          }}
        >
          <div className={`bar1 ${showMenuMobile ? "active" : ""}`}></div>
          <div className={`bar2 ${showMenuMobile ? "active" : ""}`}></div>
          <div className={`bar3 ${showMenuMobile ? "active" : ""}`}></div>
        </div>
        {showMenuMobile && (
          <div className="menu-mobile">
            <ul>
              <li>Trang Chủ</li>
              <li>Vòng Quay</li>
              <li>FAQ</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
