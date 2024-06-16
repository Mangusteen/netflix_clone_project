import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      email: null,
      token: null,
      id: null
    }
    // email: null,
    // token: null,
    // id: null
  },
  reducers: {
    setUser: ((state, { payload }) => {
      state.user.email = payload.email,
        state.user.token = payload.token,
        state.user.id = payload.id
    }),
    removeUser: (state => {
      state.user.email = null,
        state.user.token = null,
        state.user.id = null
    })
  }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;