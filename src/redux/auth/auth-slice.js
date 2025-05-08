import { createSlice } from "@reduxjs/toolkit";

import { registerUser } from "./auth-thunks";

import { pending, rejected } from "../../shared/lib/redux";

const initialState = {
    user: null,
    token: null,
    loading: null,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, pending)
            .addCase(registerUser.rejected, rejected)
            .addCase(registerUser.fulfilled, (store)=> {
                store.loading = false;
                store.success = true;
            })
    }
});

export default authSlice.reducer;