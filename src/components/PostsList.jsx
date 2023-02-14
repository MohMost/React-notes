import Post from './Post';
import NewPost from './NewPost'
import classes from './PostsList.module.css';

function PostsList() {
  
  return (
   <>
     <NewPost/>
     <ul className={classes.posts}>
       <Post author="Mohmost" body="Welcome tomy world!" />
       <Post author="Sofiane" body="Hey happy to see you !" />
     </ul>
   </>
  );
}

export default PostsList;
 