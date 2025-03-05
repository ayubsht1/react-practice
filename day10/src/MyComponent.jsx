// updater function = A function passed as an argument to setState() usually
// ex. SetYear(arrow function)
//Allow for safe updates based on the previous state 
// Used with multiple state updates and asynchronous function
// Good practice to use updater functions

import React, {useState} from "react";

function MyComponent(){
    const [count, setCount] = useState(0);
    //setCount(c+1)
    // uses the current state to calculate the next state.
    // set functions do not trigger an update.
    // react batches together state updates for performance reasons.
    // NEXT state becomes the CURRENT state after an update.

    function increment(){
       //update with updater function ie: when naming the variable just put first letter of the stateful variable or Prev<variable_name>
       //takes the curent state to calculate NEXT state.
       //React puts your updater function in a queue (waiting in line)
       //During the next render, it will call them in the same order.
        setCount(c=> c + 1);
        setCount(c=> c + 1);
        setCount(c=> c + 1);
    }
    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    function reset(){
        setCount(0);
    }
    return(<div className="counter-container">
        <p className="count-display">{count}</p>
        <button className='counter-button' onClick={increment}>+</button>
        <button className='counter-button' onClick={reset}>reset</button>
        <button className='counter-button' onClick={decrement}>-</button>


    </div>)

}

export default MyComponent

