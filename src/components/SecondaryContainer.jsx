import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTvseries from '../hooks/useTvseries';
import lang from '../utilis/languageConstants';

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvseries();
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang)
  return (
    <div className='bg-black'>
    <div className='-mt-28 relative z-20'>
      <MovieList movies={movies?.nowPlayingMovie} title={lang[langKey].subTitle1}/>
      <MovieList movies={movies?.topRatedMovies} title={lang[langKey].subTitle2}/>
      <MovieList movies={movies?.popularMovies} title={lang[langKey].subTitle3}/>
      <MovieList movies={movies?.upcomingMovies} title={lang[langKey].subTitle4}/>
      <MovieList movies={movies?.tvseries} title={lang[langKey].subTitle5}/>
    </div>
    </div>
  )
}

export default SecondaryContainer