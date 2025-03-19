import { useReducer } from "react";

//use reducer is an alternative to useState it acts just like
// useState but also has a builtin function reducer which can be used as event handling function

export const ReducerComp = () => {
    const reducer = (state, action) => {
        console.log(state, action);
        if(action.type === "INCREMENT") {
            return state+1;
        }
        else if(action.type ==="DECREMENT") {
            return state-1;
        }
    }
    const [count, dispatch] = useReducer(reducer,0);
    return(
        <div className="p-4 h-lvh flex flex-col justify-center items-center">
            <h1>{count}</h1>
           <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
           <button onClick={()=> dispatch({type:"DECREMENT"})}>Decrement</button>
        </div>
    );
}