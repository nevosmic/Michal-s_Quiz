import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Questions from "./pages/Questions";
import Finish from "./pages/Finish";

const App = () => {
  return (
    <div>
      <Route path="/" exact>
        <div className="header">
          <h1>Michal's Quiz </h1>

          <Welcome />
        </div>
      </Route>
      <Route path="/q">
        <Questions />
      </Route>
      <Route path="/F">
        <Finish />
      </Route>
    </div>
  );
};
export default App;
