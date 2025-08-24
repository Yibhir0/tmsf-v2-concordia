import { useEffect } from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";



export default function About() {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper  >

      <LeftSide className="container " >


        <h1 >{t("aboutHeader.header")}</h1>

        <p className="font25 ">
          {t("aboutHeader.welcome")}
        </p>
        <p className="font25 ">
          {t("aboutHeader.about")}
        </p>
        <br />

        <HeaderP className="font30 myColor ">
          {t("aboutBody.thermal.header")}
        </HeaderP>
        <p className="font25 ">
          {t("aboutBody.thermal.body")}

        </p>
        <br />
        <HeaderP className="font30 myColor ">
          {t("aboutBody.tribology.header")}
        </HeaderP>
        <p className="font25 ">
          {t("aboutBody.tribology.body")}

        </p>
        <br />
        <HeaderP className="font30 myColor ">
          {t("aboutBody.multiphase.header")}
        </HeaderP>
        <p className="font25">
          {t("aboutBody.multiphase.body")}

        </p>

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
  @media (max-width: 768px) {

    p{
      font-size: 1.25rem;
    }
   
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




