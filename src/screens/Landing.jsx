import React from "react";
// Sections
// import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Collaborators from "../components/Sections/Collaborators";
import People from "../components/Sections/People";
import Research from "../components/Sections/Research";
import Publications from "../components/Sections/Publications";
import Contact from "../components/Sections/Contact";
// import Footer from "../components/Sections/Footer";
import Facilities from "../components/Sections/Facilities";
import Gallery from "../components/Sections/Gallery";


import Stats from "../components/Sections/Stats";

export default function Landing() {

  return (
    <>
      {/* <TopNavbar /> */}
      <Header />
      <Stats />
      <People />
      <Research />
      {/* <Teaching /> */}
      <Publications />
      <Collaborators />
      <Facilities />
      <Gallery />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}


