// conditional rendering = allows you to control what gets rendered in your applicatiion
// based on certain conditions (show, hide, or change components)

import UserGreeting from "./UserGreeting.jsx"

function App() {
  return(
    <>
    <UserGreeting isLoggedIn={true} username="Ayub"/>
    </>
)
}

export default App
