import React, { useEffect, useState } from "react";
import "./Questions.css";

/*const questionss = [
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In a standard game of Monopoly, what colour are the two cheapest properties?",
    correct_answer: "Brown",
    incorrect_answers: ["Green", "Yellow", "Blue"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question:
      "What does the letter &#039;S&#039; stand for in &#039;NASA&#039;?",
    correct_answer: "Space",
    incorrect_answers: ["Science", "Society", "Star"],
  },
];*/

const questionsAPI = "https://opentdb.com/api.php?amount=100";

//const shuffledAnswers =

const Questions = () => {
  /*const variables */
  const [currentScore, setCurrentScore] = useState(0);

  //const [currentQuestion, setCurrentQuestion] = useState();
  const [questionsFromAPI, setQuestionsFromAPI] = useState([]);

  const fetchData = () => {
    return fetch(questionsAPI)
      .then((response) => response.json())
      .then((data) => setQuestionsFromAPI(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  /*Helper functions*/
  const clickHandler = (isCorrect) => {
    console.log(isCorrect);
    /*update score if correct*/
    if (isCorrect) {
      setCurrentScore((prevState) => {
        return prevState + 1;
      });
    }
  };
  if (questionsFromAPI.length > 0) {
    return (
      <div className="Questions">
        <h2>Questions</h2>

        <div className="question-card">
          <h2>current score: {currentScore}</h2>
          <h3 className="question-text">{questionsFromAPI[0].question}</h3>
          <ul>
            <li onClick={() => clickHandler(true)}>
              {questionsFromAPI[0].correct_answer}
            </li>
            <li onClick={() => clickHandler(false)}>
              {questionsFromAPI[0].incorrect_answers[0]}
            </li>
            <li onClick={() => clickHandler(false)}>
              {questionsFromAPI[0].incorrect_answers[1]}
            </li>
            <li onClick={() => clickHandler(false)}>
              {questionsFromAPI[0].incorrect_answers[2]}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Questions;
