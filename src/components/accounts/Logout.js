import React, {Component} from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
			<div className="login">
      <p className="welcome">Checkmate</p>
      <img src="../images/panda2.png" alt="panda pic" className="panda"/>
	     <p>You have logged out. Have a great day!</p>
	    </div>
		)
  }

}

export default Logout;
