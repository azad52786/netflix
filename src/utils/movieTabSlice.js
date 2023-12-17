import { createSlice } from "@reduxjs/toolkit";

const movieTabSlice = createSlice({
    name : "movieTabSlice",
    initialState : {
        popular : null,
    },
    reducers : {
        addpopulermovietab : (state , action) => {
            state.popular = action.payload;
        },
        removepopulermovietab : (state , action) => {
            state.popular = [];
        },
        removeWholeMovieTabSlice : (state , action) => {
            state.popular = null;
        }
    }
})


export const { addpopulermovietab , removepopulermovietab , removeWholeMovieTabSlice } = movieTabSlice.actions;
export default movieTabSlice.reducer;