import React from "react";
import styled from "styled-components";
// Components
import ImageGallery from "../sliders/ImageGallery";
import FullButton from "../Buttons/FullButton";


export default function Gallery() {
  return (
    <Wrapper id="gallery">
        <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Gallery</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>

          <div style={{marginTop:"40px"}}>
            <ImageGallery/>
          </div>
        
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
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

  @media (max-width: 860px) {
    text-align: center;
  }
`;


