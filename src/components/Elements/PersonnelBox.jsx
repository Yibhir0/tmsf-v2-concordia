import React from "react";
import styled from "styled-components";


import TestimonialBox from "./TestimonialBox";

export default function PersonnelBox({ img, name, bio, email, action, scholarLink, linkedin }) {


  return (
    <Wrapper>
      <ImgBtn className="animate pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={img} alt="project"></img>
      </ImgBtn>

      <TestimonialBox text={bio} author={name} email={email} scholarLink={scholarLink} linkedin={linkedin} />

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