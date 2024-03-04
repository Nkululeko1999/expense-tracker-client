import { createSlice } from "@reduxjs/toolkit";


//Create initial state
const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        signInStart: (state) => { state.loading = true},
        signInSuccess: (state, action) => {
            state.currentUser = action.payload,
            state.loading = false,
            state.error = null
        },
        signInFailure: (state, action) => {
            state.error = action.payload,
            state.loading = false
        }
    }
});

const userReducer = userSlice.reducer

export const {signInStart, signInSuccess, signInFailure} = userSlice.actions;
export default userReducer;