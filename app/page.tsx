"use client";

import { useState } from "react";
import { callGPTServer } from "./server";

type ChatHistoryMessage = {
  role: string;
  content: string | null;
};

export default function Home() {
  const [messages, setMessages] = useState<ChatHistoryMessage[]>([]);

  const [message, setMessage] = useState("");

  const callGPTClient = async () => {
    const result = await callGPTServer({ message });

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: message },
      { role: "system", content: result },
    ]);

    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md mb-4">
        <h2 className="text-xl font-bold mb-2">Chat History</h2>

        {messages.length === 0 && (
          <div className="p-2 rounded bg-gray-200">No messages yet</div>
        )}

        <div className="flex flex-col space-y-2">
          {/* Render chat messages */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded ${
                msg.role === "system" ? "bg-gray-200" : "bg-blue-200 self-end"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>
      </div>

      <input
        type="text"
        placeholder="Send message to GPT"
        className="p-2 border border-gray-300 rounded mb-4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={callGPTClient}
      >
        Send
      </button>
    </div>
  );
}
