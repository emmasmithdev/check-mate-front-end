import React, {Fragment, Component} from 'react';
import Post from './Post';
import CreatePostForm from './CreatePostForm';
import Request from '../../helpers/request';

class PostList extends Component {
  constructor(props){
    super(props);
    
  }

  handlePost(post){
    const request = new Request();
    request.post("/api/posts", post)
    .then(() => window.location = '/home')
  }

  render(){

    const posts = this.props.posts.map((post, index) => {
      return (
        <li key={index} className="component-item">
          <div  className="component">
            <Post post={post} comments={this.props.comments} users={this.props.users}/>
          </div>
        </li>
      )
    })

  return(
    <Fragment>
      <ul className="component-list">
        <CreatePostForm posts ={posts} onPost={this.handlePost}/>
  	    {posts.reverse()}
  	  </ul>
    </Fragment>
  )
}
}
export default PostList;
