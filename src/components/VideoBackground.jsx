import React, { useEffect } from "react";
import { options } from "../utilis/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesTrailer } from "../utilis/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ Movie_ID }) => {
    const TrailerID = useSelector(store => store.movies?.moviesTrailer)
 useMovieTrailer(Movie_ID)

  return (
    <div className="">
      {
        <iframe
        className="w-full h-[700px] "
          src={`https://www.youtube.com/embed/${TrailerID?.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      }
    </div>
  );
};

export default VideoBackground;
