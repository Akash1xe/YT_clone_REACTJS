import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";


const LiveChat = () => {
  const message = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
useEffect(()=>{
  const timer = setInterval(()=>{
    
    dispatch(
          setMessage({
            name: generateRandomName(),
            message  : generateRandomText(16)
          })
        );

  },1000)

  return(()=>{
    clearInterval(timer)
  })

},[])

  return (
    <div className="px-4 py-1">
      <div>
        {message.map((item,idx) => {
          return <ChatMessage key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default LiveChat;
