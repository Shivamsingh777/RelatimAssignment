import React, { useState, useEffect, useRef } from 'react';
import { api } from '../api';

function ChatWindow({ contact }) {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await api.get(`/messages/${contact.id}`);
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMessages();
  }, [contact]);

  const sendMessage = async () => {
    if (!newMsg) return;
    try {
      const senderId = localStorage.getItem('userId');
      await api.post('/messages', { receiver_id: contact.id, content: newMsg });
      setMessages([...messages, { sender_id: parseInt(senderId), receiver_id: contact.id, content: newMsg }]);
      setNewMsg('');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 flex ${m.sender_id === parseInt(localStorage.getItem('userId')) ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`p-3 rounded-lg max-w-xs ${m.sender_id === parseInt(localStorage.getItem('userId')) ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 shadow'}`}>
              {m.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="flex p-4 border-t border-gray-200 bg-white">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-2 focus:outline-none focus:ring focus:ring-blue-200"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;