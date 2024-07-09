import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>

"Welcome to our MERN stack hospital management website! We're dedicated to enhancing healthcare management with modern technology. From patient care to administrative tasks, our platform ensures efficiency and reliability. Explore how we can streamline your healthcare experience today!"
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>

"Welcome to our MERN stack hospital management website, where technology meets healthcare excellence. We specialize in providing a seamless experience for patients, doctors, and administrative staff alike. Our robust platform integrates MongoDB, Express.js, React.js, and Node.js to deliver secure, scalable, and user-friendly solutions. Whether you're scheduling appointments, managing medical records, or optimizing resource allocation, our innovative tools empower you to focus on what matters most – patient care. Join us in revolutionizing healthcare management today!"
          </p>
      
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;