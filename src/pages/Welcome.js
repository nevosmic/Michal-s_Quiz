import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>Welcome!123</h2>

      <p>Category</p>
      <p>difficultly</p>
      <p>type</p>
      <Link to="/q"> START QUIZ</Link>
    </div>
  );
};

export default Welcome;
