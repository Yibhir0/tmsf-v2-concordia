import React from "react";
import styled from "styled-components";

export default function FacilityItem({ img, name, description, action }) {

  let facilityImage = null;
  try {
    facilityImage = require(`../../assets/img/facilities/${img}`);
  } catch (error) {
    console.error("Error loading image:", error);
  }

  return (
    <FacilityWrapper>
      <ImgBtn className="animate pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={facilityImage} alt="facility" />
      </ImgBtn>
      <h3 className="font20 extraBold">{name}</h3>
      <p className="font15">{description}</p>
    </FacilityWrapper>
  );
}

const FacilityWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
    border-radius: 8px;
  }
  h3 {
    padding-bottom: 10px;
    margin: 0;
  }
  p {
    margin: 10px 0;
  }
  @media (max-width: 768px) {
    img {
      width: 80%;
    }
  }
`;

const ImgBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  :hover > img {
    opacity: 0.5;
  }
`;
