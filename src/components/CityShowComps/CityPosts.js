import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class CityPosts extends React.Component {
  state = { redirect: false }

  renderPosts() {
    return this.props.cityPosts.map((post) => {
      return (
        <Link to={`/posts/${post._id}`} key={post._id}>
          <article>
            <img src={post.image} alt=""/>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        </Link>
      );
    });
  }

  handleButtonClick = () => {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/posts/new" />;
    }

    return (
      <div>
      <button onClick={this.handleButtonClick}>Add Post</button>
        {this.renderPosts()}
      </div>
    );
  }
}

export default CityPosts;