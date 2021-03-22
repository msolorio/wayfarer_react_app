import React from 'react';
import { Redirect } from 'react-router-dom';

class PostAddPage extends React.Component {
  state = {
    postTitle: '',
    postBody: '',
    postImg: '',
    cityName: '',
    cityId: '',
    redirect: false
  }
  
  handleTitleChange = (event) => {
    this.setState({ postTitle: event.target.value });
  }

  handleBodyChange = (event) => {
    this.setState({ postBody: event.target.value });
  }

  handleImgChange = (event) => {
    this.setState({ postImg: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      postTitle: this.state.postTitle,
      postBody: this.state.postBody,
      postImg: this.state.postImg,
      city: this.state.cityId
    }

    fetch('http://localhost:4000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState({ redirect: true });
      });
      
  }

  componentDidMount() {
    fetch(`http://localhost:4000/cities/${this.props.match.params.cityId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          cityName: data.cityName,
          cityId: data._id
        });
      })
      .catch((err) => {
        console.log('Error adding a new city:', err);
      })
  }

  render() {
    if (this.state.redirect) return <Redirect to={`/cities/${this.props.match.params.cityId}`} />

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="post-title">Title:</label>
          <input 
            type="text" 
            id="post-title" 
            value={this.state.postTitle} 
            onChange={this.handleTitleChange}
          />
        </div>

        <div>
          <label htmlFor="post-body">Body:</label>
          <textarea
            type="text" 
            id="post-body" 
            value={this.state.postBody} 
            onChange={this.handleBodyChange}
          />
        </div>

        <div>
          <label htmlFor="post-body">Post Image:</label>
          <input
            type="text" 
            id="post-body" 
            value={this.state.postImg} 
            onChange={this.handleImgChange}
          />
        </div>

        <button type="submit">Add Post</button>
      </form>
    )
  }
}

export default PostAddPage;
