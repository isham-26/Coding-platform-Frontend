import React from "react";
import dsaTopics from "../../utility/pro-name";
import dsaProblems from "../../utility/prob";
import { CiFilter } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import getLevelColor from "../../utility/color";
import { Link } from "react-router-dom";
const Problems = () => {
  return (
    <div className=" text-gray-600 flex w-[80%] h-screen">
      <div className=" flex-[1] bg-gray-200 overflow-y-auto h-full scrollbar-none">
        {dsaTopics.map((item, key) => (
          <div
            key={key}
            className="bg-white px-3 py-2 rounded shadow hover:bg-blue-100 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
      <div className=" flex-[3] bg-gray-100 overflow-y-auto h-full scrollbar-none">
        <div className="flex justify-between p-3 bg-white">
          <div className=" relative flex flex-row gap-4 items-center">
           <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
            <input type="text" placeholder="search problems here" className="bg-white w-full pl-10 pr-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
        </div>
        <div className="">
          {dsaProblems.map((item, key) => (
            <Link
            to={`/problem/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              key={key}
              className="bg-white flex flex-row justify-between px-3 py-2 rounded shadow hover:bg-blue-100 cursor-pointer"
            ><div className="">
                {key+1}. {item.title}
              </div>
              <div className={`px-2 py-1 text-sm font-medium ${getLevelColor(item.level)}`}>
              {item.level}
             </div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;
