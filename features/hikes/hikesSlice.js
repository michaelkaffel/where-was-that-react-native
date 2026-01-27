import { createSlice } from "@reduxjs/toolkit";
import { HIKES } from '../../shared/HIKES'

const initialState = {
    hikesArray: HIKES
}

const hikesSlice = createSlice({
    name: 'hikes',
    initialState,
    reducers: {
        addHike: (state, action) => {
            const identifier = Math.floor(Math.random() * 1000);

            const newHike = {
                id: identifier,
                key: identifier,
                kindOfPlace: 'hike',
                ...action.payload
            };
            state.hikesArray.push(newHike);
            console.log(state.campsitesArray)
        },
        removeHike: (state, action) => {
            state.hikesArray = state.hikesArray.filter(
                (hike) => hike.id !== action.payload.id
            )
        },
        toggleFavoriteHike: (state, action) => {
            const hike = state.hikesArray.find(
                 (hike) => hike.id === action.payload
            );
            if (hike) {
                hike.favorite = !hike.favorite
            }
        }
    }
});

export const hikesReducer = hikesSlice.reducer;
export const { addHike, removeHike, toggleFavoriteHike } = hikesSlice.actions;

