
import React from 'react';

const HeroSection = () => {
  return (
    <div className="container1">
      <div className="container">
        <p className="text">
          I create <span className="playful">playful</span>
          <br />
          experiences.
        </p>
        <p className="text1">
          Soni Darshan, <span className="typing">Student</span>
          <span className="typed-cursor" aria-hidden="true" />
        </p>
      </div>
      <img
        src="https://i.ibb.co/dLH6NSS/hero.png"
        alt="devs image"
        className="img"
      />
    </div>
  );
};

export default HeroSection;
