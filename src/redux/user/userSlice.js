import { createSlice } from "@reduxjs/toolkit";

// Create initial state
const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },

        setLoadingFalse: (state) => {
            state.loading = false
        },

        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        userSignedIn: (state, action) => {
                state.loading = false;
                state.error = null;
                state.isLoggedIn = true;
            }        

    }
});

const userReducer = userSlice.reducer;

export const { signInStart, signInSuccess, signInFailure, userSignedIn } = userSlice.actions;
export default userReducer;
