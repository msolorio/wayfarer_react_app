import React from 'react';

class PostShowPage extends React.Component {
  state = {
    post: null
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:4000/posts/${this.props.match.params.postId}`);
    const data = await response.json();

    this.setState({ post: data });
  }

  renderPostInfo() {
    if (this.state.post) {
      return (
        <>
          <p>{this.state.post.city.name}</p>
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.body}</p>
        </>
      );
    } else {
      <p>Post Not found</p>
    };
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
