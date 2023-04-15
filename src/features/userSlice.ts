import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '../utilities/store'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 0,
    name: "Anonymous",
    role: "",
    image: "",
    isAuthenticated: false
  },
  reducers: {
    login: (state) => {
      state.id = 10
      state.name = "Thanos"
      state.role = "Villain"
      state.image = "/avatars/thanos.gif"
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.id = 0
      state.name = "Anonymous"
      state.role = ""
      state.image = ""
      state.isAuthenticated = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export const userReducer = userSlice.reducer

export const useUserSelector = () => {
  const selector = useSelector((state: RootState) => state.user)
  return selector
}