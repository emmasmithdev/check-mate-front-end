import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        "id": 1,
        "name": "Emma Smith",
        "username": "emzo11",
        "password": "thereisnospoon",
        "profilePicture": "picture",
        "mood": "happy",
        "groups": [],
        "tags": []
      },
      content: ""
    }
    this.handleContent = this.handleContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleContent(event){
    this.setState({content: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newComment = {
      "user": this.state.user,
      "content": this.state.content,
      "postId": this.props.postId
    }
    this.props.onPost(newComment)
  }

  render(){

    return(
      <div className="commentForm">
        <form onSubmit={this.handleSubmit}>
        <div className="makeComment">
          <textarea placeholder=" Write a comment..." className="commentInput" rows="2" name="content" onChange={this.handleContent} value={this.state.content}></textarea>
          <button className="save-comment" type="submit">Save</button>
          </div>
        </form>
      </div>
    )
  }

}
export default CommentForm;
