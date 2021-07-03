import { createSlice } from "@reduxjs/toolkit";
import { db, storage } from "../config/firebaseConfig";

export const workshopSlice = createSlice({
  name: "workshops",
  initialState: {
    workshop: null,
  },
  reducers: {
    //create an event
    createWorkshop: (state, action) => {
      if (action.payload.image !== "") {
        const upload = storage
          .ref(`workshops/${action.payload.image.name}`)
          .put(action.payload.image);
        upload.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Progress ${progress}`);
            if (snapshot.state === "RUNNING") {
              console.log(`Progress ${progress}`);
            }
          },
          (error) => console.log(error.code),
          async () => {
            function join(t, a, s) {
              function format(m) {
                let f = new Intl.DateTimeFormat("en", m);
                return f.format(t);
              }
              return a.map(format).join(s);
            }

            const date = new Date(action.payload.date);
            const format = [
              { day: "numeric" },
              { month: "short" },
              { year: "numeric" },
            ];
            const formattedDate = join(date, format, " ");
            const downloadURL = await upload.snapshot.ref.getDownloadURL();
            console.log("created project", action.payload);
            db.collection("workshops").add({
              title: action.payload.title,
              Project1: action.payload.Project1,
              Project2: action.payload.Project2,
              description: action.payload.description,
              date: formattedDate,
              image: downloadURL,
            });
          }
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { createWorkshop } = workshopSlice.actions;

export const selectUser = (state) => state.workshops.workshop;

export default workshopSlice.reducer;
