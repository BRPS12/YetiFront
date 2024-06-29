import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div style={{ fontFamily: "Georgia , sans-serif" }}>
          <p style={{ fontSize: "25px" , marginTop : "10px" }}>Youth Educational Training Academy</p>
          <p style={{ marginTop : "10px"}}>Багшийн дээд UBH төв, 15 давхар 1513 тоот </p>
          <p style={{ marginTop : "10px"}}>Mongolia, Ulaanbaatar</p>
          <p style={{ marginTop : "10px"}} className="contact-info">
            Phone: <span>+976 9191 3719</span>
          </p>
          <p style={{ marginTop : "10px"}} className="contact-info">
            Email: <span>yetischool.e@gmail.com</span>
          </p>
        </div>

        <div style={{ width: "400px" , marginTop : "2 0px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              height: "20vh",
            }}
          >
            <NavLink className="pagesText"  activeClassName="active" exact to="/">Our Home Page</NavLink>
            <NavLink className="pagesText" exact to="/news">News</NavLink>
            <NavLink className="pagesText" exact to="/about">About Us</NavLink>
            <NavLink className="pagesText" exact to="/contactus">Contact Us</NavLink>
          </div>

          <p className="pagesText">Follow Us:</p>
          <div className="social-icons" style={{marginTop : "20px"}}>
            <SocialIcon url="https://www.facebook.com/Yetieducationalacademy" />
            <SocialIcon
              url="https://www.instagram.com/yetiacademyy/?theme=dark"
              style={{ marginLeft: "10px" }}
            />
            <SocialIcon
              url="https://www.youtube.com/yetiacademyy/?theme=dark"
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Yeti. All rights reserved.</p>
      </div>

      <div className="designer-info">
        <p>Designed by Boock</p>
      </div>
    </footer>
  );
};
