import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import PersonImage from "../Images/ContactUs.jpg";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

export const ContactUs = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <Header
        backgroundImage={PersonImage}
        title="Contact Us"
        isMounted={isMounted}
        repeat="no-repeat"
        bgSize="cover"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
          paddingBottom : "15vh",
          alignItems : "center"
        }}
      >
        <div
          style={{
            marginLeft: "10vw",
            fontFamily: "Georgia",
            marginTop: "10vh",
          }}
        >
          <p style={{ fontSize: "40px", fontFamily: "Georgia" }}>
            Бидэнтэй холбоо барих
          </p>
          <p style={{ fontSize: "25px", fontWeight: "lighter" , paddingTop : "30px" }}>
            Утасны дугаар : <span>7202 3719 , 8605 3719 , 9191 3719</span>
          </p>
          <p style={{ fontSize: "25px", paddingTop: "30px" }}>
            Хаяг : <span>Багшийн дээд UBH төв, 15 давхар 1513 тоот</span>
            <p>Ulaanbaatar, Mongolia</p>
          </p>
          <p style={{ fontSize: "25px", paddingTop: "30px" }}>
            Э-майл :<span>yetischool.e@gmail.com</span>
          </p>
          <div style={{marginTop : "30px"}}>
            <a href="https://www.facebook.com/Yetieducationalacademy">
              <img src={require("../Images/facebook.jpg")} style={{width : "50px" , height : "50px"}} />
            </a>
            <a href="https://www.instagram.com/yetiacademyy/?theme=dark">
              <img src={require("../Images/ig.jpg")} style={{width : "45px" , height : "45px" , marginBottom : "2px" }} />
            </a>
            <a href="https://www.youtube.com/@yetischool8633">
              <img src={require("../Images/youtube.jpg")} style={{width : "50px" , height : "50px", marginLeft : "4px"}} />
            </a>
          </div>
        </div>
        <div style={{ marginLeft: "10vw", justifyContent : "center" ,alignItems : "center", display : "flex" , flexDirection : "column" , marginTop : "5vh" , marginRight : "50px" }}>
          <p style={{fontSize : "35px" , textAlign : "center" , fontFamily : "Georgia"}}>Youth Educational Training Institute</p>
          <img
            src={require("../Images/YetiGazar.jpg")}
            style={{ width: "26vw", height: "auto" , borderRadius : "20px" , marginTop : "2vh" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
