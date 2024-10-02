import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken, removeToken, setToken } from "../utils/token";

export const login = createAsyncThunk('auth/login', async (data) => {
    const response = await axios.post('http://localhost:4000/api/login', data);
    setToken(response.data.token);
    return response.data;
});


export const getAuthUser = createAsyncThunk('auth/getAuthUser', async () => {
    const response = await axios.get('http://localhost:4000/api/auth-user', {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
})

export const logout = createAsyncThunk('auth/logout', async () => { 
    removeToken();
})