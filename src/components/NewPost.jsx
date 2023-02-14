import classes from './NewPost.module.css';
import {useState} from 'react'


function NewPost() {
  //* useState 

  const [enteredBody , setEnteredBody] = useState() //? enteredBody is the default state setEteredBody is the updated state an each time the setEnteredBody is set it will be stored as a new default value in enteredBody

  //* Event listeners in react

  //?step 1: setting up the function that will handle the event
  function changeBodyHandler(e){
    setEnteredBody(e.target.value)
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
  {/*step 2: assigning the event listener and passing in its function (event={eventFunction})*/}
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/> 
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
