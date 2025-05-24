import React from 'react'
import { useParams } from "react-router-dom";
import getLevelColor from "../../../utility/color"
import dsaProblems from "../../../utility/prob"
const Question = () => {
    const { problemName } = useParams();
    const problemIndex = dsaProblems.findIndex(
        (p) => p.title.toLowerCase().replace(/\s+/g, "-") === problemName
      );
      const problem = dsaProblems[problemIndex];
  return (
    <div className="p-3 overflow-y-auto">
        <h1 className="text-2xl font-bold text-blue-700">{problemIndex + 1}.{problem.title}</h1>
        <p className={`mt-2 text-gray-600 ${getLevelColor(problem.level)}`}>Level: {problem.level}</p>
        <div className="mt-4 text-gray-700">
          <p>This is a placeholder description for the problem.</p>
          <p className="mt-2">You can add constraints, examples, and explanations here.</p>
        </div>
      </div>
  )
}

export default Question