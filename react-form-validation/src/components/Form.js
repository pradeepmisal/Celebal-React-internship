import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    countryCode: '',
    phone: '',
    country: '',
    city: '',
    pan: '',
    aadhar: ''
  });

  const [errors, setErrors] = useState({});
  const [cities, setCities] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const countryOptions = {
    India: ['Delhi', 'Mumbai', 'Bangalore'],
    USA: ['New York', 'San Francisco', 'Los Angeles'],
    UK: ['London', 'Manchester', 'Liverpool']
  };

  useEffect(() => {
    if (formData.country && countryOptions[formData.country]) {
      setCities(countryOptions[formData.country]);
    } else {
      setCities([]);
    }
  }, [formData.country]);

  useEffect(() => {
    const allValid = Object.values(errors).every(err => err === '') &&
                     Object.values(formData).every(val => val !== '' && val !== false);
    setIsFormValid(allValid);
  }, [errors, formData]);

  const validate = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim() === '' ? 'Required' : '';
      case 'username':
        return value.length < 4 ? 'Minimum 4 characters' : '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email';
      case 'password':
        return value.length < 6 ? 'Minimum 6 characters' : '';
      case 'phone':
        return /^[0-9]{10}$/.test(value) ? '' : 'Invalid phone number';
      case 'pan':
        return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? '' : 'Invalid PAN';
      case 'aadhar':
        return /^[0-9]{12}$/.test(value) ? '' : 'Invalid Aadhar';
      case 'countryCode':
        return value.trim() === '' ? 'Required' : '';
      case 'country':
        return value === '' ? 'Select a country' : '';
      case 'city':
        return value === '' ? 'Select a city' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData(prev => ({ ...prev, [name]: val }));

    const errorMsg = validate(name, val);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/success', { state: formData });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>User Registration</h2>

      <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <div>{errors.firstName}</div>

      <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <div>{errors.lastName}</div>

      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      <div>{errors.username}</div>

      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <div>{errors.email}</div>

      <input type={formData.showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <label>
        <input type="checkbox" name="showPassword" checked={formData.showPassword} onChange={handleChange} /> Show Password
      </label>
      <div>{errors.password}</div>

      <input type="text" name="countryCode" placeholder="Country Code (e.g. +91)" value={formData.countryCode} onChange={handleChange} />
      <div>{errors.countryCode}</div>

      <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
      <div>{errors.phone}</div>

      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select Country</option>
        {Object.keys(countryOptions).map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <div>{errors.country}</div>

      <select name="city" value={formData.city} onChange={handleChange}>
        <option value="">Select City</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <div>{errors.city}</div>

      <input type="text" name="pan" placeholder="PAN Number" value={formData.pan} onChange={handleChange} />
      <div>{errors.pan}</div>

      <input type="text" name="aadhar" placeholder="Aadhar Number" value={formData.aadhar} onChange={handleChange} />
      <div>{errors.aadhar}</div>

      <button type="submit" disabled={!isFormValid}>Submit</button>
    </form>
  );
}

export default Form;