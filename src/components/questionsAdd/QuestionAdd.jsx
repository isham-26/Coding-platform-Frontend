// src/components/Questions.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const dummyQuestions = [
  { id: 1, title: "Two Sum", difficulty: "Easy", tags: ["Array", "HashMap"] },
  { id: 2, title: "Binary Tree Level Order Traversal", difficulty: "Medium", tags: ["Tree", "BFS"] },
  { id: 3, title: "Merge K Sorted Lists", difficulty: "Hard", tags: ["Linked List", "Heap"] },
];

const QuestionAdd = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Replace with real API fetch
    setQuestions(dummyQuestions);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      setQuestions(prev => prev.filter(q => q.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Questions</h1>
        <Link to="/admin/questions/new" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <FaPlus /> Add New
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Difficulty</th>
              <th className="p-4">Tags</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.map(question => (
              <tr key={question.id} className="border-t">
                <td className="p-4 font-medium">{question.title}</td>
                <td className="p-4 capitalize">{question.difficulty}</td>
                <td className="p-4 space-x-1">
                  {question.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </td>
                <td className="p-4 space-x-2">
                  <button className="text-blue-600 hover:underline"><FaEdit /></button>
                  <button onClick={() => handleDelete(question.id)} className="text-red-600 hover:underline"><FaTrash /></button>
                </td>
              </tr>
            ))}
            {questions.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  No questions available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionAdd;
