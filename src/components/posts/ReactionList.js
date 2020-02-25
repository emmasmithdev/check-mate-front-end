import React from 'react';

const ReactionList = (props) => {
  if(!props.reactions){
    return "Loading..."
  }

  return (
    <p className="reactions">{props.reactions}</p>
  )
}
export default ReactionList;
