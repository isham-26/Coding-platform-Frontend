import React from "react";
import { Link } from "react-router-dom";
import { Trophy, Code, BarChart3, Users } from "lucide-react";
const Home2 = () => {
    const Feature = ({ icon, title, description }) => (
        <div className="bg-white p-6 rounded shadow text-center">
          <div className="flex justify-center mb-3 text-blue-600">{icon}</div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      );
    return (
      <div className=" bg-gray-50 text-gray-800">
  
        {/* Features Section */}
        <section className="py-10 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <Feature icon={<Code />} title="300+ DSA Problems" description="Curated challenges covering all major topics." />
          <Feature icon={<BarChart3 />} title="Live Stats" description="Track your progress and ranking in real-time." />
          <Feature icon={<Trophy />} title="Weekly Contests" description="Test your skills in competitive contests every week." />
          <Feature icon={<Users />} title="Community" description="Join our Discord and learn with others." />
        </section>
  
        
      </div>
    );
  };
  export default Home2;