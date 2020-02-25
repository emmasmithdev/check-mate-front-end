import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewsList from '../components/news/NewsList.js';
import Request from '../helpers/request';

class NewsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    const request = new Request();

    const newsPromise = request.get('http://localhost:4040/news');

    Promise.all([newsPromise])
    .then((data) => {
      const filterNews = Object.entries(data[0]);
      this.setState({
        news: filterNews[4][1]
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <Router>
      <Fragment>
      <Switch>
      <Route exact path="/news" render={(props) => {
        return <NewsList news={this.state.news}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }

}

export default NewsContainer;
