import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import courseImage from "../Images/Students.png";
import ArrowSVG from "../Images/arrow";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Course3 = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div style={{ fontFamily: "Georgia, sans-serif" }}>
      <Header
        backgroundImage={courseImage}
        title="Ерөнхий англи хэл"
        isMounted={isMounted}
      />
      <div
        style={{
          padding: "20px",
          background: "linear-gradient(300deg, #0061BD, #40B1FF)",
        }}
      >
        <div style={{ marginBottom: "20px", width: "90vw" }}>
          <p
            style={{
              fontSize: "30px",
              color: "#fff",
              fontFamily: "Georgia",
              marginLeft: "40px",
            }}
          >
            Америкийн ЕБС-н хичээлийн хөтөлбөр+ IELTS, TOEFL суурь
          </p>
        </div>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div
            style={{
              marginBottom: "20px",
              borderWidth: "1px",
              borderRadius: "40px",
              borderColor: "#000",
              borderStyle: "solid",
              width: "50vw",
              fontWeight: "lighter",
              marginLeft: "30px",
              background: "linear-gradient(#FFE1F2 , #fff)",
              boxShadow: "1px 4px 6px #555",
              marginRight: "30px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                lineHeight: "1.6",
                padding: "30px",
                marginLeft: "20px",
                marginTop: "-10px",
                marginBottom : "-5px"
              }}
            >
              <p>
                👏Ерөнхий англи хэлний анги нь 7 хоногт 3 удаа хичээллэнэ.
                Хичээл нь Мягмар, Пүрэв болон Бямба гаригуудад 10:00-11:30,
                14:00-15:30 цагийн хооронд. Ерөнхий англи хэлний ангид
                бүртгүүлснээр:
              </p>
              <p> 1. Сар бүр сурагчид жишиг тест хийж ахицаа харах</p>
              <p> 2. 16 жилийн туршлагатай багш заана</p>
              <p>
                3. Сар болгон сурагчийн сурлагын тайланг асран хамгаалагчид
                мэйлээр илгээх
              </p>
              
            </p>
          </div>
          {/* <div>
            <p style={{ fontSize: "48px", marginTop: "70px" }}>😎</p>
            <p style={{ fontSize: "48px", marginTop: "150px" }}>😉</p>
          </div> */}
          <div
          style={{
            marginBottom: "20px",
            borderWidth: "1px",
            borderRadius: "40px",
            borderColor: "#000",
            borderStyle: "solid",
            width: "50vw",
            fontWeight: "lighter",
            marginLeft: "30px",
            background: "linear-gradient(#fff ,#fff ,  #FFE1F2)",
            boxShadow: "1px 4px 6px #555",
            marginRight: "30px",
          }}>
            {/* <img src={require("../Images/Shureebagsh5.png")} style={{marginTop : "30px" , marginLeft : "20px"}}/> */}
           <div style={{display : "flex" , flexDirection : "row" , alignItems : "center" , justifyContent : "center"}}>
  
            <p style={{fontSize : "27px" , fontFamily : "monospace" , marginTop  : "40px" , color : "Red" , fontWeight : "bold"}}>Youth Educational Training Academy</p>
            </div>
            <p style={{ fontSize: "24px",
                lineHeight: "1.6",
                padding: "30px",
                marginLeft: "20px",
                marginTop: "50px",}}> <p style={{marginTop : "-90px"}}>4. Цахимаар хичээлд суух </p>
                <p>5. Давтлагад суух</p> <p>6. Спорт зааланд тоглох </p>
                <p>
                  7. 11-р ангиасаа Study Abroad хөтөлбөрт шууд хамрагдах гэсэн
                  боломжуудтай.
                </p>
                Төлбөр нийт 2.200.000 бөгөөд Pocket app-аар 3-6 хуваан төлөх
                боломжтой</p>
         
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
