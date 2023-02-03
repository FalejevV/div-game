import { configureStore } from '@reduxjs/toolkit'
import divData from './slices/divData'
import userData from './slices/userData'
import helperData from './slices/helperData'

export const store = configureStore({
  reducer: {
    divData,
    userData,
    helperData
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
