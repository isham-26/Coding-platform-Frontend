import React from "react";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="flex md:items-center justify-center md:h-[90vh] h-[63vh] bg-gradient-to-b from-pink-200 to-white">
      <div className="md:w-[25%] w-full p-3 mt-16 md:mt-0">
        <div className="">
          <h3 className="text-2xl font-bold text-center">
            Create new your account
          </h3>
          <form action="">
            <div className="mt-4">
              <div className="mb-4">
              <label className="block" htmlFor="email">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="email"
                />
              </div>
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
                  continue
                </button>
                <div className="flex gap-4 items-center">
                 <p className="text-[12px]">Already have a account</p>
                <Link to="/login" className="text-sm text-blue-600 hover:underline">
                   login
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