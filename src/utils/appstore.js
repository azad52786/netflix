import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import userReducer from "./userSlice";
import tvShowSlice from "./tvShowSlice";
import trailerSlice from "./trailerSlice";
import movieTabSlice from "./movieTabSlice";
import newmovieSlice from "./newmovieSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    tv : tvShowSlice,
    movietab : movieTabSlice,
    new : newmovieSlice ,
    user: userReducer,
    alltrailer : trailerSlice,
  },
});

export default appStore;