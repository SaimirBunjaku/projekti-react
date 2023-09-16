import React, { useState, useEffect } from 'react';
import './courses.css';

import htmlImage from './components/img/html.png';
import cssImage from './components/img/css.png';
import jsImage from './components/img/js.png';
import mysqlImage from './components/img/mysql.png';
import nodeImage from './components/img/node.png';
import phpImage from './components/img/php.png';
import pythonImage from './components/img/python.png';
import reactImage from './components/img/react.png';
import rubyImage from './components/img/ruby.png';
import cplusImage from './components/img/cplus.png';

function Courses() {
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const toggleFavorite = (user) => {
    const isAlreadyFavorite = favorites.some((favorite) => favorite.id === user.id);

    if (isAlreadyFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== user.id);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, user];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const displayedUsers = showMore ? users : users.slice(0, 3);

  return (
    <div className="courses" id="courses">
      <div className="header">
        <h1>Our Courses</h1>
        <p>Enroll with us, and get mentored by the most eperienced prorgammers!</p>
      </div>
      {displayedUsers.map((user, index) => (
        <div className="card" key={user.id}>
          <p>{user.username}</p>
          <div className="image-container">
            {index === 0 && <img src={htmlImage} alt="HTML" />}
            {index === 1 && <img src={cssImage} alt="CSS" />}
            {index === 2 && <img src={jsImage} alt="JavaScript" />}
            {index === 3 && <img src={mysqlImage} alt="MySQL" />}
            {index === 4 && <img src={nodeImage} alt="Node.js" />}
            {index === 5 && <img src={phpImage} alt="PHP" />}
            {index === 6 && <img src={pythonImage} alt="Python" />}
            {index === 7 && <img src={reactImage} alt="React" />}
            {index === 8 && <img src={rubyImage} alt="Ruby" />}
            {index === 9 && <img src={cplusImage} alt="C++" />}
          </div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <div className="buttons">
            <button className="enroll-button">Enroll</button>
            <button
              className="favorites-button"
              onClick={() => toggleFavorite(user)}
            >
              {favorites.some((favorite) => favorite.id === user.id)
                ? 'Remove from favorites'
                : 'Add to favorites'}
            </button>
          </div>
        </div>
      ))}
      <button className="show-more-button" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}

export default Courses;
