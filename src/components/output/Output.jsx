import { useState } from "react";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    setIsLoading(true);

    // Static mock example output for demo
    setTimeout(() => {
      if (sourceCode.includes("error")) {
        setIsError(true);
        setOutput(["Error: Something went wrong"]);
      } else {
        setIsError(false);
        setOutput(["Hello, World!", "Code executed successfully."]);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="">
      {/* <h2 className="text-lg font-semibold mb-2">Output</h2> */}
      
      <div
        className={`h-[80vh] p-4 rounded border overflow-y-auto text-sm ${
          isError
            ? "border-red-500 text-red-400"
            : "border-gray-700 text-gray-200"
        } bg-gray-900`}
      >
        {output.length > 0
          ? output.map((line, i) => <div key={i}>{line}</div>)
          : 'Click "Run Code" to see the output here.'}
      </div>
      <div className="flex justify-end mt-3 mr-3">
      <button
        onClick={runCode}
        disabled={isLoading}
        className={`mb-4 px-4 py-2 border rounded text-white ${
          isLoading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
      </div>
    </div>
  );
};

export default Output;
