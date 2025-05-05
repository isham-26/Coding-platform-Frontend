import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex md:items-center justify-center h-[63vh] md:h-[90vh] bg-gradient-to-b from-blue-300 to-white">
      <div className="md:w-[25%] w-full mt-20 md:mt-0">
        <div className="p-3">
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="email"
                />
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="password"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Login
                </button>
                <div className="flex gap-4 items-center">
                 <p className="text-[12px]">create new account</p>
                <Link to="/register" className="text-sm text-blue-600 hover:underline">
                   sign up
                </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}