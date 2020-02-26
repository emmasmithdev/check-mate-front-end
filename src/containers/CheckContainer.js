import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CheckList from '../components/checks/CheckList';
import UserList from '../components/checks/UserList';
import SendCheck from '../components/checks/SendCheck';
import ReplyCheck from '../components/checks/ReplyCheck';
import Request from '../helpers/request';
import NavBar from '../NavBar';

class CheckContainer extends Component {
  constructor(props){
    super(props);
		this.state = {
			checks: [],
			users: []
		}
		this.findUserById = this.findUserById.bind(this);
		this.handlePost = this.handlePost.bind(this);
		this.handleReplyPost = this.handleReplyPost.bind(this);
  }

	componentDidMount(){
    const request = new Request();

		const checksPromise = request.get('/api/checks');
		const usersPromise = request.get('/api/users');
		const checkAsksPromise = request.get('/api/checks/checkask');

		Promise.all([checksPromise, usersPromise, checkAsksPromise])
		.then((data) => {
			this.setState({
				checks: data[0],
				users: data[1],
				checkAsks: data[2]
			})
		})
		.catch(err => console.log(err));

  }

	findUserById(id) {
		return this.state.users.find(user => {
			return user.id === parseInt(id);
		});
	}

	handlePost(check){
		const request = new Request();
		request.post('/api/checks', check).then(() => {
			window.location = "/checks";
		})
	}

	handleReplyPost(check){
		const request = new Request();
		request.post('/api/received_checks', check).then(() => {
			window.location = "/checks";
		})
	}

  render(){
    return(
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
					<Route exact path="/checks/reply/:id" render={(props) => {
						const id = props.match.params.id;
						const getUser = this.findUserById(id);
						return <ReplyCheck user={getUser} onFormSubmit={this.handleReplyPost}/>
					}} />
					<Route exact path="/checks/send" render={(props) => {
						return <UserList users={this.state.users}/>
					}} />
					<Route exact path="/checks/send/:id" render={(props) => {
						const id = props.match.params.id;
						const user = this.findUserById(id);
						return <SendCheck user={user} onFormSubmit={this.handlePost}/>
					}} />
          <Route exact path="/checks" render={(props) => {
            return <CheckList checks={this.state.checks} users={this.state.users} />
        }} />
          </Switch>
        </Fragment>
      </Router>
    )
  }

}

export default CheckContainer;
