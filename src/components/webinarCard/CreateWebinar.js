import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../config/firebaseConfig";
import { createProject, logout } from "../../features/counter/counterSlice";

import "./createWebinar.css";

function CreateWebinar() {
  const [shareImage, setShareImage] = useState()
  const [state, setState] = useState({
    title: "",
    speakerName: "",
    speakerDetails: "",
    eventDescription: "",
    date: "",
    image: null,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const handleImage = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.files[0],
    });
    setShareImage(e.target.files[0])
  };

  const signout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        console.log("signout successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(state));
  };
  return (
    <div className="container">
      <button className="signout" onClick={signout}>
        Signout
      </button>
      <h2 className="Title">Add a New Event</h2>
      <form className="form-create" onSubmit={handleSubmit}>
        <div className="left">
          <div className="input-field">
            <label htmlFor="title">Event Title</label>
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="title"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="speakerName">Speaker Name</label>
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="speakerName"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="speakerDetails">Speaker Details</label>
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="speakerDetails"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="eventDescription">Event Description</label>
            <textarea
              id="eventDescription"
              className="input text-area"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <label htmlFor="date">Date</label>
            <input
              className="input"
              type="date"
              id="date"
              onChange={handleChange}
            />
          </div>
          
        </div>
        <div className="right">
          <div className="input-field">
            <label htmlFor="image">image</label>
            <input
              type="file"
              className="input image"
              id="image"
              onChange={handleImage}
            />
          </div>
          {shareImage && <img src={URL.createObjectURL(shareImage)} alt='pic'/>}
          <div>
            <button className="create-button">Create</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default CreateWebinar;
