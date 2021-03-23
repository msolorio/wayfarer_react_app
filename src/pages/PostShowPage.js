import React from 'react';
import { Link } from 'react-router-dom';

class PostShowPage extends React.Component {
  state = {
    post: {},
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
          <h2 className="post-title">{this.state.post.postTitle}</h2>
          <p className="post-body">{this.state.post.postBody}</p>

          <Link className="form-return-button" to={`/cities/${this.state.post.city._id}`}>
            <button>Back to {this.state.post.city.cityName}</button>
          </Link>
        </>
      );
    }
  }

  render() {
    return (
      <main className="show-post-page">
        {this.renderPostInfo()}

      </main>
    );
  }
}

export default PostShowPage;
