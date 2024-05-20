import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidata } from '../utils/Validate'

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)

    document.title = isSignIn ? "NetFlix | Sign in" : "NetFlix | Sign up"

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handleBtnClick = () => {
        const message = checkValidata(email.current.value, password.current.value);
        setErrorMsg(message)
    }


    const toggleButton = () => {
        setIsSignIn(!isSignIn)
    }

    return (
        <div className='relative text-white font-semibold'>
            <Header />
            <img className='w-screen h-screen' src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 h-fit rounded-md flex flex-col  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black  bg-opacity-70 '>
                <h1 className='font-semibold p-5 text-2xl'>{isSignIn ? "Sign in" : "Sign up"}</h1>
                {!isSignIn && <input
                    type="text"
                    ref={name}
                    placeholder="Enter your Fullname "
                    className="p-4 my-3 border-gray-700 w-full bg-gray-700"
                />}
                <input
                    ref={email}
                    type="text"
                    placeholder="Enter your Email "
                    className="p-4 my-3 border-gray-700 w-full bg-gray-700"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Enter your Password"
                    className="p-4 my-3 w-full bg-gray-700"
                />
                <p className='text-red-500 p-2 font-bold'>{errorMsg } </p>
                <button onClick={handleBtnClick} className="p-4 my-5 bg-red-700 font-bold text-lg w-full rounded-lg">{isSignIn ? "Sign in" : "Sign up"} </button>
                <p onClick={toggleButton} className='p-x-3 cursor-pointer text-red-600 ml-7 mb-5 font-semibold'>
                    {isSignIn ? "New to Netflix? Sign Up Now" : "Already Registered , Sign In!"}
                </p>
            </form>
        </div>
    )
}

export default Login