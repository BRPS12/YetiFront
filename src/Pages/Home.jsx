import React from "react";
import PeopleImage from "../Images/Computer.jpg";
import { Header } from "../components/Header";
import { useState , useEffect } from "react";
export const Home = () => {
  return (
    <div>
      <div>
      <Header backgroundImage={PeopleImage} title="Welcome to Yeti Educational Academy"/>
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <div style={{width : "100%" , height : "630px" , backgroundColor : "blue"}}>
          ss
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            fontSize: "36px", 
            fontFamily: "Arial, sans-serif",
            letterSpacing: "-1px",
          }}
        >
          Beautiful Text Here
        </div>
      </div>
        <div
          style={{
            width: "100%",
            height: "650px",
            backgroundColor: "#fff",
            position: "relative",
            display : "flex",
            flexDirection : "row"
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "10%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "24px",
              fontFamily: "Verdana, sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            Centered Text Here
          </div>
          <div
            style={{
              width: "35%",
              height: "70%",
              backgroundColor: "greenyellow",
              position: "absolute",
              left: "10%",
              top: "50%",
              transform: "translateY(-50%)",
              borderRadius : "20px"
            }}
          >Picture here</div>
        </div>
        <div style={{display : "flex" , width : "100%" , height : "650px" , position : "relative"}}>
        <div>
        <div style={{
          width : "35%" , 
          height : "70%" , 
          backgroundColor : "blue" , 
          position : "absolute" , 
          left : "10%",
          borderRadius : "20px"
          }}>
          Picture Here
        </div>
        <p style={{
        position : "absolute",
        left : "10%",
        bottom : "20%"
        }}>Text here</p>
        </div>
        <div>
        <div style={{
          width : "35%" , 
          height : "70%" , 
          backgroundColor : "red" , 
          position : "absolute" , 
          right : "10%",
          borderRadius : "20px"
          }}>
          Picture Here
        </div>
        <p style={{
        position : "absolute",
        right : "40%",
        bottom : "20%"
        }}>Text here</p>
        </div>
        </div>
        <div style={{display : "flex" , width : "100%" , height : "400px" , position : "relative"}}>
        <div style={{
          width : "40%" , 
          height : "80%" , 
          backgroundColor : "red" , 
          position : "absolute" , 
          right : "7%",
          borderRadius : "20px"
          }}>
          Picture Here
        </div>
        <p style={{position : "absolute" , left : "10%" , top : "20%"}}>Text Here</p>
        </div>
        <div style={{display : "flex" , width : "100%" , height : "650px" , position : "relative" , backgroundColor : "#000" , borderRadius : "10px"}}>
        <div style={{
          width : "20%" , 
          height : "40%" , 
          backgroundColor : "red" , 
          position : "absolute" , 
          right : "7%",
          top : "5%",
          borderRadius : "20px"
          }}>
          Picture Here
        </div>
        <p style={{position : "absolute" , left : "10%" , top : "20%" , color : "#fff"}}>Text Here</p>
        <div style={{width : "100%" , height : "5px" , backgroundColor : "#fff" , position : "absolute" , top : "50%"}}></div>
        <div style={{
          width : "20%" , 
          height : "40%" , 
          backgroundColor : "red" , 
          position : "absolute" , 
          right : "7%",
          bottom : "5%",
          borderRadius : "20px"
          }}>
          Picture Here
        </div>
        <p style={{position : "absolute" , left : "10%" , bottom : "20%" , color : "#fff"}}>Text Here</p>
        </div>
        <div style={{display : "flex" , width : "100%" , height : "400px" , position : "relative"}}>
        <div style={{
          width : "40%" , 
          height : "80%" , 
          backgroundColor : "red" , 
          position : "absolute" , 
          left : "7%",
          borderRadius : "20px",
          top : "5%"
          }}>
          Picture Here
        </div>
        <p style={{position : "absolute" , right : "10%" , top : "20%"}}>Text Here</p>
        </div>
    </div>
    </div>
  );
};
