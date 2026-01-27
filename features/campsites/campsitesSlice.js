import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from '../../shared/CAMPSITES'

const initialState = {
    campsitesArray: CAMPSITES
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {
        addCampsite: (state, action) => {
            const identifier = Math.floor(Math.random() * 1000);

            const newCampsite = {
                id: identifier,
                key: identifier,
                kindOfPlace: 'campsite',
                ...action.payload
            };
            state.campsitesArray.push(newCampsite);
            
        },
        removeCampsite: (state, action) => {
            state.campsitesArray = state.campsitesArray.filter(
                (campsite) => campsite.id !== action.payload.id
            )
        },
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
export const { addCampsite, removeCampsite, toggleFavoriteCampsite } = campsitesSlice.actions

