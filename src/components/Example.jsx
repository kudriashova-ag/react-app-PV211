import React, { useEffect } from "react";
import "./Example.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementByAmount } from "../slices/counterSlice";
import { createPost, getPosts } from "../thunks/postsThunk";

const Example = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.data);
  const status = useSelector((state) => state.posts.status);
  
  useEffect(() => { 
    dispatch(getPosts());
  }, []);

  const addPost = () => { 
    dispatch(createPost({
      title: 'New post',
      body: 'New body',
    }));
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(incrementByAmount(3))}>+3</button>

      {posts.map(post => <div>{post.title}</div>)}
      
      <button onClick={addPost}>Add post </button>
    </div>
  );
};

export default Example;
