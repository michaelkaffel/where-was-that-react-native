import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from '../../shared/CAMPSITES'

const initialState = {
    campsitesArray: CAMPSITES
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
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
    
});

export const campsitesReducer = campsitesSlice.reducer;
export const { toggleFavoriteCampsite } = campsitesSlice.actions

