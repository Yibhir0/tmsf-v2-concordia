import { useEffect } from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { useFacilities } from "../hooks/useFacilities";
import FacilityList from "../components/Elements/FacilityList";




export default function FacilitiesScreen() {
  const { t } = useTranslation();
  const facilities = useFacilities();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <Wrapper >

      <LeftSide className="container ">
        <h1 className="extraBold font40">{t('facilitiesHeader')}</h1>
        <FacilityList facilities={facilities} />
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
  @media (max-width: 960px) {
   
     width: 100%;
    margin-top: 50px;
    text-align: center;
    order:2;
  }

`;





