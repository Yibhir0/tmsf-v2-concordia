
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import { useTranslation } from 'react-i18next';


export default function Collaborators() {
  const { t } = useTranslation()
  return (
    <Wrapper id="collaborators">

      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">{t('collaboratorsHeader')}</h1>
          <p className="font20">
            {t('collaboratorsDescription')}
            <br />
            {t('collaboratorsSubDescription')}
          </p>
        </HeaderInfo>
        <ClientSlider />
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
  }
`;
