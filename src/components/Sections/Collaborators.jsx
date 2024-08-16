import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";



export default function Collaborators() {
  return (
    <Wrapper id="collaborators">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Collaborators</h1>
          </HeaderInfo>
        </div>
        <div className="lightBg" style={{ padding: "50px 0" }}>
          <div className="container">
            <ClientSlider />
          </div>
        </div>

      </div>


    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  display: flex;
  alignItems: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
