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

    // limited API call to 3 results for brevity
    // can change 'pageSize=' and 'q=' for different results
    // contextualwebsearch via rapidapi.com
    // TODO: Add option for user to customise results
    const newsPromise = request.get('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=3&q=inspiring&safeSearch=true')

    Promise.all([newsPromise])
    .then((data) => {
      this.setState({
        news: data[0]
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
