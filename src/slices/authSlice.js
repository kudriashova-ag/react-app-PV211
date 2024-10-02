import { createSlice } from "@reduxjs/toolkit"
import { getAuthUser, login, logout } from "../thunks/authThunk";
import { getToken } from "../utils/token";

const initialState = {
    user: {},
    token: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
        



            .addCase(getAuthUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAuthUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.token = getToken();
            })
            .addCase(getAuthUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
        
            .addCase(logout.fulfilled, (state) => {
                state.user = {};
                state.token = null;
                state.status = 'idle';
                state.error = null;
             })
            
        
     }
})

export default authSlice.reducer