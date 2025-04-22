import React, { useState, useEffect } from 'react';

const SignupForm = () => {
  const [form, setForm] = useState({
    fullnames: '',
    phonenumber: '',
    password: '',
    repeatPassword: '',
    program: '',
    city: 'Loading...'
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        .then(response => response.json())
        .then(data => {
          const city = data.address.city || data.address.town || data.address.village || "City not found";
          setForm(prev => ({ ...prev, city }));
        })
        .catch(() => setForm(prev => ({ ...prev, city: 'Error fetching city' })));
    }, () => setForm(prev => ({ ...prev, city: 'Location access denied' })));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.repeatPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Submitted:', form);
    fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Registration successful');
        } else {
          alert('Registration failed');
        }
      })
      .catch(err => console.error('Error:', err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullnames" placeholder="Fullnames" onChange={handleChange} value={form.fullnames} required />
      <input name="phonenumber" placeholder="Phone number" onChange={handleChange} value={form.phonenumber} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} value={form.password} required />
      <input name="repeatPassword" type="password" placeholder="Repeat password" onChange={handleChange} value={form.repeatPassword} required />
      <p>City: {form.city}</p>
      <select name="program" onChange={handleChange} value={form.program}>
        <option >Angaza Program</option>
        <option >Soya Youth Program</option>
        <option >Mucuna Loan Program</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default SignupForm;
