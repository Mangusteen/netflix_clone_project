import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesCategoriesSlice from "./moviesCategoriesSlice";
import moviesListSlice from "./moviesListSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
  reducer: {
    movies: moviesCategoriesSlice,
    user: userSlice,
    moviesList: moviesListSlice,
    movie: movieSlice
  }
});

export default store;