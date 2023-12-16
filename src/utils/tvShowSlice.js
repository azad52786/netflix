import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
    name : "tvShow" , 
    initialState: {
        popular: null,
        top_rated: null,
        on_the_air : null,
        airing_today: null,
        trailer: []
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
    }
})

export const {addairing_todaytv , addpopulartv , addon_the_airtv , addtop_ratedtv} = tvShowSlice.actions;

export default tvShowSlice.reducer;