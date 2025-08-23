
import styled from "styled-components";

import { HashLink } from "react-router-hash-link";

import CloseIcon from "../../assets/svg/CloseIcon";

import LogoIcon from "../../assets/logos/Logo";

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
          <h1 className="whiteColor font20" style={{ marginLeft: "18px" }}>
            TSTMF
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>
      <UlStyle className="flexNullCenter flexColumn">
        {
          navLinks.map((link, i) => (

            <li className="semiBold font18 pointer" key={i}>

              < HashLink onClick={() => toggleSidebar(!sidebarOpen)}

                className="whiteColor nav-link"
                style={{ padding: "10px 15px" }}
                to={`/#${link.id}`}
                spy={true}
                smooth={true}
                offset={-60}> {link.title}</HashLink>
            </li>

          ))}
      </UlStyle>

      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font18 pointer">
          < LanguageBtn s={"whiteColor nav-link"} />
        </li>
        <li className="semiBold font18 pointer flexCenter">

          <HashLink style={{ padding: "10px 18px" }} className="radius8 whiteColor nav-link" to="/#contact"
            onClick={() => toggleSidebar(!sidebarOpen)}
            spy={true}
            smooth={true}
            offset={-60}>
            {t('contact')}
          </HashLink>
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
