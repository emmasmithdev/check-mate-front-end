import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserLoginForm from '../components/accounts/UserLoginForm';
import MainContainer from './MainContainer';

class UserContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
					<Route exact path="/" render={(props) => {
						return <UserLoginForm />
					}} />
					<Route exact path="/login" render={(props) => {
						return <UserLoginForm />
					}} />
					<Route exact path="/home" component={MainContainer} />
          </Switch>
        </Fragment>
      </Router>
    )
  }

}

export default UserContainer;
