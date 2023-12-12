import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
const appStore = configureStore({
    reducer:{
        movies : moviesSlice,
    }
})


export default appStore;