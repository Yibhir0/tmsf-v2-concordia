import React from "react";
import styled from "styled-components";
// Components
import PublicationTable from "../Elements/PublicationTable";

import { publications } from "../../constants/publications";
import { useTranslation } from 'react-i18next';
import FullButton from "../Buttons/FullButton";
import { useNavigate } from "react-router-dom";


export default function Publications() {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToPublicationPage = () => {
    navigate('/publications');
  };

  return (
    <Wrapper id="publications">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('publicationsHeader')}</h1>
            <p className="font15">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
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
            <div style={{ margin: "50px 0", width: "200px" }}>
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
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
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
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




