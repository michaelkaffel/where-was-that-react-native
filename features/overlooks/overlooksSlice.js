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
    reducers: {
        toggleFavoriteOverlook: (state, action) => {
            const overlook = state.overlooksArray.find(
                (overlook) => overlook.id === action.payload
            );
            if (overlook) {
                overlook.favorite = !overlook.favorite
            }
        }
    },
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


export const overlooksReducer = overlooksSlice.reducer;
export const { toggleFavoriteOverlook } = overlooksSlice.actions;
