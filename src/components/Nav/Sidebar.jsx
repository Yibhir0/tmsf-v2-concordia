import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import CloseIcon from "../../assets/svg/CloseIcon";

import LogoIcon from "../../assets/logos/Logo";
// import { navLinks } from "../../constants/navLinks";
import LanguageBtn from "./LanguageBtn";

import { useNavLinks } from '../../hooks/useNavLinks';
import { useTranslation } from 'react-i18next';

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const navLinks = useNavLinks();
  const { t } = useTranslation();

  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            TSFM
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>
      <UlStyle className="flexNullCenter flexColumn">
        {
          navLinks.map((link, i) => (

            <li className="semiBold font15 pointer" key={i}>
              <Link
                onClick={() => toggleSidebar(!sidebarOpen)}

                className="whiteColor nav-link"
                style={{ padding: "10px 15px" }}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-60}
              >
                {link.title}
              </Link>
            </li>

          ))}
      </UlStyle>

      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
          < LanguageBtn s={"whiteColor nav-link"} />
          {/* <a href="/" style={{ padding: "10px 30px 10px 0" }}
            className="whiteColor nav-link">
            FR
          </a> */}
        </li>
        <li className="semiBold font15 pointer flexCenter">

          <Link style={{ padding: "10px 15px" }} className="radius8 orangeBg" to="contact"
            onClick={() => toggleSidebar(!sidebarOpen)}
            spy={true}
            smooth={true}
            offset={-60}
          >
            {t('contact')}
          </Link>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
