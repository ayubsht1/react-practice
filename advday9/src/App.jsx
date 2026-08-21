import './App.css'
const Button = ({ children, className = '', onClick }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
const Alert = ({ children }) => {
  return (
    <>
      <div className='Overlay' />
      <div className='Alert'>
        {children}
      </div>
    </>
  )
}
const DeleteButton = () => {
  return <Button className="btn-delete">Delete</Button>
}
const CancelButton = () => {
  return <Button className="btn">Cancel</Button>
}
function App() {
  return (
    <div className="App">
      <header>Little Lemon Resturant ⚡</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>Are you sure you want to delete your account? This action cannot be undone.</p>
        <div className="button-group">
          <DeleteButton />
          <CancelButton />
        </div>
      </Alert>
    </div>
  )
}

export default App
