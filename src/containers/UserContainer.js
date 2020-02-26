import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserLoginForm from '../components/accounts/UserLoginForm';
import UserCreateForm from '../components/accounts/UserCreateForm';
import MainContainer from './MainContainer';
import CheckContainer from './CheckContainer';
import NewsContainer from './NewsContainer';
import Request from '../helpers/request';

class UserContainer extends Component {
  constructor(props) {
    super(props);

    this.handlePost = this.handlePost.bind(this);

  }

  handlePost(newUser) {
    const request = new Request();
    request.post("/api/users", newUser)
    .then(() => window.location = "/home")
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
          <Route exact path="/register" render={(props) => {
            return <UserCreateForm onPost={this.handlePost}/>
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
