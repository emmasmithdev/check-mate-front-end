import React, {Component, Fragment} from 'react';

const Check = (props) =>{
	if(!props.check) {
		return (
			"Loading ..."
		)
	}
  return(
		<Fragment>
    <p>
    {props.check.author}
    </p>
    <p>Sent To: {props.check.recipient.id}</p>
    <p>Message: {props.check.initialCheck}</p>
    </Fragment>
  )
}
export default Check;
