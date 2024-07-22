import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text,email,phone,office, action}) {
  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={img} alt="project"></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font15">{text}</p>
      <p className="font13">{email}</p>
      <p className="font13">{phone}</p>
      <p className="font13">{office}</p>
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