import { useDispatch ,useSelector } from 'react-redux';
import { options } from '../utilis/constant';
import { addMoviesTrailer } from '../utilis/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (Movie_ID) => {
    const dispatch = useDispatch();
    //const [trailerID, setTrailerID] = useState(null);
  
    const getVideoBg = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${Movie_ID}/videos?language=en-US`,
        options
      );
      const json = await data.json();
  
      const filterVideo = json.results.filter(
        (video) => video.type === "Trailer"
      );
  
      // If no trailer found, use the first video
      const trailer = filterVideo.length === 0 ? json.results[0] : filterVideo[0];
      //console.log(trailer);
  
      //     if (trailer) {
      //       setTrailerID(trailer.key);
      //     }
      dispatch(addMoviesTrailer(trailer));
    };
  
    useEffect(() => {
      if (Movie_ID) {
        getVideoBg();
      }
    }, [Movie_ID]);
}

export default useMovieTrailer