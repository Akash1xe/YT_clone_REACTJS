import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosVideocam } from "react-icons/io";
import Avatar from "react-avatar";
import {useDispatch} from "react-redux"
import { setCategory, toggleSidebar } from "../utils/appSlice";
import { useState } from "react";





const Navbar = () => {
  const[input,setInput]=useState("");

const dispatch = useDispatch()
const searchVideo = ()=>{
  dispatch(setCategory(input))
  setInput("")
}

  const toggleHandler =()=>{
   dispatch(toggleSidebar())
    }
    



  return (
    <div className="fixed w-[100%]">
    <div className="flex justify-between items-center px-5 bg-white">
      <div className="flex items-center">
        <GiHamburgerMenu onClick={toggleHandler} size="24px" className="cursor-pointer" />
        <img className="px-4" width={"115px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="ytlogo" />
      </div>
      <div className="flex w-[40%]  items-center ">
        <div className="w-[100%] px-4 py-2 my-3 border border-gray-400  rounded-l-full" >
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Search" className=" w-full outline-none" />
        </div>
        <button onClick={searchVideo} className="py-2 border border-gray-400 rounded-r-full px-4">Search</button>
      </div>
      <div className="flex justify-between w-[10%] items-center">
      <IoIosNotificationsOutline size={"24px"}/>
      <IoIosVideocam size={"24px"}/>
      <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"  size={35} round={true} />


      </div>
    </div>
    </div>
  );
};

export default Navbar;
