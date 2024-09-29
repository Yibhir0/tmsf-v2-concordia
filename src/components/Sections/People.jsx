import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";

import { usePeople } from "../../hooks/usePeople";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

export default function People() {

  const people = usePeople();

  const { t } = useTranslation();
  const navigate = useNavigate();


  const goToPeoplePage = () => {
    navigate('/people');
  };
  return (
    <Wrapper id="people">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('peopleHeader')}</h1>
            <p className="font15">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter flexCenter">
            {people.map((person, index) => (
              <div
                className={`col-xs-12 col-sm-4 col-md-4 col-lg-4 ${index === 3 ? 'center-item' : ''}`}
                key={index}
              >
                <ProjectBox
                  img={person.img}
                  name={person.name}
                  occupation={person.occupation}
                  department={person.department}
                  email={person.email}
                  action={() => alert("clicked")}
                />
              </div>
            ))}
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title={t('seeMore')} action={goToPeoplePage} />
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
  @media (max-width: 860px) {
    text-align: center;
  }
`;




