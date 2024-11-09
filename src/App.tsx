// import env key

import { useState } from "react";

const OPEN_AI_KEY = import.meta.env.VITE_OPEN_AI_KEY;

const App = () => {
  // TODO: implement chat history
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  // TODO: implement send function
  const send = async () => {
    console.log("Send");
  };

  return (
    <>
      {/* TODO: implement UI interface for the text history */}

      <input type="text" placeholder="Message ChatGPT" />
      <button onClick={send}>Send</button>
    </>
  );
};

export default App;
