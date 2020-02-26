import React from 'react';

const Comment = (props) => {
  if(!props.comment){
    return "Loading..."
  }

  const userName = props.users.map((user, index) => {
    if (user.id === props.comment.user){
    return (
      <p key={index} className="commenter">{user.name}</p>
    )
  }
  })

  return (
    <div className="commentContent">
      {userName}
      <p className="comment">{props.comment.content}</p>
    </div>
  )
}
export default Comment;
