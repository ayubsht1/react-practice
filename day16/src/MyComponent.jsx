// useState() = Renders the component when the state changes.
// useRef() = "use Reference" Does not cause re-render when its value changes.
// when you want a component to "remember"  some information,
// but you don't want that information to trigger new renders.

// 1. Accessing/Interactiong with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

import React, { useEffect, useState, useRef} from "react";

function MyComponent() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);



    useEffect(()=> {
        console.log("Component rendered");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "green";
    }

    return(<div><button onClick={handleClick1}>
        Click me 1!
    </button>
    <input ref={inputRef1}/>
    <button onClick={handleClick2}>
        Click me 2!
    </button>
    <input ref={inputRef2}/>
    <button onClick={handleClick3}>
        Click me 3!
    </button>
    <input ref={inputRef3}/>
    </div>);
}
export default MyComponent;