import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Check from './Check';

const CheckList = (props) =>{
	if(props.checks.length === 0) {
		return(
			<p>Loading ... </p>
		)
	}

	const listOfChecks = props.checks.map((check, index) => {
		return(
			<li key={index} className="component-item">
			<div className="component">
			<Check check={check} users={props.users}/>
			</div>
			</li>
		)
	});
  return(
		<Fragment>
		<ul className="component-list">
			{listOfChecks}
		</ul>
		<Link to="/checks/send"><button type="button">Send A Check</button></Link>
		</Fragment>
  )
}
export default CheckList;
