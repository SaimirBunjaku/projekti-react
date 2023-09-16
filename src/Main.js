import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './Main.css';
import Filler from './Filler';
import Courses from './courses';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('loggedInUser');

    if (userLoggedIn && user) {
      setIsLoggedIn(true);
      setLoggedInUser(user);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setLoggedInUser('');
  };

  const handleSwitchToRegister = () => {};

  return (
    <div className="main-container">
      <div>
        {isLoggedIn ? (
          <>
            <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />
            <Filler />
            <Courses />
          </>
        ) : (
          <div className="form-container">
            <RegistrationForm />
            <LoginForm onLogin={handleLogin} onSwitchToRegister={handleSwitchToRegister} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
