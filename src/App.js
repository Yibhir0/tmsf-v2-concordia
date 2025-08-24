import React from "react";
import { Helmet } from "react-helmet";
// Screens
import LandingScreen from "./screens/LandingScreen.jsx";
import AboutScreen from "./screens/AboutScreen.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import PeopleScreen from "./screens/PeopleScreen.jsx";
import ResearchScreen from "./screens/ResearchScreen.jsx";
import GalleryScreen from "./screens/GalleryScreen.jsx";
import PublicationScreen from "./screens/PublicationScreen.jsx";
import FacilitiesScreen from "./screens/FacilitiesScreen.jsx";

import Footer from "./components/Sections/Footer.jsx";
import Contact from "./components/Sections/Contact.jsx";

import ProfileScreen from "./screens/ProfileScreen.jsx";
import "./style/app.css"

export default function App() {

  return (
    <div className="App">
      <HashRouter>
        <TopNavbar />

        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/people" element={<PeopleScreen />} />
          <Route path="/research" element={<ResearchScreen />} />
          <Route path="/gallery" element={<GalleryScreen />} />
          <Route path="/publications" element={<PublicationScreen />} />
          <Route path="/facilities" element={<FacilitiesScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
        <Contact />
        <Footer />
      </HashRouter>
    </div>
  );
}

