import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
      nowPlayingMovie: null,
      moviesTrailer : null,
    },
    reducers: {
      addNowPlayingMovie: (state, action) => {
        state.nowPlayingMovie = action.payload;
      },
      addMoviesTrailer : (state,action) => {
        state.moviesTrailer = action.payload;
      }
    },
  });
  
  export const { addNowPlayingMovie , addMoviesTrailer } = movieSlice.actions;
  export default movieSlice.reducer;
  