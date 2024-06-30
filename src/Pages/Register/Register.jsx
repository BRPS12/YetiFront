import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../App";
export const Register = () => {
  const user_id = window.localStorage.getItem("user_id");
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const response = await instance.get(`/users/${user_id}`);
    setUser(response.data.data);
    console.log(response);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <header
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            marginTop: "5px",
            marginBottom: "5px",
          }}>
          <img
            style={{
              width: "70px",
              borderRadius: "20px",
              marginRight: "10px",
            }}
            src={require("../../Images/YetiLogo.jpg")}
            alt="Yeti Logo"
          />
          <div style={{ color: "#000", fontFamily: "Georgia, serif" }}>
            <div style={{ fontSize: "20px" }}>Yeti Educational</div>
            <div style={{ fontSize: "20px" }}>Academy</div>
          </div>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <Link to="/" className="link-button">
            Home
          </Link>
          <Link to="/news" className="link-button">
            News
          </Link>
          <Link to="/about" className="link-button">
            About
          </Link>
          <Link to="/contactus" className="link-button">
            Contact Us
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            marginRight: "40px",
          }}>
          <img
            src={user.profile}
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
            }}
          />
        </div>
      </header>
    </div>
  );
};
