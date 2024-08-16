import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets

import ImageSlider from "../sliders/ImageSlider";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexNullCenter flexColumn">

      <LeftSide >
        <div>
          <h1 className="extraBold font40">Thermal Spray and Multiphase Flow Laboratories</h1>
          <HeaderP className="font20 extraBold myColor">
            Department of Mechanical and Industrial Engineering
            Concordia University
          </HeaderP>

          <BtnWrapper>
            <FullButton title="Learn More" />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide >
        <ImageWrapper>
          <ImageSlider />
        </ImageWrapper>

      </RightSide>

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
    margin-top: 0;
    text-align: center;
    order:2;
  }

`;
const RightSide = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  @media (max-width: 960px) {
    width: 100%;
    margin-top: 50px;
    order:1;
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
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;



