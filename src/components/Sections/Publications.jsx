
import styled from "styled-components";

import PublicationTable from "../Elements/PublicationTable";

import { usePublications } from "../../hooks/usePublications";
import { useTranslation } from 'react-i18next';
import FullButton from "../Buttons/FullButton";
import { useNavigate } from "react-router-dom";


export default function Publications() {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const publications = usePublications();

  const goToPublicationPage = () => {
    navigate('/publications');
  };

  return (
    <Wrapper id="publications">
      <div >
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('publicationsHeader')}</h1>
            <p className="font20">
              {t('publicationDescription')}

              <br />
              {t('publicationSubDescription')}
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            {publications
              ? publications.map((publication, index) => (
                <TableBox key={index}>
                  <PublicationTable
                    icon="book"
                    title={publication.title}
                    description={t('publicationsDescription')}
                    publications={publication.publications}
                    scholarLink={publication.scholarLink}

                    action={() => window.open(publication.scholarLink, '_blank')}
                  />
                </TableBox>
              ))
              : null}

          </TablesWrapper>
          <div className="row flexCenter">
            <div style={{ marginTop: "50px", width: "200px" }}>
              <FullButton title={t('seeMore')} action={goToPublicationPage} />
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
     h1{
      font-size: 2rem;
    }
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 60%;
    max-width: 370px;
    margin: 0 auto
  }
`;




