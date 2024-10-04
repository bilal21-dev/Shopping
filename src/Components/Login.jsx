import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { CgProfile } from "react-icons/cg";



const Login = () => {
    const { username, setUsername } = useAuth();
    const [pass, setPass] = useState("")
    const [profile, setProfile] = useState(() => {
        return JSON.parse(localStorage.getItem("profile")) || false;
    })
    const [warning, setWarn] = useState(true);
    const { setLogin, setCart, profileItem, setProfileItem, setCartProducts, setCount } = useAuth()
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    const logout = () => {
        localStorage.removeItem("profile")
        localStorage.removeItem("loginstate")
        localStorage.removeItem("un")
        localStorage.removeItem("cart")
        localStorage.removeItem("profileItem")
        localStorage.removeItem("cartPro")
        localStorage.removeItem("count")


        setCartProducts([])
        setCount(0);
        setProfile(false);
        setLogin(false)
        setCart([]);
        setProfileItem([])
        console.log("logout succ");
        alert("Logout successfully")
    }
    return (
        <div className="flex items-center justify-center h-screen">
            {/* Conditionally render login form or profile div based on the 'profile' state */}
            {!profile ? (
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        {showConfirmPassword ? "Sign-Up" : "Login"}
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                // id="username"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your username"
                                // value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            // required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                // id="password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                                // value={password}
                                onChange={(e) => setPass(e.target.value)}
                            // required
                            />
                        </div>
                        {showConfirmPassword && (
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Confirm your password"
                                />
                            </div>
                        )}

                        <button
                            type="button"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                            onClick={handleChange2}
                        >
                            Login
                        </button>
                    </form>
                    {warning && (
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Don't have an account? <button href="/signup" className="text-blue-500" onClick={() => {setShowConfirmPassword(true)
                                setWarn(false)
                            }}>Sign up</button>
                        </p>
                    )}

                </div>
            ) : (
                <div className='flex'>
                    <div className="bg-slate-200  text-white p-8 rounded-lg shadow-md max-w-md flex flex-col gap-9 inset-0 absolute mt-[70px] ml-[28px] w-[300px] h-screen">
                        <div className='text-black flex flex-col justify-center align-middle text-8xl'>
                            <CgProfile />
                            <p className='text-3xl mt-2'>Hi {username} !</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-black text-2xl underline'>Profile Details</h1>
                            <ul className='text-black text-lg'>
                                <li>Change Email</li>
                                <li>Change Password</li>
                                <li>Security & Privacy</li>
                                <li>Preference</li>
                                <button onClick={logout}>Logout</button>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-slate-100 h-screen mt-[32px] w-[950px] ml-[310px] rounded-lg'>
                        <h1 className='bg-black text-white px-6 py-3 rounded-t-lg'>Your Favourite Products...</h1>
                        {profileItem.length === 0 ? (
                            <p className='ml-2'>No liked Product</p>
                        ) : (
                            <div className="flex flex-wrap gap-6 p-4 justify-center align-middle">
                                {profileItem.map((product) => (
                                    <div key={product.id} className="border p-4 bg-slate-200 rounded-lg flex flex-col items-center w-1/5 hover:scale-105 transition duration-300 ease-in-out">
                                        <img src={product.thumbnail} alt={product.title} className="h-24 w-24 object-contain mb-4" />
                                        <h3 className="text-lg font-bold">{product.title}</h3>
                                        <p className="text-lg font-semibold">${product.price}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

            )}
        </div>
    );
};

export default Login;
