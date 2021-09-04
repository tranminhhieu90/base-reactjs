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
          <li>Trang Chủ</li>
          <li>Vòng Quay</li>
          <li>Cửa Hàng</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
};
export default SubFooter;
