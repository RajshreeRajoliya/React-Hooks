import React from 'react'
import { useState } from 'react'
function Counter() {
    const[state , setState] = useState(0)
    const handleIncrement=()=>{
    setState(state + 1)
    }
    const handleDecrement=()=>{
setState(state - 1)
if(state <= 0){
    setState(state)
}
    }

    const handleReset=()=>{
   setState(0)
    }
  return (
    <div>
      <h1>Counter {state}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter

