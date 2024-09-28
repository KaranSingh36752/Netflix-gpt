import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { addPopularMovies } from "../utilis/movieSlice";
import { otherOptions } from "../utilis/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.popularMovies);

  const getNowPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      otherOptions
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !movies && getNowPopularMovies();
  }, []);
};

export default usePopularMovies;
