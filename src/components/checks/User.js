import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const User = (props) =>{
	if(!props.user) {
		return (
			"Loading ..."
		)
	}
  return(
		<Fragment>
    <p className="check-detail">Name: {props.user.name}</p>
    <p className="check-detail">Username: {props.user.username}</p>
		<Link to={{
			pathname: `/checks/send/${props.user.id}`
		}}><button className="send-check" type="button">Send A Check</button></Link>
    </Fragment>
  )
}
export default User;
