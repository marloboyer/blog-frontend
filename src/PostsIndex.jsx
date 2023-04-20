export function PostsIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image_url} />
          <p>{post.chef}</p>
          <button onClick={() => props.onShowPost(post)}>More Info!</button>
        </div>
      ))}
    </div>
  );
}
