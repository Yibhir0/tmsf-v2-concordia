import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";

import LogoIcon from "../../assets/logos/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import LanguageBtn from "./LanguageBtn";
import { HashLink } from "react-router-hash-link";


import { useNavLinks } from '../../hooks/useNavLinks';

import { useTranslation } from 'react-i18next';

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  const navLinks = useNavLinks()
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <HashLink className="pointer flexNullCenter " to="/#home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px", color: "#912338" }} className="font20 extraBold ">
              TSTMF
            </h1>
          </HashLink >
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>

          <UlWrapper className="flexNullCenter">

            {
              navLinks.map((nav, i) => (

                <li className="semiBold font18 pointer " key={i}>

                  <HashLink style={{ padding: "10px 18px " }} className="nav-link" to={`/#${nav.id}`} spy={true} smooth={true} offset={-80}>
                    {nav.title}
                  </HashLink>
                </li>

              ))}
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font18 pointer ">

              < LanguageBtn s={"nav-link"} />

            </li>
            <li className="semiBold font18 pointer flexCenter">

              <HashLink style={{ padding: "10px 18px" }} className="radius8 darkBg nav-link whiteColor" to="/#contact" spy={true} smooth={true} offset={-80}>
                {t('contact')}
              </HashLink>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff; /* Very light grey, almost white */

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


