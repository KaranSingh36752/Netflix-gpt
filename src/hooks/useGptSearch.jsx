import axios from "axios";
import { GENAI_KEY, otherOptions } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utilis/gptSlice";

const useGptSearch = () => {
  const dispatch = useDispatch();
  // Function for handling the GET request using Axios
  const searchMovieTMBD = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1}",
      otherOptions
    );
    const json = await data.json();
    console.log(json.results);
    return json.results;
  };

  // Function for handling GPT search based on the input text
  const handleGptSearchClick = async (searchText) => {
    const response = await axios({
      method: "POST",
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GENAI_KEY}`,
      data: {
        contents: [
          {
            parts: [
              {
                text:
                  "Act as a Movie Recommendation system and suggest some movies for the query: " +
                  searchText +
                  ". Only give the names of 5 movies, comma-separated like example result: Godfather, Avengers, Matrix, etc.",
              },
            ],
          },
        ],
      },
    });

    const gptResults =
      response.data.candidates[0].content.parts[0].text.split(",");
    console.log(gptResults);

    const promiseArray = gptResults.map((movie) => searchMovieTMBD(movie));
    const tmbdResults = await Promise.all(promiseArray);
    console.log(tmbdResults);
    dispatch(
      addGptMovies({ moviesTitle: gptResults, moviesList: tmbdResults })
    );
  };

  return { handleGptSearchClick };
};

export default useGptSearch;
