import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Contact = () => {
  const [form, setForm] = useState(true);
  const [pop, setPop] = useState(false);

  const handleChange = () => {
    setForm(false);
    setPop(true);
  };

  return (
    <div className="min-h-screen mt-8 px-4">
      {/* Form Section */}
      {form && (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                rows="5"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={handleChange}
            >
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition-transform">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:scale-110 transition-transform">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      )}

      {/* Popup Section */}
      {pop && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center px-4">
          <div className="bg-white h-[250px] w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg relative p-4">
            <p className="text-center mt-4 text-lg font-bold sm:text-xl">Your Message has been Delivered</p>
            <div className="flex justify-center mt-4">
              <IoCheckmarkDoneCircleOutline className="text-7xl text-green-800 sm:text-9xl" />
            </div>
            <IoMdCloseCircle
              className="absolute top-2 right-3 text-2xl cursor-pointer hover:text-gray-500"
              onClick={() => {
                setPop(false);
                setForm(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

