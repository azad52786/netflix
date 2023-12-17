import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
    name : "tvShow" , 
    initialState: {
        popular: null,
        top_rated: null,
        on_the_air : null,
        airing_today: null,
    }, 
    reducers: {
        addtop_ratedtv : (state , action) => {
            state.top_rated = action.payload;
        },
        addpopulartv : (state , action) => {
            state.popular = action.payload;
        },
        addon_the_airtv : (state , action) => {
            state.on_the_air = action.payload;
        },
        addairing_todaytv : (state , action) => {
            state.airing_today = action.payload;
        },
        removeAllTvShowSlice : (state , action) => {
            state.popular= null;
            state.top_rated= null;
            state.on_the_air = null;
            state.airing_today= null;
        }
    }
})

export const {addairing_todaytv , addpopulartv , addon_the_airtv , addtop_ratedtv , removeAllTvShowSlice} = tvShowSlice.actions;

export default tvShowSlice.reducer;