import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply, reset} from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar />
      <div>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(incrementByAmount(2))}>+x</button>
      <button onClick={()=>dispatch(multiply())}>*</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>

        </div>
      <div>
        Currently count is {count}
      </div>

    </>
  )
}

export default App
