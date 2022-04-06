import React from "react";
import Card from "../UI/Card";
import "./DisplayQuestion.css";

const DisplayQuestion = (props) => {
  /*I used dangerouslySetInnerHTML to fix the quotes gibberish problem */

  // shuffle the answers
  const shuffledAnswers = [
    props.data.correct_answer,
    ...props.data.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

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
            onClick={() => props.handler(shuffledAnswers[0])}
            dangerouslySetInnerHTML={{
              __html: shuffledAnswers[0],
            }}
          ></li>
          <li
            onClick={() => props.handler(shuffledAnswers[1])}
            dangerouslySetInnerHTML={{
              __html: shuffledAnswers[1],
            }}
          ></li>
          <li
            onClick={() => props.handler(shuffledAnswers[2])}
            dangerouslySetInnerHTML={{
              __html: shuffledAnswers[2],
            }}
          ></li>
          <li
            onClick={() => props.handler(shuffledAnswers[3])}
            dangerouslySetInnerHTML={{
              __html: shuffledAnswers[3],
            }}
          ></li>
        </ul>
      </Card>
    </div>
  );
};

export default DisplayQuestion;
