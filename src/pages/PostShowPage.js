function PostShowPage(props) {
  console.log('props in post show page')
  console.log(props)
  const postId = props.match.params.postId;

  return (
    <h1>Post Show Page: {postId}</h1>
  )
}

export default PostShowPage;
