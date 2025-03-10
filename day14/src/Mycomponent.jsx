//useEffect() = React Hook that tells React Do Some code when (pick one):
// this component re-renders
// this component mounts
// the state of a value

//useEffect(function, [dependencies])

// 1.useEffect(() => {}) //runs after every render
// 2.useEffect(() => {}, []) //runs only on mount
// 3.useEffect(() => {}, [value]) //runs on mount + when value changes

// USES
// 1. Event listeners
// 2. Dom manipulation
// 3. Subscriptions (real-time updates)
// 4. Fetching data from an API
// 5. Clean up when a component unmounts

import React,{useState, useEffect} from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
        return () => {
            //cleanup code
        }
    },[count, color]);

    function addCount() {
        setCount(c => c + 1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c=> c === "green" ? "red" : "green");
    }

    return (<>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button><br/>
    <button onClick={changeColor}> Change Color</button>
    </>);
}
export default MyComponent;