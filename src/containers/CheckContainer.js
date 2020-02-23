import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CheckList from '../components/checks/CheckList';
import UserList from '../components/checks/UserList';
import SendCheck from '../components/checks/SendCheck';
import Request from '../helpers/request';

class CheckContainer extends Component {
  constructor(props){
    super(props);
		this.state = {
			checks: [],
			users: []
		}
		this.findUserById = this.findUserById.bind(this);
  }

	componentDidMount(){
    const request = new Request();

		const checksPromise = request.get('/api/checks');
		const usersPromise = request.get('/api/users');

		Promise.all([checksPromise, usersPromise])
		.then((data) => {
			this.setState({
				checks: data[0],
				users: data[1]
			})
		})
		.catch(err => console.log(err));

  }

	findUserById(id) {
		return this.state.users.find(user => {
			return user.id === parseInt(id);
		});
	}

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
					<Route exact path="/checks/send" render={(props) => {
						return <UserList users={this.state.users}/>
					}} />
					<Route exact path="/checks/send/:id" render={(props) => {
						const id = props.match.params.id;
						const user = this.findUserById(id);
						return <SendCheck user={user} />
					}} />
          <Route exact path="/checks" render={(props) => {
            return <CheckList checks={this.state.checks} users={this.state.users}/>
        }} />
          </Switch>
        </Fragment>
      </Router>
    )
  }

}

export default CheckContainer;
