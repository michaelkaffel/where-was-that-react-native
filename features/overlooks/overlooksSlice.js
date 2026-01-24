import { createSlice } from "@reduxjs/toolkit";
import { OVERLOOKS } from '../../shared/OVERLOOKS';

const initialState = {
    overlooksArray: OVERLOOKS
}

const overlooksSlice = createSlice({
    name: 'overlooks',
    initialState,
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
});


export const overlooksReducer = overlooksSlice.reducer;
export const { toggleFavoriteOverlook } = overlooksSlice.actions;
