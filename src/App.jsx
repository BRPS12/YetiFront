import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { News } from "./Pages/News";
import { Courses } from "./Pages/Courses";
import { About } from "./Pages/About";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";

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
            <Route path="/courses" element={<Courses />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
};
