export function PostShow(props) {
  const handleSumbit = event => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePosts(params, props.post.id);
    event.target.reset();
  };
  const handleClick = () => {
    props.onDeletePost(props.post);
  };
  return (
    <div>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
      <button onClick={handleClick}>Delete</button>
      <form onSubmit={handleSumbit}>
        <label htmlFor="title">Title:</label>
        <input defaultValue={props.post.title} name="title" type="text" id="title"></input>
        <label htmlFor="body">Body:</label>
        <input defaultValue={props.post.body} name="body" type="text" id="body"></input>
        <label htmlFor="url">URL:</label>
        <input defaultValue={props.post.image} name="image" type="text" id="homepage"></input>
        <button type="sumbit">Update Post</button>
      </form>
    </div>
  );
}
