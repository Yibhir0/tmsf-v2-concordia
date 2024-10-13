import React from "react";
import styled from "styled-components";



export default function About() {

  return (
    <Wrapper id="home" className="container flexNullCenter flexColumn">

      <LeftSide >
        <div>

          <h1 className="extraBold font40 myColor">About Us</h1>
          {/* <HeaderP className="font20 extraBold myColor">
            
          </HeaderP> */}
          <p className="font20 ">
            Welcome to the official LinkedIn page of Concordia Thermal Spray, Tribology, and Multiphase Flow Labs (TSTMF Labs) at Concordia University!
          </p>
          <p className="font20 ">
            Our labs are dedicated to advancing the frontiers of materials science through cutting-edge research and innovative solutions in thermal spray coatings, tribology, and multiphase flow dynamics. We are committed to fostering collaboration between academia and industry to drive technological progress and address real-world challenges.
          </p>
          <br />

          <HeaderP className="font30 myColor ">
            Thermal Spray Lab:
          </HeaderP>
          <p className="font20 ">
            Thermal Spray Lab: Specializing in the development and optimization of advanced coating technologies. Our research focuses on We utilize state-of-the-art thermal spray techniques to address critical industrial issues such as wear and corrosion resistance, surface protection, and performance enhancement. By employing innovative methods and exploring diverse coating materials, we deliver tailored solutions that meet the specific needs of our industrial partners.

          </p>
          <br />
          <HeaderP className="font30 myColor ">
            Tribology Lab:
          </HeaderP>
          <p className="font20 ">
            Dedicated to studying friction, wear, and lubrication processes for different aerospace application under extreme conditions. Our work aims to understand the underlying mechanisms of material interactions and improve the reliability and efficiency of mechanical systems.

          </p>
          <br />
          <HeaderP className="font30 myColor ">
            Multiphase Flow Lab:
          </HeaderP>
          <p className="font20">
            Exploring the complex behavior of fluids with multiple phases. We investigate flow dynamics in various settings to enhance process efficiency and safety in industries such as energy, manufacturing, and chemical processing.

          </p>
        </div>
      </LeftSide>

    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 60px;
  width: 100%;
  min-height: 600px;
  @media (max-width: 960px) {

    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  margin-top: 50px;
  @media (max-width: 960px) {
   
     width: 100%;
    margin-top: 50px;
    text-align: center;
    order:2;
  }

`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;




