import React from 'react';

const ReactionList = (props) => {
  if(!props.reactions){
    return "Loading..."
  }

  return (
    <p>{props.reactions}</p>
  )
}
export default ReactionList;
