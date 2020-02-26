import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import Request from '../helpers/request.js';
import PostList from '../components/posts/PostList';
import GroupList from '../components/groups/GroupList';
import Profile from '../components/profiles/Profile';
import CheckContainer from './CheckContainer';
import NewsContainer from './NewsContainer';
import Logout from '../components/accounts/Logout';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      users: [],
      comments: []
    }
    // binds go here
  }

  componentDidMount(){
    const request = new Request();
    const postsPromise = request.get('/api/posts')
    const usersPromise = request.get('/api/users')
    const commentsPromise = request.get('/api/comments')

    Promise.all([postsPromise, usersPromise, commentsPromise])
    .then((data) => {
      this.setState({
        posts: data[0],
        users: data[1],
        comments: data[2]
      })
    })
  }


  render(){
    return(
      <Router>
      <Fragment>
      <NavBar />
      <h1  className="title">News Feed</h1>
			<Switch>
      <Route exact path="/home" render={(props) => {
        return <PostList posts={this.state.posts} comments={this.state.comments} users={this.state.users}/>
        }} />
        <Route exact path="/groups" component={GroupList} />
				<Route exact path="/checks" component={CheckContainer} />
        <Route exact path="/news" component={NewsContainer} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Logout} />
			</Switch>
      </Fragment>
      </Router>
    )
  }
}
export default MainContainer;
