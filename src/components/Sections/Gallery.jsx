
import styled from "styled-components";

import FullButton from "../Buttons/FullButton";

import Video from "../Elements/Video"
import { useTranslation } from 'react-i18next';


import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();


  const goToGalleryPage = () => {
    navigate('/gallery');
  };


  const { t } = useTranslation();
  return (
    <Wrapper id="gallery">
      <div >
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('galleryHeader')}</h1>
            <p className="font20">
              {t('galleryDescription')}
              <br />
              {t('gallerySubDescription')}
            </p>
          </HeaderInfo>

          <div >
            <Video url='https://vimeo.com/975637287' />

          </div>
          <div className="row flexCenter">
            <div style={{ marginTop: "50px", width: "200px" }}>
              <FullButton title={t('seeMore')} action={goToGalleryPage} />
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
  margin-bottom: 30px;
    h1{
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }

  h1::after {
  
  content: '';
  width: 60px;
  height: 4px;
  background: #912338;
  display: block;
  margin: 0.5rem auto;
  border-radius: 2px;

}


  @media (max-width: 860px) {
   
    text-align: center;
  }
`;


