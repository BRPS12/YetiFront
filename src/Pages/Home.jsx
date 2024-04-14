import React from "react";
import PeopleImage from "../Images/Computer.jpg";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
export const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div>
      <div>
        <Header
          backgroundImage={PeopleImage}
          title="Welcome to Yeti Educational Academy"
          isMounted={isMounted}
        />
        <div
          style={{ position: "relative", width: "100%", height: "auto" ,}}
        ></div>
        <div
          style={{
            width: "100%",
            height: "650px",
            backgroundColor: "#fff",
            position: "relative",
            display: "flex",
            flexDirection: "row",
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
              borderRadius: "20px",
            }}
          >
            Picture here
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "650px",
            position: "relative",
          }}
        >
          <div>
            <div
              style={{
                width: "35%",
                height: "70%",
                backgroundColor: "blue",
                position: "absolute",
                left: "10%",
                borderRadius: "20px",
              }}
            >
              Picture Here
            </div>
            <p
              style={{
                position: "absolute",
                left: "10%",
                bottom: "20%",
              }}
            >
              Text here
            </p>
          </div>
          <div>
            <div
              style={{
                width: "35%",
                height: "70%",
                backgroundColor: "red",
                position: "absolute",
                right: "10%",
                borderRadius: "20px",
              }}
            >
              Picture Here
            </div>
            <p
              style={{
                position: "absolute",
                right: "40%",
                bottom: "20%",
              }}
            >
              Text here
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "400px",
            position: "relative",
          }}
        >
          
        </div>
        <div
          style={{
            width: "100%",
            height: "650px",
            position: "relative",
            background: "linear-gradient(45deg, #fff, #FFCECE)",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ position : "absolute" , left : "15%", fontFamily: "Georgia, serif" , fontSize : "50px"}}>Еэти-д нэгдэх час хийсэн 5 шалтгаан</h1>
           <div style={{position : "absolute" , top : '20%' , flexDirection : "row" , width : '100%', display : "flex" , fontSize : "30px"}}>
            <div>
              <h2 style={{fontWeight : '500', fontFamily: "Georgia, serif" , left : "7%" , position : 'absolute'}}>Туршлага</h2>
              <div style={{width : "60px" , height : "30px" , borderWidth : '1px' , borderRadius : "20px" , borderColor : "black" , borderStyle : "solid" , textAlign : "center" , position : "absolute" , left : "24%" , marginTop : "50px" , fontSize : "30px"}}>01</div> 
              <p style={{width : "300px", fontFamily: "Georgia, serif" , position : "absolute" , left : "6%" , textAlign : "center" , marginTop : "100px"}}><p style={{marginTop : "-2px" , fontWeight : "bold"}}>16 жилийн </p><p style={{marginTop : "-30px"}}>туршлагтай хамт олноос  зөвлөгөө авна</p></p>
            </div>
            <div>
              <h2 style={{fontWeight : '500', fontFamily: "Georgia, serif" ,position : "absolute" , left : "40%"}}>Тайлан</h2>
              <div style={{width : "60px" , height : "30px" , borderWidth : '1px' , borderRadius : "20px" , borderColor : "black" , borderStyle : "solid" , textAlign : "center" , position : "absolute" , left : "53%" , marginTop : "50px" , fontSize : "30px"}}>02</div> 
              <p style={{width : "400px", fontFamily: "Georgia, serif" , position : "absolute" , left : "34%" , textAlign : "center" , marginTop : "100px"}}>Сар болгон <p style={{marginTop : "-2px" , fontWeight : "bold"}}>ирц, явцын тайлан</p> <p style={{marginTop : "-30px"}}>мэйлээр илгээгдэнэ</p></p>
            </div>
            <div>
              <h2 style={{fontWeight : '500', fontFamily: "Georgia, serif" , position : "absolute" , right : "10%"}}>Цогц байдал</h2>
              <div style={{width : "60px" , height : "30px" , borderWidth : '1px' , borderRadius : "20px" , borderColor : "black" , borderStyle : "solid" , textAlign : "center" , position : "absolute" , right : "4%" , marginTop : "50px" , fontSize : "30px"}}>03</div> 
              <p style={{width : "400px", fontFamily: "Georgia, serif" , position : "absolute" , right : "4%" , textAlign : "center" , marginTop : "100px"}}>Англи хэл+ Mentorship= <p style={{marginTop : "-2px" , fontWeight : "bold"}}>Нэг дор</p> </p>
            </div>
            <div style={{display : "flex" , marginTop : "200px"}}>
            <div style={{position : "absolute" , left : "15%" , width : "400px"}}>
            <h2 style={{fontWeight : '500', fontFamily: "Georgia, serif" , position : "absolute" , right : "10%" , textAlign : "center"}}>Шалгалтын төв</h2>
              <div style={{width : "60px" , height : "30px" , borderWidth : '1px' , borderRadius : "20px" , borderColor : "black" , borderStyle : "solid" , textAlign : "center" , position : "absolute" , right : "-10%" , marginTop : "50px" , fontSize : "30px"}}>04</div> 
             <p style={{textAlign : 'center' , marginTop : "105px"}}>Дассан газраа <p style={{marginTop : "2px" , fontWeight : "bold"}}>TOEFL</p> <p style={{marginTop : "-30px"}}>шалгалтыг өгөх боломж</p></p> 
            </div>
            <div style={{position : "absolute" , right : "20%" , width : "400px" }}>
            <h2 style={{fontWeight : '500', fontFamily: "Georgia, serif" , position : "absolute" , right : "10%" , textAlign : "center"}}>Хувааж төлөх</h2>
              <div style={{width : "60px" , height : "30px" , borderWidth : '1px' , borderRadius : "20px" , borderColor : "black" , borderStyle : "solid" , textAlign : "center" , position : "absolute" , right : "-10%" , marginTop : "50px" , fontSize : "30px"}}>05</div> 
             <p style={{textAlign : 'center' , marginTop : "105px" , marginLeft : "90px"}}>Pocket app-г ашиглан 2-6 хуваан төлбөрөө төлөх боломжтой</p> 
            </div>
            </div>
           </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "400px",
            position: "relative",
            flexDirection : 'row'
          }}
        >
         <div style={{textAlign : 'center' , width : "550px" , marginLeft : "100px" , display : "flex" , flexDirection : "row"}}>
          <div style={{marginTop : "85px" }}>
          <h1 style={{fontWeight : '500', fontFamily: "Georgia, serif"}}>Бидний философи</h1>
          <h1 style={{fontWeight : '500', fontFamily: "Georgia, serif"}}>Юнеско-оос зарласан “Дэлхийн иргэний боловсрол”-ыг Монгол хүүхэд, залууст олгоно. </h1>
          </div>
          <img alt="" src={require("../Images/YetiLogo.jpg")} style={{width : "25%" , height : "100%" , position : "absolute" , right : "10%"}} />
         </div>
        </div>
      </div>
    </div>
  );
};