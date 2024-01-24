import React from 'react';
import "./Footer.css"
import { SocialIcon } from 'react-social-icons'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="school-info">
          <h3>Yeti Educational Academy</h3>
          <p>Багшийн дээд UBH төв, 15 давхар 1513 тоот </p>
          <p>Mongolia , Ulaanbaatar</p>
          <p style={{textDecoration : "underline"}}>Phone: +97691913719 </p>
          <p>Email: yetischool.e@gmail.com</p>
        </div>

        <div className="social-media">
          <p>Follow Us:</p>
          <SocialIcon url="https://www.facebook.com/Yetieducationalacademy" />
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Yeti. All rights reserved.</p>
      </div>

      <div className="additional-links">
        www.lyro.vercel.app
      </div>

      <div className="designer-info">
        <p>Designed by Boock</p>
      </div>
    </footer>
  );
};

