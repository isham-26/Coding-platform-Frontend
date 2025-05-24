// src/components/TestCases.jsx
import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const dummyQuestions = [
  { id: "q1", title: "Two Sum" },
  { id: "q2", title: "Binary Tree Paths" },
  { id: "q3", title: "Merge Intervals" },
];

const dummyTestCases = {
  q1: [
    { id: 1, input: "2 3", output: "5" },
    { id: 2, input: "4 6", output: "10" },
  ],
  q2: [
    { id: 3, input: "[1,2,3]", output: "[[1,2],[1,3]]" },
  ],
  q3: [],
};

const TestCases = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState("q1");
  const [testCases, setTestCases] = useState([]);
  const [newInput, setNewInput] = useState("");
  const [newOutput, setNewOutput] = useState("");

  useEffect(() => {
    // Simulate fetching test cases by question ID
    setTestCases(dummyTestCases[selectedQuestionId] || []);
  }, [selectedQuestionId]);

  const addTestCase = () => {
    if (newInput && newOutput) {
      const newTestCase = {
        id: Date.now(),
        input: newInput,
        output: newOutput,
      };
      setTestCases((prev) => [...prev, newTestCase]);
      setNewInput("");
      setNewOutput("");
    }
  };

  const deleteTestCase = (id) => {
    setTestCases((prev) => prev.filter((tc) => tc.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Test Cases Management</h1>

      <div className="mb-6 bg-white p-4 rounded shadow">
        <label className="block font-medium mb-2">Select Question</label>
        <select
          value={selectedQuestionId}
          onChange={(e) => setSelectedQuestionId(e.target.value)}
          className="w-full sm:w-1/2 px-3 py-2 border rounded"
        >
          {dummyQuestions.map((q) => (
            <option key={q.id} value={q.id}>{q.title}</option>
          ))}
        </select>
      </div>

      <div className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Add New Test Case</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Input"
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
            className="px-3 py-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Expected Output"
            value={newOutput}
            onChange={(e) => setNewOutput(e.target.value)}
            className="px-3 py-2 border rounded w-full"
          />
          <button
            onClick={addTestCase}
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
          >
            <FaPlus /> Add
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Input</th>
              <th className="p-3 text-left">Expected Output</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testCases.map((tc) => (
              <tr key={tc.id} className="border-t">
                <td className="p-3 font-mono whitespace-pre">{tc.input}</td>
                <td className="p-3 font-mono whitespace-pre">{tc.output}</td>
                <td className="p-3">
                  <button
                    onClick={() => deleteTestCase(tc.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {testCases.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-6 text-gray-500">
                  No test cases for this question.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestCases;
