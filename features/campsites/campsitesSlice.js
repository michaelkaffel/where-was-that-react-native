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

export const patchFavCampsite = createAsyncThunk(
    'campsites/patchFavCampsite',
    async ( campsite ) => {
        const response = await fetch(baseUrl + 'campsites/' + campsite.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ favorite: !campsite.favorite})
        });
        if (!response.ok) {
            return Promise.reject('Unable to update favorite, status: ' + response.status)
        };
        return await response.json()
        
    }
)


const campsitesSlice = createSlice({
    name: 'campsites',
    initialState: {
        isLoading: true,
        errMsg: null,
        campsitesArray: []
    },
    reducers: {
        toggleFavoriteCampsite: (state, action) => {
            const campsite = state.campsitesArray.find(
                (campsite) => campsite.id === action.payload
            );
            if (campsite) {
                campsite.favorite = !campsite.favorite
            }
        }
    },
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
            })
            .addCase(patchFavCampsite.fulfilled, (state, action) => {
                const updated = action.payload;
                const campsite = state.campsitesArray.find(
                    (campsite) => campsite.id === updated.id
                )
                if (campsite) {
                    campsite.favorite = updated.favorite;
                }
            }) 
    }
});

export const campsitesReducer = campsitesSlice.reducer;
export const { toggleFavoriteCampsite } = campsitesSlice.actions

