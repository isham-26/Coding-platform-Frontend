import React from "react";

const ExamplePart = ({ examples }) => {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Examples</h2>
      <div className="space-y-4">
        {examples.map((example, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-sm border">
            <p className="font-medium text-gray-700">
              <span className="text-blue-600">Input:</span> {example.input}
            </p>
            <p className="font-medium text-gray-700">
              <span className="text-blue-600">Output:</span> {example.output}
            </p>
            {example.explanation && (
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">Explanation:</span>{" "}
                {example.explanation}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamplePart;
