import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCESS_TOKEN, URL_MOVIES_NOWPLAING, URL_MOVIES_POPULAR, URL_MOVIES_TOPRATED, URL_MOVIES_UPCOMING } from "../utils/common";

export const getPopularMovies = createAsyncThunk('movies/getPopularMovies', async (_, thunkAPI) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${URL_MOVIES_POPULAR}`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });
    // console.log(res.data.results)
    return res.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getUpcomingMovies = createAsyncThunk('movies/getUpcomingMovies', async (_, thunkAPI) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${URL_MOVIES_UPCOMING}`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });
    // console.log(res.data.resuls)
    return res.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getTopRatedMovies = createAsyncThunk('movies/getTopRatedMovies', async (_, thunkAPI) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${URL_MOVIES_TOPRATED}`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });
    // console.log(res.data.results)
    return res.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getNowPlayingMovies = createAsyncThunk('movies/getNowPlayingMovies', async (_, thunkAPI) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${URL_MOVIES_NOWPLAING}`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });
    // console.log(res.data.results)
    return res.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});


const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
    upcomingMovies: [],
    topratedMovies: [],
    nowplayingMovies: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularMovies.fulfilled, (state, { payload }) => {
      state.popularMovies = payload;
    }),
      builder.addCase(getUpcomingMovies.fulfilled, (state, { payload }) => {
        state.upcomingMovies = payload;
      }),
      builder.addCase(getTopRatedMovies.fulfilled, (state, { payload }) => {
        state.topratedMovies = payload;
      }),
      builder.addCase(getNowPlayingMovies.fulfilled, (state, { payload }) => {
        state.nowplayingMovies = payload;
      })
  }
});

export default moviesSlice.reducer;