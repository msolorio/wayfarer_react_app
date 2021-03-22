import React from 'react';

class PostShowPage extends React.Component {
  state = {
    post: {}
  }

  componentDidMount() {
    fetch(`http://localhost:4000/posts/${this.props.match.params.postId}`)
      .then(response => response.json())
      .then(data => this.setState({ post: data }));
  }

  renderPostInfo() {
    if (this.state.post.city) {
      return (
        <>
          <p>{this.state.post.city.cityName}</p>
          <h2>{this.state.post.postTitle}</h2>
          <p>{this.state.post.postBody}</p>
        </>
      );
    }
  }

  render() {
    return (
      <main>
        <h1>Post Show Page</h1>
        {this.renderPostInfo()}
      </main>
    );
  }
}

export default PostShowPage;
