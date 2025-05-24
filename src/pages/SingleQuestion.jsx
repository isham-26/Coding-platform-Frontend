import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import dsaProblems from "../utility/prob";
import Question from "../components/singleQuestion/QuestionPart/Question";
import EditorPart from "../components/singleQuestion/editorPart/EditorPart";
import Testcases from "../components/singleQuestion/editorPart/Testcases";
import ExamplePart from "../components/singleQuestion/QuestionPart/ExamplePart";
const SingleProblem = () => {
  const { problemName } = useParams();

  const problemIndex = dsaProblems.findIndex(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === problemName
  );

  const problem = dsaProblems[problemIndex];
  const testCases = [
    { input: "1 -> 2 -> 3", expected: "3 -> 2 -> 1" },
    { input: "4 -> 5", expected: "5 -> 4" },
  ];
  const examples = [
    {
      input: "1 -> 2 -> 3 -> 4 -> 5",
      output: "5 -> 4 -> 3 -> 2 -> 1",
      explanation: "The list is reversed by changing the direction of the pointers.",
    },
    {
      input: "10 -> 20",
      output: "20 -> 10",
      explanation: "Two-node list is reversed directly.",
    },
    {
      input: "10 -> 20",
      output: "20 -> 10",
      explanation: "Two-node list is reversed directly.",
    },
  ];
  const handleRun = (input) => {
    console.log("Running with custom input:", input);
    // Add logic to pass input to your interpreter
  };

  if (!problem) {
    return <div className="p-6 text-red-600 text-lg">Problem not found.</div>;
  }

  return (
    <div className="flex flex-row h-screen p-1 overflow-hidden">
      {/* Left: Question */}
      <div className="flex-[2]">
        <Question/>
        <ExamplePart examples={examples}/>
        
      </div>

      {/* Right: Editor + Run + Output */}
      <div className="flex-[3] flex flex-col h-screen p-1 overflow-hidden">
        <EditorPart/>
        <Testcases testCases={testCases} onRun={handleRun}/>
      </div>
       
    </div>
  );
};

export default SingleProblem;
