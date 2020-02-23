import React, { Fragment } from 'react';
import User from './User';

const Check = (props) =>{
	if(!props.check) {
		return (
			"Loading ..."
		)
	}
  return(
		<Fragment>
    <p>
    <User user={props.check.author} userList={props.users} />
    </p>
    <p>Sent To: <User user={props.check.recipient.id} userList={props.users}/></p>
    <p>Message: {props.check.initialCheck}</p>
    </Fragment>
  )
}
export default Check;
