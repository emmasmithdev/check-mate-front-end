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
    <p>Name: {props.user.name}</p>
    <p>Username: {props.user.username}</p>
		<Link to={{
			pathname: `/checks/send/${props.user.id}`
		}}><button type="button">Send A Check</button></Link>
    </Fragment>
  )
}
export default User;
