import "../LoginAndSignUp.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../../App";
export const Login = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const logIn = async () => {
    try {
      const res = await instance.post("/users/login", {
        email: email,
        password: password,
        role: role,
      });
      console.log(res);
      setRole(res.data.data.role);
      window.location.replace(`/users/${res.data.data._id}`);
      window.localStorage.setItem("token", JSON.stringify(res.data.token));
    } catch (error) {
      toast.error(error.response.data.data);
      console.log(error);
    }
  };
  return (
      <div className="loginContainer">
          <ToastContainer />
          <div className="loginBox">
            <img src={require("../../Images/YetiLogo.jpg")} alt="" className="logo"/>
            <p className="boginooP">Нэвтрэх</p>
            <div className="boxThree">
              <label htmlFor="email" className="labels">
                <p style={{ color: "white" }}>Цахим хаяг </p>
              </label>
              <input
                type="text"
                name="email"
                className="inps"
                placeholder="name@mail.domain"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="boxThree">
              <label htmlFor="pass" className="labels">
                <p style={{ color: "white" }}> Нууц үг</p>
              </label>
              <input
                type="text"
                name="pass"
                className="inps"
                placeholder="••••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="boxTwo">
              <div>
                <input type="checkbox" name="check" className="checkBox" />
                <label htmlFor="check" className="checkLabel">
                  Намайг санаx
                </label>
              </div>
              <Link to={"/forgot"} className="linkStyle">
                Нууц үгээ мартсан
              </Link>
            </div>
            <button type="submit" className="clickGreen" onClick={logIn}>
              Нэвтрэх
            </button>
            <Link to={"/signUp"} className="newUser">
              Шинэ хэрэглэгч бол энд дарна уу?
            </Link>
          </div>
     
      </div>
  );
};
