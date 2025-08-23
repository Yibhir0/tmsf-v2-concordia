
import styled from "styled-components";

import FullButton from "../Buttons/FullButton";

import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

import { useProfilesData } from "../../hooks/useProfilesData";
import ProfileCard from "../Elements/ProfileCard";

export default function People() {

  const people = useProfilesData("department_professors");

  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToPeoplePage = () => {
    navigate('/people');
  };


  return (
    <Wrapper id="people">
      <div >
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('peopleHeader')}</h1>
            <p className="font20">
              {t('peopleDescription')} <br />
              {t('peopleSubDescription')}
            </p>
          </HeaderInfo>
          <div className="row textCenter flexCenter">
            {people.map((person, index) => (
              <div
                className={`col-xs-12 col-sm-4 col-md-4 col-lg-4 ${index === 3 ? 'center-item' : ''}`}
                key={index}
              >
                <ProfileCard profile={person} category="department_professors" />
              </div>
            ))}
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "30px", width: "200px" }}>
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
  margin-bottom: 30px;
  padding: 30px;
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




