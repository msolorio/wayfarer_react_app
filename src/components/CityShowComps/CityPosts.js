function CityPosts(props) {
  function renderPosts() {
    return props.cityPosts.map((post) => {
      return (
        <article>
          <img src={post.image} alt=""/>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      );
    });
  }

  return (
    <div>
      {renderPosts()}
    </div>
  )
}

export default CityPosts;