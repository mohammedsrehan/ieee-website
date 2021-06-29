import { createSlice } from '@reduxjs/toolkit'
import { db, storage } from '../config/firebaseConfig'

export const competitionSlice = createSlice({
  name: 'competitions',
  initialState: {
    competition: null,
  },
  reducers: {
    //create a competition
    createCompetition: (state, action) => {

      if(action.payload.image !== ''){
        const upload = storage
          .ref(`competitions/${action.payload.image.name}`)
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
          console.log('created competition', action.payload)
          db.collection('competitions').add({
            title: action.payload.title,
            subTitle: action.payload.subTitle,
            Details1: action.payload.Details1,
            Details2: action.payload.Details2,
            Details3: action.payload.Details3,
            date: action.payload.date,
            image: downloadURL,
          })
        }
        )
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { createCompetition } = competitionSlice.actions

export const selectUser = (state) => state.competitions.competition

export default competitionSlice.reducer