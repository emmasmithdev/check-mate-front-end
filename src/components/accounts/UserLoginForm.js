import React, {Component} from 'react';
import AuthService from './AuthService';

class UserLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
			loginFailed: false
    }

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.username) {
      console.log("Error: username required");
    }

    if (!this.state.password) {
      console.log("Error: password required");
    }

		const auth = new AuthService();

		auth.verifyUser(this.state.username, this.state.password)
		.then((res) => {
			if(res.status === 401) {
					this.setState({
						loginFailed: true
					})
			}
			else if (res.status === 200) {
				window.location = "/home"
			}
		})
		.catch(err => console.log(err));
  }

  render() {
    return (
			<div>
	      <form onSubmit={this.handleSubmit}>
	      <label>Username: </label>
	      <input type="text" value={this.state.username} onChange={this.handleUsername}/>
	      <label>Password: </label>
	      <input type="text" value={this.state.password} onChange={this.handlePassword}/>
	      <input type="submit" value="Submit"/>
	      </form>
				{this.state.loginFailed && <div>Incorrect password or username!</div>}
	    </div>
		)
  }

}

export default UserLoginForm;
