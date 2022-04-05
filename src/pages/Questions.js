import React, { useEffect, useState } from "react";
import "./Questions.css";
import Card from "../UI/Card";
//TODO  shuffledAnswers
/*I used dangerouslySetInnerHTML to fix the quotes gibberish problem */

const questionsAPI = "https://opentdb.com/api.php?amount=100";

//const Button = (answer) =>{}

const Questions = () => {
  /*state variables */
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsFromAPI, setQuestionsFromAPI] = useState([]);

  /*Helper functions*/

  const fetchData = () => {
    return fetch(questionsAPI)
      .then((response) => response.json())
      .then((data) => setQuestionsFromAPI(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = (isCorrect) => {
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
    }
  };

  /*rendering*/
  if (questionsFromAPI.length > 0) {
    return (
      <div className="Questions">
        <h2>Questions</h2>

        <Card>
          <h2>current score: {currentScore}</h2>
          <h3
            className="question-text"
            dangerouslySetInnerHTML={{
              __html: questionsFromAPI[currentQuestion].question,
            }}
          />
          <ul>
            <li onClick={() => clickHandler(true)}>
              {questionsFromAPI[currentQuestion].correct_answer}
            </li>
            <li onClick={() => clickHandler(false)}>
              {questionsFromAPI[currentQuestion].incorrect_answers[0]}
            </li>
            <li onClick={() => clickHandler(false)}>
              {questionsFromAPI[currentQuestion].incorrect_answers[1]}
            </li>
            <li onClick={() => clickHandler(false)}>
              {questionsFromAPI[currentQuestion].incorrect_answers[2]}
            </li>
          </ul>
        </Card>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Questions;
