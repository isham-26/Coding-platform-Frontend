import React from 'react';
import img from "../../assets/coding-boy-1.png"
const Home1 = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex justify-center">
      {/* Left: Text section */}
      <div className="w-[85%] flex justify-between">
      <div className="flex flex-col justify-center px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
          Online Coding Platform
        </h1>
        <h2 className="text-2xl mt-4 font-semibold text-gray-700">
          Improve Your Skills
        </h2>
        <div className="mt-6 h-1 w-24 bg-blue-600 rounded" />
        <p className="mt-6 text-gray-800">
        An interactive online coding platform empowering users to practice, compete, and improve their programming skills.
        </p>
        <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-fit">
          Explore DSA
        </button>
      </div>

      {/* Right: Image section */}
      <div className="flex justify-center items-center p-8">
        <img
          src={img} // Replace with actual path or import
          alt="Developer at desk"
          className="max-h-[600px] object-contain"
        />
      </div>
      </div>
    </div>
  );
};

export default Home1;
