import React, {useState } from 'react'

function Display() {
// const [targets, setTargets] = useState();
 const [score, setScore] = useState(0);

const handleClick = event =>{
    event.preventDefault()
    const i =Math.abs(Math.floor(Math.random()*window.innerWidth-50))
    const j = Math.abs(Math.floor(Math.random()*window.innerHeight-50));
    event.currentTarget.style.left = i+"px"
    event.currentTarget.style.top = j+"px"
    setScore ((prevScore)=>prevScore+1)
}


  return (
    <div>
        <p className='Score'>Score: {score}</p>
        <button key = "1" style={{left: Math.abs(Math.floor(Math.random()*window.innerWidth-50))+"px", top: Math.abs(Math.floor(Math.random()*window.innerHeight-50) +"px")}} onClick={handleClick} className = "RoundBtn">Start Button</button>
        <button key = "2" style={{left: Math.abs(Math.floor(Math.random()*window.innerWidth-50))+"px", top: Math.abs(Math.floor(Math.random()*window.innerHeight-50) +"px")}} onClick={handleClick} className = "RoundBtn">Start Button</button>
        <button key = "3" style={{left: Math.abs(Math.floor(Math.random()*window.innerWidth-50))+"px", top: Math.abs(Math.floor(Math.random()*window.innerHeight-50) +"px")}} onClick={handleClick} className = "RoundBtn">Start Button</button>
    </div>
  )
}

export default Display