import { createSlice } from "@reduxjs/toolkit";

// Create initial state
const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    signedIn: false,
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
                state.loading = true;
                state.error = null;
                state.signedIn = true;
            }        

    }
});

const userReducer = userSlice.reducer;

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
export default userReducer;
