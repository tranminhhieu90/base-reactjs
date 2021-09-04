import React from "react";
import Logo from "app/user/assets/images/logo.png";
const SubFooter = (props) => {
  const url = "https://nerman.com.vn/";
  return (
    <div className="sub-footer">
      <div className="sub-footer-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="sub-footer-menu">
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
          <li>Cửa Hàng</li>
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
    </div>
  );
};
export default SubFooter;
