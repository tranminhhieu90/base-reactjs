import React from "react";
import CountingDay from "./CountingDay/CountingDay";
import ListWinner from "./ListWinner/ListWinner";
// import HowItWork from "./HowItWork/HowItWork";
import Questions from "./Questions/Questions";
// import News from "./News/News";
import Slides from "./Slides/Slides";
import WheelLucky from "./WheelLucky/main";

function LandingPage(props) {
  return (
    <div className="landing-page">
      <Slides />
      <WheelLucky />
      <CountingDay />
      <ListWinner />
      {/* <HowItWork /> */}
      <Questions />
      {/* <News /> */}
    </div>
  );
}

export default LandingPage;
