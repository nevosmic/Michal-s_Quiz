import React, { useEffect, useState } from "react";

import Questions from "./Questions";
import Card from "../UI/Card";

const Welcome = () => {
  const questionsAPI = "https://opentdb.com/api.php?amount=100";
  const [questionsFromAPI, setQuestionsFromAPI] = useState([]);
  const [difficultyValue, setDifficulty] = useState("");
  const [filteredQ, setFilteredQ] = useState([]);
  const [isHidden, hideSettings] = useState(false);

  const DifficultyChangeHandler = (event) => {
    setDifficulty(event.target.value);
    hideSettings(true);
  };
  /*Fetch questions*/
  const fetchData = () => {
    return fetch(questionsAPI)
      .then((response) => response.json())
      .then((data) => setQuestionsFromAPI(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  /*Filter questions -> I could filter by category but it's a dynamic data */
  useEffect(() => {
    setFilteredQ(
      questionsFromAPI.filter((q) => q.difficulty === difficultyValue)
    );
  }, [questionsFromAPI, difficultyValue]);

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <h1 classname="Questions">Michal's Quiz</h1>
      <hr></hr>
      <div hidden={isHidden} classname="welcome">
        <Card>
          <br></br>
          <p>Up for a challenge? </p>
          <p>For each question you have 15 seconds. </p>
          <p>Choose a difficulty level and Let's go ! </p>
          <br></br>
          <select onChange={DifficultyChangeHandler}>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
            <option selected value="">
              Difficulty
            </option>
          </select>
          <div id="filler">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </Card>
      </div>
      {filteredQ.length > 0 ? (
        <div>
          <Questions
            difficulty={difficultyValue}
            questionsAPI={filteredQ}
            refresh={refreshPage}
          ></Questions>
        </div>
      ) : (
        <br></br>
      )}
    </div>
  );
};

export default Welcome;
