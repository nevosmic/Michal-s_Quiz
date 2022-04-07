import React from "react";

/* 
  Show final score
  Option to restart quiz:
      -set score to 0
      -go back to first question
*/
const Finish = (props) => {
  return (
    <div classname="Finish">
      <h1>Your final score is: {props.score}</h1>
      <br></br>
      <button onClick={props.handler}> Try Again </button>
    </div>
  );
};

export default Finish;
