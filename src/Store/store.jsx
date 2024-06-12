import { configureStore } from '@reduxjs/toolkit'
import movieData from './Reducers/movieReducer'
import tvData from './Reducers/TvReducer'
import peopleData from './Reducers/peopleReducer'




export const store = configureStore({
  reducer: {
    movie:movieData,
    tv:tvData,
    people:peopleData
  },
})