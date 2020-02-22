import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CheckList from '../components/checks/CheckList';
import Request from '../helpers/request';

class CheckContainer extends Component {
  constructor(props){
    super(props);
		this.state = {
			checks: []
		}
  }

	componentDidMount(){
    const request = new Request();

    request.get('/api/checks')
    .then((data) => {
      this.setState({ checks: data })
    })
  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
          <Route render={(props) => {
            return <CheckList checks={this.state.checks}/>
        }} />
          </Switch>
        </Fragment>
      </Router>
    )
  }

}

export default CheckContainer;
