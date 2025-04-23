import React, { useState, useEffect } from 'react';

const Signup = () => {
  const [form, setForm] = useState({
    fullnames: '',
    phonenumber: '',
    password: '',
    repeatPassword: '',
    program: '',
    city: 'Loading...'
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        )
          .then((response) => response.json())
          .then((data) => {
            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              'City not found';
            setForm((prev) => ({ ...prev, city }));
          })
          .catch(() =>
            setForm((prev) => ({ ...prev, city: 'Error fetching city' }))
          );
      },
      () =>
        setForm((prev) => ({ ...prev, city: 'Location access denied' }))
    );
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.repeatPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Submitted:', form);

    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Registration successful');
        } else {
          alert('Registration failed');
        }
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <div className="min-h-screen bg-white text-[#316c21] p-6">
      <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-md">
        

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4"
        >
          <input
            className="w-full p-2 border rounded"
            name="fullnames"
            placeholder="Fullnames"
            onChange={handleChange}
            value={form.fullnames}
            required
          />
          <input
            className="w-full p-2 border rounded"
            name="phonenumber"
            placeholder="Phone number"
            onChange={handleChange}
            value={form.phonenumber}
            required
          />
          <input
            className="w-full p-2 border rounded"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            required
          />
          <input
            className="w-full p-2 border rounded"
            name="repeatPassword"
            type="password"
            placeholder="Repeat password"
            onChange={handleChange}
            value={form.repeatPassword}
            required
          />

          <div className="text-sm text-gray-600">
            City: {form.city}
          </div>

          <select
            className="w-full p-2 border rounded"
            name="program"
            onChange={handleChange}
            value={form.program}
            required
          >
            <option value="">Select a program</option>
            <option value="angaza">Angaza Program</option>
            <option value="soya">Soya Youth Program</option>
            <option value="mucuna">Mucuna Program</option>
          </select>

          <button
            type="submit"
            className="md:col-span-2 bg-[##56c737] text-white py-2 rounded hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

