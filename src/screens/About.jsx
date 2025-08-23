import React from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";



export default function About() {

  const { t } = useTranslation();

  return (
    <Wrapper id="home" className="container flexNullCenter flexColumn">

      <LeftSide >
        <div>

          <h1 className="extraBold font40 myColor">{t("aboutHeader.header")}</h1>
          {/* <HeaderP className="font20 extraBold myColor">
            
          </HeaderP> */}
          <p className="font20 ">
            {t("aboutHeader.welcome")}
          </p>
          <p className="font20 ">
            {t("aboutHeader.about")}
          </p>
          <br />

          <HeaderP className="font30 myColor ">
            {t("aboutBody.thermal.header")}
          </HeaderP>
          <p className="font20 ">
            {t("aboutBody.thermal.body")}

          </p>
          <br />
          <HeaderP className="font30 myColor ">
            {t("aboutBody.tribology.header")}
          </HeaderP>
          <p className="font20 ">
            {t("aboutBody.tribology.body")}

          </p>
          <br />
          <HeaderP className="font30 myColor ">
            {t("aboutBody.multiphase.header")}
          </HeaderP>
          <p className="font20">
            {t("aboutBody.multiphase.body")}

          </p>
        </div>
      </LeftSide>

    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 60px;
  width: 100%;
  min-height: 600px;
  @media (max-width: 960px) {

    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  margin-top: 50px;
  @media (max-width: 960px) {
   
    width: 100%;
    margin-top: 50px;
    text-align: center;
    order:2;
  }

`;

const HeaderP = styled.div`
    max-width: 100%;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
  
  }
`;




