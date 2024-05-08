// Import necessary libraries
import React from 'react';
import Image from 'next/image'

// Define the About component
const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-10">About Us</h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
            We are a dynamic duo passionate about creating stunning web experiences. Our team consists of a web developer Zubair Dev and a beginner UI/UX designer Ali.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
            Together, we aim to blend technical expertise with creative design to deliver websites that not only look beautiful but also function seamlessly.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
            Whether you're a small business owner looking to establish your online presence or a startup in need of a polished website, we're here to turn your vision into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

// Export the About component
export default About;
