import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class CityPosts extends React.Component {
  state = { redirect: false };

  renderPosts() {
    return this.props.city.posts.map((post) => {
      return (
        <Link to={`/posts/${post._id}`} key={post._id}>
          <article className="post">
            <h4>{post.postTitle}</h4>
            <p>{post.postBody}</p>
          </article>
        </Link>
      );
    });
  }

  handleButtonClick = () => this.setState({ redirect: true })

  
  render() {
    if (this.state.redirect && this.props.city) {
      return <Redirect to={`/cities/${this.props.city._id}/posts/new`} />;
    }

    return (
      <section className="posts-section">
        <button className="add-post-button" onClick={this.handleButtonClick}>Add Post</button>
        {this.props.city && this.renderPosts()}
      </section>
    );
  }
}

export default CityPosts;