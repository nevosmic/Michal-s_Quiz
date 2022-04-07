import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./Timer.css";

const Timer = (props) => {
  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={props.resetKey}
          isPlaying
          duration={10}
          colors={"lightblue"}
          onComplete={() => {
            props.moveHandler();
            props.resetHandler();
          }}
        >
          {TimerHelper}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

const TimerHelper = ({ remainingTime }) => {
  /*
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }*/

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

export default Timer;
