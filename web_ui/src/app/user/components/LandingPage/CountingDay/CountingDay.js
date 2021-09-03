import React, { useEffect, useState } from "react";
import "./CountingDay.scss";
import Gift from "app/user/assets/images/PngItem_26427751.png";

function CountingDay() {
  const [timeLeft, setTimeLeft] = useState({
    day: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [showCountDays, setShowCountDays] = useState(true);
  const updateTimeLeft = () => {
    const endDay = new Date("10/15/2021 24:00:00");
    const currentTime = new Date();
    let secondsLeft = (endDay.getTime() - currentTime.getTime()) / 1000;
    let remainingDays = Math.floor(secondsLeft / 3600 / 24);
    let remainingHour = Math.floor(secondsLeft / 3600);
    let remainingMinutes = Math.floor(secondsLeft / 60);
    let remainingSecond = Math.floor(secondsLeft - remainingMinutes * 60);
    if (secondsLeft < 0) {
      setShowCountDays(false);
    }
    setTimeLeft({
      day: String(remainingDays).padStart(2, "0"),
      hours: String(remainingHour - remainingDays * 24).padStart(2, "0"),
      minutes: String(remainingMinutes - remainingHour * 60).padStart(2, "0"),
      seconds: String(remainingSecond).padStart(2, "0"),
    });
  };
  useEffect(() => {
    var timerID = setInterval(() => {
      updateTimeLeft();
    }, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  return (
    <>
      {showCountDays && (
        <div className="counting-day">
          <div className="counting-day-clock">
            <div style={{ textAlign: "center" }}>
              <div className="counting-day-clock-title">
                Chương trình còn lại
              </div>
              <div className="counting-day-clock-time">
                <div className="counting-day-clock-time-item">
                  <div className="time-item-number">{timeLeft.day}</div>
                  <div className="time-item-unit">Days</div>
                </div>
                <div className="clock-time-two-dot">:</div>
                <div className="counting-day-clock-time-item">
                  <div className="time-item-number">{timeLeft.hours}</div>
                  <div className="time-item-unit">Hours</div>
                </div>
                <div className="clock-time-two-dot">:</div>
                <div className="counting-day-clock-time-item">
                  <div className="time-item-number">{timeLeft.minutes}</div>
                  <div className="time-item-unit">Mins</div>
                </div>
                <div className="clock-time-two-dot">:</div>
                <div className="counting-day-clock-time-item">
                  <div className="time-item-number">{timeLeft.seconds}</div>
                  <div className="time-item-unit">Seconds</div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div className="counting-day-gift">
                <img src={Gift} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CountingDay;
