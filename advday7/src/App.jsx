import React from 'react'
import './App.css'

function App() {
  const [user, setUser] = React.useState(null)

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((data) => setUser(data))
  }
  React.useEffect(() => {
    fetchData()
  }, []);

  return user && user.results ? (
    <div className="App">
      <h1>Random User</h1>
      <p>First Name: {user.results[0].name.first}</p>
      <p>Last Name: {user.results[0].name.last}</p>
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    <div className="App">
      <h1>Loading...</h1>
    </div>
  )
}

export default App
