import axios from "axios";
import { useEffect, useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(function (response) {
      console.log(response);
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts, []);
  return (
    <div>
      <Modal show={false}>
        <p>TEST</p>
      </Modal>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
