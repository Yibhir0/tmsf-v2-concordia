import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

import { FaLinkedinIn } from 'react-icons/fa';

import GoogleScholar from "../../assets/svg/GoogleScholar";

export default function TestimonialBox({ text, author, email, scholarLink, linkedin }) {
  return (
    <Wrapper className="darkBg radius8 flexNullCenter flexColumn">

      <QuoteWrapper>
        <QuoteIcon />
      </QuoteWrapper>

      <p className="whiteColor font13" style={{ paddingBottom: "30px" }}>
        {text}
      </p>
      <p className="orangeColor font13" style={{ alignSelf: 'flex-end' }}>
        <em>{author}</em>
      </p>
      <p className="orangeColor font13" style={{ alignSelf: 'flex-end' }}><em>{email}</em></p>
      <div className="flexSpaceNull" style={{ alignSelf: 'flex-end' }}>
        <a href={scholarLink} target="_blank" rel="noopener noreferrer" aria-label="Scholar" className="social-icon"><GoogleScholar height={30} width={30} /></a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon"><FaLinkedinIn /></a>
      </div>



    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;

`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;

