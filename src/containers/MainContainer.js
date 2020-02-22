import React, {Component, Fragment} from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../NavBar.js';
import Request from '../helpers/request';
// import PostList from '../components/posts/PostList';
// import NewsList from '../components/news/NewsList';
// import CheckList from '../components/checks/CheckList';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
    // binds go here
  }

  componentDidMount() {
    const url = 'http://localhost:8080/api/posts';

    fetch(url)
      .then(res => res.json())
      .then(posts => this.setState({ posts: posts }))
      .catch(err => console.error);
  }

  render(){
    return(
      <Fragment>
      <h1>CheckMate</h1>
      <NavBar />
      </Fragment>
      // <Router>
      // <Fragment>
      // <NavBar/>
      // <Route render={(props) => {
      //   return <PostList posts={this.state.posts}/>
      // }} />
      // <Route render={(props) => {
      //   return <CheckList users={this.state.users}/>
      // }} />
      //
      // </Fragment>
      // </Router>
    )
  }
}
export default MainContainer;
