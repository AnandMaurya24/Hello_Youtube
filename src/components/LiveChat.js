import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMesasge] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  // messages
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "hello",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="ml-2 p-2 w-full h-[600px] border border-black bg-slate-100 rounded-lg flex overflow-y-scroll flex-col-reverse">
      <div>
        {chatMessages.map((c, i) => (
          <ChatMessages key={i} name={c.name} message={c.message} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
