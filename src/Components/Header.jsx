import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Header = () => {
    const { username, login, count } = useAuth();

    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-200 mx-10 rounded-b-3xl">
            <nav className="flex flex-wrap items-center justify-evenly text-xl text-white py-3 px-4 ">
                {/* Logo */}
                <li className="list-none">
                    <img
                        src="https://thumbs.dreamstime.com/b/mart-logo-letter-m-concept-213107037.jpg"
                        className="pic rounded-lg w-10 h-10 sm:w-12 sm:h-12"
                        alt="Mart Logo"
                    />
                </li>

                {/* Links */}
                <NavLink
                    className={(e) => (e.isActive ? "text-yellow-300" : "")}
                    to="/login"
                >
                    <li className="list-none">
                        {login ? username : "Login/Sign-Up"}
                    </li>
                </NavLink>
                <NavLink
                    className={(e) => (e.isActive ? "text-yellow-300" : "")}
                    to="/home"
                >
                    <li className="list-none">Home</li>
                </NavLink>
                <NavLink
                    className={(e) => (e.isActive ? "text-yellow-300" : "")}
                    to="/about"
                >
                    <li className="list-none">About-Us</li>
                </NavLink>
                <NavLink
                    className={(e) => (e.isActive ? "text-yellow-300" : "")}
                    to="/contact"
                >
                    <li className="list-none">Contact-Us</li>
                </NavLink>
                <NavLink
                    className={(e) => (e.isActive ? "text-yellow-300" : "")}
                    to="/cart"
                >
                    <li className="list-none relative">
                        <FaShoppingCart className="text-2xl" />
                        {count > 0 && (
                            <div className="bg-black text-white text-sm rounded-full h-4 w-4 flex items-center justify-center absolute bottom-[14px] left-[22px] sm:left-[20px] sm:bottom-[12px]">
                                {count}
                            </div>
                        )}
                    </li>
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;
