import React, { useEffect, useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="p-6">
      <h1 className="-mx-1 text-white text-3xl mb-2 font-bold">{title}</h1>
      <div
        className="movie-list py-3 flex overflow-x-scroll scrollbar-hide"
      >
        <div className="flex gap-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} moviePoster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
