import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../config/firebaseConfig";
import { logout } from "../../features/userSlice";
import { createWorkshop } from "../../features/workshopSlice";

import "./CreateWorkshop.css";

const CreateWorkshop = () => {
  const [shareImage, setShareImage] = useState();
  const [state, setState] = useState({
    title: "",
    Project1: "",
    Project2: "",
    description: "",
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
    setShareImage(e.target.files[0]);
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
    dispatch(createWorkshop(state));
  };

  return (
    <div className="container">
      <button className="signout" onClick={signout}>
        Signout
      </button>
      <h2 className="Title">Add a New Competition</h2>
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
            <label htmlFor="speakerDetails">Project 1</label>
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="Project1"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="speakerDetails">Project 2</label>
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="Project2"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="speakerDetails">Description</label>
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="description"
              onChange={handleChange}
            />
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
              accept=".png, .jpeg, .webp, .svg"
              className="input image"
              id="image"
              onChange={handleImage}
            />
          </div>
          {shareImage && (
            <img src={URL.createObjectURL(shareImage)} alt="pic" />
          )}
          <div>
            <button className="create-button">Create</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateWorkshop;
