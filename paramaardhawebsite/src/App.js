import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import UserServices from "./pages/UserServices";
import SubServices from "./pages/SubServices";

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/services" element={<UserServices />} />
          <Route path="/services/:serviceId" element={<SubServices />} />
        </Routes>
        <Footer/>
    </>
    
  );
}

export default App;
