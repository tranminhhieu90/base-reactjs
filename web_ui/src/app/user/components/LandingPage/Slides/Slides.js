import Header from "app/user/share/header";
import React from "react";
import "./Slides.scss";
function Slides(props) {
  return (
    <div className="slides">
      <div className="slides-header">
        <Header />
      </div>
      <div className="slides-content">
        <div className="slides-content-desc">
          <p>Ngày hội đẹp trai</p> <p>Rinh Iphone cực đỉnh</p>
          <button
            type="button"
            className="btn btn-danger btn-lg"
            // onClick={() => setIsOpenModal(true)}
          >
            Quay Ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slides;
