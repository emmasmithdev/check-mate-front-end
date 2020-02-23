import React from 'react';
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
    <ul className="component-list">
			{listOfChecks}
		</ul>
  )
}
export default CheckList;
