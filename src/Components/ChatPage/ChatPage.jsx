import React, { useState, useRef, useEffect } from "react";
import "./ChatPage.css";
import send_img from "../../assets/send.jpg";
import pic from "../../assets/photo.jpg";
import user from "../../assets/user.jpeg";
import { sendingMsgtoGeminiAI } from "../../GeminiAI";
const ChatPage = () => {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, SetMessages] = useState([
    { text: "Hi,I am Sputhnika Shivani.I'm here and ready to assist you with any questions or tasks you may have! How can I help you today? Once I understand your needs, I can provide you with helpful and relevant information, resources, or guidance.", isBot: true },
  ]);
  useEffect(() => {
    msgEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handlesend = async () => {
    const text = input;
    // if (!text) return;

    setInput("");
    SetMessages([...messages, { text, isBot: false }]);
    const res = await sendingMsgtoGeminiAI(text);
    SetMessages([
      ...messages,
      { text: input, isBot: false },
      { text: res, isBot: true },
    ]);
  };
  // const handleEnter = async (e) => {
  //   if (e.key == "Enter") await handlesend();
  // };
  return (
    <div className="main">
      <div className="Chats">
        {messages.map((message, i) => (
          <div key={i} className={message.isBot ? "chat bot " : "chat align"}>
            <img src={message.isBot ? pic : user} alt="" />
            <p className="text">{message.text}</p>
          </div>
        ))}
        <div ref={msgEnd}></div>
      </div>
      <div className="chatFooter">
        <div className="inp">
          <input
            type="text"
            placeholder="Send a Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send" onClick={handlesend}>
            <img src={send_img} alt="Send" />
          </button>
        </div>
        <p>Gemini Can Provide Incorrect Results</p>
      </div>
    </div>
  );
};

export default ChatPage;
