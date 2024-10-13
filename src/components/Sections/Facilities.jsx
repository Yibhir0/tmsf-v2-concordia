import React from "react";
import styled from "styled-components";
// Components

import FullButton from "../Buttons/FullButton";

import FacilityItem from "../Elements/FacilityItem";

// import TestimonialSlider from "../Elements/TestimonialSlider";

import { useFacilities } from "../../hooks/useFacilities";


import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

export default function Facilities() {


  const { t } = useTranslation();
  const navigate = useNavigate();

  const facilities = useFacilities();


  const goToFacilitiesPage = () => {
    navigate('/facilities');
  };
  return (
    <Wrapper id="facilities">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('facilitiesHeader')}</h1>
            <p className="font15">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>

          {/* <TestimonialSlider /> */}


          <div className="row textCenter flexCenter">
            {facilities.map((facility, index) => (
              <div
                className={`col-xs-12 col-sm-4 col-md-4 col-lg-4 ${index === 3 ? 'center-item' : ''}`}
                key={index}
              >
                <FacilityItem
                  img={facility.img}
                  name={facility.name}
                  description={facility.description}
                  action={() => alert("clicked")}
                />
              </div>
            ))}
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title={t('seeMore')} action={goToFacilitiesPage} />
            </div>
          </div>
        </div>
      </div>

    </Wrapper >
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




