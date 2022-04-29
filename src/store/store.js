import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './reducers/jobSlice'

export default configureStore({
  reducer: {
    jobs: jobsReducer.reducer,
  },
})
