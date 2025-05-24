// src/components/Dashboard.jsx
import React from "react";
import { FaUsers, FaQuestionCircle, FaCode, FaCheckCircle } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { label: "Total Users", value: 1245, icon: <FaUsers className="text-blue-500 text-2xl" /> },
    { label: "Total Questions", value: 87, icon: <FaQuestionCircle className="text-green-500 text-2xl" /> },
    { label: "Submissions Today", value: 320, icon: <FaCode className="text-yellow-500 text-2xl" /> },
    { label: "Passed Submissions", value: 278, icon: <FaCheckCircle className="text-purple-500 text-2xl" /> },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                {stat.icon}
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-700">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul className="bg-white shadow rounded-lg divide-y divide-gray-200">
          <li className="p-4 text-sm text-gray-700">User <strong>john_doe</strong> submitted a solution to <strong>Reverse a Linked List</strong>.</li>
          <li className="p-4 text-sm text-gray-700">New user <strong>alice</strong> registered.</li>
          <li className="p-4 text-sm text-gray-700">Question <strong>Binary Tree Traversal</strong> was added.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
