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
import Stem from "./Stem";
import DetailCurriculum from "./DetailCurriculum";
import Contact from "./Contact";

import Careers from "./Careers";
import Curriculim from "./Curriculim";
import Admissions from "./Admissions";
import AdminLogIn from "./login/AdminLogIn";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./login/RegisterPage";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
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
        <Route exact path="/stem" element={<Stem />} />
        <Route exact path="/admissions" element={<Admissions/>}/>
        <Route exact path="/curriculum/:id" element={<DetailCurriculum/>}/>
        <Route exact path="/careers" element={<Careers/>}/>
        <Route exact path="/curriculum" element={<Curriculim/>}/>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<Curriculim/>}/>
        <Route exact path="/admin" element={<AdminLogIn/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/register" element={<RegisterPage/>}/>
        {/* <Route exact path="/curriculum/:id" element={<Det/>}/> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
