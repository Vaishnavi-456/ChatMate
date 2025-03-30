import React, { useState } from "react";
import chatgptlogo from "../assets/chatgptlogo.png";
import chatgptlogo2 from "../assets/chatgptlogo2.png";
import nouserlogo from "../assets/nouserlogo.png";
import "../styles/RightSection.css";

const geminiAPI = import.meta.env.VITE_GEMINI_API;
console.log(geminiAPI)

const RightSection = () => {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [isSent, setIsSent] = useState(true);

  const sendMessage = async () => {
    if (!message.trim()) return;

    let url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${geminiAPI}`;

    let messagesToSend = [
      ...allMessages,
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    setIsSent(false);

    try {
      let res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: messagesToSend }),
      });

      let resjson = await res.json();
      setIsSent(true);

      if (resjson?.candidates) {
        let responseMessage = resjson.candidates[0].content.parts[0].text;

        let newAllMessages = [
          ...messagesToSend,
          {
            role: "model",
            parts: [{ text: responseMessage }],
          },
        ];

        setAllMessages(newAllMessages);
        setMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSent(true);
    }
  };

  return (
    <div className="rightSection">
      <div className="chatgptversion">
        <p className="text1">Gemini AI</p>
      </div>

      {allMessages.length > 0 ? (
        <div className="messages">
          {allMessages.map((msg, index) => (
            <div key={index} className="message">
              <img src={msg.role === "user" ? nouserlogo : chatgptlogo2} width="50" height="50" alt="" />
              <div className="details">
                <h2>{msg.role === "user" ? "You" : "Gemini Bot"}</h2>
                <p>{msg.parts[0].text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="nochat">
          <div className="s1">
            <img src={chatgptlogo} alt="Gemini Logo" height="70" width="70" />
            <h1>How can I help you today?</h1>
          </div>
          <div className="s2">
            <div className="suggestioncard">
              <h2>AI Recommendations</h2>
              <p>Learn about decision-making psychology</p>
            </div>
          </div>
        </div>
      )}

      <div className="bottomsection">
        <div className="messagebar">
          <input
            type="text"
            placeholder="Message Gemini Bot..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          {isSent ? (
            <svg
              onClick={sendMessage}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          ) : (
            <span>Sending...</span>
          )}
        </div>
        <p>Gemini Bot can make mistakes. Please verify important details.</p>
      </div>
    </div>
  );
};

export default RightSection;
