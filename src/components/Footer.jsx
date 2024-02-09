import React from 'react';
import "./Footer.css"
import { SocialIcon } from 'react-social-icons'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="school-info">
          <h3>Yeti Educational Academy</h3>
          <p>Багшийн дээд UBH төв, 15 давхар 1513 тоот </p>
          <p>Mongolia, Ulaanbaatar</p>
          <p className="contact-info">Phone: <span>+976 9191 3719</span></p>
          <p className="contact-info">Email: <span>yetischool.e@gmail.com</span></p>
        </div>

        <div className="social-media">
          <p>Follow Us:</p>
          <div className="social-icons">
            <SocialIcon url="https://www.facebook.com/Yetieducationalacademy" />
            <SocialIcon url="https://www.instagram.com/yetiacademyy/?theme=dark" style={{marginLeft : "10px"}} />
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Yeti. All rights reserved.</p>
      </div>

      <div className="additional-links">
        <a href="https://lyro.vercel.app/" target="_blank" rel="noopener noreferrer">www.lyro.vercel.app</a>
      </div>

      <div className="designer-info">
        <p>Designed by Boock</p>
      </div>
    </footer>
  );
};
