import { createAsyncThunk } from "@reduxjs/toolkit";

import {registerUserApi} from "../../shared/api/auth-api";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (payload, {rejectWithValue})=> {
        const {data, error} = await registerUserApi(payload);
        if(data) return data;
        return rejectWithValue(error?.response?.data?.message || error?.message);
    }
)