import React, { useEffect } from "react";
import { otherOptions } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utilis/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      otherOptions
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcomingMovies;
