// src/components/Submissions.jsx
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const dummySubmissions = [
  { id: 1, username: "john_doe", question: "Two Sum", status: "Passed", language: "JavaScript", time: "2 hours ago" },
  { id: 2, username: "alice", question: "Binary Tree", status: "Failed", language: "Python", time: "4 hours ago" },
  { id: 3, username: "bob", question: "Linked List", status: "Passed", language: "C++", time: "1 day ago" },
];

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Replace with actual API call
    setSubmissions(dummySubmissions);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Submissions</h1>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Question</th>
              <th className="p-4">Status</th>
              <th className="p-4">Language</th>
              <th className="p-4">Time</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 font-medium">{sub.username}</td>
                <td className="p-4">{sub.question}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${sub.status === 'Passed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {sub.status === 'Passed' ? <FaCheckCircle /> : <FaTimesCircle />} {sub.status}
                  </span>
                </td>
                <td className="p-4">{sub.language}</td>
                <td className="p-4 text-gray-500">{sub.time}</td>
              </tr>
            ))}
            {submissions.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">No submissions yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submissions;
