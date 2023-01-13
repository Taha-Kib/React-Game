import React, { createContext, useState } from "react";

const GameContext = createContext();

const GAME_STATES = {
  NOT_STARTED: "NOT_STARTED",
  STARTED: "STARTED",
  FINISHED: "FINISHED",
};

const GameContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(60);
  const [gameStart, setGameStart] = useState(GAME_STATES.NOT_STARTED);
  const [showLoading, setShowLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        remainingTime,
        setRemainingTime,
        gameStart,
        setGameStart,
        showLoading,
        setShowLoading,
        totalHits,
        setTotalHits,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider, GAME_STATES };
