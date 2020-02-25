import React, { Fragment } from 'react';
import User from './User';

const UserList = (props) =>{
	if(props.users.length === 0) {
		return(
			<p>Loading ... </p>
		)
	}

	const listOfUsers = props.users.map((user, index) => {
		return(
			<li key={index} className="component-item">
			<div className="component">
			<User user={user}/>
			</div>
			</li>
		)
	});
  return(
		<Fragment>
		<ul className="component-list">
			{listOfUsers}
		</ul>
		</Fragment>
  )
}
export default UserList;
