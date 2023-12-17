import { createSlice } from "@reduxjs/toolkit";

const newmovieSlice = createSlice({
    name : "newmovieSlice",
    initialState : {
        now_playing : null,
        upcoming : null, 
    },
    reducers : {
        addnewnow_playingmovies : (state , action) => {
            state.now_playing = action.payload;
        } ,
        addnewupcomingmovies : (state , action) => {
            state.upcoming = action.payload;
        },
        removenewnow_playingmovies : (state , action) => {
            state.now_playing = [];
        },
        removenewupcomingmovies : (state , action) => {
            state.upcoming = [];
        },
        removeWholeNewMovieSlice : (state , action) => {
            state.upcoming = null;
            state.now_playing = null; 
        }
    }
})

export const {addnewnow_playingmovies ,addnewupcomingmovies , removenewnow_playingmovies , removenewupcomingmovies , removeWholeNewMovieSlice} = newmovieSlice.actions;

export default newmovieSlice.reducer;