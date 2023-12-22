"use client";
import React, { useState } from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async (query) => {
    if (query.length > 2) {
      try {
        const res = await fetch(
          "http://rashtriya-tv-nodejs-env.eba-4gfrfqri.us-east-1.elasticbeanstalk.com/api/blogs/searchBlogs",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: searchQuery }),
          }
        );
        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
          setSearchResult(data.result);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setSearchResult([]);
    }
  };

  return (
    <div>
      <div className="relative flex items-center justify-center shadow-sm rounded-xl">
        <IoIosSearch
          className="absolute top-3 left-4 h-6 w-6 cursor-pointer hover:scale-125 transition-all duration-200 text-black"
          onClick={() => handleSearch(searchQuery)}
        />
        <input
          value={searchQuery}
          onChange={(e) => {
            handleSearch(e.target.value);
            setSearchQuery(e.target.value);
          }}
          className="bg-[#f4f4f4] py-3 px-14 outline-none rounded-xl text-black"
          placeholder="खोज..."
          required
        />
        <IoMdClose
          className={`absolute top-[14px] right-4 h-5 w-5 cursor-pointer  hover:scale-150 transition-all duration-300 text-black ${
            searchQuery.length > 0 ? "flex" : "hidden"
          }`}
          onClick={() => {
            setSearchQuery("");
            setSearchResult([]);
          }}
        />
      </div>
      {searchResult.length > 0 && (
        <div className="max-h-96 w-[350px] absolute bg-[#f4f4f4] z-10 shadow-2xl rounded-xl mt-2 overflow-y-scroll overflow-x-hidden flex flex-col gap-3 px-3 py-3">
          {searchResult?.map((blog) => (
            <div className="bg-[#fff] px-3 py-3 rounded-xl shadow-sm">
              <a
                href={`http://localhost:3000/newsArticle/${blog._id}`}
                target="_blank"
              >
                <div className="text-base font-semibold">{blog.heading}</div>
                <div className="text-sm font-extralight">{blog.subHeading}</div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
