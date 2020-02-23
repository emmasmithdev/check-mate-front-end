import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CheckList from '../components/checks/CheckList';
import Request from '../helpers/request';

class CheckContainer extends Component {
  constructor(props){
    super(props);
		this.state = {
			checks: [],
			users: []
		}
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

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
          <Route render={(props) => {
            return <CheckList checks={this.state.checks} users={this.state.users}/>
        }} />
          </Switch>
        </Fragment>
      </Router>
    )
  }

}

export default CheckContainer;
