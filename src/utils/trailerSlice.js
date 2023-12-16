import { createSlice } from "@reduxjs/toolkit";

const trailerSlice = createSlice({
    name : "AllTrailer",
    initialState : {
        HomeTrailer : null,
        TvShowTrailer : null
    },
    reducers : {
        addhometrailer: (state , action) => {
            state.HomeTrailer = action.payload;
        },
        addtvshowtrailer : (state , action) => {
            state.TvShowTrailer = action.payload;
        },
        removehometrailer : (state , action) => {
            state.HomeTrailer = [];
        },
        removetvshowtrailer :(state , action) => {
            state.TvShowTrailer = [];
        }
    }
})


export const {addhometrailer , addtvshowtrailer , removehometrailer , removetvshowtrailer} = trailerSlice.actions;
export default trailerSlice.reducer;