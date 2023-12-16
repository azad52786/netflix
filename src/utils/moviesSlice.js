import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        now_playing : null,
        popular: null,
        top_rated: null,
        upcoming: null,
    },
    reducers : {
        addnow_playingmovies : (state , action) => {
            state.now_playing = action.payload;
        },
        addpopularmovies : (state , action) => {
            state.popular = action.payload;
        },
        addtop_ratedmovies : (state , action) => {
            state.top_rated = action.payload;
        },
        addupcomingmovies : (state , action) => {
            state.upcoming = action.payload;
        },
    }
})
export const {addupcomingmovies , addtop_ratedmovies , addpopularmovies, addnow_playingmovies} = moviesSlice.actions;
export default moviesSlice.reducer;