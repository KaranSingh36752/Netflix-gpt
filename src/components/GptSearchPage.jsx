import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchPage = () => {
  const { moviesTitle, moviesList } = useSelector((store) => store.gpt);
  // if(!moviesTitle) return null;
  return (
    <div className="bg-gradient-to-b from-black to-slate-900  w-screen h-full"> 
      <div className=" text-white pt-36 z-10 ">
        {moviesTitle ? (
          moviesTitle.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={moviesList[index]}
            />
          ))
        ) : (
          <h1 className="text-white">Loading.....</h1>
        )}
      </div>
    </div>
  );
};

export default GptSearchPage;
