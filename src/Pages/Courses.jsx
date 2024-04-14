import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import courseImage from "../Images/courses3.jpg";
import ArrowSVG from "../Images/arrow";
import { Link } from "react-router-dom";

export const Courses = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" ,  fontFamily :  "Georgia, serif"}}>
      <Header
        backgroundImage={courseImage}
        title="Our Courses"
        isMounted={isMounted}
      />
      <div style={{ width: "100%" , height : "90vh"}}>
        <h1>Manai categoryd baiga negjuud</h1>
        <div style={{ width : "40%" , marginLeft : "100px" , borderWidth : "1px" , borderStyle : "solid" , borderColor : "#000" , borderRadius : "20px",height : "17%" , display : "flex" , flexDirection : "row" , alignItems : "center" , justifyContent : "center"}}>
            <h1>01</h1>
            <div style={{ width : "62%" , marginLeft : "25px" }}>
                <h2 style={{marginBottom : "-2px"}}>Mentorship program</h2>
                <hr></hr>
                <p style={{marginTop : "0px"}}>Хэлний оноотой залууст зөвхөн тэтгэлгийн зөвлөгөө, чиглүүлэг өгнө</p>
            </div>
            <Link to="/" style={{marginBottom : "55px"}}>
            <ArrowSVG direction="left" color="#000" />
            </Link>
        </div>
      </div>
    </div>
  );
};