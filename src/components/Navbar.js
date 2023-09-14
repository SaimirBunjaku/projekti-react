import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'transparent', borderBottom: '1px solid #fff' }}>
      <a className="navbar-brand" href="/" style={{ color: 'white', padding: '0 30px', fontSize: '50px' }}>Virtuele</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end pr-4" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/" style={{ color: 'white', padding: '0  25px', fontSize: '18px' }}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about" style={{ color: 'white', padding: '0  25px', fontSize: '18px' }}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#courses" style={{ color: 'white', padding: '0  25px', fontSize: '18px' }}>Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="favorites.html" style={{ color: 'white', padding: '0  25px', fontSize: '18px' }}>Favorites</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary" style={{ fontSize: '18px', padding: '0 25px', margin: '0 30px'}}>Log In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
