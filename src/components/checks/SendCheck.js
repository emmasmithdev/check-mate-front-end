import React, {Component} from 'react';
import Request from '../../helpers/request';

class SendCheck extends Component {
  constructor(props){
    super(props);
		this.state={
			checks: [],
			users: [],
			message: {}
		}

		this.handleCheck = this.handleCheck.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

	componentDidMount(){
		const request = new Request();
		const checkAsksPromise = request.get('/api/checks/checkask');
		const usersPromise = request.get('/api/users');
		Promise.all([checkAsksPromise, usersPromise])
		.then((data) => {
			this.setState({
				checks: Object.entries(data[0]),
				users: data[1]
			})
		})
		.catch(err => console.log(err));
	}

	findUserById(id) {
		return this.state.users.find(user => {
			return user.id === parseInt(id);
		});
	}

	handleCheck(event){
		const index = event.target.value;
		const selectedMessage = this.state.checks[index][1];
		this.setState({
			message: {
				"author": this.findUserById(this.props.user.id),
				"recipient": this.findUserById(this.props.user.id),
				"initialCheck": selectedMessage
			}
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.onFormSubmit(this.state.message);
	}

	render() {
		if(this.props.user === 0) {
			return <p>Loading ... </p>
		}

		const messageOptions = this.state.checks.map((check, index) => {
			return <option key={index} value={index}>{check[1]}</option>
		});

  	return (
			<div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <img src="../../images/panda2.png" alt="panda pic" className="panda"/>
			<form onSubmit={this.handleSubmit}>
			<select className="check-message" name="check" onChange={this.handleCheck}>
			<option disabled selected>Select a message!</option>
			{messageOptions}
			</select>
			<br />
			<button className="submit" type="submit">Send!</button>
			</form>
			</div>
		)
	}
}

export default SendCheck;
