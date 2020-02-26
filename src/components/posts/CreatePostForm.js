import React, {Component} from 'react';
import GroupSelector from './GroupSelector';

class CreatePostForm extends Component {
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
      content: "",
      groups: [],
      selectedGroup: null
    }
    this.handleContent = this.handleContent.bind(this);
    this.handleGroupSelected = this.handleGroupSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findGroupByName = this.findGroupByName.bind(this);
  }

  componentDidMount(){
    const url = '/api/groups';

    fetch(url)
      .then(res => res.json())
      .then(groups => this.setState({ groups: groups }))
      .catch(err => console.error);
  }


  findGroupByName(name) {
    return this.state.groups.find(group => {
      return group.name === name;
    });
  }

  handleContent(event){
  this.setState({content: event.target.value})
}

handleSubmit(event){
  event.preventDefault();
  const newPost = {
    "user": this.state.user,
    "content": this.state.content,
    "group": this.findGroupByName(this.state.selectedGroup)
  }
  this.props.onPost(newPost)
}

handleGroupSelected(name) {
    this.setState({ selectedGroup: name })
  }

render(){




  return (
    <div className="postForm">
      <form onSubmit={this.handleSubmit}>
          <textarea className="postInput" rows="4" placeholder="How are you feeling today?" name="content" onChange={this.handleContent} value={this.state.content}></textarea>
          <br/>
          <div className="savePost">
          <GroupSelector groups={this.state.groups} onGroupSelected={this.handleGroupSelected} />
          <button className="save" type="submit">Save</button>
          </div>
      </form>
    </div>
  )
}



}
export default CreatePostForm;
