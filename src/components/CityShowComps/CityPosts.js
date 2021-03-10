import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

function CityPosts(props) {
  const [redirect, setRedirect] = useState(false);

  function renderPosts() {
    return props.city.posts.map((post) => {
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

  const handleButtonClick = () => setRedirect(true);

  if (redirect) return <Redirect to="/posts/new" />;

  return (
    <div>
      <button onClick={handleButtonClick}>Add Post</button>
      {props.city && renderPosts()}
    </div>
  );
}

export default CityPosts;