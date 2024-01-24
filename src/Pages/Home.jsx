import React from "react";
import PeopleImage from "../Images/People.jpg";

export const Home = () => {
  return (
    <div>
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          style={{ width: "100%" }}
          src={PeopleImage}
          alt="People"
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            fontSize: "24px",
          }}
        >
          Text Here
        </div>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            height: "650px",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          <div
            style={{ position: "absolute", left: "10%", marginTop: "10%" }}
          >
            Text Here
          </div>
          <div
            style={{
              width: "35%",
              height: "70%",
              backgroundColor: "greenyellow",
              position: "absolute",
              right: "10%",
              marginTop: "7%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
