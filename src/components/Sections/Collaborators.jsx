import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import { useTranslation } from 'react-i18next';


export default function Collaborators() {
  const { t } = useTranslation()
  return (
    <Wrapper id="collaborators">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('collaboratorsHeader')}</h1>
            <p className="font20">
              {t('collaboratorsDescription')}
              <br />
              {t('collaboratorsSubDescription')}
            </p>
          </HeaderInfo>
        </div>
        <div className="whiteBg" style={{ padding: "50px 0" }}>
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
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
