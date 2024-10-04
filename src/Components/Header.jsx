import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Header = () => {
    const { username, login, count } = useAuth();
    return (
        <div className=''>
            <nav className='flex align-middle items-center justify-evenly bg-gradient-to-r from-blue-600 to-blue-200 text-xl text-white py-3 mx-8 rounded-b-3xl'>
                <li className='list-none'><img src='https://thumbs.dreamstime.com/b/mart-logo-letter-m-concept-213107037.jpg' className='pic rounded-lg'></img></li>
                <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/login"><li className='list-none'> {login ? username : "Login/Sign-Up"}</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/home"><li className='list-none'>Home</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/about"><li className='list-none'>About-Us</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/contact"><li className='list-none'>Contact-Us</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/cart"><li className='list-none relative'>
                    <FaShoppingCart className='text-2xl' />
                    <div className='bg-black h-4 w-4 rounded-2xl text-sm text-center text-white absolute bottom-4 left-[16px]'>{count}</div></li></NavLink>
            </nav>

        </div>
    )
}

export default Header
