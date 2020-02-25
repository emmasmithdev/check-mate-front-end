import React from 'react';

const Comment = (props) => {
  if(!props.comment){
    return "Loading..."
  }

  return (
    <div className="commentContent">
      <p className="commenter">{props.comment.user.name}</p>
      <p className="comment">{props.comment.content}</p>
    </div>
  )
}
export default Comment;
