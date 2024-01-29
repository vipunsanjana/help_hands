// Session.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Session.css';
import CryptoJS from 'crypto-js';
import axios from 'axios';

const secretKey = 'codeMorphs';

const Session = () => {
  const navigate = useNavigate();
  // const { userId } = useParams();
  const days = ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const startTime = '15:30';
  const sundayStartTime = '09:00';
  const sessionDuration = 20;
  const maxPatients = 7;
  const sundayMaxPatients = 6;

  const [selectedDay, setSelectedDay] = useState('Monday');

  useEffect(() => {
    const currentUrl = window.location.href;

    const urlSearchParams = new URLSearchParams(window.location.search);
    const userId = urlSearchParams.get('userId');

    const decryptedUserID = decryptUserID(userId);
    console.log("IsNON ", isNaN(decryptedUserID))
    if(!isNaN(decryptedUserID)){
      getPatienDetails(decryptedUserID);
    }
    
  }, []);

  const getPatienDetails = async (userId) => {
    try{
      const response = await axios.post('http://localhost:3010/patientDetails', {
        userId,
      });
      console.log("response", response);
      if(response.data.success){
        console.log("patient details ", response);
      }else{
        console.log("patient details wrong ");
      }

    } catch(error){
      console.error('Errorof Patient data', error);
    }
  }

  const [sessions, setSessions] = useState(
    days.map((day) => {
      const isSunday = day === 'Sunday';
      const maxSundayPatients = isSunday ? sundayMaxPatients : maxPatients;

      return {
        day,
        appointments: Array.from({ length: maxSundayPatients }, (_, index) => {
          const appointmentTime = isSunday ? '09:00' : startTime;
          const appointmentId = `${day}-${appointmentTime}-${index + 1}`;

          return {
            id: appointmentId,
            time: appointmentTime,
            location: 'Negombo',
            status: 'available',
            appointmentNumber: index + 1,
            realData: '',
          };
        }),
      };
    })
  );

  function renderSessions(day) {
    const selectedDaySessions = sessions.find((session) => session.day === day);

    if (!selectedDaySessions) {
      return null;
    }

    return selectedDaySessions.appointments.map((appointment) => (
      <div key={appointment.id} className={`session-card ${appointment.status}`}>
        <p>Starting Time: {appointment.time}</p>
        <p>Location: {appointment.location}</p>
        <p>Session Duration: {sessionDuration} minutes</p>
        <button className="book-button" onClick={() => bookAppointment(appointment)}>
          Book Now
        </button>
      </div>
    ));
  }

  function bookAppointment(appointment) {
    const updatedSessions = sessions.map((session) => {
      if (session.day === selectedDay) {
        session.appointments = session.appointments.map((a) => {
          if (a.id === appointment.id) {
            return {
              ...a,
              status: 'booked',
              realData: '', // Set the real data here
            };
          }
          return a;
        });
      }
      return session;
    });

    setSessions(updatedSessions);
    navigate('/checkout');
  }

  const decryptUserID = (ciphertext) => {
    try {
      const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
      const decryptedUserID = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedUserID || null;
    } catch (error) {
      console.error('Error decrypting user ID', error);
      return null;
    }
  };
  

  return (
    <div className="session-container">
      <div className="day-selector">
        {days.map((day) => (
          <button
            key={day}
            className={day === selectedDay ? 'selected' : ''}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <h2 className="selected-day-heading">{`Selected Day: ${selectedDay}`}</h2>
      <div className="session-schedule">{renderSessions(selectedDay)}</div>
    </div>
  );

};

export default Session;
