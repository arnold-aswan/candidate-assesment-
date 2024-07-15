// src/VerifyOtp.js
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const VerifyOtp = ({ email }) => {
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Auth.sendCustomChallengeAnswer(email, otp);
            const user = await Auth.currentAuthenticatedUser();
            setMessage('Login successful');
            console.log('User:', user);
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setMessage('Invalid or expired OTP');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Verify OTP</h2>
            <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
            />
            <button type="submit">Verify</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default VerifyOtp;
