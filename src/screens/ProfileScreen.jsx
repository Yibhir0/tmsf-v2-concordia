import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { useTranslation } from 'react-i18next';

import TestimonialBox from "../components/Elements/TestimonialBox";
import ProfileCard from "../components/Elements/ProfileCard";




const ProfileScreen = () => {

  const { t } = useTranslation();
  const location = useLocation();

  const [prof, setProf] = useState({});
  const [category, setCategory] = useState("");

  useEffect(() => {
    const { profile, category } = location.state || {};
    setCategory(category);
    const profiles = t(category, { returnObjects: true }) || [];
    const prf = profiles.find(p => p.email === profile.email);

    setProf(prf);
  }, [location.state, t]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <Wrapper>

      <TopSide>
        <h1 className="semiBold font30">{prof.name}</h1>

      </TopSide>

      <InnerWrapper className="container flexNullCenter flexRow">


        <LeftSide className="container flexNullCenter flexColumn"  >


          <ProfileCard profile={prof} category={category} />

        </LeftSide>

        <RightSide >
          <TestimonialBox text={prof.research_summary} author={prof.name} email={prof.email} gateLink={prof.research_gate} scholarLink={prof.google_scholar} linkedin={prof.linkedin} occupation={prof.occupation} />

        </RightSide>


      </InnerWrapper>



    </Wrapper>
  );
}

export default ProfileScreen;

const Wrapper = styled.section`
padding-top: 60px;

  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const InnerWrapper = styled.div`
  
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