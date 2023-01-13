import React, { useContext } from "react";
import { GameContext } from "./GameContext";


function Button({stateChanger}) {

    const handleClick = (event) => {
    event.preventDefault();
    let i = Math.ceil(Math.abs(Math.floor(Math.random() * window.innerWidth - 300))/150)*150;
    let j = Math.ceil(Math.abs(Math.floor(Math.random() * window.innerHeight - 300))/150)*150;
    if(j<=150){
      j = j+150
    }
    event.currentTarget.style.left = i + "px";
    event.currentTarget.style.top = j + "px";
    console.log(i,j)
    stateChanger(prevScore => prevScore+10)
  };


  return (
    <div>
      <button
        style={{
          left:
            Math.ceil(Math.abs(Math.floor(Math.random() * window.innerWidth - 300))/150)*150 + "px",
          top: Math.abs(
            Math.ceil(Math.abs(Math.floor(Math.random() * window.innerHeight - 300))/150)*150 + "px"
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
