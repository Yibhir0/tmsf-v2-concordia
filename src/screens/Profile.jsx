import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { useTranslation } from 'react-i18next';

import TestimonialBox from "../components/Elements/TestimonialBox";




const Profile = () => {

  const { t } = useTranslation();
  const location = useLocation();

  const [prof, setProf] = useState({});

  useEffect(() => {
    const { profile, category } = location.state || {};


    const profiles = t(category, { returnObjects: true }) || [];



    const prf = profiles.find(p => p.email === profile.email);

    setProf(prf);
  }, [location.state, t]);



  let profileImage = null;


  try {
    profileImage = require(`../assets/img/people_images/${prof.picture}`);
  } catch (error) {
    console.error("Error loading image:", error);

  }
  return (
    <Wrapper >

      <Wrapper className="container flexNullCenter flexRow">


        <LeftSide className="container flexNullCenter flexColumn"  >

          <HeaderInfo>
            <h1 className="semiBold font30">{prof.name}</h1>

          </HeaderInfo>

          <img className="radius8" src={profileImage} alt="project"></img>

        </LeftSide>

        <RightSide >
          <TestimonialBox text={prof.research_summary} author={prof.name} email={prof.email} gateLink={prof.research_gate} scholarLink={prof.google_scholar} linkedin={prof.linkedin} occupation={prof.occupation} />

        </RightSide>


      </Wrapper>

    </Wrapper>
  );
}

export default Profile;


const Wrapper = styled.section`
  
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;

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
    text-align: center;
  }

`;
const RightSide = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    order:1;
  }
// `;

const HeaderInfo = styled.div`

    

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
  }
`;