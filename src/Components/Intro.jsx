import React from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/home');
    };

    const animation = {
        animation: 'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
    };

    return (
        <div className="h-screen flex flex-col lg:flex-row justify-center items-center relative bg-gray-100">
            <img
                src="https://www.digitalsilk.com/wp-content/uploads/2023/10/design-ecommerce-website-hero-760x380.jpg"
                alt="Intro Background"
                className="absolute inset-0 h-full w-full object-cover z-0"
            />
            <div className="relative z-10 flex flex-col justify-center items-center text-center gap-10 lg:gap-16 p-6 lg:p-10 bg-white bg-opacity-70 rounded-xl shadow-lg max-w-3xl mx-auto" style={animation}>
                <h1
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black px-5 py-3 rounded-lg"   
                >
                    Welcome To the Shopping-Mart
                </h1>
                <p
                    className="text-base sm:text-lg lg:text-xl text-gray-900 px-5 py-5 rounded-xl"
                    style={animation}
                >
                    Experience the difference at [Your Store Name], where quality meets affordability.
                    Enjoy fast shipping, easy returns, and exceptional customer service. Start shopping
                    now and discover why we're the go-to choice for [your niche/target audience]!
                </p>
                <button
                    className="bg-black text-white px-4 py-3 rounded-lg hover:scale-105 transition duration-300 ease-in-out text-base sm:text-lg lg:text-xl"
                    onClick={handleGetStarted}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Intro;
