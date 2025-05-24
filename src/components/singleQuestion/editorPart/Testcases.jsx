import React, { useState } from "react";

const Testcases = ({ testCases, onRun }) => {
  const [activeTab, setActiveTab] = useState("example");
  const [customInput, setCustomInput] = useState("");

  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-4">
      <div className="flex border-b border-gray-200">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "example"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("example")}
        >
          Given Test Cases
        </button>
        <button
          className={`ml-4 px-4 py-2 font-semibold ${
            activeTab === "custom"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("custom")}
        >
          Custom Input
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "example" ? (
          <div className="space-y-2">
            {testCases.map((tc, index) => (
              <div key={index} className="p-3 bg-gray-100 rounded">
                <p className="font-medium text-gray-700">
                  <span className="text-gray-500">Input:</span> {tc.input}
                </p>
                <p className="font-medium text-gray-700">
                  <span className="text-gray-500">Expected:</span> {tc.expected}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <textarea
              className="w-full border border-gray-300 p-2 rounded mb-4"
              rows="4"
              placeholder="Enter custom input here"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            //  onClick={() => onRun(customInput)}
            >
              Run Custom Input
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testcases;
