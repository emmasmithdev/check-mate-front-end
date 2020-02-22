import React from 'react';

const Comment = (props) => {
  if(!props.comment){
    return "Loading..."
  }

  return (
    <p>{props.comment.content}</p>
  )
}
export default Comment;
