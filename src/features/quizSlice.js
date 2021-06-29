import { createSlice } from '@reduxjs/toolkit'
import { db, storage } from '../config/firebaseConfig'

export const quizSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quiz: null,
  },
  reducers: {
    //create an event
    createQuiz: (state, action) => {

      if(action.payload.image !== ''){
        const upload = storage
          .ref(`quiz/${action.payload.image.name}`)
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
          db.collection('quiz').add({
            title: action.payload.title,
            description: action.payload.description,
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
export const { createQuiz } = quizSlice.actions

export const selectUser = (state) => state.quizzes.quiz

export default quizSlice.reducer