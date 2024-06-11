import "../LoginAndSignUp.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../../App";
import { Link } from "react-router-dom";
export const SignUp = () => {
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [role, setRole] = useState('');
  const signUp = async () => {
    try {
      const res = await instance.post("/users/signup", {
        name: name,
        password: password,
        email: email,
        role: role,
      });
      console.log(res);
      toast.success("Amjilttai burtguullee");
    } catch (error) {
      toast.error("Burtgeltei email baina");
    }
  };

  return (
    <div className="loginContainer" style={{ backgroundColor: "black" }}>
      <ToastContainer />
      <main>
        <div className="loginBox" style={{ flexDirection : "row" }}>
          <div style={{display : "flex" , alignItems : "center" , flexDirection : "column" , marginLeft : "-60%" , marginBottom : "50px"}}>
          <img src={require("../../Images/YetiLogo.jpg")} alt="" style={{width : "200px" , height : "auto" , borderRadius : "30px"}} />
          <p className="boginooP" style={{ marginTop : "30px"}}>Бүртгүүлэх</p>
          </div>

          <div style={{ marginLeft : "60%" , display : "flex" , flexDirection : "column" }}>
          <div className="boxThree" style={{marginTop : "20px"}}>
            <label htmlFor="email" className="labels">
              <p style={{ color: "white" }}>Username</p>
            </label>
            <input
              type="text"
              name="email"
              className="inps"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="boxThree" style={{marginTop : "20px"}}>
            <label htmlFor="email" className="labels">
              <p style={{ color: "white" }}>Email </p>
            </label>
            <input
              type="text"
              name="email"
              className="inps"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="boxThree" style={{marginTop : "20px"}}>
            <label htmlFor="pass" className="labels">
              <p style={{ color: "white" }}>Password</p>
            </label>
            <input
              type="text"
              name="pass"
              className="inps"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="boxThree" style={{marginTop : "20px"}}>
            <label htmlFor="pass" className="labels">
              <p style={{ color: "white" }}>Age</p>
            </label>
            <input
              type="text"
              name="pass"
              className="inps"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="boxThree" style={{marginTop : "20px"}}>
            <label htmlFor="pass" className="labels">
              <p style={{ color: "white" }}>Profile</p>
            </label>
            <input
              type="text"
              name="pass"
              className="inps"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="clickGreen"
            onClick={signUp}
            style={{marginTop : "20px"}}
          >
            Бүртгүүлэх
          </button>
          <Link className="clickGreen" to="/login" style={{textAlign : "center" , marginTop : "20px" }}>
            <p style={{marginTop : "7px"}}>Нэвтрэх</p>
          </Link></div>
        </div>
      </main>
    </div>
  );
};