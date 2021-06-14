import { createSlice } from '@reduxjs/toolkit'
import { db, storage } from '../../config/firebaseConfig'

export const counterSlice = createSlice({
  name: 'counter',
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
    createProject: (state, action) => {

      if(action.payload.image !== ''){
        const upload = storage
          .ref(`events/${action.payload.image.name}`)
          .put(action.payload.image)
        upload.on("state_changed", 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log(`Progress ${progress}`)
          if(snapshot.state === 'RUNNING'){
            console.log(`Progress ${progress}`)
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL()
          console.log('created project', action.payload)
          db.collection('events').add({
            title: action.payload.title,
            speakerName: action.payload.speakerName,
            speakerDetails: action.payload.speakerDetails,
            eventDescription: action.payload.eventDescription,
            date: action.payload.date,
            image: downloadURL,
          })
        }
        )
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { logout, createProject, login } = counterSlice.actions

export const selectUser = (state) => state.counter.user

export default counterSlice.reducer