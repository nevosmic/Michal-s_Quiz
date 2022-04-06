import React, { useEffect, useState } from "react";
import "./Questions.css";

import DisplayQuestion from "../components/DisplayQuestion";

const questionsAPI = "https://opentdb.com/api.php?amount=100";

//const Button = ({answer}) => (<button>{questionsFromAPI[currentQuestion].correct_answer}</button>);

const Questions = () => {
  /*state variables */
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestionIndx, setCurrentQuestionIndx] = useState(0);
  const [questionsFromAPI, setQuestionsFromAPI] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  //let newIndex = 0;

  /*Helper functions*/

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
    }

    if (newIndex >= 3) {
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
          <DisplayQuestion
            data={questionsFromAPI[currentQuestionIndx]}
            handler={answerHandler}
            score={currentScore}
          ></DisplayQuestion>
        )}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Questions;
