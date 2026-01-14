import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchOverlooks = createAsyncThunk(
    'overlooks/fetchOverlooks',
    async () => {
        const response = await fetch(baseUrl + 'overlooks');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        const data = await response.json();
        console.log('overlooks', data);
        return data
    }
);

const overlooksSlice = createSlice({
    name: 'overlooks',
    initialState: {
        isLoading: true,
        errMsg: null,
        overlooksArray: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOverlooks.pending, (state) => {
                state.isLoading = true;
                state.errMsg = null;
            })
            .addCase(fetchOverlooks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = null;
                state.overlooksArray = action.payload;
            })
            .addCase(fetchOverlooks.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed'
            })
    }
});


export const overlooksReducer = overlooksSlice.reducer 