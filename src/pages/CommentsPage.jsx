import React, { useState } from 'react';

function CommentsPage() {
  const [messages, setMessages] = useState([
    { type: 'incoming', text: "Hey Bob, how's it going?", avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'outgoing', text: "Hi Alice! I'm good, just finished a great book. How about you?", avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'incoming', text: 'That book sounds interesting! What\'s it about?', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'outgoing', text: 'It\'s about an astronaut stranded on Mars, trying to survive. Gripping stuff!', avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'incoming', text: 'I\'m intrigued! Maybe I\'ll borrow it from you when you\'re done?', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'outgoing', text: 'Of course! I\'ll drop it off at your place tomorrow.', avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'incoming', text: 'Thanks, you\'re the best!', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'outgoing', text: 'Anytime! Let me know how you like it. 😊', avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'incoming', text: 'So, pizza next week, right?', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'outgoing', text: 'Absolutely! Can\'t wait for our pizza date. 🍕', avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'incoming', text: 'Hoorayy!!', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { type: 'outgoing', text: newMessage, avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' }
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen mb-11">
      {/* Chat Header */}
      <header className="p-4 text-gray-700 bg-white">
        <h1 className="text-2xl font-semibold">Alice</h1>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex mb-4 ${message.type === 'outgoing' ? 'justify-end' : ''}`}>
            {message.type === 'incoming' && (
              <div className="flex items-center justify-center mr-2 rounded-full w-9 h-9">
                <img src={message.avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
              </div>
            )}
            <div
              className={`flex max-w-96 p-3 gap-3 rounded-lg ${message.type === 'incoming' ? 'bg-white text-gray-700' : 'bg-indigo-500 text-white'}`}
            >
              <p>{message.text}</p>
            </div>
            {message.type === 'outgoing' && (
              <div className="flex items-center justify-center ml-2 rounded-full w-9 h-9">
                <img src={message.avatar} alt="My Avatar" className="w-8 h-8 rounded-full" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <footer className="p-4 bg-white border-t border-gray-300">
        <div className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 ml-2 text-white bg-indigo-500 rounded-md"
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}

export default CommentsPage;
