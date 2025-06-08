import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div>
        <h2>No data submitted.</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Form Submitted Successfully </h2>
      <ul>
        <li><strong>First Name:</strong> {data.firstName}</li>
        <li><strong>Last Name:</strong> {data.lastName}</li>
        <li><strong>Username:</strong> {data.username}</li>
        <li><strong>Email:</strong> {data.email}</li>
        <li><strong>Password:</strong> {data.password}</li>
        <li><strong>Phone:</strong> {data.countryCode} {data.phone}</li>
        <li><strong>Country:</strong> {data.country}</li>
        <li><strong>City:</strong> {data.city}</li>
        <li><strong>PAN:</strong> {data.pan}</li>
        <li><strong>Aadhar:</strong> {data.aadhar}</li>
      </ul>
      <button onClick={() => navigate('/')}>Fill Again</button>
    </div>
  );
}

export default Success;