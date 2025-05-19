import { configureStore } from "@reduxjs/toolkit";
import VideosReducer from "./MoviesSlice";
const store = configureStore({
    reducer:{
        Videos : VideosReducer,
    }
})

export default store;