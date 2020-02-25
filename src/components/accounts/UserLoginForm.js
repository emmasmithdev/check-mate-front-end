import React, {Component} from 'react';

class UserLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
  }

  render() {
    <div>
      <form onSubmit={this.handleSubmit}>
      <label>Username: </label>
      <input type="text" value={this.state.username} onChange={this.handleUsername}/>
      <label>Password: </label>
      <input type="text" value={this.state.password} onChange={this.handlePassword}/>
      <input type="submit" value="Submit"/>
      </form>
    </div>
  }

}

export default UserLoginForm;
