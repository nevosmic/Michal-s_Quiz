import React from "react";
import Card from "../UI/Card";
import "./DisplayQuestion.css";

const DisplayQuestion = (props) => {
  return (
    <div className="Questions">
      <h2>Questions</h2>

      <Card>
        <h2>current score: {props.score}</h2>
        <h3
          className="question-text"
          dangerouslySetInnerHTML={{
            __html: props.data.question,
          }}
        />
        <ul>
          <li
            onClick={() => props.handler(true)}
            dangerouslySetInnerHTML={{
              __html: props.data.correct_answer,
            }}
          ></li>
          <li
            onClick={() => props.handler(false)}
            dangerouslySetInnerHTML={{
              __html: props.data.incorrect_answers[0],
            }}
          ></li>
          <li
            onClick={() => props.handler(false)}
            dangerouslySetInnerHTML={{
              __html: props.data.incorrect_answers[1],
            }}
          ></li>
          <li
            onClick={() => props.handler(false)}
            dangerouslySetInnerHTML={{
              __html: props.data.incorrect_answers[2],
            }}
          ></li>
        </ul>
      </Card>
    </div>
  );
};

export default DisplayQuestion;
