
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
    <Wrapper id="peopleDetail" className="container flexNullCenter flexColumn">

      <TopSide >
        <div>

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
            {t("researchAssociates")}
          </HeaderP>


          <ProfileList category="research_associate" />

          <HeaderP className="font30 regular">
            {t("phdstudents")}
          </HeaderP>


          <ProfileList category="phd_students" />

          <HeaderP className="font30 regular">
            {t("mascstudents")}
          </HeaderP>


          <ProfileList category="masc_students" />

        </div>
      </TopSide>

    </Wrapper >
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
const TopSide = styled.div`
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




