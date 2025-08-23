
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;

const PlayerWrapper = styled.div`
  width: 1000px;
  height: 750px;
  position: relative;

  @media (max-width: 1200px) {
    height: 600px; /* Adjust height for smaller screens */
  }

  @media (max-width: 900px) {
    height: 450px; /* Adjust height for even smaller screens */
  }

  @media (max-width: 600px) {
    height: 300px; /* Adjust height for very small screens */
  }
`;

const Video = ({ url }) => {
  return (
    <Container>
      <PlayerWrapper>
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls={true}
        />
      </PlayerWrapper>
    </Container>
  );
};

export default Video;
