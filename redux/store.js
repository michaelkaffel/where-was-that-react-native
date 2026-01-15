import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { hikesReducer } from "../features/hikes/hikesSlice";
import { overlooksReducer } from "../features/overlooks/overlooksSlice";


export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        hikes: hikesReducer,
        overlooks: overlooksReducer
    }
})