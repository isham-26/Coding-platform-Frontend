import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
//import LanguageSelector from "./LanguageSelector";
import Output from "../output/Output";

const DEFAULT_CODE = `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));`;

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState(DEFAULT_CODE);
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (lang) => {
    setLanguage(lang);
    setValue(DEFAULT_CODE); // Reset or keep same static code
  };

  return (
    <div className="flex flex-row gap-4 w-full">
      <div className="w-1/2">
        {/* <LanguageSelector language={language} onSelect={onSelect} /> */}
        <Editor
          options={{
            minimap: { enabled: false },
          }}
          height="90vh"
          theme="vs-dark"
          language={language}
          value={value}
          onMount={onMount}
          onChange={(val) => setValue(val)}
        />
      </div>
      <div className="w-1/2">
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default CodeEditor;
