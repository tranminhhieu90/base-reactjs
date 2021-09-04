import React, { useState } from "react";
import Logo from "app/user/assets/images/logo-white.png";
const Header = (props) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const url = "https://nerman.com.vn/";

  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="header-menu">
        <ul>
          <li
            onClick={() => {
              window.open(url, "_blank").focus();
            }}
          >
            Trang Chủ
          </li>
          <li
            onClick={() => {
              const spinWheelElement = document.getElementById("spin-wheel");
              if (spinWheelElement) {
                spinWheelElement.scrollIntoView();
              }
            }}
          >
            Vòng Quay
          </li>
          <li
            onClick={() => {
              const questionsElement = document.getElementById("questions");
              if (questionsElement) {
                questionsElement.scrollIntoView();
              }
            }}
          >
            FAQ
          </li>
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
              <li
                onClick={() => {
                  window.open(url, "_blank").focus();
                }}
              >
                Trang Chủ
              </li>
              <li
                onClick={() => {
                  const spinWheelElement =
                    document.getElementById("spin-wheel");
                  if (spinWheelElement) {
                    spinWheelElement.scrollIntoView();
                  }
                  setShowMenuMobile(false);
                }}
              >
                Vòng Quay
              </li>
              <li
                onClick={() => {
                  const questionsElement = document.getElementById("questions");
                  if (questionsElement) {
                    questionsElement.scrollIntoView();
                  }
                  setShowMenuMobile(false);
                }}
              >
                FAQ
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
