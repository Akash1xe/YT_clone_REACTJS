import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../utils/appSlice";

const buttonlist = [
  "ALL",
  "Javascript",
  "Java",
  "Live",
  "Music",
  "Songs",
  "vlog",
  "Tranding",
  "Programing",
  "News",
  "Technology",
  "Cricket",
  "Comedy",
  "Thriller",
  "New to you",
];

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch()
  
  const videoTag = (tag) => {
    if (active !== tag) {
   dispatch(setCategory(tag))
      setActive(tag);
    }
  };

  console.log(active);

  return (
    <div className="flex w-full py-4 overflow-x-scroll no-scrollbar">
      {buttonlist.map((item, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                videoTag(item);
              }}
              className={`${
                active === item ? "bg-slate-900 text-white" : " bg-gray-200 "
              } px-4 py-1 rounded-lg mx-2 font-medium`}
            >
              <span className="whitespace-nowrap">{item}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
