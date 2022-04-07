import React, { useState } from "react";
import "./Questions.css";
import Timer from "../components/Timer";
import Finish from "./Finish";

import DisplayQuestion from "../components/DisplayQuestion";

//const questionsAPI = "https://opentdb.com/api.php?amount=100";

const Questions = (props) => {
  /*state variables */
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestionIndx, setCurrentQuestionIndx] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [key, setKey] = useState(0);
  //const [revealAnswers, setRevealAnswers] = useState(false);

  const answerHandler = (answer) => {
    const newIndex = currentQuestionIndx + 1;
    /* Correct answer : 
    -update score 
    -move to the next question*/
    if (answer === props.questionsAPI[currentQuestionIndx].correct_answer) {
      setCurrentScore((prevState) => {
        return prevState + 1;
      });
      setCurrentQuestionIndx(currentQuestionIndx + 1);
    } else {
      /* Incorrect answer :*/
      console.log("Incorrect");
      setCurrentQuestionIndx(currentQuestionIndx + 1);
    }
    //reset timer
    setKey((prevKey) => prevKey + 1);

    if (newIndex >= props.questionsAPI.length) {
      setGameOver(true);
    }
  };

  const resetTimer = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const moveToNext = () => {
    const newIndex2 = currentQuestionIndx + 1;
    setCurrentQuestionIndx(currentQuestionIndx + 1);
    if (newIndex2 >= props.questionsAPI.length) {
      setGameOver(true);
    }
  };

  const restartQuiz = () => {
    setCurrentScore(0);
    setCurrentQuestionIndx(0);
    setGameOver(false);
  };

  /*rendering*/

  return (
    <div>
      {gameOver ? (
        <Finish score={currentScore} handler={restartQuiz}></Finish>
      ) : (
        <div>
          <div>
            <Timer
              resetKey={key}
              resetHandler={resetTimer}
              moveHandler={moveToNext}
            />
          </div>
          <div className="Questions">
            <h2>Difficulty: {props.difficulty} </h2>
            <DisplayQuestion
              data={props.questionsAPI[currentQuestionIndx]}
              handler={answerHandler}
              score={currentScore}
            ></DisplayQuestion>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
