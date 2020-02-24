import React, {Component} from 'react';

class SendCheck extends Component {
  constructor(props){
    super(props);
  }


	render() {
		if(this.props.users === 0) {
			return <p>Loading ... </p>
		}

  	return "I am form";
	}
}

export default SendCheck;
