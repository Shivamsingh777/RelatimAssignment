import React from 'react';

function Sidebar({ contacts, setSelectedContact }) {
  return (
    <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 text-xl font-semibold border-b border-gray-200">Contacts</div>
      <div className="flex-1 overflow-y-auto">
        {contacts.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelectedContact(c)}
            className="cursor-pointer hover:bg-gray-100 p-3 border-b border-gray-100 flex items-center"
          >
            <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white mr-3">
              {c.contact_name[0].toUpperCase()}
            </div>
            <div className="text-gray-700 font-medium">{c.contact_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;