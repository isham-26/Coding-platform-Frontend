// src/components/Users.jsx
import React, { useState, useEffect } from "react";
import { FaSearch, FaUserAltSlash } from "react-icons/fa";

const dummyUsers = [
  { id: 1, username: "john_doe", email: "john@example.com", status: "active" },
  { id: 2, username: "alice", email: "alice@example.com", status: "active" },
  { id: 3, username: "bob", email: "bob@example.com", status: "banned" },
];

const Users = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace this with actual fetch in real app
    setUsers(dummyUsers);
  }, []);

  const handleBanToggle = (id) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, status: user.status === "active" ? "banned" : "active" } : user
      )
    );
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <div className="mb-4 flex items-center border border-gray-300 rounded overflow-hidden">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 outline-none"
        />
        <div className="px-3 text-gray-500">
          <FaSearch />
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="p-4">Username</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="border-t">
                <td className="p-4 font-medium">{user.username}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4 capitalize">{user.status}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleBanToggle(user.id)}
                    className={`px-3 py-1 rounded text-white text-xs font-semibold ${user.status === 'active' ? 'bg-red-500' : 'bg-green-500'}`}
                  >
                    {user.status === "active" ? "Ban" : "Unban"}
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
