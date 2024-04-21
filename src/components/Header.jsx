import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import YetiLogo from "../Images/YetiLogo.jpg";

export const Header = ({ backgroundImage, title, isMounted }) => {
  const [menuVisible, setMenuVisible] = useState(false);


  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    return unlisten;
  }, []);

  useEffect(() => {
    setMenuVisible(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <header
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          display: "flex",
        }}
      >
        {" "}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            fontSize: "50px",
            color: "#fff",
            fontFamily: "Georgia, serif",
            textAlign: "center",
          }}
        >
          <div
            className={`header imported-blur-background ${
              isMounted ? "scroll-animation" : ""
            }`}
          >
            <h1>{title}</h1>
          </div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/">
          <div
            className="logo"
            style={{
              display: "flex",
              alignItems: "center", // Center the logo vertically
              position: "absolute",
              top: "2%",
              left: "1%",
            }}
          >
            <img
              style={{
                width: "70px",
                borderRadius: "20px",
                marginRight: "10px",
              }}
              src={YetiLogo}
              alt="Yeti Logo"
            />
            <div style={{ color: "#fff", fontFamily: "Georgia, serif" }}>
              <div style={{ fontSize: "20px" }}>Yeti Educational</div>
              <div style={{ fontSize: "20px" }}>Academy</div>
            </div>
          </div>
        </Link>
        <div
          className="custom-menu"
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: "1%",
            left: "17%",
          }}
        >
          <Link className="custom-menu-button" to="/">
            Home
          </Link>
          <div
            className={`custom-menu-button ${menuVisible ? "open" : ""}`}
            onClick={toggleMenu}
          >
            Courses
          </div>
          <Link className="custom-menu-button" to="/news">
            News
          </Link>
          <Link className="custom-menu-button" to="/about">
            About
          </Link>
          <Link className="custom-menu-button" to="/contactus">
            Contact Us
          </Link>
        </div>
        <div style={{position : "absolute" , right : "0"}}>
          <button style={{width : "150px" , height : "90px" , backgroundColor : "#000" , borderRadius : "10px" , fontFamily : "Georgia" , color : "#fff" , fontSize : "25px"}}>Login</button>
        </div>
      </header>
      <div className={`overlay ${menuVisible ? "show" : ""}`}>
        <div className="menu">
          <div className="custom-menu">
            <Link className="custom-second-menu-button" to="/course/1">
            Mentorship program
            </Link>
            <Link className="custom-second-menu-button" to="/course/2">
            Study Abroad Program
            </Link>
            <Link className="custom-second-menu-button" to="/course/3">
            Ерөнхий англи хэл
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
