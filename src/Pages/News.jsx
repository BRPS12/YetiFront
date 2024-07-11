import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PersonImage from "../Images/news.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
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
import { instance } from "../App";
import {
  TextField,
  Button,
  Grid,
  Modal,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const News = () => {
  const user_id = window.localStorage.getItem("user_id");
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState();
  const [picture, setPicture] = useState("");
  const [news, setNews] = useState([]);
  const [isLoading , setIsLoading] = useState(true)
  const getUser = async () => {
    try {
      const response = await instance.get(`/users/${user_id}`);
      setUser(response.data.data);
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoading(false)
    }
  };
  const deleteNews = async (id) => {
    try {
      const response = await instance.delete(`/news/${id}`);
      console.log(response);
      getAllNews();
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };
  const getAllNews = async () => {
    const response = await instance.get("/news");
    setNews(response.data.data);
    setIsLoading(false)
  };
  const createNews = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("paragraph", paragraph);
      formData.append("image", picture);

      const response = await instance.post("/news/createNews", formData);
      const newNewsItem = response.data.data;

      setNews([...news, newNewsItem]);
      setTitle("");
      setParagraph("");
      setPicture("");
      setImage(null);
      setEditing(false);
    } catch (error) {
      console.error("Error creating news:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleEdit = () => {
    setEditing(true);
  };

  const handleClose = () => {
    setEditing(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  useEffect(() => {
    setIsMounted(true);
    getUser();
    getAllNews();
  }, []);

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  const images2 = [Image8, Image9, Image10, Image11, Image12, Image13, Image14];
  if(isLoading) {
    return <div style={{width : "100%" , height : "100%" ,backgroundColor : "#fff"}}>s</div>
  }
  return (
    <div>
      <Header
        backgroundImage={PersonImage}
        title="Our latest News"
        isMounted={isMounted}
        repeat="repeat"
      />
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontFamily: "Georgia",
          marginTop: "30px",
          marginBottom: "30px",
        }}>
        Latest News
      </h2>
      {user.role === "admin" && (
        <button
          style={{
            position: "absolute",
            right: 40,
            top: "105%",
            width: "10vw",
            height: "7vh",
            borderRadius: "1vw",
            borderColor: "#fff",
            cursor: "pointer",
            backgroundColor: "#BA39FF",
            color: "#fff",
            fontSize: "18px",
            fontFamily: "Georgia",
          }}
          onClick={handleEdit}>
          Create News
        </button>
      )}
      <Modal
        open={editing}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: "20px",
            height: 410,
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "15px",
            }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontFamily: "Georgia" }}>
              Create News
            </Typography>
            <IconButton onClick={handleClose} style={{ marginLeft: "auto" }}>
              <ClearIcon />
            </IconButton>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  InputProps={{
                    style: {
                      textAlign: "center",
                      fontFamily: "Georgia, serif",
                      fontSize: "16px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Paragraph"
                  variant="outlined"
                  value={paragraph}
                  InputProps={{
                    style: {
                      textAlign: "center",
                      fontFamily: "Georgia, serif",
                      fontSize: "16px",
                    },
                  }}
                  onChange={(e) => setParagraph(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Image Url"
                  variant="outlined"
                  value={picture}
                  InputProps={{
                    style: {
                      textAlign: "center",
                      fontFamily: "Georgia, serif",
                      fontSize: "16px",
                    },
                  }}
                  onChange={(e) => setPicture(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <input type="file" onChange={handleFileUpload} />
              </Grid>
            </Grid>
          </Typography>
          <Button
            variant="contained"
            onClick={createNews}
            color="primary"
            style={{ marginTop: "25px", marginLeft: "auto" }}
            disabled={loading}>
            {loading ? "Creating..." : "Create News"}
          </Button>
        </Box>
      </Modal>
      <div style={{ paddingLeft: "6vw" }}>
        {news.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "auto",
              fontFamily: "Georgia",
              marginTop: "6vh",
            }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "4vh",
                textAlign: "center",
              }}>
              <p style={{ fontSize: "27px", color: "#3996FF" }}>{item.title}</p>
              <p style={{ fontSize: "23px" }}>{item.paragraph}</p>
            </div>
            {item.image && (
              <div>
                {
                  user.role === "admin" ? (<Button
                    style={{
                      position: "absolute",
                      left: "6vw",
                      width: "5vw",
                      height: "5vh",
                      borderRadius: "0.7vw",
                      borderColor: "#fff",
                      cursor: "pointer",
                      backgroundColor: "#FB1B1B",
                      color: "#fff",
                      fontSize: "12px",
                      fontFamily: "Georgia",
                    }}
                    onClick={() => deleteNews(item._id)}>
                    Delete
                  </Button>) : (
                    <></>
                  )
                }
                
                <img
                  src={item.image}
                  alt={`News ${index + 1}`}
                  style={{
                    width: "35vw",
                    height: "auto",
                    borderRadius: "1vw",
                    marginLeft: "7vw",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: "7vh",
        }}>
        <div
          style={{
            padding: "20px",
            width: "45vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "6vw",
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
                    right: "0%",
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
        <p
          style={{
            fontFamily: "Georgia",
            width: "40%",
            fontSize: "23px",
            marginRight: "70px",
          }}>
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
        <p
          style={{
            paddingLeft: "70px",
            fontFamily: "Georgia",
            fontSize: "23px",
            width: "40%",
          }}>
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
