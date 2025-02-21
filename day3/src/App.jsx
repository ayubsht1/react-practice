import Student from "./Student.jsx"

// props = readonly properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value/>


function App() {
  return (
    <>
    <Student name={123} age="30" isStudent={true}/>
    <Student name="Patric" age={25} isStudent={false}/>
    <Student name="Squidward" age={35} isStudent={true} />
    <Student/>
    </>
  )
}

export default App
