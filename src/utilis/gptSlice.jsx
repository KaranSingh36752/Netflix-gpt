import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState : {
        showGptSearch : false,
        moviesTitle : null,
        moviesList : null,
},
    reducers: {
        toggleGptSearch : (state) =>  {
        state.showGptSearch = !state.showGptSearch
        },
        addGptMovies : (state,action) =>  {
            const {moviesTitle , moviesList} = action.payload;
            state.moviesTitle = moviesTitle;
            state.moviesList = moviesList;
            },
    }
})
export const { toggleGptSearch ,addGptMovies } = gptSlice.actions
export default gptSlice.reducer;