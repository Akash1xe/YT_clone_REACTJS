import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, useSearchParams } from "react-router-dom";
import { API_KEY } from "../constants/youtube";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { IoMdDownload } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";

const Watch = () => {
  const [input, setInput] = useState("");
  const [singleVideo, setSingleVideo] = useState(null);
  const dispatch = useDispatch();
  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videeoId}&key=${API_KEY}`
      );

      console.log(res);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const sendMessage = () => {
    dispatch(
      setMessage({
        name: "Akash",
        message: input,
      })
    );
    setInput("")
  };

  useEffect(() => {
    getSingleVideo();
  }, []);

  const [serachParam] = useSearchParams();
  const videeoId = serachParam.get("v");
  console.log("video id is equal to", videeoId);

  return (
    <div className="  ml-3  height-[60%] w-[100%] mt-[5%]">
      <div className="flex w-[80%]">
        <div>
          <iframe
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${videeoId}?&autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h1 className="font-bold mt-2 text-lg">
            {singleVideo?.snippet?.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-[35%]">
              <div className="flex">
                <Avatar
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  size={35}
                  round={true}
                />
                <h1 className="font-bold ml-2">
                  {singleVideo?.snippet?.channelTitle}
                </h1>
              </div>
              <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex items-center w-[40%] mt-2 justify-between">
              <div className="flex items-center cursor-pointer rounded-full px-4 py-2 bg-gray-300">
                <AiOutlineLike size="20px" className="mr-5" />
                <BiDislike size="20px" />
              </div>

              <div className="flex items-center cursor-pointer rounded-full px-4 py-2 bg-gray-300">
                <PiShareFatLight size="20px" className="mr-2" />
                <span>Share</span>
              </div>
              <div className=" flex items-center  cursor-pointer rounded-full px-4 py-2 bg-gray-300">
                <IoMdDownload size="20px" />
                <span>Download</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] border border-gray-300 ml-6 rounded-lg h-fit p-4">
          <div className="flex justify-between items-center">
            <h1 className="ml-5 ">Top chat</h1>
            <BsThreeDotsVertical />
          </div>
          <div className="overflow-y-auto h-[28rem] flex flex-col-reverse">
            <LiveChat />
          </div>
          <div className="flex items-center justify-between border-t p-2">
            <div className="flex items-center w-[90%]">
              <div className="flex">
                <Avatar
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  size={35}
                  round={true}
                />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="border-b border-gray-300 outline-none ml-2"
                  type="text"
                  placeholder="send message"
                />
                <div className="bg-gray-200 cursor-pointer p-2 rounded-full">
                  <IoSend onClick={sendMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
