import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";

import LogoIcon from "../../assets/logos/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

import { navLinks } from "../../constants/navLinks";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

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
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px", color: "#730621" }} className="font20 extraBold ">
              TSFM
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>

          <UlWrapper className="flexNullCenter">

            {
              navLinks.map((nav, i) => (

                <li className="semiBold font15 pointer " key={i}>
                  <Link style={{ padding: "10px 15px " }} className="nav-link" to={nav.id} spy={true} smooth={true} offset={-80}>
                    {nav.title}
                  </Link>
                </li>

              ))}
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer ">
              <Link style={{ padding: "10px 30px 10px 0" }} className="nav-link" to="/" >
                FR
              </Link>

            </li>
            <li className="semiBold font15 pointer flexCenter">
              <Link style={{ padding: "10px 15px" }} className="radius8 darkBg nav-link orangeColor" to="contact" >
                Contact Us
              </Link>
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
     background-color: #f9f9f9; /* Very light grey, almost white */

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


