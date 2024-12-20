import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
      {/* Main About Us Section */}
      <div className="bg-gradient-to-r from-blue-300 to-blue-100 text-black rounded-lg shadow-lg p-8 max-w-3xl w-full text-center transform transition-all hover:scale-105 ease-in-out duration-300">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          We are a passionate team dedicated to providing the best products and
          services to our customers. Our mission is to innovate and create an
          exceptional user experience for everyone.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
        <p className="text-lg">
          Founded in 2022, we started as a small startup with a vision to
          revolutionize the e-commerce industry. Today, we are proud to serve
          thousands of happy customers, offering a wide range of products with
          a commitment to quality and customer satisfaction.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-8 w-full max-w-4xl">
        {/* Mission */}
        <div className="bg-gradient-to-r from-blue-300 to-blue-100 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 ease-in-out duration-300 w-full md:w-1/2">
          <h4 className="text-xl font-bold text-black mb-2">Our Mission</h4>
          <p className="text-md text-black">
            To deliver innovative and user-friendly solutions that enhance the
            everyday lives of our customers.
          </p>
        </div>
        {/* Vision */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-300 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 ease-in-out duration-300 w-full md:w-1/2">
          <h4 className="text-xl font-bold text-black mb-2">Our Vision</h4>
          <p className="text-md text-black">
            To be the leading e-commerce platform known for its excellence in
            service and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

