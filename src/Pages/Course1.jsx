import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import courseImage from "../Images/Students.png";
import ArrowSVG from "../Images/arrow";
import { Link } from "react-router-dom";

export const Course1 = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div style={{ fontFamily: "Georgia, sans-serif" }}>
      <Header
        backgroundImage={courseImage}
        title="Mentorship Program"
        isMounted={isMounted}
      />
      <div
        style={{
          padding: "20px",
          background: "linear-gradient(300deg, #FC90CF, #FE0F3E)",
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
            Хэлний оноотой залууст тэтгэлгийн зөвлөгөө, чиглүүлэг өгнө.
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
              width: "46vw",
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
                marginTop: "50px",
              }}
            >
              Mentorship програм нь англи хэлний олон улсын шалгалтын оноотой
              залууст зориулсан хөтөлбөр юм.
              <p>Хөтөлбөрийн турш бид зарлагдсан
              тэтгэлгийн мэдээ мэдээллийг цаг алдалгүй хүргэж, тэтгэлэгт өргөдөл
              илгээх үед шаардлагатай бүх төрлийн зөвлөгөө чиглүүлгийг олгоно.</p>
            </p>
          </div>
          <div>
            <p style={{ fontSize: "48px", marginTop: "70px" }}>🤗</p>
            <p style={{ fontSize: "48px", marginTop: "150px" }}>🤔</p>
          </div>
          <div
            style={{
              marginBottom: "20px",
              width: "37vw",
              borderWidth: "1px",
              borderColor: "#000",
              borderStyle: "solid",
              borderRadius: "30px",
              marginLeft: "30px",
              boxShadow: "1px 4px 6px #333",
              background: "linear-gradient(#FFE1F2 , #fff)",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
                color: "#000",
                padding: "20px",
                marginLeft: "20px",
              }}
            >
              <p>
                ✅ Хөтөлбөрийн хүрээнд 7 хоног бүр IELTS&TOEFL жишиг шалгалт
                авна.{" "}
              </p>
              <p>✅ Сайн дурын үйл ажиллагаанд оролцох боломж </p>{" "}
              <p>✅ Их сургууль, тэтгэлгийн эсээнүүд бичих зөвлөгөө </p>
              <p>✅ Баталгаат орчуулга</p>
            </p>
          </div>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginBottom: "20px",
              width: "55vw",
              borderWidth: "1px",
              borderColor: "#000",
              borderStyle: "solid",
              borderRadius: "30px",
              marginLeft: "30px",
              boxShadow: "1px 4px 6px #333",
              background: "linear-gradient(#FFE1F2 , #fff)",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.6",
                color: "#000",
                padding: "20px",
                marginLeft: "20px",
              }}
            >
              <p>⭐ Визний болон тэтгэлгийн ярилцлагын зөвлөгөө </p>
              <p>
                ⭐ Стандартад нийцсэн тодорхойлох захиа бичих зөвлөгөө{" "}
              </p>{" "}
              <p>⭐ CV бичих зөвлөгөө</p>
              <p>⭐ Бямба гариг бүр SAT клуб</p>
              <p>⭐ Спорт зааланд тоглох боломж</p>
            </p>
          </div>
          <img
            src={require("../Images/Shureebagsh3.jpg")}
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "40px",
              marginLeft: "130px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
