import React, { useEffect } from "react";
import { options} from "../utilis/constant";
import { useDispatch } from "react-redux";
import { addTvseries } from "../utilis/movieSlice";

const useTvseries = () => {
  const dispatch = useDispatch();

  const getTvseries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
      options
    );
    const json = await data.json();
    dispatch(addTvseries(json.results));
  };
  useEffect(() => {
    getTvseries();
  }, []);
};

export default useTvseries;