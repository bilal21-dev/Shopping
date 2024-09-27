import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { CgProfile } from "react-icons/cg";



const Login = () => {
    const [username, setUsername] = useState(() => {
        return (localStorage.getItem("un")) || " ";
    })
    const [pass, setPass] = useState("")
    const [profile, setProfile] = useState(() => {
        return JSON.parse(localStorage.getItem("profile")) || false;
    })
    const { setLogin } = useAuth()
    // const navigate = useNavigate();
    const handleChange2 = (e) => {
        e.preventDefault();
        if (username !== "" && pass !== "") {
            setLogin(true);
            localStorage.setItem("loginstate", true);
            localStorage.setItem("un", username);
            setProfile(true)
            localStorage.setItem("profile", true);

            alert("Login Successfully")
        }
        else {
            alert("Enter complete information")
        }
    }
    // useEffect(() => {
    //     window.onbeforeunload = () => {
    //         localStorage.removeItem("profile"); // Clear the specific item from localStorage
    //     };
    // }, []);

    const logout = () =>{
        localStorage.removeItem("profile")
        localStorage.removeItem("loginstate")
        localStorage.removeItem("un")

        setProfile(false);
        setLogin(false)
        alert("Logout successfully")
    }
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            {/* Conditionally render login form or profile div based on the 'profile' state */}
            {!profile ? (
                <div className="bg-gradient-to-r from-blue-700 to-red-600 p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-black">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-black">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                type="button"
                                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
                                onClick={handleChange2}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className='flex'>
                    <div className="bg-slate-100 border border-b text-white p-8 rounded-lg shadow-md max-w-md flex flex-col gap-9 inset-0 absolute mt-[70px] ml-[28px] w-[300px] h-screen">
                        <div className='text-black flex justify-center align-middle text-8xl'>
                            <CgProfile />
                            <p className='text-3xl ml-4 mt-2'>Hi {username} !</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-black text-xl underline'>Profile Details</h1>
                            <ul className='text-black'>
                                <li>Change Email</li>
                                <li>Change Password</li>
                                <li>Security & Privacy</li>
                                <li>Preference</li>
                                <button onClick={logout}>Logout</button>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-slate-100 h-screen mt-[32px] w-[950px] ml-[300px] rounded-lg border border-b'>
                        <h1 className='bg-black text-white px-6 py-3 rounded-t-lg'>Your Favourite Products...</h1>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Login;
