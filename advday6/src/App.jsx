import React from 'react'
import './App.css'

function App() {
  const [toggle, setToggle] = React.useState(false)
  const clickHandler = () => {
    setToggle(!toggle)
  }
React.useEffect(() => {
    document.title = toggle ? 'Welcome to Little Lemon' : 'Using the useEffect Hook'
},[toggle]);
  return (
    <div>
   <h1>Using the useEffect Hook</h1>
   <button onClick={clickHandler}>
    Toggle Message
   </button>
    {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  )
}

export default App
