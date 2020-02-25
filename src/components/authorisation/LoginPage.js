import React, {Component} from 'react';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    <div>
      <form action="">
      <label >Username: </label>
      <input type="text" value={this.state.username}/>
      <label >Password: </label>
      <input type="text" value={this.state.password}/>
      <input type="submit" value="Submit"/>
      </form>
    </div>
  }

}

export default LoginPage;
