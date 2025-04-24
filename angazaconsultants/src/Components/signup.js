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
    <div className="min-vh-100 bg-light text-success py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 bg-white p-4 rounded shadow">
            <h2 className="mb-4">Sign Up for a Program</h2>
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  name="fullnames"
                  placeholder="Fullnames"
                  onChange={handleChange}
                  value={form.fullnames}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  type="tel"
                  className="form-control"
                  name="phonenumber"
                  placeholder="Phone number"
                  onChange={handleChange}
                  value={form.phonenumber}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={form.password}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  type="password"
                  className="form-control"
                  name="repeatPassword"
                  placeholder="Repeat password"
                  onChange={handleChange}
                  value={form.repeatPassword}
                  required
                />
              </div>

              <div className="col-12 text-muted small">
                City: {form.city}
              </div>

              <div className="col-12">
                <select
                  className="form-select"
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
              </div>

              <div className="col-12">
                <button type="submit" >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;