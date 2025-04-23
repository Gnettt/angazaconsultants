import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#316c21',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '40px'
    }}>
      <h2>Angaza Consultants © 2025 | All Rights Reserved</h2>

      <div style={{ marginTop: '10px' }}>
        <a
          href="https://www.instagram.com/angazaconsultants"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/angazaconsultants"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/angaza-tellux-1233b3334/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
