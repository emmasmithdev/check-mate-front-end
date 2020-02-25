import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import Request from '../helpers/request.js';
// import PostList from '../components/posts/PostList';
// import NewsList from '../components/news/NewsList';
//import CheckList from '../components/checks/CheckList';
import CheckContainer from './CheckContainer';
import NewsContainer from './NewsContainer';

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
      <h1>CheckMate</h1>
			<Switch>
      <Route exact path="/" render={(props) => {
        return <PostList posts={this.state.posts} comments={this.state.comments}/>
        }} />
				<Route exact path="/checks" component={CheckContainer} />
        <Route exact path="/news" component={NewsContainer} />
			</Switch>
      </Fragment>
      </Router>
    )
  }
}
export default MainContainer;


// <Route exact path="/" render={(props) => {
// 	return <PostList posts={this.state.posts}/>
// 	}} />
