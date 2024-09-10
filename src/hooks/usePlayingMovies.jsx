import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utilis/movieSlice";
import { options } from "../utilis/constant";

const usePlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPLayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPLayingMovies();
  }, []);
};

export default usePlayingMovies;
