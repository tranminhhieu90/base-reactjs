import React from "react";
import "./HowItWork.scss";
import ItWorkImage from "app/user/assets/images/image3.png";
function HowItWork(props) {
  return (
    <div className="how-it-work">
      <div className="how-it-work-title">
        <div>How It Work?</div>
      </div>
      <div className="how-it-work-video">
        <div>
          <img src={ItWorkImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
