import React from "react";
import win_img from "../UI/win/win.jpg";
import lose_img from "../UI/lose/lose.jpg";
import Card from "../UI/Card";

const Finish = (props) => {
  const score = Math.round((props.score / props.numOfQuestions) * 100);
  let win = false;

  if (score > 50) {
    win = true;
  }

  return (
    <div classname="Finish">
      <Card>
        <h1>You got :{score}% right </h1>

        <h1>
          {props.score} out of {props.numOfQuestions} questions
        </h1>

        <div classname="container">
          <div classname="box-1">
            <button onClick={props.restartHandler}>Try Again</button>
            <br></br>
          </div>
          <div classname="box-2">
            <button onClick={props.newQuizHandler}>New Quiz</button>
          </div>
        </div>
        <br></br>
        {win ? (
          <img width="200" src={win_img} alt="win" />
        ) : (
          <img width="200" src={lose_img} alt="lose" />
        )}
      </Card>
    </div>
  );
};

export default Finish;
