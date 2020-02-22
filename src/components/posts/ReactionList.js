import React from 'react';

const ReactionList = (props) => {
  if(!props.reactions){
    return "Loading..."
  }

  // const reactions = props.reactions.map((reaction) => {
  //   return (
  //     <p>{reaction}</p>
  //   )
  // })


  return (
    <p>{props.reactions}</p>
  )
}
export default ReactionList;
