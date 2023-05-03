export function PostsNew(props) {
  const handleSumbit = event => {
    event.preventDefault();
    console.log("handleSumbit");
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div>
      <h1>New post</h1>

      <form onSubmit={handleSumbit}>
        <label htmlFor="title">Title:</label>
        <input name="title" type="text" id="title"></input>
        <label htmlFor="body">Body:</label>
        <input name="body" type="text" id="body"></input>
        <label htmlFor="url">URL:</label>
        <input name="url" type="url" id="homepage"></input>
        <button type="sumbit">Create Post</button>
      </form>
    </div>
  );
}
