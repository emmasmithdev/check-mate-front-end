import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserLoginForm from '../components/accounts/UserLoginForm';
import UserCreateForm from '../components/accounts/UserCreateForm';
import MainContainer from './MainContainer';
import CheckContainer from './CheckContainer';
import NewsContainer from './NewsContainer';
import Request from '../helpers/request';
import AuthService from '../components/accounts/AuthService';

class UserContainer extends Component {
  constructor(props) {
    super(props);

		this.state = {
			user: ""
		}

    this.handlePost = this.handlePost.bind(this);
    this.findByUsername = this.findByUsername.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

	findByUsername(username) {
		const request = new Request();
		return request.get(`/api/users/username/${username}`)
	}

  handlePost(newUser) {
    const request = new Request();
    request.post("/api/users", newUser)
    .then(() => window.location = "/home")
  }

	handleLogin(username, password) {
		console.log(username, password)
		const auth = new AuthService();

		auth.verifyUser(username, password)
		.then((res) => {
			if (res.status === 200) {
				this.findByUsername(username)
				.then((user) => {
					console.log(user)
					this.setState({
						user: user.id
					})
				})
				.then(() => {
					return window.location = `/home/${this.state.user}`
				})
			}
			return
		})
		.catch(err => console.log(err));
	}

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
					<Route exact path="/" render={(props) => {
						return <UserLoginForm onLogin={this.handleLogin}/>
					}} />
					<Route exact path="/login" render={(props) => {
						return <UserLoginForm onLogin={this.handleLogin}/>
					}} />
          <Route exact path="/register" render={(props) => {
            return <UserCreateForm onPost={this.handlePost}/>
          }} />
					<Route exact path="/home/:user" component={MainContainer}/>
					<Route exact path="/checks/:user" component={CheckContainer} />
	        <Route exact path="/news" component={NewsContainer} />
          </Switch>
        </Fragment>
      </Router>
    )
  }

}

export default UserContainer;
