import React, { useEffect, useState } from 'react';
import { Card, Button, Input } from 'antd';
import axios from 'axios';
import './AllDoctoruser.css';

const { Search } = Input;

const AllDoctorUser = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get('http://localhost:3001/api/user/get-all-doctors', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          setDoctors(response.data.data);
          setFilteredDoctors(response.data.data);
        } else {
          console.log('Error fetching doctors:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Example function for booking
  const handleBookNow = (doctorId) => {
    console.log('Book Now for doctor with ID:', doctorId);
    // Implement your booking logic here
  };

  const handleSearch = (value) => {
    setSearchTerm(value);

    const filtered = doctors.filter((doctor) => {
      const name = doctor && doctor.name ? doctor.name.toLowerCase() : '';
      const description = doctor && doctor.description ? doctor.description.toLowerCase() : '';
      const adjustedFrom = doctor && doctor.adjustedFrom ? doctor.adjustedFrom.toLowerCase() : '';

      return (
        name.includes(value.toLowerCase()) ||
        description.includes(value.toLowerCase()) ||
        adjustedFrom.includes(value.toLowerCase())
      );
    });

    setFilteredDoctors(filtered);
  };
  

  return (
    <div className="card-wrapper">
          <Search
        placeholder="Search by name, description, or date"
        onChange={(e) => handleSearch(e.target.value)}
        value={searchTerm}
        style={{ marginBottom: '20px' }}
      />
      {filteredDoctors.map((doctor) => (
        <Card key={doctor.id} style={{ marginBottom: '20px' }}>
          <div className="row">
          <div className="col">
              <div className="Doc-image-div">
              <div className="title">
                <h2>{doctor.name}</h2>
              </div>
                {doctor.image && doctor.image.data && doctor.image.contentType ? (
                  <img
                    alt="Doctor"
                    className="doctor-image"
                    src={`data:${doctor.image.contentType};base64,${doctor.image.data}`}
                    title="Doctor Image"
                  />
                ) : (
                 <></>
                )}
              </div>
            </div>
            <div className="col">
             
              <div className="person-name">
                <p id="postID">Description </p>
                <p>{doctor.description}</p>
              </div>
            </div>
          
            <div className="col information">
              <div className="start-time">
                <p><span  id="postID">Start time:</span> {doctor.adjustedFrom}</p>
              </div>
              <div className="price">
                <p><span  id="postID">Price: </span>{doctor.price}</p>
              </div>
              {/* Additional information can be added here */}
            </div>
            <div className="col button-div">
              <Button type="primary" onClick={() => handleBookNow(doctor.id)}>
                Book Now
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllDoctorUser;
