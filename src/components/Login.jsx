import React, { useRef } from 'react'
import Profile from './Profile';
const Login = () => {
    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem('emailData');
    const getPass = localStorage.getItem('passwordData');

    const submitHandler = () => {
        if (email.current.value == "test@ducat.com" && password.current.value == "123456") {

            localStorage.setItem("emailData", email);
            localStorage.setItem("passwordData", password);
        }
    }
    return (
        <div>
            {
                getEmail && getPass ?
                    <Profile /> :
                    <form onSubmit={submitHandler}>
                        <input type="email" placeholder='Enter Email Id' ref={email} />
                        <input type='password' placeholder='Enter Password' ref={password} />
                        <button>Login Now</button>
                    </form>
            }
        </div>
    )
}

export default Login