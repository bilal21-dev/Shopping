import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex align-middle items-center justify-evenly bg-gradient-to-r from-blue-700 to-red-600 text-xl text-white py-3 mx-8 rounded-b-3xl'>
                <NavLink className={(e)=>{return e.isActive? "red":""}} to="/login"><li className='list-none'>Login/Sign-Up</li></NavLink>
                <NavLink className={(e)=>{return e.isActive? "red":""}} to="/home"><li className='list-none'>Home</li></NavLink>
                <NavLink className={(e)=>{return e.isActive? "red":""}} to="/about"><li className='list-none'>About-Us</li></NavLink>
                <NavLink className={(e)=>{return e.isActive? "red":""}} to="/contact"><li className='list-none'>Contact-Us</li></NavLink>
                <NavLink className={(e)=>{return e.isActive? "red":""}} to="/cart"><li className='list-none'>
                    <FaShoppingCart /></li></NavLink>
            </nav>
        </div>
    )
}

export default Header
