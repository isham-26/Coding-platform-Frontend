import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
    const Feature = ({ icon, title, description }) => (
        <div className="bg-white p-6 rounded shadow text-center">
          <div className="flex justify-center mb-3 text-blue-600">{icon}</div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      );
    return (
      <div className=" bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-16 text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to CodeSphere</h1>
          <p className="text-lg mb-6">Your gateway to mastering coding challenges, acing interviews, and competing with the best.</p>
          <Link to="/problems" className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-blue-100">
            Start Solving
          </Link>
        </section>
      </div>
    );
  };
  export default Hero;