import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Header } from './components/Header';
import { ContactUs } from './Pages/ContactUs';
import { Courses } from './Pages/Courses';
import { About } from './Pages/About';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
};
