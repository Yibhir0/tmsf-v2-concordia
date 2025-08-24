import React from "react";

import Header from "../components/Sections/Header";
import Collaborators from "../components/Sections/Collaborators";
import People from "../components/Sections/People";
import Research from "../components/Sections/Research";
import Publications from "../components/Sections/Publications";

import Facilities from "../components/Sections/Facilities";
import Gallery from "../components/Sections/Gallery";


import Stats from "../components/Sections/Stats";

export default function LandingScreen() {

  return (
    <>

      <Header />
      <Stats />
      <People />
      <Research />

      <Publications />
      <Collaborators />
      <Facilities />
      <Gallery />

    </>
  );
}


