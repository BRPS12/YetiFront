import "../LoginAndSignUp.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../../App";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); // State to hold uploaded image URL

  const signUp = async () => {
    try {
      // Upload image first, if selected
      let uploadedImageUrl = "";
      if (selectedFile) {
        uploadedImageUrl = await uploadImage(selectedFile);
      }

      // Then sign up user
      const res = await instance.post("/users/signup", {
        name: name,
        password: password,
        email: email,
        age: age,
        profile: uploadedImageUrl, // Send uploaded image URL to backend
        role: "normal",
      });

      console.log(res);
      toast.success("Амжилттай бүртгэгдлээ");
    } catch (error) {
      toast.error("Бүртгэлтэй имэйл байна");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await instance.post("/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.imageUrl; // Assuming your backend responds with image URL
    } catch (error) {
      console.error("Error uploading image: ", error);
      return ""; // Handle error gracefully
    }
  };

  return (
    <div
      className="loginContainer"
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <ToastContainer />
      <main>
        <div
          className="loginBox"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginLeft: "0%",
              marginBottom: "50px",
            }}
          >
            <img
              src={require("../../Images/YetiLogo.jpg")}
              alt=""
              style={{ width: "200px", height: "auto", borderRadius: "30px" }}
            />
            <p className="boginooP" style={{ marginTop: "30px" }}>
              Бүртгүүлэх
            </p>
          </div>

          <div
            style={{
              marginLeft: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div className="boxThree" style={{ marginTop: "20px", paddingTop: "30px" }}>
              <label htmlFor="username" className="labels">
                <p style={{ color: "white" }}>Username</p>
              </label>
              <input
                type="text"
                name="username"
                className="inps"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="boxThree" style={{ marginTop: "20px" }}>
              <label htmlFor="email" className="labels">
                <p style={{ color: "white" }}>Email</p>
              </label>
              <input
                type="text"
                name="email"
                className="inps"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="boxThree" style={{ marginTop: "20px" }}>
              <label htmlFor="password" className="labels">
                <p style={{ color: "white" }}>Password</p>
              </label>
              <input
                type="password"
                name="password"
                className="inps"
                placeholder="••••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="boxThree" style={{ marginTop: "20px" }}>
              <label htmlFor="age" className="labels">
                <p style={{ color: "white" }}>Age</p>
              </label>
              <input
                type="text"
                name="age"
                className="inps"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="boxThree" style={{ marginTop: "20px" }}>
              <input type="file" accept="image/*" onChange={handleFileChange} style={{ marginLeft: "35%" }} />
              {selectedFile && (
                <div style={{ marginLeft: "25px" }}>
                  <p style={{ color: "white", textAlign: "center", marginRight: "21px" }}>Selected file: <br />{selectedFile.name}</p>
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected"
                    style={{ maxWidth: "100%", maxHeight: "150px" }}
                  />
                </div>
              )}
            </div>
            <button
              type="submit"
              className="clickGreen"
              onClick={signUp}
              style={{ marginTop: "20px" }}
            >
              Бүртгүүлэх
            </button>
            <Link
              className="clickGreen"
              to="/login"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              <p style={{ marginTop: "7px", paddingBottom: "30px" }}>Нэвтрэх</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
