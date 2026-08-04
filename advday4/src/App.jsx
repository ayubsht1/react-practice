import { useUser } from "./UserContext";
import './App.css'

function App() {
const { name, role } = useUser();
  return (
    <div>
      <h1>User: {name}</h1>
      <p>Role: {role}</p>
    </div>
  )
}

export default App
