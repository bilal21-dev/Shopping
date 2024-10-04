import React from 'react'
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/home');
    };
    const animation = {
        animation: 'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <img src="https://www.digitalsilk.com/wp-content/uploads/2023/10/design-ecommerce-website-hero-760x380.jpg" className='back' />
            <div className='flex flex-col align-middle justify-center items-center gap-16'>
                <h1 className='text-4xl font-extrabold text-black bg-white bg-opacity-60 px-5 py-5 rounded-lg' style={animation}>Welcome To the Shopping-Mart</h1>
                <p className='bg-white bg-opacity-60 px-5 py-7 rounded-xl text-xl ml-7 mr-7' style={animation}>Experience the difference at [Your Store Name], where quality meets affordability. Enjoy fast shipping, easy returns, and exceptional customer service. Start shopping now and discover why we're the go-to choice for [your niche/target audience]!</p>
                <button className='bg-black text-white px-3 py-2 rounded-lg hover:scale-105 transition duration-300 ease-in-out text-lg' onClick={handleGetStarted}>Get Started</button>
            </div>
        </div>
    )
}

export default Intro
