import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { createProject } from '../../features/counter/counterSlice'



function CreateWebinar() {
  const [state, setState] = useState(
    {
      title: '',
      speakerName: '',
      speakerDetails: '',
      eventDescription: '',
      date: '',
      image: null,
    }
  )
  const dispatch = useDispatch()

  
  const handleChange = (e) => {
    
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }
  const handleImage = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.files[0]
    })
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(state))
  }
  return (
    <div>
      <div className="container">
         <form className="white" onSubmit={handleSubmit}>
           <h5 className="grey-text text-darken-3">Create a New Project</h5>
           <div className="input-field">
             <input type="text" id='title' onChange={handleChange} />
             <label htmlFor="title">Event Title</label>
           </div>
           <div className="input-field">
             <input type="text" id='speakerName' onChange={handleChange} />
             <label htmlFor="speakerName">Speaker Name</label>
           </div>
           <div className="input-field">
             <input type="text" id='speakerDetails' onChange={handleChange} />
             <label htmlFor="speakerDetails">Speaker Details</label>
           </div>
           <div className="input-field">
             <textarea id="eventDescription" className="materialize-textarea" onChange={handleChange}></textarea>
             <label htmlFor="eventDescription">Event Description</label>
           </div>
           <div className="input-field">
             <input type="date" id='date' onChange={handleChange} />
             <label htmlFor="date">Date</label>
           </div>
           <div className="input-field">
             <input type="file" id='image' onChange={handleImage} />
             <label htmlFor="image">image</label>
           </div> 
           {/* {shareImage && <img src={URL.createObjectURL(shareImage)} alt='pic'/>} */}
           <div className="input-field">
             <button className="btn pink lighten-1">Create</button>
           </div>
         </form>
       </div>
    </div>
  )
}

export default CreateWebinar
