import axios from "axios";
import { useEffect, useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostShow } from "./PostShow";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(function(response) {
      console.log(response);
      setPosts(response.data);
    });
  };

  const handleShowPost = post => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = params => {
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response);
      window.location.href = "/";
    });
  };

  const handleUpdatePost = (params, id) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then(response => {
      console.log(response.data);
      setCurrentPost(response.data);
      setPosts(
        posts.map(recipe => {
          if (recipe.id === response.data.id) {
            return response.data;
          } else {
            return recipe;
          }
        })
      );
    });
  };

  const handleDeletePost = post => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then(response => {
      console.log(response.data);
      setPosts(posts.filter(r => r.id !== post.id));
      handleClose();
    });
  };

  useEffect(handleIndexPosts, []);
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postsnew" element={<PostsNew onCreatePost={handleCreatePost} />} />
        <Route path="/posts" element={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
        <Route path="/" element={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
      </Routes>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostShow post={currentPost} onUpdatePosts={handleUpdatePost} onDeletePost={handleDeletePost} />
      </Modal>
    </div>
  );
}
