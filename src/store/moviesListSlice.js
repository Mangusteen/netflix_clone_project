import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";


export const addMoviesToFirestore = createAsyncThunk('moviesList/addMoviesToFirestore', async (payload, thunkAPI) => {
  try {
    const movieRef = await addDoc(collection(db, 'movies'), payload);
    // const newMovie = { id: payload.id, backdrop_path: payload.backdrop_path, title: payload.title }
    // {id: payload.id, backdrop_path: payload.backdrop_path, title: payload.title}
    console.log(payload)
    console.log(movieRef)
    // console.log(newMovie)
    return movieRef;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error)
  }
});
const moviesListSlice = createSlice({
  name: 'moviesList',
  initialState: {
    moviesList: [],
    // id: '',
    // backdrop_path: '',
    // title: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addMoviesToFirestore.fulfilled, (state, { payload }) => {
      state.moviesList.push(payload);
      // console.log(moviesList)
      // payload - { id, title, backdrop_path}
    })
  }
})

export default moviesListSlice.reducer;