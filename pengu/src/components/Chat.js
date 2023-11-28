import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Chat({ userId }) {
    const [message, setMessage] = useState('');
    const [conversation, setConversation] = useState([]);
    const [penguname, setpenguname] = useState('');
    useEffect(() => {
        if (userId) {
            const fetchConversation = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/chat/history/${userId}`);
                    setConversation(response.data.messages);
                } catch (error) {
                    console.error('Error fetching conversation:', error);
                }
            };

            fetchConversation();
        }
    }, [userId]);

    const detectpengu = (response) => {
        const namePattern = /My name is ([\w\s]+)/; 
        const match = response.match(namePattern);
        if (match) {
            setpenguname(match[1]);
        }
    };


    const sendMessage = async (event) => {
        event.preventDefault();
    

        if (!userId) {
            console.error('Error: userId is undefined');

            return;
        }
    
        if (!message.trim()) {
            console.error('Error: message is empty');

            return;
        }
    
        try {
            const response = await axios.post('http://localhost:3000/api/chat', { userId, message });
            const { message: botMessage } = response.data;
    
            detectpengu(botMessage);
    
            setConversation(prevConvo => [
                ...prevConvo, 
                { sender: 'user', text: message }, 
                { sender: 'bot', text: botMessage }
            ]);
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    

    return (
        <div className={`chat-container ${penguname ? 'name-discovered' : ''}`}>
            <div className="conversation">
                {conversation.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            {penguname && (
                <div className="name-discovery-section">
                    <h2>Name: {penguname}</h2></div>
            )}
            <form onSubmit={sendMessage} className="message-form">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}




export default Chat;
