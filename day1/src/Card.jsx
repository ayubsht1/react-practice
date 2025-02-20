import profilePic from './assets/ayub.png'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Ayub Code</h2>
            <p className="card-text">Full Stack Developer</p>
        </div>
    );
}

export default Card