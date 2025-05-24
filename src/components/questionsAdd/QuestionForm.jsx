// src/components/QuestionForm.jsx
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const QuestionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("L1");


  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Question</h2>
      <form  className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium mb-1">Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="L1">Level 1</option>
          <option value="L2">Level 2</option>
          <option value="L3">Level 3</option>
          <option value="L4">Level 4</option>
          <option value="L5">Level 5</option>
          <option value="L6">Level 6</option>
          <option value="L7">Level 7</option>
          <option value="L8">Level 8</option>
          <option value="L9">Level 9</option>
          <option value="L10">Level 10</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
        >
          <FaPlus /> Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;

