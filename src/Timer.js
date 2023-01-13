import React, { useEffect, useContext } from "react";
import { GameContext, GAME_STATES } from "./GameContext";

function Timer() {
  const { setGameStart, score, setScore, remainingTime, setRemainingTime } =
    useContext(GameContext);

  function restartGame() {
    setRemainingTime(60);
    let currMaxScore = JSON.parse(localStorage.getItem("maxScore"));
    if (score > JSON.parse(currMaxScore)) {
      localStorage.setItem("maxScore", JSON.stringify(score));
    }
    setGameStart(GAME_STATES.FINISHED);
    setScore(0);
  }

  useEffect(() => {
    if (remainingTime > 0) {
      setTimeout(
        () => setRemainingTime((prevCounter) => prevCounter - 1),
        1000
      );
    } else {
      restartGame();
    }
  }, [setRemainingTime, remainingTime]);

  return <div className="Timer">{remainingTime}</div>;
}

export default Timer;
