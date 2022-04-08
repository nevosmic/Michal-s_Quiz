import React, { useState } from "react";
import "./Questions.css";
import Timer from "../components/Timer";
import Finish from "./Finish";
import DisplayQuestion from "../components/DisplayQuestion";

const Questions = (props) => {
  /*state variables */
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestionIndx, setCurrentQuestionIndx] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [key, setKey] = useState(0);
  //const [revealAnswers, setRevealAnswers] = useState(false);

  const answerHandler = (answer) => {
    /* Correct answer : 
    -update score 
    -move to the next question*/
    if (answer === props.questionsAPI[currentQuestionIndx].correct_answer) {
      setCurrentScore((prevState) => {
        return prevState + 1;
      });
    }
    moveToNext();
    //reset timer
    resetTimer();
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

  const newQuiz = () => {
    props.refresh();
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
        <Finish
          score={currentScore}
          numOfQuestions={props.questionsAPI.length}
          restartHandler={restartQuiz}
          newQuizHandler={newQuiz}
        ></Finish>
      ) : (
        <div>
          <div>
            <Timer
              resetKey={key}
              resetHandler={resetTimer}
              moveHandler={moveToNext}
            />

            <DisplayQuestion
              diff={props.difficulty}
              index={currentQuestionIndx}
              numOfQuestions={props.questionsAPI.length}
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
