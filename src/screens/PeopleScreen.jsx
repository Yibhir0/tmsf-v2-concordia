import React from "react";
import styled from "styled-components";

import PersonnelBox from "../components/Elements/PersonnelBox";

import { usePeople } from "../hooks/usePeople";

import { useLabMangers } from "../hooks/useLabMangers";


import { useResearchAssociates } from "../hooks/useResearchAssociates";


import { useTranslation } from "react-i18next";

export default function PeopleScreen() {

  const people = usePeople();

  const labMangers = useLabMangers();

  const associates = useResearchAssociates();

  const { t } = useTranslation();

  return (
    <Wrapper id="peopleDetail" className="container flexNullCenter flexColumn">

      <TopSide >
        <div>

          <h1 className="extraBold font40 textCenter " >{t("peopleHeader")}</h1>

          <HeaderP className="font30 regular">
            {t("professors")}
          </HeaderP>

          <div className="row textCenter flexCenter">
            {people.map((person, index) => (
              <div
                className={`col-xs-12 col-sm-4 col-md-4 col-lg-4 ${index === 3 ? 'center-item' : ''}`}
                key={index}
              >
                <PersonnelBox
                  img={person.img}
                  name={person.name}
                  bio={person.bio}
                  email={person.email}
                  action={() => alert("clicked")}
                />
              </div>
            ))}
          </div>


          {/* lab mangers */}

          <HeaderP className="font30 regular">
            {t("labManagers")}
          </HeaderP>

          <div className="row textCenter flexCenter">
            {labMangers.map((m, index) => (
              <div
                className={`col-xs-12 col-sm-4 col-md-4 col-lg-4 ${index === 3 ? 'center-item' : ''}`}
                key={index}
              >
                <PersonnelBox
                  img={m.img}
                  name={m.name}
                  bio={m.bio}
                  email={m.email}
                  action={() => alert("clicked")}
                />
              </div>
            ))}
          </div>


          {/* Reasearch Associates*/}

          <HeaderP className="font30 regular">
            {t("researchAssociates")}
          </HeaderP>

          <div className="row textCenter flexCenter">
            {associates.map((m, index) => (
              <div
                className={`col-xs-12 col-sm-4 col-md-4 col-lg-4 ${index === 3 ? 'center-item' : ''}`}
                key={index}
              >
                <PersonnelBox
                  img={m.img}
                  name={m.name}
                  bio={m.bio}
                  email={m.email}
                  action={() => alert("clicked")}
                />
              </div>
            ))}
          </div>





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




