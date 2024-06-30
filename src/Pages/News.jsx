import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PersonImage from "../Images/Computer.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image1 from "../Images/a.jpg";
import Image2 from "../Images/a2.jpg";
import Image3 from "../Images/a3.jpg";
import Image4 from "../Images/a4.jpg";
import Image5 from "../Images/a5.jpg";
import Image6 from "../Images/a6.jpg";
import Image7 from "../Images/a7.jpg";
import Image8 from "../Images/1.jpg";
import Image9 from "../Images/2.jpg";
import Image10 from "../Images/3.jpg";
import Image11 from "../Images/4.jpg";
import Image12 from "../Images/5.jpg";
import Image13 from "../Images/6.jpg";
import Image14 from "../Images/7.jpg";
import { Footer } from "../components/Footer";
export const News = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  const images2 = [Image8, Image9, Image10, Image11, Image12, Image13, Image14];
  return (
    <div>
      <Header
        backgroundImage={PersonImage}
        title="News"
        isMounted={isMounted}
      />
      <h2
        style={{
          textAlign: "center",
          marginBottom: "0px",
          fontSize: "30px",
          fontFamily: "Georgia",
          marginTop: "40px",
          marginBottom: "30px",
        }}>
        Latest News
      </h2>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <div
          style={{
            padding: "20px",
            width: "45vw",
            paddingLeft: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    left: "0%",
                    zIndex: 2,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}>
                  <FaArrowLeft fill="#fff" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    right: "0%", // Adjusted position
                    zIndex: 2,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}>
                  <FaArrowRight fill="#fff" />
                </button>
              )
            }>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`News ${index + 1}`}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <p
          style={{
            fontFamily: "Georgia",
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginLeft: "50px",
            fontSize: "23px",
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sem
          ut tortor consequat ultricies id vel felis. Duis posuere tellus non
          finibus aliquam. Donec volutpat metus sed mi faucibus, ut ornare
          ligula tempor. Donec dictum sem vel ex dignissim, placerat euismod
          massa fringilla. Pellentesque condimentum accumsan odio, vitae dictum
          quam ullamcorper nec. Maecenas eu interdum dui. Praesent nec imperdiet
          enim. Nunc a tempor felis. Phasellus ut accumsan augue, eu posuere leo
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}>
        <div style={{ padding: "20px", width: "40vw", paddingRight: "5vw" }}>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    left: "0%",
                    zIndex: 2,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}>
                  <FaArrowLeft fill="#000" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    right: "0%", // Adjusted position
                    zIndex: 2,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}>
                  <FaArrowRight fill="#000" />
                </button>
              )
            }>
            {images2.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`News ${index + 1}`}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <p style={{  fontFamily: "Georgia" , width : "40%" , fontSize : "23px" , marginRight : "70px"}}>
        Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sem
          ut tortor consequat ultricies id vel felis. Duis posuere tellus non
          finibus aliquam. Donec volutpat metus sed mi faucibus, ut ornare
          ligula tempor. Donec dictum sem vel ex dignissim, placerat euismod
          massa fringilla. Pellentesque condimentum accumsan odio, vitae dictum
          quam ullamcorper nec. Maecenas eu interdum dui. Praesent nec imperdiet
          enim. Nunc a tempor felis. Phasellus ut accumsan augue, eu posuere leo
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "10vh",
          alignItems: "center",
        }}>
        <img
          src={require("../Images/zaisan.jpg")}
          alt="zaisan"
          style={{
            width: "500px",
            height: "400px",
            borderRadius: "20px",
            marginLeft: "10vw",
          }}
        />
        <p style={{ paddingLeft: "70px", fontFamily: "Georgia" , fontSize : "23px" , width : "40%"}}>
        Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sem
          ut tortor consequat ultricies id vel felis. Duis posuere tellus non
          finibus aliquam. Donec volutpat metus sed mi faucibus, ut ornare
          ligula tempor. Donec dictum sem vel ex dignissim, placerat euismod
          massa fringilla. Pellentesque condimentum accumsan odio, vitae dictum
          quam ullamcorper nec. Maecenas eu interdum dui. Praesent nec imperdiet
          enim. Nunc a tempor felis. Phasellus ut accumsan augue, eu posuere leo
        </p>
      </div>
      <Footer />
    </div>
  );
};
