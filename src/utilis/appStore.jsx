import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import langReducer from "./configSlice";
const appstore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt : gptReducer,
        config: langReducer,
    },
})
export default appstore;