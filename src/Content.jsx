import axios from "axios";
import { useEffect, useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostShow } from "./PostShow";
import { SignUp } from "./SignUp";
import { Login } from "./Login";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(function (response) {
      console.log(response);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http;//localhost:3000/posts.json", params).then((response) => {
      console.log(response);
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (params, id) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      console.log(response.data);
      setCurrentPost(response.data);
      setPosts(
        posts.map((recipe) => {
          if (recipe.id === response.data.id) {
            return response.data;
          } else {
            return recipe;
          }
        })
      );
    });
  };

  useEffect(handleIndexPosts, []);
  return (
    <div>
      <SignUp />
      <Login />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostShow post={currentPost} onUpdateShowPost={handleShowPost} />
      </Modal>
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
    </div>
  );
}
