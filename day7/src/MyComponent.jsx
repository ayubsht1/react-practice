import React, {use, useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () =>
    {
        setAge(age+1);
    }

    const toggleEmp = () =>
    {
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}> Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}> + </button>

        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmp}> Toggle </button>
    </div>);
}

export default MyComponent