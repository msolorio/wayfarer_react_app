import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostShowPage(props) {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [postId]);

  function renderPostInfo() {
    if (post.city) {
      return (
        <>
          <p>{post.city.cityName}</p>
          <h2>{post.postTitle}</h2>
          <p>{post.postBody}</p>
        </>
      );
    }
  }

  return (
    <main>
      <h1>Post Show Page</h1>
      {renderPostInfo()}
    </main>
  );
}

export default PostShowPage;
