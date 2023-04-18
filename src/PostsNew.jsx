export function PostsNew() {
  return (
    <div>
      <h1>New post</h1>
      <form>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title"></input>
        <label for="body">Body:</label>
        <input type="text" id="body" name="body"></input>
        <label for="url">URL:</label>
        <input type="url" id="homepage" name="homepage"></input>
      </form>
    </div>
  );
}
