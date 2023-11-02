import React from 'react';
import myImage from './mprproject.jpeg';

const ProjectDetails = () => {
  return (
    <div className="pro2">
      <div className="container2">
        <div className="image-container">
          <img src={myImage} alt="Project" className="proimage" />
        </div>
        <div className="text-container">
          <p className="title txt">Manage Staff System</p>
          <p className="desc txt">A System made in Java which covers all the needs to manage staff</p>
          <p className="tu txt">Tools used:</p>
          <ul className='txt'>
            <li className='txt'>JAVA Swing</li>
            <li className='txt'>MySQL</li>
          </ul>
          <a href="https://github.com/sonixx02">
            <div className="code text txt">
              <p className="codetxt txt">Code</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
