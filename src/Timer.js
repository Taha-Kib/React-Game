import React, { useEffect, useState } from 'react'


function Timer() {
    const [counter, setCounter] = useState(60)

    useEffect(()=>{
        if(counter > 0){
            setTimeout(()=>setCounter(prevCounter => prevCounter-1),1000)
        }
    },[counter])

  return (
    <div>Timer: {counter}</div>
  )
}

export default Timer