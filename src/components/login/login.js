import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { auth } from '../../config/firebaseConfig'
import { login } from '../../features/counter/counterSlice'


import './style.css'

function Login() {
    const dispatch = useDispatch()
    let history = useHistory()
    
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const logins = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
            }))
        })
        .catch((error) => alert(error))

        history.replace("/");
      };
    const onInputChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <form onSubmit={logins} className='form'>
                  <div className="form-group">
                  <label htmlFor="email">Email</label>
                    <input
                      className="input"
                      name="email"
                      placeholder="Enter Your E-mail"
                      value={userInfo.email}
                      onChange={onInputChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                  <label htmlFor="password">Password:</label>
                    <input
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      value={userInfo.password}
                      onChange={onInputChange}
                    />
                  </div>
                  <button className="button">
                    Login
                  </button>
                </form>
        </div>
    )
}

export default Login
