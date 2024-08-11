

// VideoSlider.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
import styled from 'styled-components';
import ReactPlayer from 'react-player'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;



`;

const Video = ({ url }) => {
  return (

   <Container>
    <ReactPlayer
      url={url}
      width={"1000px"}
      height={"750px"}
      controls={true}
    />

   </Container>
   
 
    
  );
};

export default Video;
