export function PostShow(props) {
  const handleSumbit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePosts(params);
    event.target.reset();
  };

  return (
    <div>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>

      <form>
        <form onSubmit={handleSumbit}></form>
        <label for="title">Title:</label>
        <input name="title" type="text" id="title"></input>
        <label for="body">Body:</label>
        <input name="body" type="text" id="body"></input>
        <label for="url">URL:</label>
        <input name="url" type="url" id="homepage"></input>
        <button type="sumbit">Update Post</button>
      </form>
    </div>
  );
}
