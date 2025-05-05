import React from "react";
import { Link } from "react-router-dom";
const Home3 = () => {
    return (
      <div className=" bg-gray-50 text-gray-800">
  
        {/* How It Works */}
        <section className="bg-white py-12 px-4">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <ol className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <li><strong>1.</strong> Choose a problem by topic or difficulty.</li>
            <li><strong>2.</strong> Write and run code using our built-in editor.</li>
            <li><strong>3.</strong> Submit your solution and get instant feedback.</li>
            <li><strong>4.</strong> Track progress, climb the leaderboard, and grow.</li>
          </ol>
        </section>
  
        {/* Sample Problems */}
        <section className="bg-gray-100 py-12 px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Top Problems</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Two Sum", "Reverse a Linked List", "Coin Change", "LRU Cache"].map((title, index) => (
              <Link key={index} to={`/problem/${title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white p-4 rounded shadow hover:bg-blue-50">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-500">Difficulty: L{index + 2}</p>
              </Link>
            ))}
          </div>
        </section>
  
        {/* Community CTA */}
        <section className="py-12 px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Join the Community</h2>
          <p className="mb-4">Connect with 10,000+ learners and developers on Discord.</p>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Join Our Discord
          </a>
        </section>
  
       
      </div>
    );
  };
export default Home3;