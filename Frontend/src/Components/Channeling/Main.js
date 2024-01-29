import React, { useEffect, useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { FaGoogle } from 'react-icons/fa'; // Import the Google icon
import './Main.css'; // Import your CSS file
import axios from 'axios';

const Main = () => {
  const doctorsSectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:3010/doctorDetails');
        console.log("data size", response.data.doctorDetails.length);
        console.log("doctor details ", response);

        const doctorsArray = response.data.doctorDetails.map((doctor) => ({
          id: doctor.DoctorID,
          firstname: doctor.FirstName,
          lastName: doctor.LastName,
          fullName: doctor.FirstName + " " +doctor.LastName,
          specialty: doctor.Specialization,
          image: doctor.image_location,
        }));

        setDoctors(doctorsArray);

      } catch (error) {
        console.error('Error fetching doctors: ', error);
      }
    };

    fetchDoctors();
  }, []);

  const scrollToDoctorsSection = () => {
    doctorsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGetAppointment = () => {
    openModal();
  };

  // const doctors = [
  //   {
  //     id: 1,
  //     name: 'Dr. Thaaru Paranavithana',
  //     specialty: 'Chief Psychologist',
  //     image: '/director.jpg', 
  //   },
    
  // ];

  return (
    <div>
      <div className="auth-container">
       
        <div className="image-section">
          <div className="image-container">
            <img src="/1.png" alt="Banner" className="image" />
            <div className="banner-text">
              <h1>Your<span className="bold-text"> Mental Health</span> Journey Starts Here</h1>
              <p>Book your appointment with ease!</p>
              <div className="scroll-arrow" onClick={scrollToDoctorsSection}>
                &#8595; {/* Unicode arrow down character */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doctors-section" ref={doctorsSectionRef}>
        <h2>Meet Our Doctors</h2>
        <div className="doctor-cards">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.image} alt={doctor.fullName} className="doctor-image" />
              <h3>{doctor.fullName}</h3>
              <p>{doctor.specialty}</p>
              <button className="appointment-button" onClick={handleGetAppointment}>
                Get an Appointment
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="doctors-section" ref={doctorsSectionRef}>
        <h2>Meet Our Doctors</h2>
        <div className="doctor-cards">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <button className="appointment-button" onClick={handleGetAppointment}>
                Get an Appointment
              </button>
            </div>
          ))}
        </div>
      </div> */}

      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Login/Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please login or sign up to proceed.
          </DialogContentText>
          {/* Add your login and sign-up options here, e.g., Google login button */}
          <Button variant="contained" color="primary" fullWidth startIcon={<FaGoogle />}>
          <a href="/login"> Login with Google</a>
          </Button>

          <button class="btn btn-primary my-2 my-sm-0 contactUsBtn">
          <a href="/session"> Make Appointment</a>
        </button>
        </DialogContent>

        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Main;