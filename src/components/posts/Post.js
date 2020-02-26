import React, {Fragment} from 'react';
import Comment from './Comment';
// import ReactionList from './ReactionList';

const Post = (props) => {
  if (!props.post){
  return "Loading..."
}

const comments = props.comments.map((comment, index) => {
  if (comment.postId === props.post.id){
  return (
    <li key={index} className="comment-item">
      <div  className="comment">
        <Comment comment={comment} users={props.users}/>
      </div>
    </li>
  )
}
})

  return (
    <Fragment>
    <div className="postContents">
      <p className="userName">{props.post.user}</p>
      <p className="content">{props.post.content}</p>
    </div>
      <p className="date">{props.post.date}</p>
      {comments}
    </Fragment>
  )
}
export default Post;
