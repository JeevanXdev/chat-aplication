import React, { useState } from "react";
import ChatWindow from  "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import type { Message } from "./types";

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: "You",
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="app-container">
      <h1 className="title">💬 React Chat App</h1>
      <ChatWindow messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default App;
