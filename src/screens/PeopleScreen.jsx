import React from "react";
import styled from "styled-components";



export default function PeopleScreen() {



  return (
    <Wrapper id="peopleDetail" className="container flexNullCenter flexColumn">

      <TopSide >
        <div>

          <h1 className="extraBold font40">Our Awsome Team</h1>
          <HeaderP className="font20 extraBold myColor">
            Our Team
          </HeaderP>


        </div>
      </TopSide>

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
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;




