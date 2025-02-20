import profilePic from './assets/ayub.png'
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>Ayub Code</h2>
            <p>Full Stack Developer</p>
        </div>
    );
}

export default Card