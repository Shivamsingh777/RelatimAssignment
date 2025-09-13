import React, { useEffect, useState } from 'react';
import { api } from '../api';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import ChatWindow from '../components/ChatWindow';

function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await api.get('/contacts');
        setContacts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar contacts={contacts} setSelectedContact={setSelectedContact} />
      <div className="flex-1 flex flex-col">
        <Topbar />
        {selectedContact ? (
          <ChatWindow contact={selectedContact} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">
            Select a contact to start chatting
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;