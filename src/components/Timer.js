import React, { useState } from "react";

import "./Timer.css";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
