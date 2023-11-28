import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import { AuthProvider } from './useAuth';

import './App.css'; 

function App() {
    const [penguinName, setPenguinName] = useState('');
    const userId = '6559cc9dc92810d4ccc81736'; 

    return (
        <Router>
            <AuthProvider>
                <Navbar penguinName={penguinName} />
                <Routes>
                    <Route path="/" element={<h1>Chatbot Homework</h1>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/chat" element={<Chat setPenguinName={setPenguinName} userId={userId} />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
