import { configureStore } from '@reduxjs/toolkit'
import divData from './slices/divData'

export const store = configureStore({
  reducer: {
    divData
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
