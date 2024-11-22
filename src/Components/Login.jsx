import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { useAuth } from './AuthContext';

const Login = () => {
    const { username, setUsername } = useAuth();
    const [pass, setPass] = useState("");
    const [profile, setProfile] = useState(() => {
        return JSON.parse(localStorage.getItem("profile")) || false;
    });
    const [warning, setWarn] = useState(true);
    const { setLogin, setCart, profileItem, setProfileItem, setCartProducts, setCount } = useAuth();
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [signUp, setSignup] = useState(false);

    const handleChange2 = (e) => {
        e.preventDefault();
        if (username !== "" && pass !== "") {
            setLogin(true);
            localStorage.setItem("loginstate", true);
            localStorage.setItem("un", username);
            setProfile(true);
            localStorage.setItem("profile", true);
            alert("Login Successfully");
        } else {
            alert("Enter complete information");
        }
    };

    const logout = () => {
        localStorage.clear();
        setCartProducts([]);
        setCount(0);
        setProfile(false);
        setLogin(false);
        setCart([]);
        setProfileItem([]);
        alert("Logout successfully");
    };

    return (
        <div className="flex items-center justify-center h-screen px-4">
            {!profile ? (
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        {showConfirmPassword ? "Sign-Up" : "Login"}
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                                onChange={(e) => setPass(e.target.value)}
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
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Confirm your password"
                                />
                            </div>
                        )}

                        <button
                            type="button"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                            onClick={handleChange2}
                        >
                            {signUp ? "Sign-Up" : "Login"}
                        </button>
                    </form>

                    {warning && (
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Don't have an account?{" "}
                            <button
                                className="text-blue-500"
                                onClick={() => {
                                    setShowConfirmPassword(true);
                                    setWarn(false);
                                    setSignup(true);
                                }}
                            >
                                Sign up
                            </button>
                        </p>
                    )}
                </div>
            ) : (
                <div className="flex flex-col mt-0 lg:flex-row gap-6 w-full">
                    {/* Profile Sidebar */}
                    <div className="bg-slate-200 text-white p-8 rounded-lg shadow-md w-full lg:w-1/4 flex flex-col gap-6">
                        <div className="text-black flex flex-col items-center">
                            <CgProfile className="text-8xl" />
                            <p className="text-3xl mt-2">Hi {username}!</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-black text-2xl underline">Profile Details</h1>
                            <ul className="text-black text-lg space-y-2">
                                <li>Change Email</li>
                                <li>Change Password</li>
                                <li>Security & Privacy</li>
                                <li>Preference</li>
                            </ul>
                            <button
                                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Favorites Section */}
                    <div className="bg-slate-100 p-4 rounded-lg shadow-md w-full lg:w-3/4">
                        <h1 className="bg-black text-white px-6 py-3 rounded-t-lg">
                            Your Favourite Products...
                        </h1>
                        {profileItem.length === 0 ? (
                            <p className="ml-2 mt-4">No liked products</p>
                        ) : (
                            <div className="flex flex-wrap gap-6 p-4 justify-center">
                                {profileItem.map((product) => (
                                    <div
                                        key={product.id}
                                        className="border p-4 bg-slate-200 rounded-lg flex flex-col items-center w-full sm:w-1/3 md:w-1/4 lg:w-1/5 hover:scale-105 transition duration-300 ease-in-out"
                                    >
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            className="h-24 w-24 object-contain mb-4"
                                        />
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
