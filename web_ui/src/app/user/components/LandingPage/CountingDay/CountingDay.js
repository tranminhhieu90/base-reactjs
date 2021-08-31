import React from "react";
import "./CountingDay.scss";
import Gift from 'app/user/assets/images/PngItem_26427751.png'
function CountingDay() {
  return (
    <div className="counting-day">
      <div className="counting-day-clock">
        <div className="counting-day-clock-title">COUNTING DAYS OPENING</div>
        <div className="counting-day-clock-time">
          <div className="counting-day-clock-time-item">
            <div className="time-item-number">06</div>
            <div className="time-item-unit">Days</div>
          </div>
          <div className="clock-time-two-dot">:</div>
          <div className="counting-day-clock-time-item">
            <div className="time-item-number">10</div>
            <div className="time-item-unit">Hours</div>
          </div>
          <div className="clock-time-two-dot">:</div>
          <div className="counting-day-clock-time-item">
            <div className="time-item-number">00</div>
            <div className="time-item-unit">Mins</div>
          </div>
          <div className="clock-time-two-dot">:</div>
          <div className="counting-day-clock-time-item">
            <div className="time-item-number">30</div>
            <div className="time-item-unit">Seconds</div>
          </div>
        </div>
      </div>
      <div className="counting-day-gift">
        <img src={Gift} alt="" />
      </div>
    </div>
  );
}

export default CountingDay;
