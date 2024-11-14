import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, name, occupation, department, email, action }) {


  let profileImage = null;
  try {
    profileImage = require(`../../assets/img/people_images/${img}`);

  } catch (error) {
    console.error("Error loading image:", error);

  }
  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={profileImage} alt="project"></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{name}</h3>
      <p className="font15">{occupation}</p>
      <p className="font15">{department}</p>
      <a href={`mailto:${email}`} className="read-link semiBold" style={{ color: "#800000" }} >{email}</a>


    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;