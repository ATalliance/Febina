import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';


const LandingPage = () => {
  const [appDropdownOpen, setAppDropdownOpen] = useState(false);
  const [signOutDropdownOpen, setSignOutDropdownOpen] = useState(false);

  const toggleAppDropdown = () => {
    setAppDropdownOpen(!appDropdownOpen);
  };

  const toggleSignOutDropdown = () => {
    setSignOutDropdownOpen(!signOutDropdownOpen);
  };

  return (
    <div className="landing-page">
      <header className="header">
        <nav><div className="logo">Febina</div></nav>
        <nav>
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleAppDropdown}>Application</button>
            {appDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/VendorDetails">Vendor Details</Link>
                <a href="/">Option 2</a>
                <a href="/">Option 3</a>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleSignOutDropdown}>Sign Out</button>
            {signOutDropdownOpen && (
              <div className="dropdown-content">
                <a href="/">Confirm Sign Out</a>
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="content">
        <h1>Welcome To Febina</h1>
        <div className="search-box">
          <h2>Search</h2>
          <div className="input-container">
            <input type="text" placeholder="Enter your search" />
            <button><img src="search-icon.png" alt="GO!" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
