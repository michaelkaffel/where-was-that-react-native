import { createSlice } from "@reduxjs/toolkit";
import { HIKES } from '../../shared/HIKES'

const initialState = {
    hikesArray: HIKES
}

const hikesSlice = createSlice({
    name: 'hikes',
    initialState,
    reducers: {
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
export const { toggleFavoriteHike } = hikesSlice.actions;

