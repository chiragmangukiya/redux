import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Compo/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})