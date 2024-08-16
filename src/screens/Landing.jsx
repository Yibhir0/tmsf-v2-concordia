import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Collaborators from "../components/Sections/Collaborators";
import People from "../components/Sections/People";
import Reasearch from "../components/Sections/Research";
import Publications from "../components/Sections/Publications";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Teaching from "../components/Sections/Teaching";
import Gallery from "../components/Sections/Gallery";


import Stats from "../components/Sections/Stats"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Stats />
      <People />
      <Reasearch />
      <Teaching />
      <Publications />
      <Collaborators />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}


