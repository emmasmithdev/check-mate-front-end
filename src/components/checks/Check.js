import React, { Fragment } from 'react';
import CheckUser from './CheckUser';

const Check = (props) =>{
	if(!props.check) {
		return (
			"Loading ..."
		)
	}
  return(
		<Fragment>
    <p>
    Name: <CheckUser user={props.check.author} userList={props.users} />
    </p>
    <p>Sent To: <CheckUser user={props.check.recipient.id} userList={props.users}/></p>
    <p>Message: {props.check.initialCheck}</p>
    </Fragment>
  )
}
export default Check;
