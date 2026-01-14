import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { hikesReducer } from "../features/hikes/hikesSlice";


export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        hikes: hikesReducer
    }
})