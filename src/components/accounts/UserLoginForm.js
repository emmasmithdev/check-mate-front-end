import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
      return window.alert('Error: Username required!')
    }

    if (!this.state.password) {
      return window.alert("Error: password required");
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
			<div className="login">
      <p className="welcome">Checkmate</p>
      <img src="../images/panda2.png" alt="panda pic" className="panda"/>
	      <form onSubmit={this.handleSubmit}>
	      <label className="loginLabel">Username: </label>
	      <input type="text" value={this.state.username} onChange={this.handleUsername} className="inputBox"/>
        <br/>
	      <label className="loginLabel">Password: </label>
	      <input type="password" value={this.state.password} onChange={this.handlePassword} className="inputBox"/>
        <br/>
	      <input type="submit" value="Submit" className="submit"/>
	      </form>
				<Link to="/register"><button type="button">Create An Account!</button></Link>
				{this.state.loginFailed && <div>Incorrect password or username!</div>}
	    </div>
		)
  }

}

export default UserLoginForm;
