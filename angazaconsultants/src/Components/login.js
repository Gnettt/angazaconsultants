import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({
    fullnames: '',
    password: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Login successful');
        
        } else {
          alert('Login failed. Check your name and password.');
        }
      })
      .catch(err => {
        console.error('Error:', err);
        alert('An error occurred during login.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4" >
     <div className="mb-3"></div>
      <input 
        name="fullnames" 
        className="form-control"
        type="text"
        placeholder="Fullnames" 
        onChange={handleChange} 
        value={form.fullnames} 
        required 
      />
      <input 
        name="password" 
        type="password" 
        placeholder="Password" 
        className="form-control"

        onChange={handleChange} 
        value={form.password} 
        required 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
