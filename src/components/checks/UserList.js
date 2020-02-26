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
			<li key={index} className="check-item">
			<User user={user}/>
			</li>
		)
	});
  return(
		<Fragment>
		<h1 className="welcome">Friends List</h1>
		<ul className="check-list">
			{listOfUsers}
		</ul>
		</Fragment>
  )
}
export default UserList;
