import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        const data = await response.json()
        return data;
    }
)


const campsitesSlice = createSlice({
    name: 'campsites',
    initialState: {
        isLoading: true,
        errMsg: null,
        campsitesArray: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampsites.pending, (state) => {
                state.isLoading = true;
                state.errMsg = null;
            })
            .addCase(fetchCampsites.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = null;
                state.campsitesArray = action.payload;
            })
            .addCase(fetchCampsites.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Failed to fetch'
            }); 
    }
});

export const campsitesReducer = campsitesSlice.reducer