import React from "react";
import Card from "../UI/Card";
import "./DisplayQuestion.css";
import ProgressBar from "./Progress";

const DisplayQuestion = (props) => {
  /*I used dangerouslySetInnerHTML to fix the quotes gibberish problem */

  /*Helper functions */

  // shuffles the answers
  const shuffledAnswers = [
    props.data.correct_answer,
    ...props.data.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  let progress = Math.round((props.score / props.numOfQuestions) * 100);

  return (
    <div>
      <h3>Difficulty: {props.diff}</h3>
      <div classname="Questions">
        <Card>
          <h2>
            Questions {props.index}/{props.numOfQuestions}
          </h2>

          <ProgressBar bgcolor="#99ccff" progress={progress} height={30} />
          <h2
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
    </div>
  );
};

export default DisplayQuestion;
