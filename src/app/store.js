import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import eventReducer from '../features/eventSlice'
import competitionReducer from '../features/competitionSlice'
import workshopReducer from '../features/workshopSlice'

export default configureStore({
  reducer: {
    users: userReducer,
    events: eventReducer,
    competitions: competitionReducer,
    workshops: workshopReducer,
  },
})