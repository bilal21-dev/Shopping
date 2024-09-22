import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const location = useLocation();
    const { setLogin } = location.state || {};
    const handleChange = () => {
        if (username !== "" && pass !== "") {
            setLogin(true);
            alert("Login Successfully")
        }
        else {
            alert("Enter complete information")
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className=" bg-gradient-to-r from-blue-700 to-red-600 p-8 rounded-lg shadow-md w-full max-w-md">
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
                            onChange={(e) => { setUsername(e.target.value) }}
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
                            onChange={(e) => { setPass(e.target.value) }}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
                            onClick={handleChange}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
