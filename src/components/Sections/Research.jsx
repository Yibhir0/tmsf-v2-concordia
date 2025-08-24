
import styled from "styled-components";

import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import { useResearch } from "../../hooks/useResearch";
import { useTranslation } from 'react-i18next';

import { useNavigate } from "react-router-dom";

export default function Research() {
  const research = useResearch();
  const { t } = useTranslation()


  const navigate = useNavigate();


  const goToResearchPage = () => {
    navigate('/research');
  };

  return (
    <Wrapper id="research">
      <div >
        <div className="container">
          <HeaderInfo>
            <h1 className=" extraBold">{t('researchHeader')}</h1>
            <p className="font20">
              {t('researchDescription')}
              <br />
              {t('researchSubDescription')}
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
            <div style={{ marginTop: "50px", width: "200px" }}>
              <FullButton title={t('seeMore')} action={goToResearchPage} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
    h1{
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }

  h1::after {
  
  content: '';
  width: 60px;
  height: 4px;
  background: #912338;
  display: block;
  margin: 0.5rem auto;
  border-radius: 2px;

}

  @media (max-width: 860px) {
    text-align: center;
     h1{
      font-size: 2rem;
    }
  }
`;