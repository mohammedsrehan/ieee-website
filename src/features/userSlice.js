import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { logout, login } = userSlice.actions

export const selectUser = (state) => state.users.user

export default userSlice.reducer