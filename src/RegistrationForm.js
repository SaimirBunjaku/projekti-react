
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // duhet mi mush krejt fields 
    if (!name || !username || !password) {
      alert('Please fill in all fields');
      return;
    }

    // per name username pw, mu rujt secila nveti nlocal storage
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // kur ta kryn mu fshi qka ka shkru
    setName('');
    setUsername('');
    setPassword('');

    // tregoji qe e ka kriju llogarine userit
    alert('You have successfully created an account!');
  };

  return (
    <div className="container mt-4">
      <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="card-body">
          <h2 className="card-title">Registration</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleRegistration}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
