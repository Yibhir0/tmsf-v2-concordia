
import styled from "styled-components";


// import FullButton from "../Buttons/FullButton";

import FacilityItem from "../Elements/FacilityItem";


import { useFacilities } from "../../hooks/useFacilities";


import { useTranslation } from 'react-i18next';
// import { useNavigate } from "react-router-dom";

export default function Facilities() {


  const { t } = useTranslation();
  // const navigate = useNavigate();

  const facilities = useFacilities();


  // const goToFacilitiesPage = () => {
  //   navigate('/facilities');
  // };
  return (
    <Wrapper id="facilities">
      <div >
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('facilitiesHeader')}</h1>
            <p className="font20">
              {t('facilitiesDescription')}
              <br />
              {t('facilitiesSubDescription')}
            </p>
          </HeaderInfo>




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
          {/* <div className="row flexCenter">
            <div style={{ marginTop: "50px", width: "200px" }}>
              <FullButton title={t('seeMore')} action={goToFacilitiesPage} />
            </div>
          </div> */}
        </div>
      </div>

    </Wrapper >
  );
}


const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  margin-bottom: 30px;
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




