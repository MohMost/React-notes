import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Mohmost" body="Welcome tomy world!" />
      <Post author="Sofiane" body="Hey happy to see tou !" />
    </ul>
  );
}

export default PostsList;
 