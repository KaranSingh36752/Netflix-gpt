import React, { useEffect } from "react";
import { otherOptions } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utilis/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      otherOptions
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRatedMovies;
