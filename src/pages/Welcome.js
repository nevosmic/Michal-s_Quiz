import React, { useEffect, useState } from "react";
import Questions from "./Questions";

const Welcome = () => {
  /*Fetch questions*/

  const questionsAPI = "https://opentdb.com/api.php?amount=100";
  const [questionsFromAPI, setQuestionsFromAPI] = useState([]);
  const [difficultyValue, setDifficulty] = useState("");
  const [filteredQ, setFilteredQ] = useState([]);
  const [isHidden, hideSettings] = useState(false);

  const DifficultyChangeHandler = (event) => {
    setDifficulty(event.target.value);
    hideSettings(true);
  };

  const fetchData = () => {
    return fetch(questionsAPI)
      .then((response) => response.json())
      .then((data) => setQuestionsFromAPI(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredQ(
      questionsFromAPI.filter((q) => q.difficulty === difficultyValue)
    );
  }, [questionsFromAPI, difficultyValue]);

  return (
    <div>
      <h1>Michal's Quiz</h1>

      <div hidden={isHidden} classname="app">
        <select onChange={DifficultyChangeHandler}>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
          <option selected value="">
            Difficulty
          </option>
        </select>
      </div>
      {filteredQ.length > 0 ? (
        <div>
          <Questions
            difficulty={difficultyValue}
            questionsAPI={filteredQ}
          ></Questions>
        </div>
      ) : (
        <br></br>
      )}
    </div>
  );
};

export default Welcome;
