import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Housing from "./pages/Housing";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:housingId" element={<Housing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
