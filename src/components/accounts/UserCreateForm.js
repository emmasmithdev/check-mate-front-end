import React, {Component} from 'react';
import Request from '../../helpers/request';

class UserCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      profilePicture: ""
    }

    this.handleName = this.handleName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleProfilePicture = this.handleProfilePicture.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value})
  }

  handleUsername(event) {
    this.setState({username: event.target.value})
  }

  handlePassword(event) {
    this.setState({password: event.target.value})
  }

  handleProfilePicture(event) {
    this.setState({profilePicture: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      profilePicture: this.state.profilePicture
    }
    const request = new Request();
		request.post('/api/users', newUser)
		.then(() => {
			window.location = "/login"
		})
  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" name="" onChange={this.handleName}/>
          <label>Username: </label>
          <input type="text" name="" onChange={this.handleUsername}/>
          <label>Password: </label>
          <input type="password" name="" onChange={this.handlePassword}/>
          <label>Upload a Picture: </label>
          <input type="text" name="" onChange={this.handleProfilePicture}/>
          <button type="submit">Create Account</button>
        </form>
      </div>
    )

  }

}

export default UserCreateForm;
