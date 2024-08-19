import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import { useResearch } from "../../hooks/useResearch";
import { useTranslation } from 'react-i18next';


export default function Reasearch() {
  const research = useResearch();
  const { t } = useTranslation()
  return (
    <Wrapper id="research">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('researchHeader')}</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter flexCenter">

            {research.map((r, index) => (
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
                key={index}>
                <BlogBox
                  title={r.title}
                  text={r.text}
                  tag={r.tag}
                  author={r.author}
                  action={() => alert("clicked")}
                />
              </div>
            ))}

          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title={t('seeMore')} action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;