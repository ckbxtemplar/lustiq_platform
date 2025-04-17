"use client"

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import LinearProgress from '@mui/material/LinearProgress';

type Message = {
  role: "bot" | "user";
  content: string;
  timestamp: Date;
};

export default function AiChat() {
  const now = new Date();
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi, I'm Leila! Feel free to ask, I will try to help.", timestamp: now }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const textFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    createThread();
  }, []);

  useEffect(() => {
    if (!isLoading && textFieldRef.current) {
      textFieldRef.current.focus();  
    }
  }, [isLoading]);

  const createThread = async () => {
    try {
      const apiUrl = "https://ai.lustiq.eu/api/thread";
      const { data } = await axios.get<{ threadId: string }>(apiUrl);
      setThreadId(data.threadId);
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || !threadId) return;
    
    setIsLoading(true);
    const userMessage = input;
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: userMessage, timestamp: new Date() },
    ]);
    setInput("");

    try {
      const apiUrl = `https://ai.lustiq.eu/api/message`;
      const requestBody = {
        message: input,
        threadId,
      };
      
      const { data } = await axios.post<{ messages: { text: { value: string } }[][] }>(apiUrl, requestBody);
      const botResponse = data.messages[0][0].text.value;
      
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", content: botResponse, timestamp: new Date() },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", content: "Sorry, there was an error processing your message.", timestamp: new Date() },
      ]);
    } finally {
      setIsLoading(false);
      if (textFieldRef.current) textFieldRef.current.focus();
    }
  };

  return (
    <div className="container d-flex flex-column vh-50 mt-2">
      <div className="d-flex justify-content-center gap-2 mb-2">
        <ul className="tags_list unordered_list d-flex justify-content-center mb-3" style={{ flexWrap: 'nowrap' }}>
          <li className="flex-item text-center"><a href="#section_personal_data" className="shadow-lg p-3">Hogyan fejezhetem ki az igényeimet határozottan, de udvariasan?</a></li>
          <li className="flex-item text-center"><a href="#section_billing_address" className="shadow-lg p-3">Mit mondhatok, ha nemet szeretnék mondani anélkül, hogy bűntudatom lenne?</a></li>
          <li className="flex-item text-center"><a href="#section_billing_address" className="shadow-lg p-3">Hogyan kezelhetem azokat a helyzeteket, amikor valaki nem veszi figyelembe a határaimat?</a></li>
        </ul>
      </div>

      <div className="overflow-auto p-3">
        <div className="d-flex flex-column gap-3 chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-msg rounded rounded-3 ${msg.role === 'bot' ? 'bg-white align-self-start' : 'bg-yellow align-self-end'}`}>
              <span>{msg.content}</span>
            </div>
          ))}
					{isLoading && <div style={{ width: '100%' }}><LinearProgress color={'success'}/></div>}	
        </div>
      </div>

      <div className="comment_form_wrap my-3">
        <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
          <div className="row">
            <div className="col">
              <div className="form_item mb-2">
                <input 
                  id="message-input" 
                  type="text" 
                  value={input} 
                  placeholder="Type a message..."
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (isLoading) return e.preventDefault();
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  ref={textFieldRef}
                  autoFocus
									style={{border:'2px solid black'}}
                />
              </div>
              <button type="submit" className="btn btn_dark">
                <span>
                  <small>Send Message</small>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
