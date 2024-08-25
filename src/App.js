import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import About from "./screens/About.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import PeopleScreen from "./screens/PeopleScreen.jsx";
import ResearchScreen from "./screens/ResearchScreen.jsx";
import GalleryScreen from "./screens/GalleryScreen.jsx";



export default function App() {

  return (
    <>
      <HashRouter>
        <TopNavbar />

        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Landing />} />
          <Route path="/people" element={<PeopleScreen />} />
          <Route path="/research" element={<ResearchScreen />} />
          <Route path="/gallery" element={<GalleryScreen />} />
        </Routes>


      </HashRouter>
    </>
  );
}

