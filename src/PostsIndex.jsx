import { useState } from "react";
export function PostsIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1>All posts</h1>
      Search filter{" "}
      <input type="text" list="titles" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id}>{post.title}</option>
        ))}
      </datalist>
      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id} className="posts">
            <h2>{post.title}</h2>
            <img src={post.image} />
            <p>{post.chef}</p>
            <button onClick={() => props.onShowPost(post)}>More Info!</button>
          </div>
        ))}
    </div>
  );
}
