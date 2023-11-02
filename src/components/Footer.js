
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="fchild">
        <p className="text ftext">Connect With Me</p>
        <div className="logos">
          <a href="">
            <div className="box">
              <p className="text fresume">Resume</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/soni-darshan-18125124a">
            <div className="box">
              <img
                src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
                alt=""
                className="flinkedin fimg"
              />
            </div>
          </a>
          <a href="https://github.com/sonixx02">
            <div className="box">
              <img
                src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
                alt=""
                className="fgithub fimg"
              />
            </div>
          </a>
          <a href="#">
            <div className="box">
              <img
                src="https://i.ibb.co/LNvY5SF/icons8-instagram-48.png"
                alt=""
                className="insta fimg"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
