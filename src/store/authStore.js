import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authToken: "",
    id: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.authToken = action.payload.token;
            state.id = action.payload.id;
        },

        logout: (state) => {
            state.loggedIn = false;
        }
    } 
})

export const actions = authSlice.actions;

export default authSlice.reducer;