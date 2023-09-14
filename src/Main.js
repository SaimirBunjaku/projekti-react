
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './Main.css';
import Filler from './Filler'; 
import Courses from './courses'; 
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSwitchToRegister = () => {
  };

  return (
    <div className="main-container">
      <div>
        
        {isLoggedIn ? (
          <>
          <Navbar />
            <Filler />
            <Courses />
          </>
        ) : (
          // kur nuk jena login me na dhone register
          <>
            <RegistrationForm />
            <LoginForm onLogin={handleLogin} onSwitchToRegister={handleSwitchToRegister} />
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
