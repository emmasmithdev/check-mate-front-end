import React, {Component, Fragment} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class Post extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   users: [],
    //   comments: [],
    //   post: {}
    // }

  }

  handlePost(newComment){
    const request = new Request();
    request.post("/api/comments", newComment)
    .then(() => window.location = '/home')
  }

  render(){

    const comments = this.props.comments.map((comment, index) => {
      if (comment.postId === this.props.post.id){
      return (
        <li key={index} className="comment-item">
          <div  className="comment">
            <Comment comment={comment} users={this.props.users}/>
          </div>
        </li>
      )
    }
    })

const userName = this.props.users.map((user, index) => {
  if (user.id === this.props.post.user){
  return (
    <p key={index} className="userName">{user.name}</p>
  )
}
})

  return (
    <Fragment>
    <div className="postContents">
      {userName}
      <p className="content">{this.props.post.content}</p>
    </div>
      <p className="date">{this.props.post.date}</p>
      <CommentForm userName={userName} postId={this.props.post.id} onPost={this.handlePost}/>
      {comments.reverse()}
    </Fragment>
  )
}
}
export default Post;
