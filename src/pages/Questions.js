import React, { useEffect, useState } from "react";
import "./Questions.css";
import Timer from "../components/Timer";

import DisplayQuestion from "../components/DisplayQuestion";

const questionsAPI = "https://opentdb.com/api.php?amount=100";

const Questions = () => {
  /*state variables */
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestionIndx, setCurrentQuestionIndx] = useState(0);
  const [questionsFromAPI, setQuestionsFromAPI] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [key, setKey] = useState(0);
  //const [revealAnswers, setRevealAnswers] = useState(false);

  const fetchData = () => {
    return fetch(questionsAPI)
      .then((response) => response.json())
      .then((data) => setQuestionsFromAPI(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const answerHandler = (answer) => {
    const newIndex = currentQuestionIndx + 1;
    /* Correct answer : 
    -update score 
    -move to the next question*/
    if (answer === questionsFromAPI[currentQuestionIndx].correct_answer) {
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

    if (newIndex >= 3) {
      setGameOver(true);
    }
  };

  const resetTimer = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const moveToNext = () => {
    const newIndex2 = currentQuestionIndx + 1;
    setCurrentQuestionIndx(currentQuestionIndx + 1);
    if (newIndex2 >= 3) {
      setGameOver(true);
    }
  };

  /*rendering*/
  if (questionsFromAPI.length > 0) {
    return (
      <div>
        {gameOver ? (
          <h1>your score is {currentScore}</h1>
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
              <h2>Questions</h2>

              <DisplayQuestion
                data={questionsFromAPI[currentQuestionIndx]}
                handler={answerHandler}
                score={currentScore}
              ></DisplayQuestion>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Questions;
