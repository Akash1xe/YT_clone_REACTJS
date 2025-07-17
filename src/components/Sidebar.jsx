import React from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
import store from "../utils/store";

const sidebarItem = [


  {
    icons: <FaHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdSubscriptions size="24px" />,
    title: "Subs.",
  },
  
  
 
  

];

const Sidebar = () => {
  const open =  useSelector((store)=>store.app.open)
  
  
  
  return (
    <div className={`mt-20 ${open ?"w-[12%]": 'w-[6%]'}  relative left-0 h-[calc(100vh-4.625rem)] ml-5 overflow-y-scroll overflow-x-hidden`}>
      {sidebarItem.map((item, index) => {
        return (
          <div key={index} className="flex w-[50%] justify-between my-2">
            {item.icons} 
            <p  className={ ` ml-5 cursor-pointer ${open ?"": 'hidden'}`}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
