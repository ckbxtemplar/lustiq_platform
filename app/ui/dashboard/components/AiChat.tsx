import { useState, useEffect, useRef } from "react";
import axios from "axios";
import LinearProgress from '@mui/material/LinearProgress';
import {useTranslations} from 'next-intl';

type Message = {
  role: "bot" | "user";
  content: string;
  timestamp: Date;
};

type AiChatProps = {
  elevenlabsAgentId?: string; 
};

export default function AiChat({ elevenlabsAgentId }: AiChatProps) {
	const t = useTranslations('components.aiChat');
  const now = new Date();
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: t('placeholder'), timestamp: now }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const textFieldRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
	const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(false);
	const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createThread();
  }, []);

  useEffect(() => {
    if (!isLoading && textFieldRef.current) {
      textFieldRef.current.focus();  
    }
  }, [isLoading]);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

		if (
			isAudioEnabled &&
			messages.length > 0 &&
			messages[messages.length - 1].role === 'bot' &&
			threadId
		) {
			if (audioRef.current) {
				audioRef.current.load();
				audioRef.current.play().catch((err) => {
					console.warn("Audio playback failed:", err);
				});
			}
		}
  }, [messages]);

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
      <div className="justify-content-center gap-2 mb-2 d-none d-lg-flex">
        <ul className="tags_list unordered_list d-flex justify-content-center mb-3" style={{ flexWrap: 'nowrap' }}>
          <li className="flex-item text-center"><a href="#section_personal_data" className="shadow-lg p-3">{t('o1')}</a></li>
          <li className="flex-item text-center"><a href="#section_billing_address" className="shadow-lg p-3">{t('o2')}</a></li>
        </ul>
      </div>

      <div className="overflow-auto p-3 px-1 px-lg-3 chat-container">
        <div className="d-flex flex-column gap-3 chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-msg rounded rounded-3 ${msg.role === 'bot' ? 'bg-white align-self-start' : 'bg-yellow text-white align-self-end'}`}>
              <span>{msg.content}</span>
            </div>
          ))}
          {isLoading && <div style={{ width: '100%' }}><LinearProgress color={'success'} /></div>}
        </div>
      </div>

      <div className="comment_form_wrap my-3 pb-3" ref={formRef}>

				<div className="d-flex align-items-center gap-1 ms-2 mb-3 d-none">
					<span className="me-2">{t('automaticVoice')}:</span>

					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="audioToggle"
							id="audio-on"
							checked={isAudioEnabled}
							onChange={() => setIsAudioEnabled(true)}
						/>
						<label className="form-check-label" htmlFor="audio-on">{t('automaticVoiceY')}</label>
					</div>

					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="audioToggle"
							id="audio-off"
							checked={!isAudioEnabled}
							onChange={() => setIsAudioEnabled(false)}
						/>
						<label className="form-check-label" htmlFor="audio-off">{t('automaticVoiceN')}</label>
					</div>
				</div>	

				<div style={{clear:'both'}}></div>	

        <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="form_item mb-2">
                <input 
                  id="message-input" 
                  type="text" 
                  value={input} 
                  placeholder={t('typeMsg')}
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
                  style={{ border: '2px solid black' }}
                />
              </div>
              <button type="submit" className="btn btn_dark">
                <span>
                  <small>{t('send')}</small>
									<small>{t('send')}</small>
                </span>
              </button>
            </div>
						{elevenlabsAgentId && (<div className="col-12 col-lg-5"><elevenlabs-convai agent-id={elevenlabsAgentId} style={{position:'relative'}}></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script></div>)}
          </div>
        </form>
      </div>

      {threadId && (
        <audio ref={audioRef}>
          <source src={`https://ai.lustiq.eu/audio/${threadId}.mp3?nocache=${Date.now()}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}
