import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  },
});

export default appStore;