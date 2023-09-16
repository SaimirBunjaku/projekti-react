import React from 'react';

const Navbar = ({ loggedInUser, onLogout }) => {
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
        <ul className="navbar-nav" style={{ display: 'flex', alignItems: 'center' }}>
          <li className="nav-item" style={{ marginRight: '10px' }}>
            <a className="nav-link" href="/" style={{ color: 'white', fontSize: '18px' }}>Home</a>
          </li>
          <li className="nav-item" style={{ marginRight: '10px' }}>
            <a className="nav-link" href="/about" style={{ color: 'white', fontSize: '18px' }}>About</a>
          </li>
          <li className="nav-item" style={{ marginRight: '10px' }}>
            <a className="nav-link" href="#courses" style={{ color: 'white', fontSize: '18px' }}>Courses</a>
          </li>
          <li className="nav-item" style={{ marginRight: '10px' }}>
            <a className="nav-link" href="favorites.html" style={{ color: 'white', fontSize: '18px' }}>Favorites</a>
          </li>
          {loggedInUser ? (
            <>
              <li className="nav-item">
              <span className="nav-link" style={{ color: 'white', fontSize: '18px', borderBottom: '2px solid white' }}> Welcome, {loggedInUser}!</span>
                </li>

              <li className="nav-item" style={{ marginLeft: '10px' }}>
                <button className="btn btn-link nav-link" onClick={onLogout} style={{ color: 'white', fontSize: '18px', backgroundColor: 'blue', marginRight: '50px' }}>
                  Log Out
                </button>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
