import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" className="navbar1">
        DS
      </a>
      <div className="navbar2">
        <a href="#">Resume</a>
        <a href="https://github.com/sonixx02">
          <img
            width="64"
            height="64"
            alt="GitHub logo"
            src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
          />
        </a>
        <a href="https://www.linkedin.com/in/soni-darshan-18125124a/">
          <img
            width="50"
            height="50"
            alt="LinkedIn logo"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
