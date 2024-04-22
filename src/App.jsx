import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { News } from "./Pages/News";
import { About } from "./Pages/About";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
import { Course1 } from "./Pages/Course1";
import { Course2 } from "./Pages/Course2";
import { Course3 } from "./Pages/Course3";
import { Course4 } from "./Pages/Course4";
import { ContactUs } from "./Pages/ContactUs";
import Login from "./Pages/Login/Login";
export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="sweet-loading">
          {/* <RingLoader css={override} size={200} color={"#123abc"} loading={isLoading} /> */}
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/course/1" element={<Course1 />} />
            <Route path="/course/2" element={<Course2 />} />
            <Route path="/course/3" element={<Course3 />} />
            <Route path="/course/4" element={<Course4 />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};
