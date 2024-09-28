import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
      nowPlayingMovie: null,
      moviesTrailer : null,
      popularMovies : null,
      topRatedMovies : null,
      upcomingMovies : null,
      tvseries : null,
    },
    reducers: {
      addNowPlayingMovie: (state, action) => {
        state.nowPlayingMovie = action.payload;
      },
      addMoviesTrailer : (state,action) => {
        state.moviesTrailer = action.payload;
      },
      addPopularMovies : (state,action) => {
        state.popularMovies = action.payload;
      },
      addTopRatedMovies : (state, action) => {
        state.topRatedMovies = action.payload
      },
      addUpcomingMovies : (state,action) => {
        state.upcomingMovies = action.payload;
      },
      addTvseries : (state,action) => {
        state.tvseries = action.payload;
      }

    },
  });
  
  export const { addNowPlayingMovie , addMoviesTrailer, addPopularMovies ,addTopRatedMovies ,addUpcomingMovies ,addTvseries } = movieSlice.actions;
  export default movieSlice.reducer;
  