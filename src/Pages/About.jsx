import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import PersonImage from "../Images/5.jpg";
import { Footer } from "../components/Footer";
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
          height: "60vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            fontFamily: "Georgia, serif",
            width: "60%",
            marginTop: "25vh",
            marginLeft: "10%",
          }}
        >
          -Боловсролын Тэргүүний Ажилтан Санжаагончигийн Гомбодорж, Боловсролын
          Тэргүүний Ажилтан, Чингис Хааны Дэлхийн Академийн жинхэнэ гишүүн,
          Залуу Үеийг Халамжлан Хүмүүжүүлэгч цол тэмдэгтэн Янживын Одонгэрэлийн
          санаачилгаар, <p>-Имэкс Корпорейшн ХХК-ийн захирал Гомбодоржийн
          Буяндэлгэрийн 100%-ийн хөрөнгө оруулалттайгаар байгуулагдаж, одоог
          хүртэл Гомбодоржийн Шүр-Эрдэнийн удирдлага дор үйл ажиллагаагаа явуулж
          байгаа билээ.</p>
        </p>
        <img
          alt=""
          src={require("../Images/YetiLogo.jpg")}
          style={{
            width: "20%",
            height: "90%",
            marginTop: "50px",
            marginLeft: "2%",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "100px",
        }}
      >
        <div>
          <img
            alt=""
            src={require("../Images/Students2.png")}
            style={{ borderRadius: "25px" }}
          />
          <hr></hr>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "15px",
            }}
          >
            <h2
              style={{
                width: "250px",
                fontWeight: "500",
                fontFamily: "Georgia, serif",
                textAlign: "center",
              }}
            >
              2009
              <hr></hr>
              <p>
                Анхны TOEFL ITP оноо амласан сургалтыг амжилттай зохион
                байгуулсан.{" "}
              </p>
            </h2>
            <h2
              style={{
                width: "250px",
                fontWeight: "500",
                fontFamily: "Georgia, serif",
                textAlign: "center",
                marginLeft: "25px",
              }}
            >
              2010
              <hr></hr>
              <p>
                Нийт 100 хүний бүрэлдэхүүнтэй “Ардын хувьсгалын 89 жилийн ой”-г
                угтсан сайн дурын ажил зохион байгуулсан.
              </p>
            </h2>
            <h2
              style={{
                width: "250px",
                fontWeight: "500",
                fontFamily: "Georgia, serif",
                textAlign: "center",
                marginLeft: "25px",
              }}
            >
              2011
              <hr></hr>
              <p>
                Оны шилдэг сайн үйлсийн аянд ЗАЙСАН ТОЛГОЙ-г цэвэрлэж нэр
                дэвшссэн .
              </p>
            </h2>
            <h2
              style={{
                width: "300px",
                fontWeight: "500",
                fontFamily: "Georgia, serif",
                textAlign: "center",
                marginLeft: "25px",
              }}
            >
              2011-2015
              <hr></hr>
              <p>
                Сургалтанд хамрагдаж байсан бүх суралцагчиддаа тэтгэлэгт
                зуучиллалын нэмэлт төлбөргүйгээр бэлдсэн. Анхны TOEFL ITP оноо
                амласан сургалтыг амжилттай зохион байгуулсан.
              </p>
            </h2>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "40%",
            height: "100%",
            borderRadius: "20px",
          }}
        >
          <img
            alt=""
            src={require("../Images/Students.png")}
            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          />
        </div>
        <div style={{ marginLeft: "100px" }}>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: "500",
              fontSize: "40px",
              width: "100px",
            }}
          >
            Үйл ажиллагааны тойм
          </h1>
          <p style={{ fontFamily: "Georgia, serif" }}>2008</p>
          <p style={{ width: "500px", fontFamily: "Georgia, serif" }}>
            АНУ-н их дээд сургуулиудад 50-100%ийн тэтгэлэгтэй суралцах тухай
            Боловсролын өдөрлөгийг зохион байгуулсан.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "90vh",
          marginTop: "100px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ marginLeft: "13%" }}>
          <h1 style={{ fontSize: "40px", fontFamily: "Georgia, serif" }}>
            Үйл ажиллагааны тойм
          </h1>
          <p
            style={{
              width: "500px",
              fontSize: "22px",
              fontFamily: "Georgia, serif",
            }}
          >
            2016- 2021 он
            <p>
              Туркийн элчин сайдын эхнэрийн зохиосон бүхий л сайн дурын үйл
              ажиллагаанд сайн дурын ажилтнуудыг бэлтгэн оролцсон.
            </p>
            <hr></hr>
          </p>
          <p
            style={{
              width: "650px",
              fontSize: "22px",
              fontFamily: "Georgia, serif",
            }}
          >
            2017 оноос өдийг хүртэл
            <p>
              Вэлүү сан , Бадамлянхуа асрамжийн газар, бусад нийгэмд үйлчилдэг
              олон улсын байгууллагын хүсэлтээр болон эцэг эх нарын
              зөвшөөрсөнөөр сайн дурын үйл ажиллагаанд арван жилийн сурагчдыг
              бэлтгэн дэмжин оролцдог.
            </p>
          </p>
        </div>
        <div style={{ width: "350px", height: "80%", marginTop: "-30px" }}>
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "greenyellow",
              marginLeft: "120px",
            }}
          ></div>
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "blue",
              marginTop: "20px",
              marginLeft: "-60px",
            }}
          ></div>
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "red",
              marginTop: "20px",
              marginLeft: "120px",
            }}
          ></div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "auto", height: "auto", marginLeft: "200px" }}>
          <img alt="" src={require("../Images/ShureeBagsh.png")} />
        </div>
        <div style={{ marginLeft: "80px", marginTop: "-30px" }}>
          <div
            style={{
              width: "80%",
              fontSize: "27px",
              fontFamily: "Georgia, serif",
            }}
          >
            <p style={{ fontSize: "40px" }}>2021 он</p>
            <p style={{ marginTop: "-22px" }}>
              1 сарын 15 наас 2021 оны 5 сарын 15 хүртэл Монгол улсын хилийн
              заставт алба хааж байгаа албан хаагчдад анхан шатнаас ахисан шат
              хүртэл англи хэлний цахим хичээлийг ямар ч үнэ төлбөргүйгээр
              зохион байгуулсан.
            </p>
            <hr></hr>
          </div>

          <div
            style={{
              width: "80%",
              fontSize: "27px",
              fontFamily: "Georgia, serif",
            }}
          >
            <p style={{ fontSize: "40px" }}>2021 он</p>
            <p style={{ marginTop: "-22px" }}>
              1 сарын 15 наас 2021 оны 5 сарын 15 хүртэл Монгол улсын хилийн
              заставт алба хааж байгаа албан хаагчдад анхан шатнаас ахисан шат
              хүртэл англи хэлний цахим хичээлийг ямар ч үнэ төлбөргүйгээр
              зохион байгуулсан.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ width: "100%", height: "100vh", fontFamily: "Georgia, serif" }}
      >
        <hr></hr>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginLeft: "70px" }}>
            <h2 style={{ fontSize: "30px" }}>2021 он</h2>
            <p style={{ width: "90%", fontSize: "25px" }}>
              5 сарын 1 нээс 6 сарын 1 хүртэл 5-21 насны хүүхэд залуусын дунд
              “Миний дуртай дүр”, “Миний дуртай дүр” эсээний уралдаан зохион
              байгуулж буй нийт бүх тэмцээний эхний 3 байрны ялагчид 3-10 сар
              үргэлжлэх сургалтанд суух эрх болон гарын бэлгээр шагнагдсан.
            </p>
          </div>
          <div style={{ marginRight: "100px", marginTop: "7px" }}>
            <img alt="" src={require("../Images/information1.png")} />
          </div>
        </div>
        <hr></hr>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginLeft: "70px" }}>
            <h2 style={{ fontSize: "30px" }}>2021 он</h2>
            <p style={{ width: "90%", fontSize: "25px" }}>
              6 сарын 15 - 8 сарын 15-ы хооронд Монгол анх удаа “Мянган
              инээмсэглэл“ нэртэйгээр нийт 1000 хүүхдийг TOEFL ITP, Ерөнхий
              англи хэл, Математик, Физик, Хятад хэл ,Түрк хэл, Уран зураг ,
              Балет , Гитар, Калиграф болон Видео засварлах гэсэн хичээлүүдийг
              зохион байгуулж боловсролын салбарт 50,000,000 төгрөгний хөрөнгө
              оруулалтыг хийсэн.
            </p>
          </div>
          <div style={{ marginRight: "100px", marginTop: "7px" }}>
            <img alt="" src={require("../Images/information2.png")} />
          </div>
        </div>
        <hr></hr>
      </div>
      <div
        style={{ width: "100%", height: "100vh", fontFamily: "Georgia, serif" }}
      >
        <div style={{ marginLeft: "30px" }}>
          <h2 style={{ fontSize: "30px", textAlign: "center" }}>2021 он</h2>
          <p style={{ fontSize: "25px", textAlign: "center" }}>
            Монгол даяар нийт 12 аймгийн 45 багшийг “ Үндэсний сургагч багш “
            TOEFL ITP шалгалт авах, заах эрх өгөх, бэлтгэх сургалтыг зохион
            байгуулж үүнээс 12 багш олон улсын шалгалт авах төвийг нээн хамтарч
            ажиллах төслийг хэрэгжүүлэн үргэлжлүүлэн ажиллаж байна.
          </p>
        </div>
        <div>
          <img
            alt=""
            src={require("../Images/duu1.jpg")}
            style={{ width: "300px", marginLeft: "7%" }}
          />
          <img
            alt=""
            src={require("../Images/duu2.jpg")}
            style={{ width: "300px", marginLeft: "10%" }}
          />
          <img
            alt=""
            src={require("../Images/duu3.jpg")}
            style={{ width: "300px", marginLeft: "10%" }}
          />
        </div>
        <div>
          <h2 style={{ fontSize: "30px", textAlign: "center" }}>2022 он</h2>
          <p style={{ fontSize: "25px", textAlign: "center" }}>
            “Англи дууг хэн сайн дуулах вэ” Cover дууны уралдаан заралж эхний 3
            байрандаа сургалтанд суух 1 жилийн эрх, 1.000.000, 500.000 ба
            300.000 төгрөгний хадгаламж нээх эрх олгосон. Мөн шилдэг 15
            дуучиддаа сарын сургалтанд суух эрхээр шагнасан /Мидвэй Эвэнт төв
            үйл ажиллагааны зардал 15.000.000-г ивээн тэтгэсэн
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
