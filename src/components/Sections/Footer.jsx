import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
// Assets
import LogoImg from "../../assets/logos/Logo";
import { GoMoveToTop } from "react-icons/go";

import { useTranslation } from 'react-i18next';

export default function Contact() {

  const { t } = useTranslation();
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper className="animate whiteBg">
      <div>
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "20px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              {/* <h1 className="font15 extraBold myColor" style={{ marginLeft: "15px" }}>
                TSMF
              </h1> */}
            </Link>
            <StyleP
              className="semiBold font15 pointer"
              title="Concordia site"
            >
              © {getCurrentYear()} - <span className="font13">Concordia University</span>
            </StyleP>

            <HashLink
              className="myColor animate pointer font13 flexColumn flexNullCenter"
              to="/#"
              smooth={true}
              offset={-80}
              title="Back to Home"
            >
              <GoMoveToTop size={24} />
              <span>{t("backToTopBtn")}</span>
            </HashLink>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding:  0; /* Reduced padding */
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.1); /* Add shadow */
`;

const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
