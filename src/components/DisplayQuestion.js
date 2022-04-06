import React from "react";
import Card from "../UI/Card";
import "./DisplayQuestion.css";

const DisplayQuestion = (props) => {
  /*I used dangerouslySetInnerHTML to fix the quotes gibberish problem */

  /*Helper functions */

  // shuffle the answers
  const shuffledAnswers = [
    props.data.correct_answer,
    ...props.data.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  return (
    <div lassName="Questions">
      <h1 className="text-green-500">className</h1>
      <Card>
        <h2>current score: {props.score}</h2>
        <h3
          className="question-text"
          dangerouslySetInnerHTML={{
            __html: props.data.question,
          }}
        />
        <ul>
          {shuffledAnswers.map((answer) => {
            return (
              <li
                onClick={() => props.handler(answer)}
                dangerouslySetInnerHTML={{
                  __html: answer,
                }}
              ></li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

export default DisplayQuestion;
