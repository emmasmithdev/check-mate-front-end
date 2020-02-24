import React, {Component, Fragment} from 'react';
import NavBar from '../NavBar.js';
import Request from '../helpers/request.js';
import PostList from '../components/posts/PostList';
// import NewsList from '../components/news/NewsList';
//import CheckList from '../components/checks/CheckList';
import CheckContainer from './CheckContainer';

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
      <Router>
      <Fragment>
      <NavBar />
      <h1>CheckMate</h1>
      <PostList posts={this.state.posts}/>
			<Switch>
				<Route exact path="/checks" component={CheckContainer} />
			</Switch>
      </Fragment>
      </Router>
    )
  }
}
export default MainContainer;
