
import React, { useState } from 'react';
import axios from 'axios';
import "./LoginPage.css";
import CryptoJS from 'crypto-js';

const secretKey = 'codeMorphs';

function LoginPage(){

    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const handleLogin = async () => {
        try {
        console.log("email", Email);
        const response = await axios.post('http://localhost:3010/login', {
            Email,
            password,
        });

        if (response.data.success) {
          // <a class="nav-item nav-link mkAppointment" href="/main"></a>
            // alert('Login successful');
            const originalUserID = response.data.userID;
            const encryptedUserID = encryptUserID(originalUserID);
            console.log("encryptedUserID ", encryptedUserID);
            console.log("userId ", response.data.userID);
            
            window.location.href = '/session/?userId='+encryptedUserID;
        } else {
            alert('Login failed. Please check your credentials.');
        }
        } catch (error) {
        console.error('Error during login:', error);
        }
    };


    return (
        <div>
          <h1>Login</h1>
          <div>
            <label>Email:</label>
            <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      );
}

const encryptUserID = (userID) => {
  const ciphertext = CryptoJS.AES.encrypt(userID.toString(), secretKey).toString();
  return ciphertext;
};

export default LoginPage;