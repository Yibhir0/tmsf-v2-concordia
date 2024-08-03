import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
// import LogoIcon from "../../assets/svg/Logo";
import LogoIcon from "../../assets/logos/Logo";
import { navLinks } from "../../constants/navLinks";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
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
                navLinks.map((nav, i) => (

                  <li className="semiBold font15 pointer" key={i}>
                  <Link
                    onClick={() => toggleSidebar(!sidebarOpen)}
                    activeClass="active"
                    className="whiteColor nav-link"
                    style={{ padding: "10px 15px" }}
                    to={nav.id}
                    spy={true}
                    smooth={true}
                    offset={-60}
                  >
                   {nav.title}
                  </Link>
                </li>

          ))}
           </UlStyle>
  
      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
          <a href="/" style={{ padding: "10px 30px 10px 0" }} activeClass="active"
                    className="whiteColor nav-link">
            Francais
          </a>
        </li> 
         <li className="semiBold font15 pointer flexCenter">
          <a href="/" className="radius8 orangeBg alink myColor " style={{ padding: "10px 15px" }} activeClass="active"
                    >
            Contact Us
          </a>
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
