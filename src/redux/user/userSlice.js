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
        },
        
        logoutCurrentUser: (state) => {
            state.loading = false;
            state.currentUser = null;
            state.isLoggedIn = false;
            state.error = null;
        },

        updateCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            state.error = action.payload;
        }
    }
});

const userReducer = userSlice.reducer;

export const { signInStart, signInSuccess, signInFailure, userSignedIn, logoutCurrentUser, updateCurrentUser } = userSlice.actions;
export default userReducer;

