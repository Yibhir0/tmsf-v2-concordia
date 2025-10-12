import { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useVideoGallery } from "../hooks/useVideoGallery";
import Video from "../components/Elements/Video";

export default function GalleryScreen() {
  const { t } = useTranslation();
  const videos = useVideoGallery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <HeaderSection className="container">
        <MainTitle>{t('galleryHeader')}</MainTitle>
        <SectionDivider />
      </HeaderSection>

      <VideosSection>
        {videos.map((video, index) => (
          <VideoCard key={index}>

            <Video url={video.url} />
            <VideoTitle>{video.title}</VideoTitle>
          </VideoCard>
        ))}
      </VideosSection>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 60px;
  width: 100%;
  min-height: 600px;

  @media (max-width: 600px) {
    padding-top: 30px;
    min-height: 400px;
  }
`;

const HeaderSection = styled.div`
  width: 100%;
  margin-bottom: 30px;
  margin-top: 30px;
  text-align: center;

  @media (max-width: 600px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 50px;
  margin-top: 50px;

  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
`;

const SectionDivider = styled.div`
  width: 60px;
  height: 4px;
  background: #912338;
  margin: 0.5rem auto 2rem auto;
  border-radius: 2px;

  @media (max-width: 600px) {
    width: 40px;
    margin-bottom: 1rem;
  }
`;

const VideosSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (max-width: 600px) {
    gap: 24px;
    padding: 0 8px;
  }
`;

const VideoCard = styled.div`
  width: 1000px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 16px;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 4px;
  }
`;

const VideoTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 12px;
  margin-top: 12px;
  text-align: center;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  letter-spacing: 0.5px;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  @media (min-width: 601px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
    margin-top: 16px;
    letter-spacing: 1px;
  }
`;
