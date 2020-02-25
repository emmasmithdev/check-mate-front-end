import React, {Fragment, Component} from 'react';
import Post from './Post';
import CreatePostForm from './CreatePostForm';
import Request from '../../helpers/request';

class PostList extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  handlePost(post){
    const request = new Request();
    request.post("/api/posts", post)
    .then(() => window.location = '/')
  }

  render(){

    const posts = this.props.posts.map((post, index) => {
      return (
        <li key={index} className="component-item">
          <div  className="component">
            <Post post={post}/>
          </div>
        </li>
      )
    })

  return(
    <Fragment>
      <ul className="component-list">
        <CreatePostForm posts ={posts} onPost={this.handlePost}/>
  	    {posts}
  	  </ul>
    </Fragment>
  )
}
}
export default PostList;
