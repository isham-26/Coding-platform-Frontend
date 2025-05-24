import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import dsaProblems from "../../../utility/prob";
import Editor from "@monaco-editor/react";
const EditorPart = () => {
  const { problemName } = useParams();
  const editorRef = useRef(null);
  const [showOutput, setShowOutput] = useState(false);
  const [output, setOutput] = useState("");
  const [code, setCode] = useState("// Write your code here");
  const [isRunning, setIsRunning] = useState(false);

  const problemIndex = dsaProblems.findIndex(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === problemName
  );

  const problem = dsaProblems[problemIndex];
  const handleRun = () => {
    if (editorRef.current) {
      setIsRunning(true);
      const codeValue = editorRef.current.getValue();

      setTimeout(() => {
        setOutput(
          `Output:\n${
            codeValue?.toLowerCase().includes("error")
              ? "Error: Something went wrong!"
              : codeValue
                ? "Code ran successfully!"
                : "No code!"
          }`
        );
        setShowOutput(true);
        setIsRunning(false);
      }, 1000); // Simulate execution time
    }
  };

  if (!problem) {
    return <div className="p-6 text-red-600 text-lg">Problem not found.</div>;
  }

  return (
    
      <div className="flex flex-col overflow-hidden rounded">
        <Editor
          height="60vh"
          theme="vs-dark"
          language="javascript"
          value={code}
          onChange={(value) => setCode(value)}
          onMount={(editor) => (editorRef.current = editor)}
          options={{ minimap: { enabled: false } }}
        />

        <button
          onClick={handleRun}
          disabled={isRunning}
          className={`mt-3 mb-2 w-fit self-end px-4 py-2 text-white rounded ${
            isRunning
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isRunning ? "Running..." : "Run Code"}
        </button>

        {showOutput && (
          <div className="bg-gray-900 text-green-300 p-3 rounded overflow-y-auto h-40">
            <pre>{output}</pre>
          </div>
        )}
      </div>
  );
};

export default EditorPart;