import './App.css'
import {useState} from 'react'

function App() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Number(score) < 5 && comment.length < 10){
      alert("please provide a comment explaining why the experience was poor.");
      return;
    }
    console.log("form submitted", {score, comment});
    setScore("10");
    setComment("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className='Field'>
            <label>Score:{score}⭐</label>
            <br/>
            <input type="range" min="0" max="10" 
            value={score} onChange={(e) => setScore(e.target.value)}/>
          </div>
          <div className="Field">
            <label>Comment:</label>
            <br/>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
