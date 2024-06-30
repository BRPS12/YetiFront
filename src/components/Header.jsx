import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import YetiLogo from "../Images/YetiLogo.jpg";
import { Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { instance } from "../App";
export const Header = ({ backgroundImage, title, isMounted, buttonText }) => {
  const userId = window.localStorage.getItem("user_id");
  console.log(userId);
  const [menuVisible, setMenuVisible] = useState(false);
  const [user, setUser] = useState([]);
  const getUser = async () => {
    try {
      const response = await instance.get(`/users/${userId}`);
      setUser(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    return unlisten;
  }, []);
  useEffect(() => {
    setMenuVisible(false);
    getUser();
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
          flexDirection: "column",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "auto",
            padding: "20px",
          }}>
          <Link style={{ textDecoration: "none" }} to="/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}>
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
>
            <Link className="custom-menu-button" to="/">
              Home
            </Link>
            {menuVisible === false ? (
              <div
                className={`custom-menu-button`}
                style={{ cursor: "pointer" }}
                onClick={toggleMenu}>
                Courses
              </div>
            ) : (
              <div>
                <div className={`custom-menu-button`} onClick={toggleMenu}>
                  Courses
                </div>
                <div
                  className={`dropdown-content ${menuVisible ? "show" : ""}`}>
                  <div className="menu">
                    <Link className="custom-second-menu-button" to="/course/1">
                      <p style={{ marginBottom: "15px" }}>Mentorship program</p>
                    </Link>
                    <Link className="custom-second-menu-button" to="/course/2">
                      <p style={{ marginBottom: "15px" }}>
                        Study Abroad Program
                      </p>
                    </Link>
                    <Link className="custom-second-menu-button" to="/course/3">
                      <p style={{ marginBottom: "15px" }}>Ерөнхий англи хэл</p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
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
        </div>

        <div
          className="inner-div">
          <div
            className={`header imported-blur-background ${
              isMounted ? "scroll-animation" : ""
            }`}
            >
            <h1>{title}</h1>
            <div style={{display : "flex" , alignItems : "center" , justifyContent : "center"}}>
            {buttonText ? (
            <Link className="buttonText" style={{textDecoration : "none"}} to="/register">
              <p>{buttonText}</p>
              <KeyboardDoubleArrowRightIcon/>
              </Link>
          ) : (
            <></>
          )}
          </div>
          </div>
          
        </div>
        <div
          style={{
            position: "absolute",
            right: "0",
          }}>
          {userId && userId ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "20px",
                paddingTop: "10px",
              }}>
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "5px",
                }}>
                <img
                  src={user.profile}
                  alt="Profile Picture"
                  className="profile-picture"
                  style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                />
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "Georgia",
                    marginTop: "3px",
                    color: "#fff",
                  }}>
                  {user.name}
                </p>
              </Link>
            </div>
          ) : (
            <Button
              component={Link}
              to="/login"
              style={{
                width: "120px",
                height: "60px",
                backgroundColor: "#000",
                borderRadius: "10px",
                fontFamily: "Georgia",
                color: "#fff",
                fontSize: "20px",
                textDecoration: "none",
              }}>
              Login
            </Button>
          )}
        </div>
      </header>
    </div>
  );
};
