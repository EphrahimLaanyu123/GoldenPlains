import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import About from "./About";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import Gallery from "./Gallery";
import Arts from "./Arts";
import Social from "./Social";
import DetailCurriculum from "./DetailCurriculum";
import Contact from "./Contact";
import Stem from "./components/Stem";
import Careers from "./Careers";
import Curriculim from "./Curriculim";
import Admissions from "./Admissions";
import AdminLogIn from "./login/AdminLogIn";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./login/RegisterPage";
import ArtsAndSports from "./components/ArtsandSports";
import SocialSciences from "./components/SocialSciences";
import ScrollToTop from "./components/ScrollToTop";
import Nav2 from "./components/Nav2";
import Music from "./components/Muisc";
import MapComponent from "./components/Maps";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
 
        {/* <Route exact path="/" element={<Navbar/>}/> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/who-we-are/:id" element={<WhoWeAre />} />
        <Route exact path="/what-we-do" element={<WhatWeDo />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/arts" element={<Arts />} />
        <Route exact path="/social-science" element={<Gallery />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/social" element={<Social />} />
        <Route exact path="/admissions" element={<Admissions/>}/>
        <Route exact path="/curriculum/:id" element={<DetailCurriculum/>}/>
        <Route exact path="/careers" element={<Careers/>}/>
        <Route exact path="/curriculum" element={<Curriculim/>}/>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<Curriculim/>}/>
        <Route exact path="/admin" element={<AdminLogIn/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/register" element={<RegisterPage/>}/>
        <Route exact path="/arts-and-sports" element={<ArtsAndSports/>}/>
        <Route exact path="/social-sciences" element={<SocialSciences/>}/>
        <Route exact path="/stem" element={<Stem/>}/>
        <Route exact path="/nav" element={<Nav2/>}/>
        <Route exact path="/Co-Curriculum" element={<Music/>}/>
        <Route exact path="/https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.479452082699!2d36.93470707577125!3d-1.4843698985016802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fa1e9adc7f505%3A0x2ab0b30c70afeeb6!2sGolden%20Plains%20Academy!5e0!3m2!1sen!2ske!4v1718279140551!5m2!1sen!2ske" element={<MapComponent/>}/>
        
        {/* <Route exact path="/curriculum/:id" element={<Det/>}/> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
