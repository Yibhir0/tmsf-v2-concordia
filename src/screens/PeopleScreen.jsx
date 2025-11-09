
import { useEffect } from "react";
import styled from "styled-components";
import ProfileList from "../components/Sections/ProfileList";


import { useTranslation } from "react-i18next";

export default function PeopleScreen() {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>

      <TopSide className="container" >


        <h1 className="extraBold font40 textCenter " >{t("peopleHeader")}</h1>

        <HeaderP className="font30 regular">
          {t("professors")}
        </HeaderP>

        <ProfileList category="department_professors" />

        <HeaderP className="font30 regular">
          {t("labManagers")}
        </HeaderP>


        <ProfileList category="lab_managers" />


        <HeaderP className="font30 regular">
          {t("postdoctoralFellow")}
        </HeaderP>


        <ProfileList category="postdoctoral_fellow" />

        <HeaderP className="font30 regular">
          {t("phdstudents")}
        </HeaderP>


        <ProfileList category="phd_students" />

        <HeaderP className="font30 regular">
          {t("mascstudents")}
        </HeaderP>


        <ProfileList category="masc_students" />


      </TopSide>

    </Wrapper >
  );
}


const Wrapper = styled.section`
  padding-top: 60px;

  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const TopSide = styled.div`
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

  @media (max-width: 960px) {
   
    text-align: center;
    order:2;
  }

`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 40px 0 0 0;
  line-height: 1.5rem;
  text-decoration: underline;
  text-decoration-color: gray;

  @media (max-width: 960px) {
    text-align: center;
    max-width: 100%;
  }
`;




