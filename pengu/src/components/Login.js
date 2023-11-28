import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../useAuth.js';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = useAuth(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); 

        try {

            const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
            

            if (response.data && response.data.token && response.data.userId) {
                localStorage.setItem('authToken', response.data.token);
                auth.login({ userId: response.data.userId }); 
                navigate('/chat'); 
            } else {
                setError('Login failed, please try again.'); 
            }
        } catch (err) {

            setError(err.response?.data.message || 'An error occurred. Please try again.');
        }
    };

    return (
        
        <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>} 

            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
