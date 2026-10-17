
import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  & > div {
    position: absolute;
    inset: 0;
  }
`;

const Video = ({ url }) => {
  const cleanUrl = typeof url === "string" ? url.trim() : "";

  if (!cleanUrl) {
    return <p>Video URL is missing.</p>;
  }

  return (
    <Container>
      <PlayerWrapper>
        <ReactPlayer
          key={cleanUrl}
          url={cleanUrl}
          width="100%"
          height="100%"
          controls
        />
      </PlayerWrapper>
    </Container>
  );
};

export default Video;
