function Button(){

    // const handleClick = () => console.log("OUCH!");
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // let count = 0
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "OUCH! 🥲";

    return(<>
    <button onDoubleClick={(e) => handleClick(e)}>Click me 🤣</button>
    </>)
}
export default Button