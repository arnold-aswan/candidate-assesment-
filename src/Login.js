// src/Login.js
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const Login = ({ onOtpSent }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Auth.signIn(email);
            onOtpSent(email);
        } catch (error) {
            console.error('Error sending OTP:', error);
            if (error.code === 'UserNotFoundException') {
                try {
                    await Auth.signUp({
                        username: email,
                        password: Math.random().toString(36).slice(-8),
                    });
                    await Auth.signIn(email);
                    onOtpSent(email);
                } catch (error) {
                    console.error('Error during sign-up:', error);
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Send OTP</button>
        </form>
    );
};

export default Login;
