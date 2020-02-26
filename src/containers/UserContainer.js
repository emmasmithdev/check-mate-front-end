import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserLoginForm from '../components/accounts/UserLoginForm';
import UserCreateForm from '../components/accounts/UserCreateForm';
import MainContainer from './MainContainer';
import CheckContainer from './CheckContainer';
import NewsContainer from './NewsContainer';

class UserContainer extends Component {

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
					<Route exact path="/register" render={(props) => {
						return <UserCreateForm />
					}} />
					<Route exact path="/home" component={MainContainer} />
					<Route exact path="/checks" component={CheckContainer} />
	        <Route exact path="/news" component={NewsContainer} />
          </Switch>
        </Fragment>
      </Router>
    )
  }

}

export default UserContainer;
