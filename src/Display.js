import React, { useContext, useEffect } from "react";
import Button from "./Button";
import { GameContext, GAME_STATES } from "./GameContext";
import Timer from "./Timer";

function Display() {
  let buttons = ["Button 1", "Button 2", "Button 3"];
  const {
    gameStart,
    setGameStart,
    score,
    setScore,
    showLoading,
    setShowLoading,
    totalHits,
    setTotalHits,
  } = useContext(GameContext);

  function startGame() {
    setGameStart(GAME_STATES.STARTED);
    setShowLoading(true);
    let currMaxScore = localStorage.getItem("maxScore");
    if (currMaxScore === null) {
      localStorage.setItem("maxScore", JSON.stringify("0"));
    }
  }

  useEffect(() => {
    if (gameStart === GAME_STATES.STARTED) {
      setTimeout(() => {
        setShowLoading(false);
      }, 3000);
    }
  }, [showLoading]);

  return (
    <div>
      <p className="Score">Score: {score}</p>
      <p>Highest Score: {JSON.parse(localStorage.getItem("maxScore"))}</p>
      {gameStart !== "STARTED" ? (
        <button className="StartBtn" onClick={startGame}>
          Start Game
        </button>
      ) : (
        <div>
          {showLoading === true ? (
            <div className="ring">
              Loading
              <span></span>
            </div>
          ) : (
            <div>
              <Timer />
              {buttons.map((button, index) => {
                return <Button stateChanger={setScore} key={index} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Display;
