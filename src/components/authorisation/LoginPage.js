import React, {Component} from 'react';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
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

  render() {
    <div>
      <form action="">
      <label >Username: </label>
      <input type="text" value={this.state.username} onChange={this.handleUsername}/>
      <label >Password: </label>
      <input type="text" value={this.state.password} onChange={this.handlePassword}/>
      <input type="submit" value="Submit"/>
      </form>
    </div>
  }

}

export default LoginPage;
