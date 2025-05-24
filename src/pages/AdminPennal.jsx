import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import QuestionForm from "../components/questionsAdd/QuestionForm";
import Question from "../components/singleQuestion/QuestionPart/Question";
import QuestionAdd from "../components/questionsAdd/QuestionAdd";

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold text-blue-700 mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <NavLink to="dashboard" className="block text-gray-700">Dashboard</NavLink>
          <NavLink to="users" className="block text-gray-700">Users</NavLink>
          <NavLink to="questions" className="block text-gray-700">Questions</NavLink>
          <NavLink to="submissions" className="block text-gray-700">Submissions</NavLink>
          <NavLink to="test-cases" className="block text-gray-700">Test Cases</NavLink>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
