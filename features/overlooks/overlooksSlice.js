import { createSlice } from "@reduxjs/toolkit";
import { OVERLOOKS } from '../../shared/OVERLOOKS';
import { removeCampsite } from "../campsites/campsitesSlice";

const initialState = {
    overlooksArray: OVERLOOKS
}

const overlooksSlice = createSlice({
    name: 'overlooks',
    initialState,
    reducers: {
        addOverlook: (state, action) => {
            const identifier = Math.floor(Math.random() * 1000);

            const newOverlook = {
                id: identifier,
                key: identifier,
                kindOfPlace: 'overlook',
                ...action.payload
            };
            state.overlooksArray.push(newOverlook);
        },
        removeOverlook: (state, action) => {
            state.overlooksArray = state.overlooksArray.filter(
                (overlook) => overlook.id !== action.payload.id
            );
        },
        toggleFavoriteOverlook: (state, action) => {
            const overlook = state.overlooksArray.find(
                (overlook) => overlook.id === action.payload
            );
            if (overlook) {
                overlook.favorite = !overlook.favorite
            }
        }
    },
});


export const overlooksReducer = overlooksSlice.reducer;
export const { addOverlook, removeOverlook, toggleFavoriteOverlook } = overlooksSlice.actions;
