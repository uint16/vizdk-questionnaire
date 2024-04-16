import { configureStore } from '@reduxjs/toolkit'
import userResponseReducer from "./responseSlice"
const store = configureStore({
  reducer: {
    userResponses: userResponseReducer,
  },
  devTools: false
})

export default store