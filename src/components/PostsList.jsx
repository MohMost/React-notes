import Post from './Post';
import NewPost from './NewPost'
import classes from './PostsList.module.css';
import {useState} from 'react'
function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value)
  }
  function authorChangehandler(e) {
    setEnteredAuthor(e.target.value)
  }
  return (
   <>
     <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangehandler}/>
     <ul className={classes.posts}>
       <Post author={enteredAuthor} body={enteredBody} />
       <Post author="Sofiane" body="Hey happy to see you !" />
     </ul>
   </>
  );
}

export default PostsList;
 