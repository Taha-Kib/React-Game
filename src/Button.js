import React, { useState } from "react";


function Button({stateChanger}) {
    const handleClick = (event) => {
    event.preventDefault();
    const i = Math.abs(Math.floor(Math.random() * window.innerWidth - 300));
    const j = Math.abs(Math.floor(Math.random() * window.innerHeight - 300));
    event.currentTarget.style.left = i + "px";
    event.currentTarget.style.top = j + "px";
    stateChanger(prevScore => prevScore+1)
  };


  return (
    <div>
      <button
        style={{
          left:
            Math.abs(Math.floor(Math.random() * window.innerWidth - 300)) + "px",
          top: Math.abs(
            Math.floor(Math.random() * window.innerHeight - 300) + "px"
          ),
        }}
        className="RoundBtn"
        onClick={handleClick}
      >
        Hit Me!
      </button>
    </div>
  );
}

export default React.memo(Button);
