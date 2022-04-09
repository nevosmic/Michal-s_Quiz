import React from "react";
import Card from "../UI/Card";
import "./DisplayQuestion.css";
import ProgressBar from "./Progress";

const DisplayQuestion = (props) => {
  /*I used dangerouslySetInnerHTML to fix the quotes gibberish problem */

  /*Helper functions */

  // shuffles the answers

  const newAnswers = [
    props.data.correct_answer,
    props.data.incorrect_answers[0],
  ].sort(() => Math.random() - 0.5);

  const shuffledAnswers = [
    props.data.correct_answer,
    ...props.data.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  const answersHintHandler = () => {
    props.hiddenHandler(true);
  };

  let progress = Math.round((props.score / props.numOfQuestions) * 100);

  return (
    <div>
      <h3 class="diff">Difficulty: {props.diff}</h3>
      <div classname="Questions">
        <Card>
          <ProgressBar bgcolor="#99ccff" progress={progress} height={30} />
          <h2>
            Questions {props.index}/{props.numOfQuestions}
          </h2>

          <h2
            className="question-text"
            dangerouslySetInnerHTML={{
              __html: props.data.question,
            }}
          />
          {shuffledAnswers.length > 2 ? (
            <button onClick={answersHintHandler}>50/50</button>
          ) : (
            <p></p>
          )}

          <div hidden={!props.hidden}>
            <ul>
              {newAnswers.map((answer) => {
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
          </div>
          <div hidden={props.hidden}>
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
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DisplayQuestion;
