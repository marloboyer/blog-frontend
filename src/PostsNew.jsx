export function PostsNew(props) {
  const handleSumbit = (event) => {
    event.preventDefault();
    console.log("handleSumbit");
    const params = new FormData(event.target);
    props.onCreatePosts(params);
    event.target.reset();
  };

  return (
    <div>
      <h1>New post</h1>

      <form>
        <form onSubmit={handleSumbit}></form>
        <label for="title">Title:</label>
        <input name="title" type="text" id="title"></input>
        <label for="body">Body:</label>
        <input name="body" type="text" id="body"></input>
        <label for="url">URL:</label>
        <input name="url" type="url" id="homepage"></input>
        <button type="sumbit">Create Post</button>
      </form>
    </div>
  );
}
