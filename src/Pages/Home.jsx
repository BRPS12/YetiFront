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
          style={{
            display: "flex",
            width: "100%",
            height: "650px",
            marginTop: "10vh",
          }}>


          <div style={{ display: "flex", flexDirection: "column" , justifyContent : "center" , alignItems : "center"}}>
            <img
              style={{
                width: "70%",
                borderRadius: "20px",
              }}
              src={require("../Images/Shureebagsh2.jpg")}
            />

            <p
              style={{
                fontSize: "24px",
                width: "37vw",
                textAlign: "center",
                height: "30vh",
                marginTop: "40px",
                fontFamily: "Times new roman",
              }}>
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



          <div style={{ display: "flex", flexDirection: "column" , justifyContent : "center" , alignItems : "center"}}>
          <img
              style={{
                width: "70%",
                borderRadius: "20px",
              }}
              src={require("../Images/Shureebagsh2.jpg")}
            />
            <p
              style={{
                fontSize: "24px",
                width: "37vw",
                textAlign: "center",
                height: "30vh",
                marginTop: "40px",
                fontFamily: "Times new roman",
              }}>
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
          }}>
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
            }}>
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
            background: "linear-gradient(45deg, #fff, #FFCECE)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "50px",
              marginTop: "50px",
            }}>
            Еэти-д нэгдэх час хийсэн 5 шалтгаан
          </h1>
          <div
            style={{
              flexDirection: "row",
              width: "100%",
              display: "flex",
              fontSize: "30px",
              marginBottom: "auto",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "60px",
              }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: "50px",
                  }}>
                  <h2
                    style={{
                      fontWeight: "500",
                      fontFamily: "Georgia, serif",
                    }}>
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
                      fontSize: "30px",
                      marginLeft: "20px",
                    }}>
                    01
                  </div>
                </div>
                <p
                  style={{
                    width: "300px",
                    fontFamily: "Georgia, serif",
                    textAlign: "center",
                    marginTop: "10px",
                  }}>
                  <p style={{ fontWeight: "bold" }}>16 жилийн</p>
                  <p>туршлагтай хамт олноос зөвлөгөө авна</p>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginLeft: "50px",
                }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <h2
                    style={{
                      fontWeight: "500",
                      fontFamily: "Georgia, serif",
                    }}>
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
                      fontSize: "30px",
                      marginLeft: "20px",
                    }}>
                    02
                  </div>
                </div>
                <p
                  style={{
                    width: "400px",
                    fontFamily: "Georgia, serif",
                    textAlign: "center",
                    marginTop: "10px",
                  }}>
                  Сар болгон
                  <p style={{ fontWeight: "bold" }}>ирц, явцын тайлан</p>
                  <p>мэйлээр илгээгдэнэ</p>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginLeft: "50px",
                }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <h2
                    style={{
                      fontWeight: "500",
                      fontFamily: "Georgia, serif",
                    }}>
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
                      fontSize: "30px",
                      marginLeft: "20px",
                    }}>
                    03
                  </div>
                </div>
                <p
                  style={{
                    width: "400px",
                    fontFamily: "Georgia, serif",
                    textAlign: "center",
                    marginTop: "10px",
                  }}>
                  Англи хэл+ Mentorship=
                  <p style={{ fontWeight: "bold" }}>Нэг дор</p>
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "70px",
              }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "50px",
                }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <h2
                    style={{
                      fontWeight: "500",
                      fontFamily: "Georgia, serif",
                      right: "10%",
                      textAlign: "center",
                    }}>
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
                      fontSize: "30px",
                      marginLeft: "20px",
                    }}>
                    04
                  </div>
                </div>
                <p style={{ textAlign: "center", marginTop: "10px" }}>
                  Дассан газраа
                  <p style={{ fontWeight: "bold" }}>TOEFL</p>
                  <p style={{}}>шалгалтыг өгөх боломж</p>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginLeft: "100px",
                }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <h2
                    style={{
                      fontWeight: "500",
                      fontFamily: "Georgia, serif",
                      right: "10%",
                      textAlign: "center",
                    }}>
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
                      fontSize: "30px",
                      marginLeft: "20px",
                    }}>
                    05
                  </div>
                </div>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                  }}>
                  Pocket app-г ашиглан 2-6 хуваан
                  <p>төлбөрөө төлөх боломжтой</p>
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
          }}>
          <div
            style={{
              width: "23vw",
              height: "80vh",
              backgroundColor: "#000",
              borderRadius: "40px",
            }}>
            <p style={{ color: "#fff" }}>
              Zuger engiiin bagsh shaviin hariiltsaatai bsihbid nar
            </p>
          </div>
          <div
            style={{
              width: "23vw",
              height: "80vh",
              backgroundColor: "#000",
              borderRadius: "40px",
              marginLeft: "6vw",
            }}>
            <p style={{ color: "#fff" }}>Neg ger bul ghd bolndoo</p>
          </div>
          <div
            style={{
              width: "23vw",
              height: "80vh",
              backgroundColor: "#000",
              borderRadius: "40px",
              marginLeft: "6vw",
            }}>
            <p style={{ color: "#fff" }}>Saihan orcind sain surna</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "400px",
            flexDirection: "row",
          }}>
          <div
            style={{
              textAlign: "center",
              width: "80%",
              marginLeft: "100px",
              display: "flex",
              flexDirection: "row",
            }}>
            <div style={{ marginTop: "10%" }}>
              <h1 style={{ fontWeight: "500", fontFamily: "Georgia, serif" }}>
                Бидний философи
              </h1>
              <h1 style={{ fontWeight: "500", fontFamily: "Georgia, serif" }}>
                Юнеско-оос зарласан “Дэлхийн иргэний боловсрол”-ыг Монгол
                хүүхэд, залууст олгоно.
              </h1>
            </div>
            <img
              alt=""
              src={require("../Images/YetiLogo.jpg")}
              style={{
                marginLeft : "50px"
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
