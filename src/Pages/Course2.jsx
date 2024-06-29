import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import courseImage from "../Images/Students.png";
import ArrowSVG from "../Images/arrow";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Course2 = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div style={{ fontFamily: "Georgia, sans-serif" }}>
      <Header
        backgroundImage={courseImage}
        title="Study Abroad Program"
        isMounted={isMounted}
      />
      <div
        style={{
          padding: "20px",
          background: "linear-gradient(135deg, #FFFF01, #feb47b)",
        }}
      >
        <div style={{ marginBottom: "20px", width: "90vw" }}>
          <p
            style={{
              fontSize: "30px",
              color: "#000",
              fontFamily: "Georgia",
              marginLeft: "40px",
            }}
          >
            IELTS, TOEFL IBT & ITP, SAT, Duolingo бэлдэх+тэтгэлгийн зөвлөгөө,
            чиглүүлэг
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
              width: "90vw",
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
              <p style={{ marginTop: "-30px" }}>
                Хөтөлбөр нийт 2 жил үргэлжилнэ.
              </p>
              <p>🚀 Ерөнхий англи хэлний мэдлэг сэргээх /давтах/</p>
              <p>
                Нийтлэг гардаг 26 дүрмийн алдаа /Залуучуудын Боловсрол Судлалын
                төв ТББ-н эрхлэн гаргасан гарын авлагаар хангана/
              </p>
              <p>
                🚀 Америкийн 7,8,9,10,11,12 дугаар ангид уншиж судалдаг
                сэдвүүдийг түүвэрлэн бэлдсэн хөтөлбөр /хөгжөөнт дасгал, танин
                мэдэхүйн асуултуудтай/
              </p>
              <p>🚀 TOEFL шалгалтын ярих, сонсох унших хичээлийн хөтөлбөр </p>
              <p>
                Longman, Delta, болон Peterson & Еэти Боловсролын Академийн
                эрхлэн гаргасан ном гарын авлага болон TOEFL ITP & IBT , IELTS,
                SAT, Duolingo ЖИШИГ шалгалт /Бямба гариг болгон/
              </p>
              <p style={{ fontWeight: "bold" }}>(Нууц мэдээлэл)</p>{" "}
              <p>
                Хөтөлбөрийн төлбөрт TOEFL ITP эсвэл Duolingo шалгалтын төлбөр
                багтсан болно.
                <p>
                  {" "}
                  /TOEFL ITP болон Duolingo шалгалтаас аль нэгийг сонгоно/
                </p>
              </p>
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
              <p>📈 Визний болон тэтгэлгийн ярилцлагын зөвлөгөө </p>
              <p>📈 Стандартад нийцсэн тодорхойлох захиа бичих зөвлөгөө</p>
              <p>📈 CV бичих зөвлөгөө</p>
              <p>📈 Бямба гариг бүр SAT клуб</p>
              <p>📈 Спорт зааланд тоглох боломж</p>
            </p>
          </div>
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
              <p>💡 7 хоногт 3 удаа Англи хэлний олон улсын шалгалтанд бэлдэх сургалт /IELTS,TOEFL ITP, TOEFL IBT, SAT, DUOLINGO/ </p>
              <p>💡 Хөтөлбөрийн хүрээнд  7 хоног бүр IELTS&TOEFL жишиг шалгалт авна</p>
              <p>💡 Сайн дурын үйл ажиллагаанд оролцох боломж</p>
              <p>💡 Их сургууль, тэтгэлгийн эсээнүүд бичих зөвлөгөө</p>
              <p>💡 Баталгаат орчуулга</p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
