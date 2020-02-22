import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import Request from '../helpers/request.js';
// import PostList from '../components/posts/PostList';
// import NewsList from '../components/news/NewsList';
// import CheckList from '../components/checks/CheckList';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      users: []
    }
    // binds go here
  }

  componentDidMount(){
    const request = new Request();
    const postsPromise = request.get('/api/posts')
    const usersPromise = request.get('/api/users')

    Promise.all([postsPromise, usersPromise])
    .then((data) => {
      this.setState({
        posts: data[0],
        users: data[1]
      })
    })
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
