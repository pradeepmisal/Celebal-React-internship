import React, { useState, useEffect } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'Last name is required';
    }

    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      validationErrors.email = 'Enter a valid email';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(validationErrors);
    setIsFormValid(Object.keys(validationErrors).length === 0);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>First Name:</label><br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
        </div>

        <div>
          <label>Last Name:</label><br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
        </div>

        <div>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            style={{ marginLeft: '5px' }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            marginTop: '10px',
            backgroundColor: isFormValid ? '#007bff' : 'gray',
            color: 'white',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;