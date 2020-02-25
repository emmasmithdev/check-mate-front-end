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
  }

  render() {
    return(
      <div>
        <form action="">
          <label>Name: </label>
          <input type="text"/>
          <label>Username: </label>
          <input type="text"/>
          <label>Password: </label>
          <input type="text"/>
          <label>Upload a Picture: </label>
          <input type="text"/>
          <label>How are you feeling? </label>
          <input type="text"/>
        </form>
      </div>
    )
  }

}

export default UserCreateForm;
