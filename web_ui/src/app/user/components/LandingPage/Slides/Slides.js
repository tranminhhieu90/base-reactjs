import Header from "app/user/share/header";
import React, { useState } from "react";
import Spin from "app/user/assets/images/spin_banner.png";
import "./Slides.scss";
function Slides(props) {
  const [isOpenSpinWheel, setIsOpenSpinWheel] = useState(null);
  const onSpinWheel = () => {
    const tongue = !isOpenSpinWheel;
    setIsOpenSpinWheel(tongue);
    props.spinWheel(tongue);
  };
  return (
    <div className="slides">
      <div className="slides-header">
        <Header />
      </div>
      <div className="slides-content">
        <div className="slides-content-desc">
          <div>
            <p>Ngày hội đẹp trai</p> <p>Rinh Iphone cực đỉnh</p>
            <button
              type="button"
              className="btn btn-danger btn-lg"
              onClick={() => onSpinWheel()}
            >
              <p>Quay Ngay</p>
            </button>
          </div>
          <div className="slides-content-spin">
            <img src={Spin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slides;
