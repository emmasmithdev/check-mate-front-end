import React, {Component} from 'react';

class UserCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      profilePicture: "",
      mood: ""
    }

    this.handleName = this.handleName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleProfilePicture = this.handleProfilePicture.bind(this);
    this.handleMood = this.handleMood.bind(this);
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

  handleMood(event) {
    this.setState({mood: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      profilePicture: this.state.profilePicture,
      mood: this.state.mood
    }
    this.props.onPost(newUser)
  }

  render() {

    return(
      <div className="create-user">
        <p className="welcome">Checkmate</p>
        <img src="../images/panda2.png" alt="panda pic" className="panda"/>
        <form onSubmit={this.handleSubmit}>
          <label className="loginLabel">Name: </label>
          <input type="text" name="" onChange={this.handleName} className="inputBox"/>
          <br/>
          <label className="loginLabel">Username: </label>
          <input type="text" name="" onChange={this.handleUsername} className="inputBox"/>
          <br/>
          <label className="loginLabel">Password: </label>
          <input type="text" name="" onChange={this.handlePassword} className="inputBox"/>
          <br/>
          <label className="loginLabel">Upload a Picture: </label>
          <input type="text" name="" onChange={this.handleProfilePicture} className="inputBox"/>
          <br/>
          <label className="loginLabel">How are you feeling? </label>
          <input type="text" name="" onChange={this.handleMood} className="inputBox"/>
          <br/>
          <button className="submit" type="submit">Create Account</button>
        </form>
      </div>
    )

  }

}

export default UserCreateForm;
