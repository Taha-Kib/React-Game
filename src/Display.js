import React, { useState } from "react";
import Button from "./Button";
import Timer from "./Timer";

function Display() {
  let buttons = ["Button 1", "Button 2", "Button 3"];
  const [score, setScore] = useState(0);
  return (
    <div>
      <Timer/>
      <p className="Score">Score: {score}</p>
      {buttons.map((button, index) => {
        return <Button stateChanger = {setScore} key={index} />;
      })}
    </div>
  );
}

export default Display;
