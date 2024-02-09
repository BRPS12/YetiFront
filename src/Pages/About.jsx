import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import PersonImage from "../Images/Studying.jpg";

export const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header
        backgroundImage={PersonImage}
        title="About Yeti"
        isMounted={isMounted}
      />
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "45%",
            borderWidth: "2px",
            borderStyle: "solid",
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "40%",
              height: "40%",
              borderWidth: "2px",
              borderStyle: "solid",
              marginLeft: "100px",
            }}
          >
            Picture here
          </div>

          <p style={{ color: "#000", marginLeft: "100px" }}>Text Here</p>
        </div>
        <div
          style={{
            width: "90%",
            height: "45%",
            borderWidth: "2px",
            borderStyle: "solid",
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#000", marginLeft: "780px" }}>Text Here</p>

          <div
            style={{
              width: "40%",
              height: "40%",
              borderWidth: "2px",
              borderStyle: "solid",
              marginLeft: "100px",
            }}
          >
            Picture here
          </div>
        </div>
      </div>
    </div>
  );
};
