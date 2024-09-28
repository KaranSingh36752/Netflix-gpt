import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovie);
  if (!movies) return;

  //console.log(movies);
const {id ,title,overview, } = movies[2];
  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground Movie_ID={id}/>
    </div>
  );
};

export default MainContainer;
