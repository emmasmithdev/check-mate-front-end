import React, {Fragment} from 'react';
import Comment from './Comment';
import ReactionList from './ReactionList';

const Post = (props) => {
  if (!props.post){
  return "Loading..."
}

const comments = props.post.comments.map((comment, index) => {
  return (
    <li key={index} className="comment-item">
      <div  className="comment">
        <Comment comment={comment}/>
      </div>
    </li>
  )
})

  return (
    <Fragment>
      <p>{props.post.user.name}</p>
      <p>{props.post.content}</p>
      <p>{props.post.date}</p>
      <ReactionList reactions={props.post.reactions}/>
      {comments}
    </Fragment>
  )
}
export default Post;
