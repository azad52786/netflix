import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import userReducer from "./userSlice";
import tvShowSlice from "./tvShowSlice";
import trailerSlice from "./trailerSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    tv : tvShowSlice,
    user: userReducer,
    alltrailer : trailerSlice,
  },
});

export default appStore;