import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import CheckUser from './CheckUser';

const Check = (props) =>{
	if(!props.check) {
		return (
			"Loading ..."
		)
	}
  return(
		<Fragment>
    <p className="check-detail">
    Name: <CheckUser user={props.check.author} userList={props.users} />
    </p>
    <p className="check-detail">Sent To: <CheckUser user={props.check.recipient} userList={props.users}/></p>
    <p className="check-detail">Message: {props.check.initialCheck}</p>
		<Link to={{
			pathname: `/checks/reply/${props.check.author}`
		}}><button className="send-check" >Reply!</button></Link>
    </Fragment>
  )
}
export default Check;
