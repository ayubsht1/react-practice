import { useState } from 'react'
import './App.css'

const ToDo = props => {
return (
<tr>
  <td>
    <label>{props.id}</label>
  </td>
  <td>
    <input/>
  </td>
  <td>
    <label>{props.createdAt}</label>
  </td>
</tr>)
};
function App() {
  const [todos, setTodos] = useState([
  {
    id: 'todo2',
    createdAt: '18:00',
  },
  {
    id: 'todo1',
    createdAt: '20:00',
  }
]);
const reverseOrder = () => {
  setTodos([...todos].reverse());
}
  return (
    <div>
      <button onClick={reverseOrder}>Reverse Order</button>
      <table>
        <tbody>
          {todos.map((todo,id) => (
            <ToDo key={id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
