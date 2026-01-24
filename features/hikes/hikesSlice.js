import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchHikes = createAsyncThunk(
    'hikes/fetchHikes',
    async () => {
        const response = await fetch(baseUrl + 'hikes');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.staus);
        }
        const data = await response.json();
        
        return data
    }
)

const hikesSlice = createSlice({
    name: 'hikes',
    initialState: {
        isLoading: true,
        errMsg: null,
        hikesArray: []
    },
    reducers: {
        toggleFavoriteHike: (state, action) => {
            const hike = state.hikesArray.find(
                 (hike) => hike.id === action.payload
            );
            if (hike) {
                hike.favorite = !hike.favorite
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHikes.pending, (state) => {
                state.isLoading = true;
                state.errMsg = null;
            })
            .addCase(fetchHikes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = null;
                state.hikesArray = action.payload
            })
            .addCase(fetchHikes.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            })
    }
});

export const hikesReducer = hikesSlice.reducer;
export const { toggleFavoriteHike } = hikesSlice.actions;

