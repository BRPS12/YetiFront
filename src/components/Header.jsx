import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Assuming you have defined your CSS styles here
import YetiLogo from "../Images/YetiLogo.jpg";
import { Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CircularProgress from "@mui/material/CircularProgress";
import { instance } from "../App";

export const Header = ({
  backgroundImage,
  title,
  isMounted,
  buttonText,
  repeat,
  bgSize
}) => {
  const userId = window.localStorage.getItem("user_id");
  const [menuVisible, setMenuVisible] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await instance.get(`/users/${userId}`);
      setUser(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setMenuVisible(false);
    getUser();
  }, [location]);

  const form = () => {
    window.open("https://forms.gle/3sA2YV6zXUcdZFuk7");
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CircularProgress
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      </div>
    );
  }

  // Render header with content once loading is complete
  return (
    <div>
      <header
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}>
        <div
          className="header-background"
          style={{
            background: `url(${backgroundImage})`,
            backgroundSize: bgSize,
            backgroundPosition: "center",
            backgroundRepeat: repeat,
            filter: "blur(2px)",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
            filter: "blur(0.5px) grayscale(10%) brightness(50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            padding: "20px",
            boxSizing: "border-box",
          }}>
            <div style={{display : "flex" , flexDirection : "row" , marginRight : "auto"}}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "auto",
              }}>
              <img
                src={YetiLogo}
                style={{
                  width: "5.5vw",
                  borderRadius: "20px",
                  marginRight: "1vw",
                }}
                alt="Yeti Logo"
              />
              <div style={{ color: "#fff", fontFamily: "Georgia, serif" }}>
                <div style={{ fontSize: "1.5vw" }}>Yeti Educational</div>
                <div style={{ fontSize: "1.5vw" }}>Academy</div>
              </div>
            </div>
          </Link>
          <div className="custom-menu">
            <Link className="custom-menu-button" to="/">
              Home
            </Link>
            <div
              className="custom-menu-button"
              style={{ cursor: "pointer" }}
              onClick={toggleMenu}>
              Courses
            </div>
            {menuVisible && (
              <div className={`dropdown-content ${menuVisible ? "show" : ""}`}>
                <div className="menu">
                  <Link className="custom-second-menu-button" to="/course/1">
                    <p style={{ marginBottom: "15px" }}>Mentorship program</p>
                  </Link>
                  <Link className="custom-second-menu-button" to="/course/2">
                    <p style={{ marginBottom: "15px" }}>Study Abroad Program</p>
                  </Link>
                  <Link className="custom-second-menu-button" to="/course/3">
                    <p style={{ marginBottom: "15px" }}>Ерөнхий англи хэл</p>
                  </Link>
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
          <div className="inner-div">
            <div
              className={`header imported-blur-background ${
                isMounted ? "scroll-animation" : ""
              }`}>
              <h1 style={{ fontSize: "5vw", color: "#fff" }}>{title}</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                {buttonText && (
                  <button
                    className="buttonText"
                    style={{ textDecoration: "none" }}
                    onClick={form}>
                    <p>{buttonText}</p>
                    <KeyboardDoubleArrowRightIcon />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", right: "0", top: "2vh" }}>
            {userId ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: "20px",
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
                    style={{
                      width: "5vw",
                      height: "5vw",
                      borderRadius: "50%",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "1.5vw",
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
                  width: "10vw",
                  height: "9vh",
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
        </div>
      </header>
    </div>
  );
};
