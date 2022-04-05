import React, { useEffect, useState } from "react";
import "./Questions.css";

import DisplayQuestion from "../components/DisplayQuestion";

//TODO  shuffledAnswers
/*I used dangerouslySetInnerHTML to fix the quotes gibberish problem */

const questionsAPI = "https://opentdb.com/api.php?amount=100";

//const Button = ({answer}) => (<button>{questionsFromAPI[currentQuestion].correct_answer}</button>);

const Questions = () => {
  /*state variables */
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsFromAPI, setQuestionsFromAPI] = useState([]);

  /*shuffledAnswers 
  const shuffledAnswers = [
    questionsFromAPI[currentQuestion].correct_answer,
    ...questionsFromAPI[currentQuestion].incorrect_answers,
  ].sort(() => Math.random() - 0.5);*/

  /*Helper functions*/

  const fetchData = () => {
    return fetch(questionsAPI)
      .then((response) => response.json())
      .then((data) => setQuestionsFromAPI(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const answerHandler = (isCorrect) => {
    /* Correct answer : 
    -update score 
    -move to the next question*/
    console.log(isCorrect);
    if (isCorrect) {
      setCurrentScore((prevState) => {
        return prevState + 1;
      });
      setCurrentQuestion((prevState) => {
        return prevState + 1;
      });
    } else {
      /* Correct answer :*/
    }
  };

  /*rendering*/
  if (questionsFromAPI.length > 0) {
    return (
      <DisplayQuestion
        data={questionsFromAPI[currentQuestion]}
        handler={answerHandler}
        score={currentScore}
      ></DisplayQuestion>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Questions;
