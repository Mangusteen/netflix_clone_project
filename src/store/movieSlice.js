import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_MOVIE } from "../utils/common";

export const getMovie = createAsyncThunk('movie/getMovie', async (movieId, thunkAPI) => {
  try {
    const res = await axios(`${URL_MOVIE}/${movieId}`, {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWVjNTRjNTgzYTRkMDUyM2E0ZDg3NGUxMWIxZjdiYiIsInN1YiI6IjY2NDM2MDI3YzlhODVhYmZiODE4NGJkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0W4JWnq6TOa8h4BOEfKvzlxDBvhHxAg0e8Hx5IE_6-U'
      }
    })
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error);
  }
})
export const getSimilarMovies = createAsyncThunk('movie/getSimilarMovies', async (movieId, thunkAPI) => {
  try {
    const res = await axios(`${URL_MOVIE}/${movieId}/similar`, {
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWVjNTRjNTgzYTRkMDUyM2E0ZDg3NGUxMWIxZjdiYiIsInN1YiI6IjY2NDM2MDI3YzlhODVhYmZiODE4NGJkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0W4JWnq6TOa8h4BOEfKvzlxDBvhHxAg0e8Hx5IE_6-U'
      }
    })
    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error);
  }
})
export const getMovieVideos = createAsyncThunk('movie/getMovieVideo', async (movieId, thunkAPI) => {
  try {
    const res = await axios(`${URL_MOVIE}/${movieId}/videos`, {
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWVjNTRjNTgzYTRkMDUyM2E0ZDg3NGUxMWIxZjdiYiIsInN1YiI6IjY2NDM2MDI3YzlhODVhYmZiODE4NGJkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0W4JWnq6TOa8h4BOEfKvzlxDBvhHxAg0e8Hx5IE_6-U'
      }
    })
    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error);
  }
})

const showLoading = (state) => { state.isLoading = true };
// const stopLoading = (state) => state.isLoading = false;

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: {},
    similarMovies: [],
    videos: [],
    movieId: null,
    isLoading: false,
  },
  reducers: {
    getSingleFilm: (state, { payload }) => {
      state.movieId = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMovie.pending, showLoading),
      builder.addCase(getMovie.fulfilled, (state, { payload }) => {
        state.movie = payload;
        state.isLoading = false;
      }),
      builder.addCase(getMovie.rejected, (state) => {
        state.isLoading = false
      }),
      builder.addCase(getSimilarMovies.pending, showLoading),
      builder.addCase(getSimilarMovies.fulfilled, (state, { payload }) => {
        state.similarMovies = payload;
        state.isLoading = false;
      }),
      builder.addCase(getSimilarMovies.rejected, (state) => {
        state.isLoading = false
      }),
      builder.addCase(getMovieVideos.pending, showLoading),
      builder.addCase(getMovieVideos.fulfilled, (state, { payload }) => {
        state.videos = payload;
        state.isLoading = false;
      }),
      builder.addCase(getMovieVideos.rejected, (state) => {
        state.isLoading = false
      })
  }
});

export const { getSingleFilm } = movieSlice.actions;

export default movieSlice.reducer;