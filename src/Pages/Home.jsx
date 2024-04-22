import React from "react";
import PeopleImage from "../Images/Computer.jpg";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
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
          style={{ position: "relative", width: "100%", height: "auto" }}
        ></div>
        {/* <div
          style={{
            width: "100%",
            height: "570px",
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
        </div> */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "650px",
            marginTop: "10vh",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                width: "40%",
                height: "70%",
                position: "absolute",
                left: "6%",
                borderRadius: "20px",
                marginRight: "50px",
              }}
              src={require("../Images/Shureebagsh2.jpg")}
            />

            <p
              style={{
                position: "relative",
                top: "67%",
                left: "20%",
                fontSize: "24px",
                width: "37vw",
                textAlign: "center",
                height: "30vh",
                marginTop: "40px",
                fontFamily: "Times new roman",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
              sem ut tortor consequat ultricies id vel felis. Duis posuere
              tellus non finibus aliquam. Donec volutpat metus sed mi faucibus,
              ut ornare ligula tempor. Donec dictum sem vel ex dignissim,
              placerat euismod massa fringilla. Pellentesque condimentum
              accumsan odio, vitae dictum quam ullamcorper nec. Maecenas eu
              interdum dui. Praesent nec imperdiet enim. Nunc a tempor felis.
              Phasellus ut accumsan augue, eu posuere leo.
            </p>
          </div>
          <div>
            <div
              style={{
                width: "40%",
                height: "70%",
                backgroundColor: "blue",
                position: "absolute",
                right: "6%",
                borderRadius: "20px",
              }}
            >
              Picture Here
            </div>
            <p
              style={{
                position: "relative",
                top: "67%",
                left: "50%",
                fontSize: "24px",
                width: "37vw",
                textAlign: "center",
                height: "30vh",
                marginTop: "40px",
                fontFamily: "Times new roman",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
              sem ut tortor consequat ultricies id vel felis. Duis posuere
              tellus non finibus aliquam. Donec volutpat metus sed mi faucibus,
              ut ornare ligula tempor. Donec dictum sem vel ex dignissim,
              placerat euismod massa fringilla. Pellentesque condimentum
              accumsan odio, vitae dictum quam ullamcorper nec. Maecenas eu
              interdum dui. Praesent nec imperdiet enim. Nunc a tempor felis.
              Phasellus ut accumsan augue, eu posuere leo.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "400px",
            paddingBottom: "10vh",
            marginTop: "24vh",
            justifyContent: "center",
          }}
        >
          <img
            src={require("../Images/YetiLogo.jpg")}
            style={{ marginRight: "100px" }}
          />
          <p
            style={{
              fontSize: "26px",
              fontFamily: "Georgia",
              width: "100vh",
              marginTop: "40px",
            }}
          >
            Манай боловсролын академи нь сайн дурын ажил хийсэн суралцагч
            болгондоо 50-100%-ийн хөнгөлөлттэй /тэтгэлэгтэй/ суралцах боломжийг
            олгодог. Мөн нийгмийн хариуцлагын хүрээнд 50%, 75%, 100%-ийн
            тэтгэлэг олгодог, гадаадад сурах хүсэлтэй хүн бүхэнд материалаа
            хэрхэн бэлдэх, анкет бөглөх, ярилцлагад бэлдэхэд тусалж, орчуулгын
            зөвлөгөөг ямар ч үнэ төлбөргүй өгдөг анхны сургалтын төв юм.
          </p>
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
          <h1
            style={{
              position: "absolute",
              left: "15%",
              fontFamily: "Georgia, serif",
              fontSize: "50px",
            }}
          >
            Еэти-д нэгдэх час хийсэн 5 шалтгаан
          </h1>
          <div
            style={{
              position: "absolute",
              top: "20%",
              flexDirection: "row",
              width: "100%",
              display: "flex",
              fontSize: "30px",
            }}
          >
            <div>
              <h2
                style={{
                  fontWeight: "500",
                  fontFamily: "Georgia, serif",
                  left: "7%",
                  position: "absolute",
                }}
              >
                Туршлага
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "30px",
                  borderWidth: "1px",
                  borderRadius: "20px",
                  borderColor: "black",
                  borderStyle: "solid",
                  textAlign: "center",
                  position: "absolute",
                  left: "24%",
                  marginTop: "50px",
                  fontSize: "30px",
                }}
              >
                01
              </div>
              <p
                style={{
                  width: "300px",
                  fontFamily: "Georgia, serif",
                  position: "absolute",
                  left: "6%",
                  textAlign: "center",
                  marginTop: "100px",
                }}
              >
                <p style={{ marginTop: "-2px", fontWeight: "bold" }}>
                  16 жилийн{" "}
                </p>
                <p style={{ marginTop: "-30px" }}>
                  туршлагтай хамт олноос зөвлөгөө авна
                </p>
              </p>
            </div>
            <div>
              <h2
                style={{
                  fontWeight: "500",
                  fontFamily: "Georgia, serif",
                  position: "absolute",
                  left: "40%",
                }}
              >
                Тайлан
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "30px",
                  borderWidth: "1px",
                  borderRadius: "20px",
                  borderColor: "black",
                  borderStyle: "solid",
                  textAlign: "center",
                  position: "absolute",
                  left: "53%",
                  marginTop: "50px",
                  fontSize: "30px",
                }}
              >
                02
              </div>
              <p
                style={{
                  width: "400px",
                  fontFamily: "Georgia, serif",
                  position: "absolute",
                  left: "34%",
                  textAlign: "center",
                  marginTop: "100px",
                }}
              >
                Сар болгон{" "}
                <p style={{ marginTop: "-2px", fontWeight: "bold" }}>
                  ирц, явцын тайлан
                </p>{" "}
                <p style={{ marginTop: "-30px" }}>мэйлээр илгээгдэнэ</p>
              </p>
            </div>
            <div>
              <h2
                style={{
                  fontWeight: "500",
                  fontFamily: "Georgia, serif",
                  position: "absolute",
                  right: "10%",
                }}
              >
                Цогц байдал
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "30px",
                  borderWidth: "1px",
                  borderRadius: "20px",
                  borderColor: "black",
                  borderStyle: "solid",
                  textAlign: "center",
                  position: "absolute",
                  right: "4%",
                  marginTop: "50px",
                  fontSize: "30px",
                }}
              >
                03
              </div>
              <p
                style={{
                  width: "400px",
                  fontFamily: "Georgia, serif",
                  position: "absolute",
                  right: "4%",
                  textAlign: "center",
                  marginTop: "100px",
                }}
              >
                Англи хэл+ Mentorship={" "}
                <p style={{ marginTop: "-2px", fontWeight: "bold" }}>Нэг дор</p>{" "}
              </p>
            </div>
            <div style={{ display: "flex", marginTop: "200px" }}>
              <div
                style={{ position: "absolute", left: "15%", width: "400px" }}
              >
                <h2
                  style={{
                    fontWeight: "500",
                    fontFamily: "Georgia, serif",
                    position: "absolute",
                    right: "10%",
                    textAlign: "center",
                  }}
                >
                  Шалгалтын төв
                </h2>
                <div
                  style={{
                    width: "60px",
                    height: "30px",
                    borderWidth: "1px",
                    borderRadius: "20px",
                    borderColor: "black",
                    borderStyle: "solid",
                    textAlign: "center",
                    position: "absolute",
                    right: "-10%",
                    marginTop: "50px",
                    fontSize: "30px",
                  }}
                >
                  04
                </div>
                <p style={{ textAlign: "center", marginTop: "105px" }}>
                  Дассан газраа{" "}
                  <p style={{ marginTop: "2px", fontWeight: "bold" }}>TOEFL</p>{" "}
                  <p style={{ marginTop: "-30px" }}>шалгалтыг өгөх боломж</p>
                </p>
              </div>
              <div
                style={{ position: "absolute", right: "20%", width: "400px" }}
              >
                <h2
                  style={{
                    fontWeight: "500",
                    fontFamily: "Georgia, serif",
                    position: "absolute",
                    right: "10%",
                    textAlign: "center",
                  }}
                >
                  Хувааж төлөх
                </h2>
                <div
                  style={{
                    width: "60px",
                    height: "30px",
                    borderWidth: "1px",
                    borderRadius: "20px",
                    borderColor: "black",
                    borderStyle: "solid",
                    textAlign: "center",
                    position: "absolute",
                    right: "-10%",
                    marginTop: "50px",
                    fontSize: "30px",
                  }}
                >
                  05
                </div>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "105px",
                    marginLeft: "90px",
                  }}
                >
                  Pocket app-г ашиглан 2-6 хуваан төлбөрөө төлөх боломжтой
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "23vw",
              height: "80vh",
              backgroundColor: "#000",
              borderRadius: "40px",
            }}
          >
            <p style={{ color: "#fff" }}>
              Zuger engiiin bagsh shaviin hariiltsaatai bsihbid nar{" "}
            </p>
          </div>
          <div
            style={{
              width: "23vw",
              height: "80vh",
              backgroundColor: "#000",
              borderRadius: "40px",
              marginLeft: "6vw",
            }}
          >
            <p style={{ color: "#fff" }}>Neg ger bul ghd bolndoo</p>
          </div>
          <div
            style={{
              width: "23vw",
              height: "80vh",
              backgroundColor: "#000",
              borderRadius: "40px",
              marginLeft: "6vw",
            }}
          >
            <p style={{ color: "#fff" }}>Saihan orcind sain surna</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "400px",
            position: "relative",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              textAlign: "center",
              width: "550px",
              marginLeft: "100px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ marginTop: "85px" }}>
              <h1 style={{ fontWeight: "500", fontFamily: "Georgia, serif" }}>
                Бидний философи
              </h1>
              <h1 style={{ fontWeight: "500", fontFamily: "Georgia, serif" }}>
                Юнеско-оос зарласан “Дэлхийн иргэний боловсрол”-ыг Монгол
                хүүхэд, залууст олгоно.{" "}
              </h1>
            </div>
            <img
              alt=""
              src={require("../Images/YetiLogo.jpg")}
              style={{
                width: "25%",
                height: "100%",
                position: "absolute",
                right: "10%",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
