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
}

export default UserCreateForm;
