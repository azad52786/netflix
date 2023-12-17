import { createSlice } from "@reduxjs/toolkit";

const trailerSlice = createSlice({
    name : "AllTrailer",
    initialState : {
        HomeTrailer : null,
        TvShowTrailer : null,
        MovieTrailer : null,
        NewTrailer : null,
    },
    reducers : {
        addhometrailer: (state , action) => {
            state.HomeTrailer = action.payload;
        },
        addtvshowtrailer : (state , action) => {
            state.TvShowTrailer = action.payload;
        },
        addmovietrailer : (state ,aciton) => {
            state.MovieTrailer = aciton.payload;
        },
        removehometrailer : (state , action) => {
            state.HomeTrailer = [];
        },
        addnewtrailer : (state ,aciton) => {
            state.NewTrailer = aciton.payload;
        },
        removenewtrailer : (state , action) => {
            state.NewTrailer = [];
        },
        removetvshowtrailer :(state , action) => {
            state.TvShowTrailer = [];
        },
        removemovietrailer : (state , action) => {
            state.MovieTrailer = [];
        },
        removeAllTrailerSlice : (state , action) =>{
            state.HomeTrailer = null;
            state.TvShowTrailer = null;
            state.MovieTrailer = null;
            state.NewTrailer = null;
        },
    }
})


export const {addhometrailer , addtvshowtrailer , removehometrailer , removetvshowtrailer , addmovietrailer , removemovietrailer , addnewtrailer , removenewtrailer , removeAllTrailerSlice} = trailerSlice.actions;
export default trailerSlice.reducer;