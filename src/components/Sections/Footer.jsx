
import styled from "styled-components";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";

import LogoImg from "../../assets/logos/Logo";
import { GoMoveToTop } from "react-icons/go";

import { useTranslation } from 'react-i18next';

export default function Footer() {

  const { t } = useTranslation();
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (

    <footer>
      <Wrapper className="animate whiteBg">
        <div>
          <div className="container">
            <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
              <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
                <LogoImg />
              </Link>
              <StyleP
                className="semiBold font20 myColor"
              >


                <span>
                  Multiphase Flow and Thermal Spray Laboratory <br />
                  Gina Cody School of Engineering and Computer Science <br />
                  © {getCurrentYear()} - Concordia University
                </span>
              </StyleP>

              <HashLink
                className="myColor animate pointer font13 flexColumn flexNullCenter"
                to="/#"
                smooth={true}
                offset={-80}
                title="Back to Home"
              >
                <GoMoveToTop size={30} />
                <span className="font20 semiBold">{t("backToTopBtn")}</span>
              </HashLink>
            </InnerWrapper>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  background-color: #e5e9ed;
  bottom: 0;

`;

const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const StyleP = styled.p`
  padding: 10px 0; 
  span {
    display: inline-block;
    line-height: 1.5; 
  }
  @media (max-width: 550px) {
    margin: 20px 0;
    text-align: center;
  }
`;
