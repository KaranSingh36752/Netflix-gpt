import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  usePlayingMovies();

  return (
    <div className="">
      <Header />
      {!showGptSearch ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <GptSearchPage />
      )}
    </div>
  );
};

export default Browse;
