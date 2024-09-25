import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const response = await axios.get('http://localhost:4000/api/posts');
    return response.data;
})

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
    const response = await axios.post('http://localhost:4000/api/posts', post);
    return response.data;
})
